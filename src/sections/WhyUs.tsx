import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/SectionTitle'
import { GlassCard } from '@/components/GlassCard'
import { WHY_US } from '@/data/whyUs'
import { fadeInUp, staggerContainer } from '@/animations/variants'

const MotionGrid = motion.create(SimpleGrid)
const MotionGlass = motion.create(GlassCard)

export const WhyUs = () => {
  return (
    <Box
      as="section"
      id="por-que-elegirnos"
      py={{ base: 16, md: 24 }}
      position="relative"
      bg="rgba(255,255,255,0.015)"
      borderTopWidth="1px"
      borderBottomWidth="1px"
      borderColor="border.subtle"
    >
      <Container>
        <SectionTitle
          eyebrow="Por que elegirnos"
          title="Técnico de confianza, resultados garantizados"
          subtitle="Mas de una decada de experiencia atendiendo personalmente cada servicio. Sin intermediarios ni call centers."
        />

        <MotionGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 5, md: 6 }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {WHY_US.map((item) => {
            const Icon = item.icon
            return (
              <MotionGlass key={item.id} variants={fadeInUp} p={{ base: 6, md: 7 }}>
                <Box
                  boxSize={12}
                  borderRadius="xl"
                  bgGradient="linear-gradient(135deg, rgba(14,165,255,0.18) 0%, rgba(2,132,199,0.10) 100%)"
                  borderWidth="1px"
                  borderColor="border.accent"
                  display="grid"
                  placeItems="center"
                  color="brand.300"
                  mb={4}
                >
                  <Box as={Icon} boxSize={6} />
                </Box>
                <Text fontFamily="heading" fontSize="lg" fontWeight="700" color="white" mb={2}>
                  {item.title}
                </Text>
                <Text fontSize="sm" color="fg.muted" lineHeight="1.6">
                  {item.description}
                </Text>
              </MotionGlass>
            )
          })}
        </MotionGrid>
      </Container>
    </Box>
  )
}
