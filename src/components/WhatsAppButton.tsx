import { Button, type ButtonProps } from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'
import { buildWhatsAppUrl } from '@/utils/whatsapp'

interface Props extends Omit<ButtonProps, 'onClick'> {
  message?: string
  label?: string
}

export const WhatsAppButton = ({
  message,
  label = 'WhatsApp',
  size = 'lg',
  ...rest
}: Props) => {
  return (
    <Button
      as="a"
      // @ts-expect-error chakra-react anchor
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      size={size}
      px={6}
      bg="whatsapp.500"
      color="white"
      fontWeight="700"
      borderRadius="full"
      boxShadow="0 12px 30px -10px rgba(34,197,94,0.6)"
      _hover={{
        bg: 'whatsapp.600',
        transform: 'translateY(-2px)',
        boxShadow: '0 16px 36px -10px rgba(34,197,94,0.7)',
      }}
      _active={{ transform: 'translateY(0)' }}
      transition="all 0.25s ease"
      {...rest}
    >
      <FaWhatsapp style={{ marginRight: 8 }} />
      {label}
    </Button>
  )
}
