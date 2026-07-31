# Aldo en Ruta 360°

Plataforma web geográfica, audiovisual, editorial e inmersiva para descubrir el Perú por carretera.

## Propósito del Proyecto

El objetivo es crear una experiencia digital inmersiva y de alto impacto estético que conecte trayectos de viaje por carretera, mapas cartográficos interactivos, perfiles de elevación, videoclips sincronizados con track GPS y panoramas de 360 grados.

> [!IMPORTANT]
> **Decisión de Proyecto (Clean Slate):** Esta implementación se construye 100% desde cero en este nuevo repositorio canónico. No se continúa ni refactoriza código de repositorios anteriores para evitar trasladar deuda técnica o prototipos de baja calidad.

## Stack Tecnológico

- **Framework Principal:** [Astro](https://astro.build/) (v7.1.6) con salida estática (SSG) y TypeScript estricto.
- **Estilos:** CSS Vanilla modularizado por responsabilidades (Tokens, Reset, Typography, Utilities) sin Tailwind, Sass ni CSS-in-JS.
- **Cartografía:** MapLibre GL JS encapsulado en componentes independientes (fase futura).
- **Gestión de Datos:** Astro Content Collections validadas con esquemas estrictos de Zod.

## Estructura del Repositorio

El proyecto se organiza físicamente siguiendo una arquitectura orientada a dominios y patrones de diseño reutilizables:

```text
/
├── .github/workflows/          # Integración Continua (validate.yml)
├── public/                     # Recursos estáticos globales
├── src/
│   ├── components/             # Componentes organizados por dominio
│   │   ├── ui/                 # Primitivas visuales genéricas (Button, Badge)
│   │   ├── navigation/         # Elementos estructurales (SiteHeader, SiteFooter)
│   │   ├── patterns/           # Composiciones visuales reutilizables (PageHero, StatsStrip)
│   │   ├── home/               # Componentes exclusivos de la página de Inicio
│   │   ├── explore/            # Filtros territoriales e interactividad de mapa
│   │   ├── routes/             # Tarjetas, catálogos e hitos de rutas
│   │   ├── maps/               # Contenedores y controladores de MapLibre
│   │   ├── route-player/       # Interfaz sincronizada vídeo-mapa-GPX
│   │   ├── moments/            # Galerías de fotos, clips y panoramas
│   │   ├── stories/            # Artículos y editoriales
│   │   ├── immersive/          # Visores 360° y panoramas
│   │   └── author/             # Componentes específicos de biografía/credibilidad
│   ├── content/                # Colecciones de contenido (routes, destinations, moments, stories)
│   ├── data/                   # Configuraciones estáticas y de navegación
│   ├── layouts/                # Plantillas estructurales de composición (Base, Listing, Route, Story, Immersive)
│   ├── lib/                    # Utilidades y lógica de geodatos/sincronización
│   ├── pages/                  # Enrutador estático (páginas delgadas)
│   ├── styles/                 # Estilos divididos y ordenados por capas
│   └── types/                  # Definiciones de contratos TypeScript comunes
├── package.json
└── tsconfig.json
```

## Estado Inicial de las Colecciones

> [!NOTE]
> Las colecciones `destinations`, `moments` y `stories` están configuradas en `src/content.config.ts` pero permanecen vacías a nivel de ficheros en esta fase de bootstrapping.
> Debido a esto, Astro emite de manera temporal avisos del tipo `[glob-loader] No files found matching...` durante la sincronización de contenidos.
>
> Aclaraciones técnicas:
> - **No son errores de compilación:** Estas alertas son puramente informativas del loader y no impiden la compilación.
> - **Cero placeholders falsos:** No se incorporarán archivos placeholders falsos ni archivos vacíos en el repositorio con el único fin de silenciarlos.
> - **Resolución definitiva:** Los avisos desaparecerán en cuanto se incorporen las primeras entradas reales.
> - **Validación de tipos limpia:** Estos warnings informativos del loader no alteran los diagnósticos del comando `astro check`, que debe reportar estrictamente cero errores, warnings e hints.

## Rutas Públicas Aprobadas

- `/` - Inicio (Hero inmersivo y llamada a la acción).
- `/explorar/` - Exploración geográfica y territorial.
- `/rutas/` - Catálogo y estados de rutas.
- `/momentos/` - Galería multimedia (panoramas 360, videoclips, fotos).
- `/historias/` - Bitácora editorial de crónicas y relatos.
- `/sobre-aldo/` - Información sobre conductor, vehículo y credibilidad.

## Comandos Principales

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en segundo plano (para sandbox local)
npx astro dev --background

# Detener o verificar estado del servidor de desarrollo
npx astro dev stop
npx astro dev status

# Verificar tipos de TypeScript y sintaxis de Astro
npm run astro check

# Compilar sitio estático para producción (salida en ./dist/)
npm run build

# Previsualizar el sitio compilado localmente
npm run preview
```

## Convenciones Arquitectónicas

Para mantener la robustez y consistencia de la plataforma (especialmente ante el despliegue en subdirectorios como GitHub Pages), se aplican las siguientes reglas:

1. **Responsabilidad Estructural:** `BaseLayout.astro` centraliza la inicialización del documento HTML y del bloque principal `<main id="main-content">`. Ninguna página debe duplicar esta estructura.
2. **Direccionamiento Dinámico:** Todos los recursos de la carpeta `public/` y enlaces de navegación interna deben procesarse con el helper `publicUrl()` en `src/lib/urls/public-url.ts`.
3. **Cálculo de Rutas Activas:** Las comparaciones de la ruta activa en los menús de navegación deben realizarse usando la utilidad `stripBasePath(Astro.url.pathname)`.
4. **Estados de Datos:** La ausencia de datos geográficos reales se representa exclusivamente mediante `null` (evitando marcadores de posición o coordenadas vacías `[0,0]`). Todos los estados de madurez e integridad de datos se controlan en el esquema Zod bajo la clave `verification`.
