import { Box, Button, Flex, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGoogle } from 'react-icons/fa'
import { Container } from '@/components/Container'
import { GlassCard } from '@/components/GlassCard'
import { SectionTitle } from '@/components/SectionTitle'
import { TestimonialCard } from '@/components/TestimonialCard'
import { TESTIMONIALS } from '@/data/testimonials'
import { fadeInUp, staggerContainer } from '@/animations/variants'

const MotionGrid = motion.create(SimpleGrid)
const MotionBox = motion.create(Box)

const REVIEW_URL = 'https://g.page/r/CTMFLhY05-2uEBM/review'

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
          subtitle="Calificación promedio 4.9/5 sobre cientos de servicios realizados."
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

        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          mt={{ base: 10, md: 14 }}
        >
          <GlassCard hoverable={false} p={{ base: 6, md: 8 }}>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              align="center"
              gap={{ base: 6, md: 10 }}
              textAlign={{ base: 'center', md: 'left' }}
            >
              <Box
                flexShrink={0}
                bg="white"
                borderRadius="xl2"
                p={3}
                boxShadow="0 12px 30px -12px rgba(0,0,0,0.5)"
              >
                <Image
                  src="/images/qr.png"
                  alt="Código QR para dejar una reseña en Google"
                  boxSize={{ base: '132px', md: '148px' }}
                  loading="lazy"
                />
              </Box>

              <Stack gap={4} align={{ base: 'center', md: 'flex-start' }}>
                <Text
                  fontSize="xs"
                  fontWeight="700"
                  letterSpacing="0.18em"
                  textTransform="uppercase"
                  color="brand.300"
                >
                  ¿Te ayudamos con tu equipo?
                </Text>
                <Heading
                  as="h3"
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight="800"
                  color="fg.default"
                  letterSpacing="-0.02em"
                  lineHeight="1.15"
                >
                  Dejanos tu reseña en Google
                </Heading>
                <Text fontSize={{ base: 'sm', md: 'md' }} color="fg.muted" maxW="lg">
                  Tu opinión ayuda a más vecinos a encontrar un servicio de confianza.
                  Escaneá el QR o tocá el botón: solo te lleva un minuto.
                </Text>
                <Button
                  as="a"
                  // @ts-expect-error chakra anchor
                  href={REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  px={7}
                  py={6}
                  bg="brand.500"
                  color="fg.default"
                  fontWeight="700"
                  borderRadius="full"
                  boxShadow="0 14px 30px -10px rgba(0,139,244,0.55)"
                  _hover={{ bg: 'brand.400', transform: 'translateY(-2px)' }}
                  transition="all 0.25s"
                >
                  <FaGoogle style={{ marginRight: 8 }} size={18} />
                  Escribir una reseña
                </Button>
              </Stack>
            </Flex>
          </GlassCard>
        </MotionBox>
      </Container>
    </Box>
  )
}
