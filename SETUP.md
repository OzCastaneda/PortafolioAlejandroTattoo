# Setup — Instalación Rápida

Guía paso a paso para levantar el proyecto en local y desplegarlo.

## 1. Requisitos

| Herramienta | Versión mínima |
| ----------- | -------------- |
| Node.js     | 20.x           |
| npm         | 10.x           |

Verifica tu versión:

```bash
node -v
npm -v
```

Si necesitas instalar Node.js: [nodejs.org](https://nodejs.org/)

## 2. Instalar dependencias

```bash
npm install
```

Esto descarga todos los paquetes definidos en `package.json` y genera `node_modules/`.

## 3. Ejecutar en desarrollo

```bash
npm run dev
```

El servidor arranca en **http://localhost:8080/**. Los cambios se reflejan automáticamente (HMR).

## 4. Build de producción

```bash
npm run build
```

Genera la carpeta `dist/` con los archivos optimizados para producción.

## 5. Preview del build

```bash
npm run preview
```

Sirve el build de producción localmente para verificar antes de desplegar.

---

## Despliegue

### Opción A: Cloudflare Workers

1. Instala Wrangler CLI:

   ```bash
   npm install -g wrangler
   ```

2. Autentica con Cloudflare:

   ```bash
   wrangler login
   ```

3. Edita el nombre del proyecto en `wrangler.jsonc`:

   ```json
   {
     "name": "tu-proyecto-aqui"
   }
   ```

4. Despliega:
   ```bash
   npm run build
   npx wrangler deploy
   ```

### Opción B: Netlify

1. Conecta tu repositorio GitHub a [Netlify](https://app.netlify.com/).

2. La configuración ya está en `netlify.toml`:

   ```toml
   [build]
     command = "npm run build"
     publish = "dist/client"
   ```

3. Cada push a la rama principal dispara un deploy automático.

---

## Configuración rápida

### Cambiar el número de WhatsApp

Edita `src/shared/constants/site.ts`:

```typescript
export const WHATSAPP_PHONE = "573143732759"; // Tu número con código de país
```

### Cambiar información del sitio

Edita `src/shared/constants/site.ts`:

```typescript
export const SITE = {
  name: "Tu Nombre",
  tagline: "Tu descripción",
  description: "Descripción para SEO",
  author: "Tu Nombre",
  twitterHandle: "@tuusuario",
  ogImage: "https://tu-dominio.com/og-image.jpg",
};
```

### Cambiar colores

Edita `src/styles/globals.css` → bloque `:root`:

```css
:root {
  --background: oklch(0.13 0.01 20); /* Fondo principal */
  --primary: oklch(0.55 0.22 25); /* Color de acento */
  --foreground: oklch(0.98 0.005 60); /* Texto principal */
}
```

### Agregar un trabajo al portafolio

Edita `src/features/portfolio/constants/works.ts`:

```typescript
import nuevafoto from "@/assets/nueva-foto.jpeg";

export const TATTOO_WORKS: TattooWork[] = [
  { image: nuevafoto, title: "Nombre del trabajo", tag: "Estilo" },
  // ...
];
```

Coloca la imagen en `src/assets/`.

### Agregar una red social

Edita `src/features/contact/constants/socials.tsx`:

```typescript
export const SOCIAL_LINKS: SocialLink[] = [
  // ... existentes
  {
    name: "YouTube",
    handle: "@tucanal",
    href: "https://youtube.com/@tucanal",
    icon: <YouTubeIcon />,
  },
];
```

Agrega el icono SVG en `src/shared/ui/icons.tsx`.

---

## Solución de problemas

### Los estilos no cargan

Verifica que `src/styles/globals.css` tenga:

```css
@import "tailwindcss" source(none);
@source "../";
```

El `@source` debe ser `"../"` (relativo a `src/styles/`).

### Error `getRouter is not a function`

Asegúrate de que `src/router.tsx` exporte la función como `getRouter`:

```typescript
export const getRouter = () => { ... };
```

TanStack Start requiere este nombre exacto.

### Error de TypeScript en imports `@/`

Verifica que `tsconfig.json` tenga:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Puerto 8080 en uso

El puerto lo define la configuración interna de `@lovable.dev/vite-tanstack-config`. Para cambiarlo, agrega en `vite.config.ts`:

```typescript
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    server: { port: 3000 },
  },
});
```

---

## Comandos de referencia

```bash
npm run dev          # Servidor de desarrollo (localhost:8080)
npm run build        # Build de producción → dist/
npm run build:dev    # Build modo desarrollo
npm run preview      # Preview del build
npm run lint         # Verificar errores de ESLint
npm run format       # Formatear código con Prettier
```
