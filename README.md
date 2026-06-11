# Luis Gonzalez — Servicio Técnico

Sitio web profesional para captación de clientes de servicio técnico:

- Instalación, reparación y mantenimiento de aires acondicionados
- Carga de gas refrigerante
- Reparación de lavarropas, microondas y hornos eléctricos

## Stack

- React 18 + Vite + TypeScript
- Chakra UI v3 (`createSystem` + `defineConfig` + `defaultConfig`)
- Framer Motion
- React Router
- React Hook Form + Zod
- React Icons

## Scripts

```bash
yarn install
yarn dev      # desarrollo local
yarn build    # build de producción
yarn preview  # preview del build
yarn lint     # type-check con tsc
```

## Estructura

```
src/
 ├── animations   # variants de framer-motion
 ├── components   # UI reutilizable
 ├── data         # contenido tipado (servicios, FAQ, etc.)
 ├── hooks        # hooks reutilizables
 ├── layouts      # layouts de página
 ├── pages        # páginas
 ├── routes       # router config
 ├── sections     # secciones de la landing
 ├── services     # integraciones (envío de form, etc.)
 ├── theme        # tema Chakra v3
 ├── types        # tipos compartidos
 └── utils        # helpers (drive, whatsapp)
```

## Deploy

Listo para Vercel. Incluye `vercel.json`, `robots.txt` y `sitemap.xml`.
