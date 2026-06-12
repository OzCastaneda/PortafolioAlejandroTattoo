# Alejandro Tattoo — Portafolio

Sitio web profesional para Alejandro Tattoo, artista tatuador en Bogotá, Colombia.

## Stack

React 19 · TypeScript 5.8 · TanStack Start · TanStack Router · TanStack Query · Tailwind CSS v4 · Vite 7 · Vercel

## Scripts

| Comando          | Descripción                           |
| ---------------- | ------------------------------------- |
| `npm run dev`    | Servidor de desarrollo                |
| `npm run build`  | Build producción (client + prerender) |
| `npm run lint`   | ESLint                                |
| `npm run format` | Prettier                              |

## Arquitectura

```
src/
├── app/              # Router, providers, layouts
├── features/         # Módulos funcionales
│   ├── bonus-wheel/  # Ruleta de descuentos
│   ├── contact/      # Contacto
│   ├── home/         # Landing
│   └── portfolio/    # Galería
├── shared/           # UI, hooks, constantes, layouts
├── routes/           # TanStack Router file-based
├── assets/           # Imágenes
└── styles/           # CSS global
```

Cada feature es autocontenida: `components/`, `constants/`, `hooks/`, `types/`, `utils/`.

## Bonus Wheel

Flujo: primer giro → formulario (nombre + celular) → segundo giro → comparación y reclamo por WhatsApp.

- Premios: 10% (45%), 20% (25%), 30% (15%), 40% (10%), 50% (5%)
- Persistencia en localStorage (4 claves)
- Sin dependencias externas

## Despliegue

Conectar repositorio a [Vercel](https://vercel.com). Build y output automáticos con `vercel.json`.

## Autor

**Oswaldo Castañeda** — [angelusignis@777gmail.com](mailto:angelusignis@777gmail.com)
