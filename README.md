# Alejandro Tatoo — Portafolio

Sitio web profesional para Alejandro Tatoo, artista tatuador con más de 9 años de experiencia en Bogotá, Colombia.

## Tecnologías

- **React 19** + **TypeScript** estricto
- **TanStack Router** — enrutamiento file-based con SSR
- **TanStack Start** — framework fullstack con renderizado servidor
- **TanStack Query** — gestión de estado asíncrono
- **Tailwind CSS v4** — diseño con tokens OKLCH
- **Vite 7** — bundler y dev server
- **Cloudflare Workers** — despliegue edge

## Arquitectura

Proyecto organizado con **Feature-Based Architecture** + **Layered Architecture**:

```
src/
├── app/                    # Infraestructura (router, providers, config SSR)
├── features/               # Dominio por feature
│   ├── home/               # Landing: header, hero, about
│   ├── portfolio/          # Galería: estilos, trabajos
│   └── contact/            # Contacto: redes sociales, footer
├── shared/                 # Código transversal reutilizable
│   ├── ui/                 # Iconos SVG genéricos
│   └── constants/          # Configuración global del sitio
├── services/               # APIs externas (placeholder)
├── store/                  # State management (placeholder)
├── styles/                 # CSS global (Tailwind + tokens)
├── assets/                 # Imágenes
└── routes/                 # TanStack Router (file-based)
```

### Principios aplicados

- **Separation of Concerns** — UI, datos y lógica en capas separadas
- **DRY** — Constantes centralizadas, iconos reutilizables
- **SOLID** — Cada feature es independiente y autocontenida
- **Tipado fuerte** — Interfaces para todos los datos (TattooWork, TattooStyle, SocialLink)

## Desarrollo

### Requisitos

- Node.js 20+
- npm, bun o pnpm

### Instalación

```bash
npm install
```

### Comandos

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run build:dev` | Build modo desarrollo |
| `npm run preview` | Preview del build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

### Estructura de una feature

Cada feature en `src/features/` sigue esta convención:

```
features/<nombre>/
├── components/     # Componentes React específicos de la feature
├── constants/      # Datos estáticos y configuraciones
├── types/          # Interfaces y tipos TypeScript
├── hooks/          # Hooks personalizados (si aplica)
└── pages/          # Componentes de página (si aplica)
```

### Agregar una nueva feature

1. Crear carpeta en `src/features/<nombre>/`
2. Crear componentes en `components/` con barrel export (`index.ts`)
3. Extraer datos a `constants/` y tipos a `types/`
4. Importar desde `@/features/<nombre>/components` en `routes/index.tsx`

### Agregar constantes globales

Editar `src/shared/constants/site.ts` para:
- Nombre del sitio, descripción, SEO
- URL y mensaje de WhatsApp
- Imagen OG para redes sociales

## Estilo

### Tailwind CSS v4

Diseño dark-theme con tokens OKLCH definidos en `src/styles/globals.css`:

| Token | Uso |
|---|---|
| `--background` | Fondo principal |
| `--foreground` | Texto principal |
| `--primary` | Color de acento (rojo sangre) |
| `--card` | Fondo de tarjetas |
| `--muted-foreground` | Texto secundario |
| `--ink` | Negro profundo (fondos de imagen) |

### Tipografía

- **Bebas Neue** — Títulos y display headings
- **Inter** — Cuerpo de texto

## SEO y Meta

Configurado en `src/routes/__root.tsx` usando `SITE` constants:

- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Meta description y author
- Imagen OG para compartir

## Despliegue

### Cloudflare Workers

```bash
npm run build
npx wrangler deploy
```

### Netlify

El proyecto incluye configuración en `netlify.toml`. Conectar el repositorio a Netlify para despliegue automático.

## Estructura de imports

Alias `@/` configurado en `tsconfig.json` → `src/`:

```typescript
import { WhatsAppIcon } from "@/shared/ui";
import { SITE } from "@/shared/constants";
import { Header } from "@/features/home/components";
import { TATTOO_WORKS } from "@/features/portfolio/constants";
```

## Notas

- `routeTree.gen.ts` es auto-generado por TanStack Router — no editar manualmente
- Los iconos SVG están en `shared/ui/icons.tsx` — agregar nuevos ahí
- Para cambiar el número de WhatsApp, editar `WHATSAPP_PHONE` en `shared/constants/site.ts`
