import { Box, Button, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { TbPhone, TbMail } from 'react-icons/tb'
import { Container } from '@/components/Container'
import { buildWhatsAppUrl, buildTelUrl } from '@/utils/whatsapp'
import { CONTACT } from '@/data/contact'
import { fadeInUp } from '@/animations/variants'

const MotionBox = motion.create(Box)

const CTA_WA = 'Hola Luis, quiero coordinar una visita por WhatsApp.'
const CTA_EMAIL_SUBJECT = 'Consulta desde la web'
const CTA_EMAIL_BODY = 'Hola Luis, quiero coordinar una visita. Te dejo mi consulta:\n\n'
const ctaMailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(CTA_EMAIL_SUBJECT)}&body=${encodeURIComponent(CTA_EMAIL_BODY)}`

export const FinalCta = () => {
  return (
    <Box as="section" py={{ base: 16, md: 20 }}>
      <Container>
        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          position="relative"
          borderRadius="xl3"
          overflow="hidden"
          p={{ base: 8, md: 14 }}
          bgGradient="linear-gradient(135deg, #013463 0%, #050E20 100%)"
          borderWidth="1px"
          borderColor="border.accent"
          boxShadow="premium"
        >
          <Box
            position="absolute"
            inset={0}
            bg="radial-gradient(circle at 70% 30%, rgba(14,165,255,0.20) 0%, transparent 60%)"
            pointerEvents="none"
          />
          <Box
            position="absolute"
            inset={0}
            opacity={0.5}
            backgroundImage="radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)"
            backgroundSize="28px 28px"
            pointerEvents="none"
          />

          <Stack position="relative" zIndex={1} align="center" gap={5} textAlign="center" maxW="3xl" mx="auto">
            <Text fontSize="xs" fontWeight="700" letterSpacing="0.18em" textTransform="uppercase" color="brand.300">
              ¿Listo para resolverlo hoy?
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight="800"
              lineHeight="1.1"
              color="white"
              letterSpacing="-0.02em"
            >
              Tu equipo merece manos
              <Box as="span" bgGradient="linear-gradient(135deg, #0EA5FF 0%, #7DD3FC 100%)" bgClip="text">
                {' '}profesionales
              </Box>
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="fg.muted" maxW="2xl">
              Coordina visita por WhatsApp y resolvemos hoy o el dia siguiente. Trabajos con garantia escrita.
            </Text>

            <HStack gap={3} flexWrap="wrap" justify="center" mt={2}>
              <Button
                as="a"
                // @ts-expect-error chakra anchor
                href={buildWhatsAppUrl(CTA_WA)}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                minW={{ base: '200px', md: '220px' }}
                px={7}
                py={7}
                bg="whatsapp.500"
                color="white"
                fontWeight="700"
                borderRadius="full"
                boxShadow="0 16px 36px -10px rgba(34,197,94,0.6)"
                _hover={{ bg: 'whatsapp.600', transform: 'translateY(-2px)' }}
                transition="all 0.25s"
              >
                <FaWhatsapp style={{ marginRight: 8 }} size={20} />
                Pedir Presupuesto
              </Button>
              <Button
                as="a"
                // @ts-expect-error chakra anchor
                href={ctaMailto}
                size="lg"
                minW={{ base: '200px', md: '220px' }}
                px={7}
                py={7}
                bg="brand.500"
                color="white"
                fontWeight="700"
                borderRadius="full"
                boxShadow="0 14px 30px -10px rgba(14,165,255,0.55)"
                _hover={{ bg: 'brand.400', transform: 'translateY(-2px)' }}
                transition="all 0.25s"
              >
                <TbMail style={{ marginRight: 8 }} size={20} />
                Enviar email
              </Button>
              <Button
                as="a"
                // @ts-expect-error chakra anchor
                href={buildTelUrl()}
                size="lg"
                minW={{ base: '200px', md: '220px' }}
                px={7}
                py={7}
                variant="outline"
                color="white"
                fontWeight="700"
                borderRadius="full"
                borderColor="border.default"
                bg="rgba(255,255,255,0.04)"
                _hover={{ bg: 'rgba(14,165,255,0.10)', borderColor: 'border.accent' }}
                transition="all 0.25s"
              >
                <TbPhone style={{ marginRight: 8 }} size={20} />
                Llamar ahora
              </Button>
            </HStack>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  )
}
