import { Box, Text, VStack } from '@chakra-ui/react'
import { useCountUp } from '@/hooks/useCountUp'
import { useInViewOnce } from '@/hooks/useInViewOnce'
import type { Stat } from '@/types'

interface Props {
  stat: Stat
}

export const StatCounter = ({ stat }: Props) => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>()
  const decimals = !Number.isInteger(stat.value) ? 1 : 0
  const value = useCountUp({ end: stat.value, enabled: inView, decimals })

  const Icon = stat.icon

  return (
    <VStack
      ref={ref}
      gap={2}
      align="center"
      p={6}
      borderRadius="xl2"
      bg="rgba(255,255,255,0.03)"
      borderWidth="1px"
      borderColor="border.subtle"
      backdropFilter="blur(10px)"
      transition="all 0.3s ease"
      _hover={{ borderColor: 'border.accent', transform: 'translateY(-3px)' }}
    >
      <Box
        boxSize={11}
        borderRadius="lg"
        bg="rgba(14,165,255,0.10)"
        display="grid"
        placeItems="center"
        color="brand.300"
      >
        <Box as={Icon} boxSize={6} />
      </Box>
      <Text
        fontFamily="heading"
        fontSize={{ base: '3xl', md: '4xl' }}
        fontWeight="800"
        color="white"
        lineHeight="1"
      >
        {value}
        <Text as="span" color="brand.300" fontSize="0.7em" ml={0.5}>
          {stat.suffix}
        </Text>
      </Text>
      <Text fontSize="xs" color="fg.muted" textAlign="center" fontWeight="500">
        {stat.label}
      </Text>
    </VStack>
  )
}
