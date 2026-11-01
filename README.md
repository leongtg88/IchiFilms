# IchiFilms

Portafolio minimalista y de carga rápida para un filmmaker integral, especializado en comerciales, fotografía, edición y bienes raíces.

Aplicación [Next.js](https://nextjs.org) (App Router) con [Tailwind CSS v4](https://tailwindcss.com) y [pnpm](https://pnpm.io).

## Requisitos

- Node.js 20 o superior
- pnpm 9 o superior (se puede activar con `corepack enable`)

## Ejecutar en local

1. Instalar dependencias:

   ```bash
   pnpm install
   ```

2. Iniciar el servidor de desarrollo (http://localhost:3005):

   ```bash
   pnpm dev
   ```

3. Compilar para producción y arrancar:

   ```bash
   pnpm build
   pnpm start
   ```

## Scripts

| Comando           | Descripción                                |
| ----------------- | ------------------------------------------ |
| `pnpm dev`        | Servidor de desarrollo con Turbopack       |
| `pnpm build`      | Compilación de producción                  |
| `pnpm start`      | Servir la build de producción              |
| `pnpm lint`       | ESLint (`next/core-web-vitals` + TS)       |
| `pnpm typecheck`  | Comprobación de tipos con TypeScript       |

## Estructura

```
src/
  app/
    layout.tsx      # Layout raíz: fuentes (Inter + JetBrains Mono) y metadata
    page.tsx        # Página principal
    globals.css     # Tailwind v4 + tema y utilidades personalizadas
  components/       # Secciones de la landing (Navbar, Portafolio, Contacto, etc.)
  data.ts           # Datos de servicios, proyectos y testimonios
  types.ts          # Tipos compartidos
```
