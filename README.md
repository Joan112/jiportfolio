Este es un proyecto [Next.js](https://nextjs.org) creado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Empezando

Primero, ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Puedes comenzar a editar la página modificando `app/page.tsx`. La página se actualiza automáticamente a medida que editas el archivo.

Este proyecto utiliza [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para optimizar y cargar automáticamente [Geist](https://vercel.com/font), una nueva familia de fuentes para Vercel.

## Aprende Más

Para aprender más sobre Next.js, echa un vistazo a los siguientes recursos:

- [Documentación de Next.js](https://nextjs.org/docs) - aprende sobre las características y la API de Next.js.
- [Aprende Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.

## Estructura del Proyecto

```
jiportfolio/
├─ app/
│  ├─ components/
│  │  ├─ About.tsx - Componente que muestra información sobre el desarrollador.
│  │  ├─ AnimatedSectionHeader.tsx - Componente para encabezados de secciones con animación.
│  │  ├─ Contact.tsx - Componente para la sección de contacto.
│  │  ├─ Education.tsx - Componente para la sección de educación.
│  │  ├─ Experience.tsx - Componente para la sección de experiencia profesional.
│  │  ├─ floating-nav.tsx - Componente para la navegación flotante.
│  │  ├─ Header.tsx - Componente para el encabezado del sitio.
│  │  ├─ Hero.tsx - Componente para la sección principal o hero.
│  │  ├─ Services.tsx - Componente para la sección de servicios.
│  │  └─ Skills.tsx - Componente para la sección de habilidades.
│  ├─ favicon.ico - Icono del sitio.
│  ├─ globals.css - Estilos globales del proyecto.
│  ├─ layout.tsx - Layout principal del proyecto.
│  └─ page.tsx - Página principal del proyecto.
├─ components/
│  ├─ ui/
│  │  ├─ button.tsx - Componente de botón reutilizable.
│  │  └─ dropdown-menu.tsx - Componente de menú desplegable.
│  ├─ FloatingNav.tsx - Componente de navegación flotante.
│  ├─ mode-toggle.tsx - Componente para cambiar el modo de tema (claro/oscuro).
│  └─ theme-provider.tsx - Proveedor de tema para manejar el tema del sitio.
├─ lib/
│  └─ utils.ts - Funciones utilitarias.
├─ public/
│  ├─ file-ANWgYBaETcnAhsT4kD4pNR.png - Imagen pública.
│  ├─ file.svg - Archivo SVG.
│  ├─ globe.svg - Archivo SVG.
│  ├─ next.svg - Archivo SVG.
│  ├─ vercel.svg - Archivo SVG.
│  └─ window.svg - Archivo SVG.
├─ utils/
│  ├─ firebaseConfig.ts - Configuración de Firebase.
│  └─ smoothScroll.ts - Función para scroll suave.
├─ .firebaserc - Configuración de Firebase.
├─ .gitignore - Archivos y carpetas a ignorar por Git.
├─ components.json - Configuración de componentes.
├─ Dockerfile - Archivo de configuración para Docker.
├─ eslint.config.mjs - Configuración de ESLint.
├─ firebase.json - Configuración de Firebase.
├─ next-env.d.ts - Tipos de Next.js.
├─ next.config.ts - Configuración de Next.js.
├─ package-lock.json - Archivo de bloqueo de dependencias.
├─ package.json - Archivo de configuración de dependencias.
├─ postcss.config.js - Configuración de PostCSS.
├─ postcss.config.mjs - Configuración de PostCSS en formato MJS.
├─ README.md - Este archivo.
├─ tailwind.config.js - Configuración de Tailwind CSS.
├─ tailwind.config.ts - Configuración de Tailwind CSS en TypeScript.
└─ tsconfig.json - Configuración de TypeScript.
```
