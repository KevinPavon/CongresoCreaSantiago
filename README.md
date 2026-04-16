# Congreso CREA Chaco Santiagueño — Landing

Landing informativa para el Congreso CREA Chaco Santiagueño.

## Stack
React 19 · Vite · TailwindCSS · Framer Motion · react-icons

## Desarrollo
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Estructura
- `src/data/siteData.js` — contenido editable (oradores, programa, sede, sponsors, contacto).
- `src/components/` — componentes de cada sección.
- Paleta en `tailwind.config.js` (`terracotta`, `forest`, `sand`, `cream`).

## Deploy
Pensado para Vercel. `npm run build` genera `dist/`.
