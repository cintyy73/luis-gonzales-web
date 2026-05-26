import { Box, HStack, Text } from '@chakra-ui/react'
import { TbCheck } from 'react-icons/tb'

interface Props {
  label: string
}

export const TrustBadge = ({ label }: Props) => (
  <HStack
    gap={2}
    px={3.5}
    py={2}
    borderRadius="full"
    bg="rgba(255,255,255,0.05)"
    borderWidth="1px"
    borderColor="border.subtle"
    backdropFilter="blur(8px)"
  >
    <Box
      boxSize={5}
      borderRadius="full"
      bg="rgba(34,197,94,0.20)"
      display="grid"
      placeItems="center"
      color="whatsapp.400"
      flexShrink={0}
    >
      <TbCheck size={13} strokeWidth={3} />
    </Box>
    <Text fontSize="xs" fontWeight="600" color="fg.default" whiteSpace="nowrap">
      {label}
    </Text>
  </HStack>
)
