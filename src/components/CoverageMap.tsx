import { Box, HStack, Text } from '@chakra-ui/react'
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import '@/styles/leaflet-overrides.css'
import { MAP_POINTS, MAP_CENTER, ZONE_META } from '@/data/mapPoints'

export const CoverageMap = () => {
  return (
    <Box>
      <Box
        h={{ base: '320px', md: '460px' }}
        borderRadius="xl2"
        overflow="hidden"
        borderWidth="1px"
        borderColor="border.accent"
        boxShadow="premium"
        position="relative"
      >
        <MapContainer
          center={MAP_CENTER}
          zoom={9}
          minZoom={8}
          maxZoom={14}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%', background: '#0A1A35' }}
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          {MAP_POINTS.map((p) => (
            <CircleMarker
              key={p.id}
              center={[p.lat, p.lng]}
              radius={9}
              pathOptions={{
                color: ZONE_META[p.zone].color,
                fillColor: ZONE_META[p.zone].color,
                fillOpacity: 0.65,
                weight: 2,
              }}
            >
              <Tooltip direction="top" offset={[0, -8]} opacity={1} permanent={false}>
                <strong>{p.name}</strong> · {ZONE_META[p.zone].label}
              </Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>
      </Box>

      <HStack gap={4} mt={4} justify="center" flexWrap="wrap">
        {(Object.keys(ZONE_META) as Array<keyof typeof ZONE_META>).map((key) => (
          <HStack key={key} gap={2}>
            <Box boxSize={3} borderRadius="full" bg={ZONE_META[key].color} />
            <Text fontSize="xs" color="fg.muted" fontWeight="600">
              {ZONE_META[key].label}
            </Text>
          </HStack>
        ))}
      </HStack>
    </Box>
  )
}
