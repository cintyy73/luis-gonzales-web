import {
  Box,
  Button,
  Field,
  HStack,
  Input,
  NativeSelect,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FaWhatsapp } from 'react-icons/fa'
import {
  TbPhone,
  TbMail,
  TbMapPin,
  TbClock,
  TbCheck,
  TbSend,
} from 'react-icons/tb'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/SectionTitle'
import { GlassCard } from '@/components/GlassCard'
import { Link } from '@/components/Link'
import { CONTACT } from '@/data/contact'
import { SERVICES } from '@/data/services'
import { sendContactToWhatsApp } from '@/services/contactForm'
import type { ContactFormValues } from '@/types'
import { fadeInUp, slideInLeft, slideInRight } from '@/animations/variants'

const MotionBox = motion.create(Box)
const MotionGlass = motion.create(GlassCard)

const schema = z.object({
  name: z.string().min(2, 'Ingresa tu nombre completo').max(80),
  phone: z
    .string()
    .min(8, 'Ingresa un telefono valido')
    .regex(/^[\d\s+()-]+$/, 'Solo numeros y espacios'),
  zone: z.string().min(2, 'Indica tu barrio o zona'),
  service: z.string().min(1, 'Elegi un servicio'),
  message: z.string().min(5, 'Contanos un poco mas').max(500),
})

const QUICK_INFO = [
  { icon: TbPhone, label: 'Telefono', value: CONTACT.whatsappDisplay, href: `tel:${CONTACT.phoneIntl}` },
  { icon: TbMail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: TbMapPin, label: 'Cobertura', value: CONTACT.serviceArea },
  { icon: TbClock, label: 'Horarios', value: CONTACT.hours },
]

export const Contact = () => {
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', phone: '', zone: '', service: '', message: '' },
  })

  const onSubmit = async (values: ContactFormValues) => {
    await new Promise((r) => setTimeout(r, 400))
    sendContactToWhatsApp(values)
    setSent(true)
    reset()
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <Box
      as="section"
      id="contacto"
      py={{ base: 16, md: 24 }}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="20%"
        right="-10%"
        boxSize={{ base: '300px', md: '500px' }}
        borderRadius="full"
        bg="radial-gradient(circle, rgba(14,165,255,0.15) 0%, transparent 70%)"
        filter="blur(60px)"
        pointerEvents="none"
      />
      <Container position="relative" zIndex={1}>
        <SectionTitle
          eyebrow="Contacto"
          title="Coordina tu visita en minutos"
          subtitle="Respondemos por WhatsApp en minutos. Tambien podes completar el formulario y nos comunicamos a la brevedad."
        />

        <SimpleGrid columns={{ base: 1, lg: 5 }} gap={{ base: 6, lg: 8 }} alignItems="stretch">
          <MotionBox
            gridColumn={{ lg: 'span 2' }}
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <VStack align="stretch" gap={4} h="full">
              {QUICK_INFO.map((item) => {
                const Icon = item.icon
                const content = (
                  <HStack
                    gap={4}
                    p={5}
                    borderRadius="xl"
                    bg="rgba(255,255,255,0.03)"
                    borderWidth="1px"
                    borderColor="border.subtle"
                    backdropFilter="blur(10px)"
                    transition="all 0.3s"
                    _hover={{ borderColor: 'border.accent', bg: 'rgba(14,165,255,0.04)' }}
                    cursor={item.href ? 'pointer' : 'default'}
                  >
                    <Box
                      boxSize={11}
                      borderRadius="lg"
                      bgGradient="linear-gradient(135deg, rgba(14,165,255,0.20) 0%, rgba(2,132,199,0.10) 100%)"
                      borderWidth="1px"
                      borderColor="border.accent"
                      display="grid"
                      placeItems="center"
                      color="brand.300"
                      flexShrink={0}
                    >
                      <Icon size={20} />
                    </Box>
                    <Box>
                      <Text fontSize="2xs" color="fg.subtle" letterSpacing="0.1em" textTransform="uppercase" fontWeight="700">
                        {item.label}
                      </Text>
                      <Text fontWeight="600" color="white" fontSize={{ base: 'sm', md: 'md' }}>
                        {item.value}
                      </Text>
                    </Box>
                  </HStack>
                )
                return item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    display="block"
                    _hover={{ textDecoration: 'none' }}
                  >
                    {content}
                  </Link>
                ) : (
                  <Box key={item.label}>{content}</Box>
                )
              })}

              <Box
                mt={2}
                p={5}
                borderRadius="xl2"
                bgGradient="linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(34,197,94,0.05) 100%)"
                borderWidth="1px"
                borderColor="rgba(34,197,94,0.30)"
              >
                <HStack gap={3} mb={2}>
                  <Box as={FaWhatsapp} color="whatsapp.400" boxSize={5} />
                  <Text fontWeight="700" color="white">
                    Respuesta directa por WhatsApp
                  </Text>
                </HStack>
                <Text fontSize="sm" color="fg.muted">
                  Es la forma mas rapida de coordinar visita. Te respondemos en minutos en horario laboral.
                </Text>
              </Box>
            </VStack>
          </MotionBox>

          <MotionGlass
            gridColumn={{ lg: 'span 3' }}
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            hoverable={false}
            p={{ base: 6, md: 8 }}
            as="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Stack gap={5}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
                <Field.Root invalid={!!errors.name}>
                  <Field.Label color="fg.muted" fontSize="xs" fontWeight="600" letterSpacing="0.08em" textTransform="uppercase">
                    Nombre completo
                  </Field.Label>
                  <Input
                    placeholder="Juan Perez"
                    bg="rgba(255,255,255,0.04)"
                    borderColor="border.default"
                    color="white"
                    _placeholder={{ color: 'fg.subtle' }}
                    _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)' }}
                    {...register('name')}
                  />
                  <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.phone}>
                  <Field.Label color="fg.muted" fontSize="xs" fontWeight="600" letterSpacing="0.08em" textTransform="uppercase">
                    Telefono / WhatsApp
                  </Field.Label>
                  <Input
                    placeholder="11 1234-5678"
                    bg="rgba(255,255,255,0.04)"
                    borderColor="border.default"
                    color="white"
                    _placeholder={{ color: 'fg.subtle' }}
                    _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)' }}
                    {...register('phone')}
                  />
                  <Field.ErrorText>{errors.phone?.message}</Field.ErrorText>
                </Field.Root>
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
                <Field.Root invalid={!!errors.zone}>
                  <Field.Label color="fg.muted" fontSize="xs" fontWeight="600" letterSpacing="0.08em" textTransform="uppercase">
                    Zona / Barrio
                  </Field.Label>
                  <Input
                    placeholder="Palermo, San Isidro, Moron..."
                    bg="rgba(255,255,255,0.04)"
                    borderColor="border.default"
                    color="white"
                    _placeholder={{ color: 'fg.subtle' }}
                    _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)' }}
                    {...register('zone')}
                  />
                  <Field.ErrorText>{errors.zone?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.service}>
                  <Field.Label color="fg.muted" fontSize="xs" fontWeight="600" letterSpacing="0.08em" textTransform="uppercase">
                    Servicio
                  </Field.Label>
                  <NativeSelect.Root>
                    <NativeSelect.Field
                      bg="rgba(255,255,255,0.04)"
                      borderColor="border.default"
                      color="white"
                      _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)' }}
                      {...register('service')}
                    >
                      <option value="" style={{ background: '#0A1A35' }}>
                        Elegi un servicio...
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.shortTitle} style={{ background: '#0A1A35' }}>
                          {s.shortTitle}
                        </option>
                      ))}
                      <option value="Otro" style={{ background: '#0A1A35' }}>
                        Otro / Consulta general
                      </option>
                    </NativeSelect.Field>
                    <NativeSelect.Indicator color="brand.300" />
                  </NativeSelect.Root>
                  <Field.ErrorText>{errors.service?.message}</Field.ErrorText>
                </Field.Root>
              </SimpleGrid>

              <Field.Root invalid={!!errors.message}>
                <Field.Label color="fg.muted" fontSize="xs" fontWeight="600" letterSpacing="0.08em" textTransform="uppercase">
                  Mensaje
                </Field.Label>
                <Textarea
                  placeholder="Contanos brevemente que necesitas (marca, modelo, problema, urgencia)."
                  rows={5}
                  bg="rgba(255,255,255,0.04)"
                  borderColor="border.default"
                  color="white"
                  _placeholder={{ color: 'fg.subtle' }}
                  _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)' }}
                  {...register('message')}
                />
                <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
              </Field.Root>

              <Stack direction={{ base: 'column', md: 'row' }} gap={3} mt={2}>
                <Button
                  type="submit"
                  size="lg"
                  flex={1}
                  bg="brand.500"
                  color="white"
                  fontWeight="700"
                  borderRadius="full"
                  loading={isSubmitting}
                  loadingText="Enviando..."
                  boxShadow="0 10px 24px -10px rgba(5,14,32,0.55)"
                  _hover={{
                    bg: 'brand.400',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 14px 30px -10px rgba(5,14,32,0.65)',
                  }}
                  transition="all 0.25s"
                >
                  <TbSend style={{ marginRight: 8 }} />
                  Enviar y abrir WhatsApp
                </Button>
              </Stack>

              {sent && (
                <MotionBox
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  p={4}
                  borderRadius="lg"
                  bg="rgba(34,197,94,0.12)"
                  borderWidth="1px"
                  borderColor="rgba(34,197,94,0.40)"
                >
                  <HStack gap={2}>
                    <Box
                      boxSize={6}
                      borderRadius="full"
                      bg="whatsapp.500"
                      color="white"
                      display="grid"
                      placeItems="center"
                    >
                      <TbCheck size={14} strokeWidth={3} />
                    </Box>
                    <Text fontSize="sm" color="white" fontWeight="600">
                      Tu consulta esta lista para enviarse por WhatsApp. ¡Gracias!
                    </Text>
                  </HStack>
                </MotionBox>
              )}
            </Stack>
          </MotionGlass>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
