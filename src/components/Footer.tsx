import { Box, HStack, IconButton, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { TbPhone, TbMail, TbMapPin, TbClock } from 'react-icons/tb'
import { Container } from './Container'
import { Logo } from './Logo'
import { Link } from './Link'
import { CONTACT } from '@/data/contact'
import { SERVICES } from '@/data/services'

const NAV = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#por-que-elegirnos', label: 'Por que elegirnos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'Preguntas frecuentes' },
  { href: '#contacto', label: 'Contacto' },
]

export const Footer = () => {
  return (
    <Box
      as="footer"
      pt={{ base: 16, md: 20 }}
      pb={10}
      bg="navy.900"
      borderTopWidth="1px"
      borderColor="border.subtle"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        left="50%"
        transform="translateX(-50%)"
        w="700px"
        h="2px"
        bgGradient="linear-gradient(90deg, transparent 0%, #0EA5FF 50%, transparent 100%)"
        opacity={0.6}
      />

      <Container>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={10}>
          <VStack align="flex-start" gap={4}>
            <Logo size="md" />
            <Text color="fg.muted" fontSize="sm" lineHeight="1.7">
              Técnico certificado UTN con 16 años de experiencia en aires acondicionados, lavarropas, microondas y hornos electricos. CABA y GBA, atencion rapida y trabajos garantizados.
            </Text>
            <HStack gap={2}>
              <IconButton
                as="a"
                // @ts-expect-error chakra anchor
                href={CONTACT.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                size="sm"
                bg="rgba(255,255,255,0.05)"
                color="whatsapp.400"
                _hover={{ bg: 'whatsapp.500', color: 'white' }}
                borderRadius="full"
              >
                <FaWhatsapp />
              </IconButton>
              <IconButton
                as="a"
                // @ts-expect-error chakra anchor
                href={CONTACT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                size="sm"
                bg="rgba(255,255,255,0.05)"
                color="brand.300"
                _hover={{ bg: 'brand.500', color: 'white' }}
                borderRadius="full"
              >
                <FaFacebook />
              </IconButton>
              <IconButton
                as="a"
                // @ts-expect-error chakra anchor
                href={CONTACT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                size="sm"
                bg="rgba(255,255,255,0.05)"
                color="pink.300"
                _hover={{ bg: 'pink.500', color: 'white' }}
                borderRadius="full"
              >
                <FaInstagram />
              </IconButton>
            </HStack>
          </VStack>

          <VStack align="flex-start" gap={3}>
            <Text fontFamily="heading" fontWeight="700" color="white" fontSize="md" mb={1}>
              Servicios
            </Text>
            {SERVICES.slice(0, 6).map((s) => (
              <Link
                key={s.id}
                href="#servicios"
                fontSize="sm"
                color="fg.muted"
                _hover={{ color: 'brand.300', textDecoration: 'none' }}
                transition="color 0.2s"
              >
                {s.shortTitle}
              </Link>
            ))}
          </VStack>

          <VStack align="flex-start" gap={3}>
            <Text fontFamily="heading" fontWeight="700" color="white" fontSize="md" mb={1}>
              Links rapidos
            </Text>
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                fontSize="sm"
                color="fg.muted"
                _hover={{ color: 'brand.300', textDecoration: 'none' }}
                transition="color 0.2s"
              >
                {n.label}
              </Link>
            ))}
          </VStack>

          <VStack align="flex-start" gap={3}>
            <Text fontFamily="heading" fontWeight="700" color="white" fontSize="md" mb={1}>
              Contacto
            </Text>
            <HStack gap={3} align="flex-start">
              <Box as={TbPhone} color="brand.300" mt={0.5} />
              <Link
                href={`tel:${CONTACT.phoneIntl}`}
                fontSize="sm"
                color="fg.muted"
                _hover={{ color: 'brand.300', textDecoration: 'none' }}
              >
                {CONTACT.whatsappDisplay}
              </Link>
            </HStack>
            <HStack gap={3} align="flex-start">
              <Box as={TbMail} color="brand.300" mt={0.5} />
              <Link
                href={`mailto:${CONTACT.email}`}
                fontSize="sm"
                color="fg.muted"
                _hover={{ color: 'brand.300', textDecoration: 'none' }}
              >
                {CONTACT.email}
              </Link>
            </HStack>
            <HStack gap={3} align="flex-start">
              <Box as={TbMapPin} color="brand.300" mt={0.5} />
              <Text fontSize="sm" color="fg.muted">
                {CONTACT.serviceArea}
              </Text>
            </HStack>
            <HStack gap={3} align="flex-start">
              <Box as={TbClock} color="brand.300" mt={0.5} />
              <Text fontSize="sm" color="fg.muted">
                {CONTACT.hours}
              </Text>
            </HStack>
          </VStack>
        </SimpleGrid>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'flex-start', md: 'center' }}
          mt={12}
          pt={8}
          borderTopWidth="1px"
          borderColor="border.subtle"
          gap={3}
        >
          <Text fontSize="xs" color="fg.subtle">
            © {new Date().getFullYear()} {CONTACT.brand}. Todos los derechos reservados.
          </Text>
          <Text fontSize="xs" color="fg.subtle">
            Servicio técnico profesional · {CONTACT.serviceArea}
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}
