import { Box, IconButton } from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { buildWhatsAppUrl } from '@/utils/whatsapp'

const MotionBox = motion.create(Box)

const DEFAULT_MESSAGE =
  'Hola Luis, vi tu pagina y queria consultarte por un servicio.'

export const WhatsAppFloat = () => {
  return (
    <MotionBox
      position="fixed"
      bottom={{ base: 5, md: 7 }}
      right={{ base: 5, md: 7 }}
      zIndex={1000}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Box position="relative">
        <Box
          position="absolute"
          inset={0}
          borderRadius="full"
          bg="whatsapp.500"
          opacity={0.55}
          animation="luis-pulse 2.2s ease-out infinite"
        />
        <IconButton
          as="a"
          // @ts-expect-error chakra anchor
          href={buildWhatsAppUrl(DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          size="xl"
          boxSize={{ base: 14, md: 16 }}
          borderRadius="full"
          bg="whatsapp.500"
          color="white"
          boxShadow="0 18px 40px -10px rgba(34,197,94,0.7)"
          _hover={{
            bg: 'whatsapp.600',
            transform: 'scale(1.05)',
          }}
          transition="all 0.25s ease"
          position="relative"
          zIndex={1}
        >
          <FaWhatsapp size={28} />
        </IconButton>
      </Box>
      <style>{`
        @keyframes luis-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          80% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </MotionBox>
  )
}
