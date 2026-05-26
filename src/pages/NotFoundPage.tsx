import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react'
import { TbHome } from 'react-icons/tb'
import { Link as RouterLink } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <Box minH="100dvh" bg="bg.base" display="grid" placeItems="center" px={6}>
      <VStack gap={5} textAlign="center" maxW="lg">
        <Text
          fontFamily="heading"
          fontSize={{ base: '6xl', md: '8xl' }}
          fontWeight="800"
          bgGradient="linear-gradient(135deg, #0EA5FF 0%, #075985 100%)"
          bgClip="text"
        >
          404
        </Text>
        <Heading as="h1" color="white" fontSize={{ base: '2xl', md: '3xl' }}>
          Pagina no encontrada
        </Heading>
        <Text color="fg.muted">
          La pagina que buscas no existe o fue movida. Volve al inicio para encontrar lo que necesitas.
        </Text>
        <Button
          as={RouterLink}
          // @ts-expect-error router link
          to="/"
          size="lg"
          bg="brand.500"
          color="white"
          borderRadius="full"
          _hover={{ bg: 'brand.400' }}
        >
          <TbHome style={{ marginRight: 8 }} />
          Volver al inicio
        </Button>
      </VStack>
    </Box>
  )
}
