import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

interface Props extends BoxProps {
  hoverable?: boolean
}

export const GlassCard = forwardRef<HTMLDivElement, Props>(
  ({ hoverable = true, children, ...rest }, ref) => (
    <Box
      ref={ref}
      position="relative"
      borderRadius="xl2"
      bg="rgba(255,255,255,0.04)"
      borderWidth="1px"
      borderColor="border.subtle"
      backdropFilter="blur(14px)"
      boxShadow="card"
      overflow="hidden"
      transition="all 0.35s cubic-bezier(0.22, 1, 0.36, 1)"
      _hover={
        hoverable
          ? {
              transform: 'translateY(-6px)',
              borderColor: 'border.accent',
              boxShadow: 'cardHover',
              bg: 'rgba(14,165,255,0.05)',
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </Box>
  ),
)
GlassCard.displayName = 'GlassCard'
