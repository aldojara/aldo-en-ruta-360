# Guía de Trabajo para Agentes de IA (AGENTS.md)

Este repositorio sigue reglas estrictas para el desarrollo del proyecto **Aldo en Ruta 360°**. Lee y comprende estas directrices antes de editar o crear cualquier archivo.

---

## 1. Reglas Generales de Ejecución

- **Repositorio Único:** Trabaja **exclusivamente** dentro de este nuevo repositorio canónico. No importes ni copies código del repositorio de prototipos antiguos.
- **Flujo de Trabajo:** Trabaja una sola tarea a la vez en una rama o worktree aislado.
- **Prohibición de Commits y Push Automáticos:** No realices commits, pushes ni despliegues a menos que sea explícitamente solicitado y autorizado por el usuario.
- **Calidad del Repositorio:** Mantén limpio el entorno. No dejes archivos de depuración o temporales.

---

## 2. Desarrollo Frontend y Estilos

- **CSS Puro (Vanilla):** Está estrictamente **prohibido** introducir Tailwind CSS, Sass, CSS-in-JS u otros frameworks de preprocesado, a menos que el usuario lo solicite con confirmación de versión.
- **Componentes Locales:** Define los estilos exclusivos de un componente dentro de su propio bloque `<style>` en el archivo `.astro`.
- **Organización de Estilos:** La carpeta `src/styles/` está estructurada en 6 archivos modulares. Si agregas tokens globales o estilos generales, hazlo en el sub-archivo correspondiente:
  - `tokens.css` (variables CSS `:root`)
  - `reset.css` (estilos de reset)
  - `typography.css` (fuentes, escalas tipográficas y etiquetas de cabecera)
  - `utilities.css` (clases de utilidad ligeras)
  - `maplibre.css` (estilos para mapas de MapLibre)
  - `global.css` (punto de entrada principal)

---

## 3. Arquitectura y Estructura de Páginas

- **Páginas Delgadas (Thin Pages):** Las páginas en `src/pages/` deben ser sencillas y ligeras. Su responsabilidad se limita a importar `BaseLayout`, configurar su SEO mediante props y componer la página usando componentes del sistema.
- **Reutilización Obligatoria:** Reutiliza los componentes en `src/components/patterns/` (como `PageHero`, `StatsStrip`, `EntityCard`) en lugar de duplicar código en múltiples archivos.
- **Cero Datos Hardcodeados:** No definas información geográfica, nombres de tramos o métricas reales de rutas dentro del código HTML de las páginas o componentes visuales. Toda la información debe obtenerse dinámicamente de las **Content Collections** de Astro o de los helpers en `src/lib/content/`.

---

## 4. Contratos de Datos y Geografía

- **Datos no confirmados:** No consolides nombres de regiones (como "Ayacucho") u otras localizaciones a menos que la información provenga directamente de una colección de datos confirmada. Para datos de prueba, deja el campo como `null` o marca `verification.locationStatus = "pending"`.
- **Mapas y Multimedia:** No cargues MapLibre GL JS ni visores 360° globalmente en `BaseLayout.astro`. Cárgalos de forma perezosa (lazy-loading) únicamente en los componentes de dominio específicos (`maps/`, `immersive/`) y solo bajo demanda.

---

---

## 5. Control de Calidad y Servidor

- **Comando de Desarrollo:** Para levantar el servidor local en modo background, ejecuta:
  ```bash
  ASTRO_TELEMETRY_DISABLED=1 npx astro dev --background
  ```
  Gestiónalo con `astro dev stop`, `astro dev status` and `astro dev logs`.
- **Validaciones:** Antes de dar por finalizada cualquier tarea, debes ejecutar obligatoriamente:
  ```bash
  # Verificar sintaxis y tipado
  npx astro check

  # Verificar compilación estática
  npm run build

  # Previsualizar el sitio compilado
  npm run preview
  ```
  Entrega siempre el resultado literal de estas comprobaciones y una URL localhost activa para su revisión.

---

## 6. Consistencia y Directrices Arquitectónicas

- **Propietario Único de Estructura:** `BaseLayout.astro` es el único responsable de renderizar `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`, `SiteHeader`, un único `<main id="main-content">` y `SiteFooter`. Las páginas individuales (como `index.astro`) deben limitarse a componer sus secciones internas dentro de `BaseLayout` sin duplicar estos elementos.
- **Header Superpuesto (Overlay):** Si una página requiere que el header se dibuje sobre el hero (sin margen superior), debe declarar `overlayHeader={true}` como prop de `BaseLayout`. No realices validaciones basadas en el pathname en el layout.
- **Resolución de URLs y Assets:** Todas las imágenes en `public/`, enlaces de navegación, meta tags de Open Graph y recursos deben resolverse mediante el helper `publicUrl()` en `src/lib/urls/public-url.ts` para soportar despliegues bajo subdirectorios de forma nativa.
- **Normalización de Pathnames:** Para verificar qué enlace del menú está activo, utiliza `stripBasePath(Astro.url.pathname)` en `src/lib/urls/strip-base-path.ts` para retirar de forma segura el prefijo del subdirectorio y evitar fallos por base path o barras redundantes.
- **Nulabilidad en Cartografía:** Cuando una ruta no posea datos geográficos o de mapa confirmados, los campos de `map` (`routeGeojson`, `center`, `zoom`, `bounds`) deben declararse como `null` en lugar de usar valores ficticios como `[0,0]`, zoom `1` o placeholders GeoJSON ficticios.
- **Exposición de Borradores:** Para consultar la ruta destacada, utiliza la firma `getFeaturedRoute({ includeDrafts: boolean })`. La visualización de borradores provisionales de desarrollo debe activarse de forma centralizada usando la configuración `siteConfig.content.showPrototypeDraftRoute` en `src/data/site.ts`.
