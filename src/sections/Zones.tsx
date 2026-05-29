import { Box, Flex, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { TbMapPin } from 'react-icons/tb'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/SectionTitle'
import { GlassCard } from '@/components/GlassCard'
import { CoverageMap } from '@/components/CoverageMap'
import { ZONES } from '@/data/zones'
import { fadeInUp, staggerContainer } from '@/animations/variants'

const MotionBox = motion.create(Box)
const MotionGrid = motion.create(SimpleGrid)
const MotionGlass = motion.create(GlassCard)

export const Zones = () => {
  return (
    <Box as="section" id="zonas" py={{ base: 16, md: 24 }}>
      <Container>
        <SectionTitle
          eyebrow="Zonas de atencion"
          title="Cobertura en CABA y todo el Gran Buenos Aires"
          subtitle="Atendemos personalmente en los siguientes barrios y localidades. ¿No ves tu zona? Consultanos por WhatsApp."
        />

        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          mb={{ base: 8, md: 12 }}
        >
          <CoverageMap />
        </MotionBox>

        <MotionGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          gap={{ base: 4, md: 5 }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {ZONES.map((zone) => (
            <MotionGlass key={zone.id} variants={fadeInUp} p={6} hoverable>
              <HStack gap={3} mb={4}>
                <Box
                  boxSize={10}
                  borderRadius="lg"
                  bg="rgba(14,165,255,0.12)"
                  borderWidth="1px"
                  borderColor="border.accent"
                  display="grid"
                  placeItems="center"
                  color="brand.300"
                >
                  <TbMapPin size={20} />
                </Box>
                <VStack align="flex-start" gap={0}>
                  <Text fontFamily="heading" fontWeight="800" color="white" fontSize="lg">
                    {zone.name}
                  </Text>
                  <Text fontSize="xs" color="fg.subtle">
                    {zone.description}
                  </Text>
                </VStack>
              </HStack>
              <Flex gap={1.5} wrap="wrap">
                {zone.neighborhoods.map((n) => (
                  <Box
                    key={n}
                    px={2.5}
                    py={1}
                    fontSize="xs"
                    color="fg.muted"
                    bg="rgba(255,255,255,0.04)"
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor="border.subtle"
                  >
                    {n}
                  </Box>
                ))}
              </Flex>
            </MotionGlass>
          ))}
        </MotionGrid>
      </Container>
    </Box>
  )
}
