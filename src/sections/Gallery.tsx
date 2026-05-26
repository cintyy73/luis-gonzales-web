import { Box, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/SectionTitle'
import { GalleryItem } from '@/components/GalleryItem'
import { GalleryLightbox } from '@/components/GalleryLightbox'
import { GALLERY } from '@/data/gallery'
import { fadeInUp, staggerContainer } from '@/animations/variants'

const MotionBox = motion.create(Box)

export const Gallery = () => {
  const [index, setIndex] = useState<number | null>(null)

  const close = useCallback(() => setIndex(null), [])
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % GALLERY.length)),
    [],
  )
  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length)),
    [],
  )

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, close, next, prev])

  return (
    <Box as="section" id="galeria" py={{ base: 16, md: 24 }}>
      <Container>
        <SectionTitle
          eyebrow="Trabajos realizados"
          title="Galeria de instalaciones y reparaciones"
          subtitle="Una muestra de los servicios realizados en CABA y GBA. Tocá una imagen para ampliarla."
        />

        <MotionBox variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={{ base: 3, md: 4 }}>
            {GALLERY.map((item, i) => (
              <MotionBox key={item.id} variants={fadeInUp}>
                <GalleryItem item={item} onClick={() => setIndex(i)} />
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>

      <GalleryLightbox images={GALLERY} index={index} onClose={close} onPrev={prev} onNext={next} />
    </Box>
  )
}
