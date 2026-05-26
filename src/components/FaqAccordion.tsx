import { Accordion, Box, Span, Text } from '@chakra-ui/react'
import { TbChevronDown } from 'react-icons/tb'
import { FAQS } from '@/data/faq'

export const FaqAccordion = () => {
  return (
    <Accordion.Root collapsible multiple={false} defaultValue={[FAQS[0].id]}>
      {FAQS.map((faq) => (
        <Accordion.Item
          key={faq.id}
          value={faq.id}
          borderRadius="xl2"
          borderWidth="1px"
          borderColor="border.subtle"
          bg="rgba(255,255,255,0.03)"
          backdropFilter="blur(10px)"
          mb={3}
          overflow="hidden"
          transition="all 0.3s ease"
          _hover={{ borderColor: 'border.accent' }}
        >
          <Accordion.ItemTrigger
            px={{ base: 5, md: 6 }}
            py={5}
            _hover={{ bg: 'rgba(14,165,255,0.04)' }}
            cursor="pointer"
          >
            <Span flex="1" textAlign="left" fontWeight="700" color="white" fontSize={{ base: 'sm', md: 'md' }}>
              {faq.question}
            </Span>
            <Accordion.ItemIndicator>
              <Box as={TbChevronDown} color="brand.300" />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody px={{ base: 5, md: 6 }} pb={6}>
              <Text color="fg.muted" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
                {faq.answer}
              </Text>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
