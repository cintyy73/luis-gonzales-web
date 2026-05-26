import { Box, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/SectionTitle'
import { TestimonialCard } from '@/components/TestimonialCard'
import { TESTIMONIALS } from '@/data/testimonials'
import { staggerContainer } from '@/animations/variants'

const MotionGrid = motion.create(SimpleGrid)

export const Testimonials = () => {
  return (
    <Box
      as="section"
      id="testimonios"
      py={{ base: 16, md: 24 }}
      bg="rgba(255,255,255,0.015)"
      borderTopWidth="1px"
      borderBottomWidth="1px"
      borderColor="border.subtle"
    >
      <Container>
        <SectionTitle
          eyebrow="Lo que dicen los clientes"
          title="Testimonios reales en CABA y GBA"
          subtitle="Calificacion promedio 4.9/5 sobre cientos de servicios realizados."
        />

        <MotionGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 5, md: 6 }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </MotionGrid>
      </Container>
    </Box>
  )
}
