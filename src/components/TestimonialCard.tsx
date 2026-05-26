import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { TbStarFilled, TbQuote, TbMapPin } from 'react-icons/tb'
import { GlassCard } from './GlassCard'
import { fadeInUp } from '@/animations/variants'
import type { Testimonial } from '@/types'

const MotionGlass = motion.create(GlassCard)

interface Props {
  testimonial: Testimonial
}

export const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <MotionGlass variants={fadeInUp} p={{ base: 6, md: 7 }} h="full">
      <HStack justify="space-between" align="flex-start" mb={4}>
        <HStack gap={0.5}>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Box key={i} as={TbStarFilled} color="#FACC15" boxSize={4} />
          ))}
        </HStack>
        <Box as={TbQuote} color="brand.400" boxSize={6} opacity={0.5} />
      </HStack>

      <Text fontSize="sm" color="fg.default" lineHeight="1.7" mb={5}>
        "{testimonial.comment}"
      </Text>

      <VStack align="stretch" gap={1} pt={4} borderTopWidth="1px" borderColor="border.subtle">
        <Text fontFamily="heading" fontWeight="700" color="white" fontSize="md">
          {testimonial.name}
        </Text>
        <HStack gap={1.5}>
          <Box as={TbMapPin} color="brand.300" boxSize={3.5} />
          <Text fontSize="xs" color="fg.muted">
            {testimonial.zone}
          </Text>
        </HStack>
        <Text fontSize="2xs" color="fg.subtle" letterSpacing="0.08em" textTransform="uppercase" mt={1}>
          {testimonial.service} · {testimonial.date}
        </Text>
      </VStack>
    </MotionGlass>
  )
}
