import { Box, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/SectionTitle'
import { ServiceCard } from '@/components/ServiceCard'
import { SERVICES } from '@/data/services'
import { staggerContainer } from '@/animations/variants'

const MotionSimpleGrid = motion.create(SimpleGrid)

export const Services = () => {
  return (
    <Box as="section" id="servicios" py={{ base: 16, md: 24 }} position="relative">
      <Container>
        <SectionTitle
          eyebrow="Nuestros Servicios"
          title="Soluciones completas para tu hogar y comercio"
          subtitle="Atendemos todo el ciclo en aires acondicionados: instalacion, reparacion, mantenimiento y carga de gas. Tambien reparamos lavarropas, microondas y hornos electricos de todas las marcas."
        />

        <MotionSimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 5, md: 6 }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </MotionSimpleGrid>
      </Container>
    </Box>
  )
}
