import { Box, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/SectionTitle'
import { fadeInUp } from '@/animations/variants'

const MotionBox = motion.create(Box)

export const Brands = () => {
  return (
    <Box as="section" id="marcas" py={{ base: 12, md: 16 }} position="relative">
      <Container>
        <SectionTitle
          eyebrow="Marcas"
          title="Trabajamos con todas las marcas"
          subtitle="Reparamos e instalamos equipos de las principales marcas del mercado, con repuestos originales y garantía escrita."
        />

        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          mt={{ base: 8, md: 10 }}
        >
          <Image
            src="/images/logos.png"
            alt="Marcas que reparamos e instalamos: Samsung, LG, Whirlpool, Electrolux, Drean, Patriot, BGH, Surrey, Philco y Carrier"
            w="full"
            maxW="920px"
            mx="auto"
            display="block"
            borderRadius="xl2"
            loading="lazy"
          />
        </MotionBox>
      </Container>
    </Box>
  )
}
