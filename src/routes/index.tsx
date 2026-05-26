import { lazy, Suspense } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'

const HomePage = lazy(() => import('@/pages/HomePage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

const Loader = () => (
  <Box minH="100dvh" bg="bg.base" display="grid" placeItems="center">
    <Spinner size="lg" color="brand.400" borderWidth="3px" />
  </Box>
)

export const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Suspense>
)
