import { Box, HStack, Image, Text } from '@chakra-ui/react'
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
          overflow="hidden"
          boxShadow="glowSoft"
        >
          <Image
            src="/logo.svg"
            alt="Luis Gonzalez - servicio tecnico"
            boxSize="100%"
            display="block"
            loading="eager"
          />
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
