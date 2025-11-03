# Sample Project on NextJS v 12.3.4

## Stack

| Capa             | Tecnología                  | Versión         | Estado     |
| ---------------- | --------------------------- | --------------- | ---------- |
| **Lenguaje**     | TypeScript                  | 4.9.5           | ✅ LTS     |
| **Framework**    | Next.js                     | 12.3.4          | ✅ LTS     |
| **Librería UI**  | React / ReactDOM            | 17.0.2          | ✅ Estable |
| **Bundler**      | Webpack                     | 5.88.2          | ✅ LTS     |
| **Linter**       | ESLint + eslint-config-next | 8.57.0 / 12.3.4 | ✅         |
| **HTTP Client**  | Axios                       | 1.3.0           | ✅         |
| **Utilidades**   | Lodash.merge                | 4.6.2           | ✅         |
| **Runtime Node** | Node.js                     | >= 18           | ✅ LTS     |

---

## ⚙️ Configuración principal

- **Router:** Pages Router (sin App Router)
- **Lenguaje:** TypeScript con JSX (`.tsx`)
- **Renderizado:** Server Side Rendering (SSR) + Static Export
- **Modo de build:** Webpack 5 + UMD (para compatibilidad)
- **Compatibilidad:** SPA padre en Next.js 10 (React 16/17)
- **Estilos:** CSS global (`/styles/globals.css`)
- **Salida UMD:** `/build/widgets/`
- **Punto de montaje:** `window.widgets.MySpa.default.render(props)`

## 🧩 Arquitectura de Microfrontends

Este MF sigue la arquitectura documentada en _Arquitectura Front Nave_ y _Detalle técnico de Arquitectura Front End_:

| Elemento                | Descripción                                  |
| ----------------------- | -------------------------------------------- |
| **Formato de entrega:** | UMD (Universal Module Definition)            |
| **Registro global:**    | `window.widgets.MySpa.default.render(props)` |
| **Cargador (host):**    | `Config.loadScript(widgetUrl)`               |
| **Comunicación:**       | `props` + `CustomEvent`                      |
| **Despliegue:**         | Archivos estáticos en **CDN corporativo**    |
| **Seguridad:**          | Acceso a través de **WAF corporativo**       |
| **Runtime esperado:**   | Browser / SPA Padre (Next 10)                |

## 📂 Estructura del proyecto

mf-web/
├── pages/
│ ├── \_app.tsx
│ ├── index.tsx
│ └── api/health.ts
├── src/
│ ├── client/mount.tsx
│ ├── components/HomeContent.tsx
│ └── widgets/registerWidget.js
├── public/
│ └── favicon.ico
├── styles/
│ └── globals.css
├── build/
│ └── widgets/
├── next.config.js
├── tsconfig.json
├── package.json
└── .eslintrc.json

## 🧠 Comandos principales

| Comando                 | Descripción                                              |
| ----------------------- | -------------------------------------------------------- |
| `npm run dev`           | Ejecuta el proyecto en modo **desarrollo** (standalone). |
| `npm run build`         | Compila el proyecto para **producción SSR**.             |
| `npm run start`         | Levanta la versión compilada (modo producción).          |
| `npm run build:widget`  | Genera el **bundle UMD** para despliegue en CDN.         |
| `npm run export:widget` | Exporta los archivos a `/build/widgets`.                 |
| `npm run clean`         | Limpia dependencias y caché.                             |

## 🌐 Flujo de despliegue

1. **Build de widget:**
   ```bash
   npm run build:widget
   ```
2. Subir al CDN:

```bash
https://cdn.miempresa.com/widgets/MySpa/1.0.0/
```

3. Cargar desde la SPA Padre:

```bash
Config.loadScript('https://cdn.miempresa.com/widgets/MySpa/1.0.0/index.js')
  .then(() => window.widgets.MySpa.default.render({ user: 'Carlos', mode: 'widget' }))
```

Configuración más compatible con el ecosistema de MF en NextJS 10

## Iniciar el proyecto

Primero, correr el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
```

Abrir en tu browser para ver los resultados [http://localhost:3000](http://localhost:3000)

Puedes empezar a editar tu proyecto desde el archivo `pages/index.js`.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## ✅ Beneficios:

- Compatibilidad casi total con Next 10 (mismo router y estructura).

- Soporte a Webpack 5 y más herramientas modernas.

- Mantienes npm moderno y TypeScript actualizado.

## ⚠️ Contras:

- Pierdes App Router (de Next 13.4+).

- Algunas nuevas funciones del ecosistema (como Server Actions) no estarán disponibles.

- Ideal si planeas migrar gradualmente a Next 15 más adelante.

## WARNINGS

- Next.js 12 fue lanzado en 26 Oct 2021. [nextjs.org](https://nextjs.org/support-policy)

- La política de soporte de Next.js indica que las versiones mayores pasan por fases de LTS/maintenance; versiones muy antiguas (como la 12) pueden no recibir parches regulares hoy día — tenlo en cuenta por seguridad.

- Además, han existido vulnerabilidades afectando versiones 12.x en años recientes, por lo que recomiendo aislar el MF (o exponerlo como remote) y planear actualización a medio plazo.

- Lista de Vulnerabilidades:

```bash
next  0.9.9 - 14.2.31
Severity: critical
Next.js missing cache-control header may lead to CDN caching empty reply - https://github.com/advisories/GHSA-c59h-r6p8-q9wc
Denial of Service condition in Next.js image optimization - https://github.com/advisories/GHSA-g77x-44xx-532m
Next.js Affected by Cache Key Confusion for Image Optimization API Routes - https://github.com/advisories/GHSA-g5qg-72qw-gw5v
Next.js authorization bypass vulnerability - https://github.com/advisories/GHSA-7gfc-8cq8-jh5f
Next.js Improper Middleware Redirect Handling Leads to SSRF - https://github.com/advisories/GHSA-4342-x723-ch2f
Next.js Content Injection Vulnerability for Image Optimization - https://github.com/advisories/GHSA-xv57-4mr9-wg8v
Next.js Race Condition to Cache Poisoning - https://github.com/advisories/GHSA-qpjv-v59x-3qc4
Authorization Bypass in Next.js Middleware - https://github.com/advisories/GHSA-f82v-jwr5-mffw
Depends on vulnerable versions of postcss
fix available via `npm audit fix --force`
Will install next@16.0.1, which is a breaking change


postcss  <8.4.31
Severity: moderate
PostCSS line return parsing error - https://github.com/advisories/GHSA-7fh5-64p2-3v2j
fix available via `npm audit fix --force`
Will install next@16.0.1, which is a breaking change
node_modules/postcss
```
