import { Box, Image, Skeleton, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { transformDriveImage } from '@/utils/transformDriveImage'
import type { GalleryImage } from '@/types'

interface Props {
  item: GalleryImage
  onClick: () => void
}

export const GalleryItem = ({ item, onClick }: Props) => {
  const [loaded, setLoaded] = useState(false)
  const src = transformDriveImage(item.src)

  return (
    <Box
      position="relative"
      borderRadius="xl"
      overflow="hidden"
      cursor="pointer"
      role="button"
      tabIndex={0}
      aria-label={item.alt}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      borderWidth="1px"
      borderColor="border.subtle"
      boxShadow="card"
      bg="bg.surface"
      transition="all 0.4s ease"
      _hover={{
        borderColor: 'border.accent',
        boxShadow: 'cardHover',
        '& img': { transform: 'scale(1.08)' },
        '& .overlay': { opacity: 1 },
      }}
      _active={{ transform: 'scale(0.98)' }}
    >
      {!loaded && <Skeleton position="absolute" inset={0} bg="navy.700" />}
      <Image
        src={src}
        alt={item.alt}
        w="full"
        h={{ base: '220px', md: '260px' }}
        objectFit="cover"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        transition="transform 0.6s ease"
      />
      <Box
        className="overlay"
        position="absolute"
        inset={0}
        bgGradient="linear-gradient(to top, rgba(5,14,32,0.95) 0%, rgba(5,14,32,0.35) 45%, rgba(5,14,32,0) 75%)"
        opacity={0.85}
        transition="opacity 0.3s ease"
        display="flex"
        alignItems="flex-end"
        p={4}
      >
        {item.description && (
          <Text
            color="white"
            fontSize="sm"
            fontWeight="600"
            lineHeight="1.4"
            textShadow="0 1px 6px rgba(0,0,0,0.85), 0 0 2px rgba(0,0,0,0.7)"
          >
            {item.description}
          </Text>
        )}
      </Box>
    </Box>
  )
}
