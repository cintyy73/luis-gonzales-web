import { Box } from '@chakra-ui/react'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/SectionTitle'
import { FaqAccordion } from '@/components/FaqAccordion'

export const Faq = () => {
  return (
    <Box as="section" id="faq" py={{ base: 16, md: 24 }}>
      <Container maxW="3xl">
        <SectionTitle
          eyebrow="Preguntas frecuentes"
          title="Todo lo que necesitas saber"
          subtitle="Si tu duda no aparece aca, escribinos por WhatsApp y te respondemos al instante."
        />
        <FaqAccordion />
      </Container>
    </Box>
  )
}
