import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { TbPhone, TbArrowRight } from 'react-icons/tb'
import { Container } from '@/components/Container'
import { TrustBadge } from '@/components/TrustBadge'
import { fadeIn, fadeInUp, scaleIn, staggerContainer } from '@/animations/variants'
import { buildWhatsAppUrl, buildTelUrl } from '@/utils/whatsapp'
import { transformDriveImage } from '@/utils/transformDriveImage'
import { CONTACT } from '@/data/contact'
import { STATS } from '@/data/stats'
import { StatCounter } from '@/components/StatCounter'

const MotionBox = motion.create(Box)
const MotionStack = motion.create(Stack)
const MotionHeading = motion.create(Heading)
const MotionText = motion.create(Text)

const HERO_WA = 'Hola Luis, vi tu pagina y quiero pedir un presupuesto.'

export const Hero = () => {
  const avatar = CONTACT.avatarDriveUrl
    ? transformDriveImage(CONTACT.avatarDriveUrl)
    : CONTACT.avatarFallback

  return (
    <Box
      as="section"
      id="hero"
      position="relative"
      pt={{ base: 28, md: 36 }}
      pb={{ base: 16, md: 24 }}
      overflow="hidden"
      bg="gradients.hero"
    >
      <Box
        position="absolute"
        inset={0}
        opacity={0.4}
        backgroundImage="radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)"
        backgroundSize="32px 32px"
        pointerEvents="none"
      />

      <MotionBox
        position="absolute"
        top="10%"
        left="-10%"
        boxSize={{ base: '300px', md: '500px' }}
        borderRadius="full"
        bg="radial-gradient(circle, rgba(14,165,255,0.25) 0%, transparent 70%)"
        filter="blur(40px)"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <MotionBox
        position="absolute"
        bottom="0%"
        right="-10%"
        boxSize={{ base: '300px', md: '500px' }}
        borderRadius="full"
        bg="radial-gradient(circle, rgba(125,211,252,0.20) 0%, transparent 70%)"
        filter="blur(40px)"
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Container position="relative" zIndex={1}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 12, lg: 16 }} alignItems="center">
          <MotionStack
            gap={6}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <MotionBox variants={fadeInUp}>
              <HStack
                display="inline-flex"
                gap={2}
                px={3}
                py={1.5}
                borderRadius="full"
                bg="accent.warm.bg"
                borderWidth="1px"
                borderColor="border.warm"
                backdropFilter="blur(10px)"
              >
                <Box boxSize={2} borderRadius="full" bg="whatsapp.400" boxShadow="0 0 10px rgba(52,211,153,0.7)" />
                <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="accent.warm.soft">
                  Disponible hoy · CABA y GBA
                </Text>
              </HStack>
            </MotionBox>

            <MotionHeading
              variants={fadeInUp}
              as="h1"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="800"
              lineHeight="1.05"
              letterSpacing="-0.025em"
              color="white"
            >
              Servicio Tecnico
              <br />
              <Box
                as="span"
                bgGradient="linear-gradient(135deg, #0EA5FF 0%, #7DD3FC 50%, #FFFFFF 100%)"
                bgClip="text"
              >
                Profesional de Aires
              </Box>
              <br />
              Acondicionados
            </MotionHeading>

            <MotionText
              variants={fadeInUp}
              fontSize={{ base: 'md', md: 'lg' }}
              color="fg.muted"
              maxW="xl"
              lineHeight="1.7"
            >
              Instalacion, reparacion y mantenimiento de aires acondicionados split, carga de gas, reparacion de lavarropas, microondas y hornos electricos.
              Tecnico certificado UTN con 16 años de experiencia.
            </MotionText>

            <MotionStack variants={fadeInUp} direction={{ base: 'column', sm: 'row' }} gap={3} pt={2}>
              <Button
                as="a"
                // @ts-expect-error chakra anchor
                href={buildWhatsAppUrl(HERO_WA)}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                px={7}
                py={7}
                bg="whatsapp.500"
                color="white"
                fontWeight="700"
                borderRadius="full"
                boxShadow="0 14px 35px -10px rgba(34,197,94,0.6)"
                _hover={{
                  bg: 'whatsapp.600',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 20px 40px -10px rgba(34,197,94,0.7)',
                }}
                transition="all 0.25s ease"
              >
                <FaWhatsapp style={{ marginRight: 8 }} size={20} />
                Solicitar Presupuesto
              </Button>
              <Button
                as="a"
                // @ts-expect-error chakra anchor
                href={buildTelUrl()}
                size="lg"
                px={7}
                py={7}
                variant="outline"
                color="white"
                fontWeight="700"
                borderRadius="full"
                borderWidth="1px"
                borderColor="border.default"
                bg="rgba(255,255,255,0.04)"
                backdropFilter="blur(10px)"
                _hover={{
                  bg: 'rgba(14,165,255,0.10)',
                  borderColor: 'border.accent',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.25s ease"
              >
                <TbPhone style={{ marginRight: 8 }} size={20} />
                Llamar Ahora
              </Button>
            </MotionStack>

            <MotionBox variants={fadeIn} pt={4}>
              <HStack gap={2.5} flexWrap="wrap">
                <TrustBadge label="Atencion rapida" />
                <TrustBadge label="Garantia escrita" />
                <TrustBadge label="Certificado UTN" />
                <TrustBadge label="Domicilio CABA y GBA" />
              </HStack>
            </MotionBox>
          </MotionStack>

          <MotionBox
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            position="relative"
            display={{ base: 'block', lg: 'block' }}
          >
            <Box
              position="absolute"
              inset="-20%"
              bg="radial-gradient(circle, rgba(14,165,255,0.18) 0%, transparent 60%)"
              borderRadius="full"
              filter="blur(40px)"
              zIndex={0}
            />

            <Box
              position="relative"
              zIndex={1}
              maxW={{ base: '380px', md: '460px' }}
              mx="auto"
              borderRadius="xl3"
              overflow="hidden"
              borderWidth="1px"
              borderColor="border.accent"
              boxShadow="premium"
              bg="rgba(255,255,255,0.04)"
              backdropFilter="blur(20px)"
              p={3}
            >
              <Box position="relative" borderRadius="xl2" overflow="hidden">
                <Image src={avatar} alt="Luis Gonzalez - Tecnico profesional" w="full" h={{ base: '380px', md: '460px' }} objectFit="cover" />
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  bgGradient="linear-gradient(to top, rgba(5,14,32,0.97) 0%, rgba(5,14,32,0.78) 35%, transparent 80%)"
                  p={5}
                >
                  <Text fontSize="xs" color="brand.300" fontWeight="700" letterSpacing="0.15em" textTransform="uppercase" mb={1}>
                    A cargo del servicio
                  </Text>
                  <Text fontFamily="heading" fontSize="2xl" fontWeight="800" color="white" lineHeight="1.1">
                    Luis Gonzalez
                  </Text>
                  <Text fontSize="sm" color="white" opacity={0.92} fontWeight="500" mt={1}>
                    Certificado UTN · 16+ años de experiencia
                  </Text>
                </Box>
              </Box>

              <MotionBox
                position="absolute"
                top={6}
                right={-3}
                px={4}
                py={2.5}
                borderRadius="full"
                bg="whatsapp.500"
                color="white"
                fontWeight="700"
                fontSize="sm"
                boxShadow="0 12px 30px -8px rgba(34,197,94,0.6)"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <HStack gap={1.5}>
                  <FaWhatsapp />
                  <Text>Responde rapido</Text>
                </HStack>
              </MotionBox>

              <MotionBox
                position="absolute"
                bottom={-5}
                left={-5}
                px={4}
                py={3}
                borderRadius="xl"
                bg="rgba(10,26,53,0.85)"
                borderWidth="1px"
                borderColor="border.accent"
                backdropFilter="blur(14px)"
                boxShadow="glow"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <HStack gap={3}>
                  <Box boxSize={9} borderRadius="lg" bg="rgba(14,165,255,0.15)" display="grid" placeItems="center">
                    <TbArrowRight size={18} color="#7DD3FC" />
                  </Box>
                  <Box>
                    <Text fontSize="2xs" color="fg.subtle" fontWeight="600" letterSpacing="0.1em" textTransform="uppercase">
                      Calificacion
                    </Text>
                    <Text fontFamily="heading" fontSize="lg" fontWeight="800" color="white" lineHeight="1">
                      4.9 / 5 ⭐
                    </Text>
                  </Box>
                </HStack>
              </MotionBox>
            </Box>
          </MotionBox>
        </SimpleGrid>

        <MotionBox
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          mt={{ base: 16, md: 20 }}
        >
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 3, md: 5 }}>
            {STATS.map((s) => (
              <StatCounter key={s.id} stat={s} />
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  )
}
