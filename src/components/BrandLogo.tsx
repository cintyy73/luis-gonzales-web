import { Box, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'
import type { Brand } from '@/types'

interface Props {
  brand: Brand
}

export const BrandLogo = ({ brand }: Props) => {
  const [failed, setFailed] = useState(!brand.logoUrl)

  return (
    <Box
      role="group"
      display="flex"
      alignItems="center"
      justifyContent="center"
      h={{ base: '72px', md: '92px' }}
      px={{ base: 4, md: 6 }}
      borderRadius="xl"
      bg="rgba(255,255,255,0.04)"
      borderWidth="1px"
      borderColor="border.subtle"
      backdropFilter="blur(10px)"
      transition="all 0.3s ease"
      _hover={{
        borderColor: 'border.accent',
        bg: 'rgba(14,165,255,0.05)',
        transform: 'translateY(-2px)',
        boxShadow: '0 10px 25px -12px rgba(14,165,255,0.3)',
      }}
    >
      {!failed && brand.logoUrl ? (
        <Image
          src={brand.logoUrl}
          alt={`Logo ${brand.name}`}
          maxH={{ base: '36px', md: '46px' }}
          maxW="100%"
          objectFit="contain"
          filter="grayscale(1) brightness(2)"
          opacity={0.85}
          transition="all 0.3s"
          _groupHover={{ filter: 'grayscale(0) brightness(1)', opacity: 1 }}
          onError={() => setFailed(true)}
        />
      ) : (
        <Text
          fontFamily="heading"
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight="800"
          letterSpacing="-0.02em"
          color="fg.muted"
          textAlign="center"
          transition="color 0.3s"
          _groupHover={{ color: 'white' }}
        >
          {brand.name}
        </Text>
      )}
    </Box>
  )
}
