import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

export const Container = forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <Box
    ref={ref}
    w="full"
    maxW={{ base: '100%', md: '1200px' }}
    mx="auto"
    px={{ base: 5, md: 8, lg: 10 }}
    {...props}
  />
))
Container.displayName = 'Container'
