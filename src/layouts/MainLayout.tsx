import { Box } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box minH="100dvh" bg="bg.base" color="fg.default" overflowX="hidden">
      <Navbar />
      <Box as="main">{children}</Box>
      <Footer />
      <WhatsAppFloat />
    </Box>
  )
}
