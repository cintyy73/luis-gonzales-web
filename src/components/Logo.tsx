import { Box, HStack, Text } from '@chakra-ui/react'
import { TbAirConditioning } from 'react-icons/tb'
import { Link } from './Link'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export const Logo = ({ size = 'md', showText = true }: Props) => {
  const dim = size === 'sm' ? 9 : size === 'lg' ? 14 : 11
  const fontSize = size === 'sm' ? 'md' : size === 'lg' ? '2xl' : 'lg'

  return (
    <Link href="#hero" display="inline-flex" alignItems="center" gap={3} _hover={{ textDecoration: 'none' }}>
      <HStack gap={3}>
      <Box
        position="relative"
        boxSize={dim}
        borderRadius="xl"
        bgGradient="linear-gradient(135deg, #0EA5FF 0%, #075985 100%)"
        display="grid"
        placeItems="center"
        boxShadow="glowSoft"
        _before={{
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: 'xl',
          border: '1px solid rgba(255,255,255,0.18)',
        }}
      >
        <Box as={TbAirConditioning} color="white" boxSize="60%" />
      </Box>
      {showText && (
        <Box lineHeight="1.05">
          <Text
            fontFamily="heading"
            fontWeight="800"
            fontSize={fontSize}
            color="white"
            letterSpacing="-0.02em"
          >
            Luis Gonzalez
          </Text>
          <Text fontSize="xs" color="brand.300" fontWeight="600" letterSpacing="0.08em">
            SERVICIO TECNICO
          </Text>
        </Box>
      )}
      </HStack>
    </Link>
  )
}
