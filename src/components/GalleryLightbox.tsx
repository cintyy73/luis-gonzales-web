import { Box, Dialog, IconButton, Image, Portal, Text } from '@chakra-ui/react'
import { TbX, TbChevronLeft, TbChevronRight } from 'react-icons/tb'
import { transformDriveImage } from '@/utils/transformDriveImage'
import type { GalleryImage } from '@/types'

interface Props {
  images: GalleryImage[]
  index: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export const GalleryLightbox = ({ images, index, onClose, onPrev, onNext }: Props) => {
  const open = index !== null
  const item = open ? images[index] : null

  return (
    <Dialog.Root open={open} onOpenChange={(e) => !e.open && onClose()} size="cover">
      <Portal>
        <Dialog.Backdrop bg="rgba(5,14,32,0.92)" backdropFilter="blur(12px)" />
        <Dialog.Positioner>
          <Dialog.Content bg="transparent" boxShadow="none" maxW="100vw" h="100vh">
            <Box position="relative" w="full" h="full" display="grid" placeItems="center" p={{ base: 4, md: 10 }}>
              <IconButton
                aria-label="Cerrar"
                onClick={onClose}
                position="absolute"
                top={4}
                right={4}
                bg="rgba(255,255,255,0.08)"
                color="white"
                borderRadius="full"
                _hover={{ bg: 'rgba(255,255,255,0.18)' }}
              >
                <TbX size={22} />
              </IconButton>
              <IconButton
                aria-label="Anterior"
                onClick={onPrev}
                position="absolute"
                left={{ base: 2, md: 6 }}
                top="50%"
                transform="translateY(-50%)"
                bg="rgba(255,255,255,0.08)"
                color="white"
                borderRadius="full"
                _hover={{ bg: 'rgba(255,255,255,0.18)' }}
              >
                <TbChevronLeft size={28} />
              </IconButton>
              <IconButton
                aria-label="Siguiente"
                onClick={onNext}
                position="absolute"
                right={{ base: 2, md: 6 }}
                top="50%"
                transform="translateY(-50%)"
                bg="rgba(255,255,255,0.08)"
                color="white"
                borderRadius="full"
                _hover={{ bg: 'rgba(255,255,255,0.18)' }}
              >
                <TbChevronRight size={28} />
              </IconButton>

              {item && (
                <Box maxW="6xl" w="full" textAlign="center">
                  <Image
                    src={transformDriveImage(item.src)}
                    alt={item.alt}
                    maxH={{ base: '65vh', md: '78vh' }}
                    mx="auto"
                    borderRadius="xl2"
                    boxShadow="premium"
                  />
                  {item.description && (
                    <Text mt={5} color="white" fontSize={{ base: 'sm', md: 'md' }}>
                      {item.description}
                    </Text>
                  )}
                </Box>
              )}
            </Box>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
