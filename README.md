<<<<<<< HEAD
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
=======
<div align="center">

# 🎨 Alejandro Tattoo Portfolio

### Portafolio profesional — Tatuador artístico con +9 años de experiencia

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org)
[![TanStack Start](https://img.shields.io/badge/TanStack_Start-1.167-FF4154?logo=react&logoColor=white&style=for-the-badge)](https://tanstack.com/start)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite_7-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev)
[![Cloudflare](https://img.shields.io/badge/Cloudflare_Workers-F38020?logo=cloudflare&logoColor=white&style=for-the-badge)](https://workers.cloudflare.com)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white&style=for-the-badge)](https://netlify.com)
[![ESLint](https://img.shields.io/badge/ESLint-9.32-4B32C3?logo=eslint&logoColor=white&style=for-the-badge)](https://eslint.org)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=white&style=for-the-badge)](https://prettier.io)

</div>

---

## 📋 Descripción

Portafolio profesional desarrollado para **Alejandro Tattoo**, artista tatuador bogotano con más de **9 años de experiencia** especializado en realismo, black & grey y diseños personalizados.

Construido con **React 19**, **TanStack Start** y una arquitectura **Feature-Based**, optimizado para rendimiento, SEO, accesibilidad y conversión de leads.

---

## 🚀 Características

| Funcionalidad | Descripción |
|---|---|
| ⚛️ **React 19 + TypeScript** | UI reactiva con tipado estricto |
| 🧩 **Feature-Based Architecture** | Módulos autónomos y escalables |
| ⚡ **Lazy Loading + Code Splitting** | 5 chunks independientes por ruta |
| 🎨 **Tailwind CSS v4** | Sistema de diseño con Design Tokens OKLCH |
| 📱 **Responsive Design** | Mobile, Tablet, Desktop, Ultra Wide |
| 🎰 **Bonus Wheel** | Ruleta de descuentos con 2 oportunidades |
| 📝 **Lead Capture** | Formulario nombre + celular con validación |
| 💬 **WhatsApp Integration** | Mensaje personalizado con datos del lead |
| 💾 **LocalStorage Persistence** | Estado persistente en cada paso del flujo |
| 🌐 **SEO Optimizado** | Open Graph, Twitter Cards, Meta Description |
| ♿ **Accesibilidad** | ARIA labels, focus visible, contraste AA |
| 🔒 **TypeScript Strict** | `strict: true`, `noUncheckedSideEffectImports` |
| 🧹 **Linting + Formatting** | ESLint 9 + Prettier con reglas consistentes |

---

## 🛠 Stack Tecnológico

| Tecnología | Uso |
|---|---|
| [React 19](https://react.dev) | Librería de UI |
| [TypeScript 5.8](https://www.typescriptlang.org) | Tipado estático |
| [TanStack Start](https://tanstack.com/start) | Framework fullstack (SSR + CSR) |
| [TanStack Router](https://tanstack.com/router) | Routing file-based con lazy loading |
| [TanStack Query](https://tanstack.com/query) | Estado asíncrono y caching |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilos utilitarios + Vite plugin |
| [Vite 7](https://vitejs.dev) | Bundler y dev server |
| [Cloudflare Workers](https://workers.cloudflare.com) | Deploy edge |
| [Netlify](https://netlify.com) | Hosting alternativo |
| [ESLint 9](https://eslint.org) | Linter con flat config |
| [Prettier 3](https://prettier.io) | Formateo automático |

---

## 🏗 Arquitectura

El proyecto combina **Feature-Based Architecture** + **Layered Architecture** + **Separation of Concerns**.

```
src/
│
├── app/                    # Capa de aplicación
│   ├── layouts/            # Layouts globales (RootLayout)
│   ├── providers/          # Providers (QueryClient, Router)
│   └── router/             # Configuración del router
│
├── features/               # Módulos funcionales autónomos
│   ├── bonus-wheel/        # Ruleta de descuentos
│   ├── contact/            # Página de contacto
│   ├── home/               # Página de inicio / Hero
│   └── portfolio/          # Portafolio y galería
│
├── shared/                 # Capa compartida
│   ├── components/         # Componentes reutilizables
│   ├── constants/          # Constantes (SITE, WHATSAPP, NAV)
│   ├── hooks/              # Hooks personalizados
│   ├── layouts/            # Header, Footer
│   ├── types/              # Tipos globales
│   ├── ui/                 # Iconos SVG
│   └── utils/              # Utilidades generales
│
├── routes/                 # TanStack Router file-based
│   ├── __root.tsx          # Root layout + SEO
│   ├── index.tsx           # Ruta principal (/)
│   ├── about.tsx           # Sobre mí
│   ├── styles.tsx          # Estilos
│   ├── works.tsx           # Trabajos
│   └── contact.tsx         # Contacto
│
├── assets/                 # Imágenes estáticas
│   └── ...
│
└── styles/                 # Estilos globales
    └── globals.css         # Design Tokens, animaciones
>>>>>>> 4fc1b16 (feat: refactor architecture, add discount wheel, improve responsive layout and update documentation)
```

### Principios aplicados

<<<<<<< HEAD
- **Separation of Concerns** — UI, datos y lógica en capas separadas
- **DRY** — Constantes centralizadas, iconos reutilizables
- **SOLID** — Cada feature es independiente y autocontenida
- **Tipado fuerte** — Interfaces para todos los datos (TattooWork, TattooStyle, SocialLink)

## Desarrollo
=======
- **Bajo acoplamiento** — cada feature es independiente
- **Alta cohesión** — componentes, tipos y lógica agrupados
- **Escalabilidad** — nueva feature = nuevo directorio
- **Mantenibilidad** — barrel exports (`index.ts`) en cada módulo
- **Reutilización** — carpeta `shared/` con UI, hooks y constantes

---

## 📂 Organización por Features

Cada feature contiene todo lo que necesita para funcionar:

```
features/bonus-wheel/
├── components/
│   ├── BonusWheel.tsx         # Orquestador del flujo
│   ├── BonusResult.tsx        # Resultado final + comparación
│   ├── LeadForm.tsx           # Captura de leads
│   ├── PrizeCard.tsx          # Card con confeti + premio
│   ├── ProgressIndicator.tsx  # Indicador de progreso (4 pasos)
│   ├── SecondChanceCard.tsx   # Oferta de segunda oportunidad
│   ├── SpinButton.tsx         # Botón de giro animado
│   └── Wheel.tsx              # SVG de la ruleta
├── constants/
│   ├── index.ts               # Barrel export
│   └── prizes.ts              # Premios, colores, storage keys
├── hooks/
│   ├── index.ts
│   └── useBonusWheel.ts       # State machine (6 estados)
├── types/
│   ├── bonus.types.ts         # Interfaces del dominio
│   └── index.ts
├── utils/
│   ├── generateCoupon.ts      # Código TATTOO-XXXXXX
│   ├── prizeEvaluator.ts      # Comparación de premios
│   ├── storage.ts             # localStorage tipado
│   └── wheelLogic.ts          # Lógica de giro ponderado
└── index.ts                   # Barrel público
```

---

## 🎰 Bonus Wheel (Ruleta de Descuentos)

Sistema interactivo de captura de leads mediante una ruleta de descuentos con dos oportunidades.

### Flujo completo

```
[Paso 1] Primer giro ──> [Paso 2] Formulario ──> [Paso 3] Segundo giro ──> [Paso 4] Resultado final
```

### Premios disponibles

| Descuento | Probabilidad |
|---|---|
| 10% | 45% |
| 20% | 25% |
| 30% | 15% |
| 40% | 10% |
| 50% | 5% |

### Funcionamiento

1. **Primer giro** — el usuario gira sin registrarse y obtiene un descuento
2. **Segunda oportunidad** — se ofrece un giro adicional a cambio de nombre y celular
3. **Segundo giro** — si el nuevo descuento es mejor, se conserva; si no, se mantiene el primero
4. **Resultado final** — se muestra la comparación y el botón para reclamar por WhatsApp

### Validaciones del formulario

| Campo | Regla |
|---|---|
| Nombre | Obligatorio, mínimo 3 caracteres |
| Celular | Obligatorio, solo dígitos, 10-15 caracteres |

### Mensaje de WhatsApp generado

```
Hola.
Participé en la ruleta de descuentos.

Nombre: {nombre}
Celular: {celular}

Primer descuento: {primer}%
Segundo descuento: {segundo}%

Descuento final: {final}%
Código: {código}

Quiero reclamar mi bono para mi próximo tatuaje.
```

### Persistencia

| Clave localStorage | Contenido |
|---|---|
| `bonus_first_spin` | Resultado del primer giro |
| `bonus_second_spin` | Resultado del segundo giro |
| `bonus_customer` | Datos del lead (nombre, celular) |
| `bonus_final_result` | Resultado final consolidado |

### State machine

```
idle → first_result → second_ready → second_result → final
```

Cada transición persiste en localStorage y es recuperable al recargar la página.

---

## 📱 Responsive Design

| Breakpoint | Target | Layout |
|---|---|---|
| < 640px | Mobile | 1 columna, céntrico, espaciado optimizado |
| 640px — 1023px | Tablet | 2 columnas |
| 1024px — 1535px | Desktop | 4 columnas (footer), grid completo |
| ≥ 1536px | Ultra Wide | Máximo `max-w-7xl` centrado |

### Mejoras aplicadas

- Tipografía fluida (`text-sm sm:text-base lg:text-lg`)
- Padding responsive (`px-4 sm:px-6 lg:px-8`)
- Scroll suave y `overflow-x-hidden`
- `prefers-reduced-motion` respetado
- Hover solo en dispositivos con pointer fino
- Captions visibles en touch (Works)

---

## 🔍 SEO

Configuración global en `src/routes/__root.tsx`:

- **Meta Description** por ruta
- **Open Graph** (og:title, og:description, og:image, og:url)
- **Twitter Cards** (summary_large_image)
- **Canonical URL**
- **Social Preview Image** (1170x600px)
- Etiquetas semánticas (`<nav>`, `<section>`, `<footer>`, `<article>`)
- Encabezados con jerarquía correcta (h1 → h2 → h3)

---

## 🚀 Instalación
>>>>>>> 4fc1b16 (feat: refactor architecture, add discount wheel, improve responsive layout and update documentation)

### Requisitos

- Node.js 20+
<<<<<<< HEAD
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
=======
- npm / pnpm / bun / yarn

### Clonar e instalar

```bash
git clone <repository-url>
cd PortafolioAlejandroTattoo-main
npm install
```

---

## 💻 Desarrollo

```bash
npm run dev
```

Servidor local: [http://localhost:3000](http://localhost:3000)

---

## 📜 Scripts Disponibles

| Script | Descripción |
|---|---|
| `npm run dev` | Inicia entorno de desarrollo |
| `npm run build` | Build de producción (client + SSR) |
| `npm run build:dev` | Build en modo development |
| `npm run preview` | Vista previa del build |
| `npm run lint` | ESLint con flat config |
| `npm run format` | Prettier — formatea todo el proyecto |

---

## ☁️ Despliegue

### Cloudflare Workers (producción)
>>>>>>> 4fc1b16 (feat: refactor architecture, add discount wheel, improve responsive layout and update documentation)

```bash
npm run build
npx wrangler deploy
```

<<<<<<< HEAD
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
=======
### Netlify (alternativo)

El proyecto incluye `netlify.toml`. Conecta el repositorio desde el panel de Netlify para despliegue automático.

---

## ✅ Buenas Prácticas Implementadas

### Código

- TypeScript Strict Mode (`strict: true`)
- Feature-Based Architecture
- Barrel Exports (`index.ts`) en cada módulo
- Lazy Loading + Code Splitting (5 chunks)
- Alias `@/` para imports cross-module; imports relativos dentro de cada feature
- ESLint 9 + Prettier con reglas consistentes
- `allowEmptyCatch` para patrones legítimos (JSON.parse, localStorage)

### UX/UI

- Diseño responsive (mobile-first)
- Animaciones con `prefers-reduced-motion`
- Focus visible en todos los elementos interactivos
- ARIA labels en navegación, iconos y formularios
- Contraste de color AA
- Indicador de progreso visual (4 pasos)

### Datos

- Persistencia con localStorage
- Sin dependencias externas para ruleta ni confeti
- Generación de cupones offline

---

## 🗺 Roadmap Futuro

- [ ] Panel admin para gestionar premios y ver leads capturados
- [ ] Dashboard de analytics (giros, conversiones, descuentos)
- [ ] Export CSV de leads
- [ ] Internacionalización (EN / ES)
- [ ] Modo oscuro (ya hay base con Design Tokens OKLCH)
- [ ] Tests unitarios (Vitest + Testing Library)
- [ ] CI/CD con GitHub Actions
- [ ] PWA — service worker para offline
- [ ] Galería con lightbox y lazy loading nativo

---

## 👨‍💻 Autor

<div align="center">

### Oswaldo Castañeda

**Frontend & Full Stack Developer**

[![Email](https://img.shields.io/badge/angelusignis@777gmail.com-D14836?logo=gmail&logoColor=white&style=for-the-badge)](mailto:angelusignis@777gmail.com)
[![GitHub](https://img.shields.io/badge/OzCastaneda-181717?logo=github&logoColor=white&style=for-the-badge)](https://github.com/OzCastaneda)

</div>

---

<div align="center">

**Alejandro Tattoo Portfolio** — Built with React 19, TypeScript, TanStack Start & modern web architecture.

</div>
>>>>>>> 4fc1b16 (feat: refactor architecture, add discount wheel, improve responsive layout and update documentation)
