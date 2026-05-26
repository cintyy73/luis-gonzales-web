import { Box, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { TbArrowUpRight, TbCheck } from 'react-icons/tb'
import { FaWhatsapp } from 'react-icons/fa'
import { GlassCard } from './GlassCard'
import { Link } from './Link'
import { fadeInUp } from '@/animations/variants'
import { buildWhatsAppUrl } from '@/utils/whatsapp'
import type { Service } from '@/types'

const MotionGlass = motion.create(GlassCard)

interface Props {
  service: Service
}

export const ServiceCard = ({ service }: Props) => {
  const Icon = service.icon

  return (
    <MotionGlass
      variants={fadeInUp}
      p={{ base: 6, md: 7 }}
      h="full"
      role="group"
      display="flex"
      flexDirection="column"
    >
      <Box
        position="absolute"
        top={0}
        right={0}
        boxSize="160px"
        bg="radial-gradient(circle at top right, rgba(14,165,255,0.18) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <HStack justify="space-between" align="flex-start" mb={5}>
        <Box
          boxSize={14}
          borderRadius="xl"
          bgGradient="linear-gradient(135deg, rgba(14,165,255,0.18) 0%, rgba(2,132,199,0.10) 100%)"
          borderWidth="1px"
          borderColor="border.accent"
          display="grid"
          placeItems="center"
          color="brand.300"
          transition="all 0.3s ease"
          _groupHover={{ color: 'brand.200', transform: 'scale(1.05)' }}
        >
          <Box as={Icon} boxSize={7} />
        </Box>
        {service.featured && (
          <Box
            px={2.5}
            py={1}
            fontSize="2xs"
            fontWeight="700"
            letterSpacing="0.1em"
            textTransform="uppercase"
            color="brand.200"
            bg="rgba(14,165,255,0.10)"
            borderRadius="full"
            borderWidth="1px"
            borderColor="border.accent"
          >
            Destacado
          </Box>
        )}
      </HStack>

      <Text
        fontFamily="heading"
        fontSize="xl"
        fontWeight="800"
        color="white"
        lineHeight="1.25"
        mb={2}
      >
        {service.shortTitle}
      </Text>
      <Text fontSize="sm" color="fg.muted" lineHeight="1.6" mb={5}>
        {service.description}
      </Text>

      <VStack align="stretch" gap={2} mb={6}>
        {service.highlights.map((h) => (
          <HStack key={h} gap={2}>
            <Box
              boxSize={5}
              borderRadius="full"
              bg="rgba(34,197,94,0.15)"
              display="grid"
              placeItems="center"
              color="whatsapp.400"
              flexShrink={0}
            >
              <TbCheck size={12} strokeWidth={3} />
            </Box>
            <Text fontSize="sm" color="fg.muted">
              {h}
            </Text>
          </HStack>
        ))}
      </VStack>

      <Stack direction="row" gap={2} mt="auto">
        <Link
          href={buildWhatsAppUrl(service.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          flex={1}
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          px={4}
          py={3}
          borderRadius="lg"
          bg="whatsapp.500"
          color="white"
          fontSize="sm"
          fontWeight="700"
          transition="all 0.25s"
          _hover={{ bg: 'whatsapp.600', transform: 'translateY(-1px)', textDecoration: 'none' }}
        >
          <FaWhatsapp />
          <Text>Consultar</Text>
        </Link>
        <Link
          href="#contacto"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          px={3}
          borderRadius="lg"
          borderWidth="1px"
          borderColor="border.default"
          color="white"
          transition="all 0.25s"
          _hover={{ bg: 'rgba(14,165,255,0.10)', borderColor: 'border.accent', textDecoration: 'none' }}
        >
          <TbArrowUpRight size={18} />
        </Link>
      </Stack>
    </MotionGlass>
  )
}
