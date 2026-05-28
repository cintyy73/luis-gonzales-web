import { Box, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/SectionTitle'
import { BrandLogo } from '@/components/BrandLogo'
import { BRANDS } from '@/data/brands'
import { fadeInUp, staggerContainer } from '@/animations/variants'

const MotionBox = motion.create(Box)
const MotionGrid = motion.create(SimpleGrid)

export const Brands = () => {
  return (
    <Box as="section" id="marcas" py={{ base: 12, md: 16 }} position="relative">
      <Container>
        <SectionTitle
          eyebrow="Marcas"
          title="Trabajamos con todas las marcas"
          subtitle="Reparamos e instalamos equipos de las principales marcas del mercado, con repuestos originales y garantia escrita."
        />

        <MotionGrid
          columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
          gap={{ base: 3, md: 4 }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {BRANDS.map((b) => (
            <MotionBox key={b.id} variants={fadeInUp}>
              <BrandLogo brand={b} />
            </MotionBox>
          ))}
        </MotionGrid>
      </Container>
    </Box>
  )
}
