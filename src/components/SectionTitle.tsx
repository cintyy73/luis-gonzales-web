import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/animations/variants'

const MotionVStack = motion.create(VStack)

interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: Props) => {
  return (
    <MotionVStack
      gap={3}
      align={align === 'center' ? 'center' : 'flex-start'}
      textAlign={align}
      maxW="3xl"
      mx={align === 'center' ? 'auto' : 0}
      mb={{ base: 10, md: 14 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      {eyebrow && (
        <Box
          px={4}
          py={1.5}
          borderRadius="full"
          bg="rgba(14,165,255,0.10)"
          borderWidth="1px"
          borderColor="border.accent"
          backdropFilter="blur(10px)"
        >
          <Text
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.15em"
            textTransform="uppercase"
            color="brand.300"
          >
            {eyebrow}
          </Text>
        </Box>
      )}
      <Heading
        as="h2"
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
        fontWeight="800"
        lineHeight="1.1"
        letterSpacing="-0.02em"
        bgGradient="linear-gradient(135deg, #FFFFFF 0%, #BAE6FD 100%)"
        bgClip="text"
      >
        {title}
      </Heading>
      {subtitle && (
        <Text fontSize={{ base: 'md', md: 'lg' }} color="fg.muted" maxW="2xl">
          {subtitle}
        </Text>
      )}
    </MotionVStack>
  )
}
