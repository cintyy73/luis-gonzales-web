import {
  Box,
  Drawer,
  HStack,
  IconButton,
  Portal,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { TbMenu2, TbX } from 'react-icons/tb'
import { Logo } from './Logo'
import { Link } from './Link'
import { Container } from './Container'
import { WhatsAppButton } from './WhatsAppButton'
import { useScrollPosition } from '@/hooks/useScrollPosition'

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#por-que-elegirnos', label: 'Por que elegirnos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
]

export const Navbar = () => {
  const scrolled = useScrollPosition(40)
  const [open, setOpen] = useState(false)

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      transition="all 0.3s ease"
      bg={scrolled ? 'rgba(5,14,32,0.78)' : 'transparent'}
      backdropFilter={scrolled ? 'blur(14px) saturate(160%)' : 'none'}
      borderBottomWidth={scrolled ? '1px' : '0'}
      borderColor="border.subtle"
      py={scrolled ? 2 : 4}
    >
      <Container>
        <HStack justify="space-between" align="center">
          <Logo size="md" />

          <HStack gap={6} display={{ base: 'none', lg: 'flex' }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                fontSize="sm"
                fontWeight="500"
                color="fg.muted"
                _hover={{ color: 'brand.300', textDecoration: 'none' }}
                transition="color 0.2s"
                position="relative"
              >
                {link.label}
              </Link>
            ))}
          </HStack>

          <HStack gap={3}>
            <Box display={{ base: 'none', md: 'block' }}>
              <WhatsAppButton size="md" label="WhatsApp" />
            </Box>
            <IconButton
              aria-label="Abrir menu"
              variant="ghost"
              color="white"
              display={{ base: 'inline-flex', lg: 'none' }}
              onClick={() => setOpen(true)}
              _hover={{ bg: 'rgba(255,255,255,0.08)' }}
            >
              <TbMenu2 size={26} />
            </IconButton>
          </HStack>
        </HStack>
      </Container>

      <Drawer.Root
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        placement="end"
        size="xs"
      >
        <Portal>
          <Drawer.Backdrop bg="rgba(5,14,32,0.7)" backdropFilter="blur(8px)" />
          <Drawer.Positioner>
            <Drawer.Content
              bg="navy.900"
              borderLeftWidth="1px"
              borderColor="border.subtle"
            >
              <Drawer.Header borderBottomWidth="1px" borderColor="border.subtle">
                <HStack justify="space-between" w="full">
                  <Logo size="sm" />
                  <IconButton
                    aria-label="Cerrar menu"
                    variant="ghost"
                    color="white"
                    onClick={() => setOpen(false)}
                  >
                    <TbX size={22} />
                  </IconButton>
                </HStack>
              </Drawer.Header>
              <Drawer.Body>
                <VStack align="stretch" gap={1} mt={4}>
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      display="block"
                      px={4}
                      py={3}
                      borderRadius="lg"
                      fontSize="md"
                      fontWeight="600"
                      color="fg.default"
                      _hover={{ bg: 'rgba(14,165,255,0.08)', color: 'brand.300', textDecoration: 'none' }}
                      transition="all 0.2s"
                    >
                      {link.label}
                    </Link>
                  ))}
                </VStack>
                <Stack mt={6} gap={3}>
                  <WhatsAppButton w="full" label="Escribir por WhatsApp" />
                </Stack>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  )
}
