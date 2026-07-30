export const siteConfig = {
  name: "Aldo en Ruta",
  tagline: "Viajes por carretera, mapas y relatos 360°",
  description: "Explora el Perú por carretera de forma interactiva. Rutas con mapas dinámicos, perfiles de altitud, sincronización de vídeo y escenas inmersivas en 360°.",
  defaultLanguage: "es",
  locale: "es-PE",
  
  // SEO Config
  seo: {
    titleTemplate: "%s | Aldo en Ruta",
    defaultTitle: "Aldo en Ruta | Viajes por carretera, mapas y relatos 360°",
    defaultDescription: "Explora el Perú por carretera de forma interactiva. Rutas con mapas dinámicos, perfiles de altitud, sincronización de vídeo y escenas inmersivas en 360°.",
    defaultOgImage: "/assets/og-image-default.jpg",
    twitterCard: "summary_large_image",
  },

  // Rutas públicas aprobadas y centralizadas
  routes: {
    home: "/",
    explore: "/explorar",
    routes: "/rutas",
    moments: "/momentos",
    stories: "/historias",
    about: "/sobre-aldo",
  }
};
