export const momentsPageData = {
  hero: {
    eyebrow: "SELECCIÓN EDITORIAL · MOMENTOS",
    title: "Momentos que se quedan contigo.",
    description: "Descubre escenas reales de nuestras rutas: panoramas que impresionan, curvas que retan, pausas que inspiran y paisajes que solo los caminos del Perú pueden regalar.",
    ctaPrimary: {
      label: "Explorar momentos",
      href: "#galeria-momentos"
    },
    ctaSecondary: {
      label: "Ver ruta relacionada",
      href: "/rutas/" // Se enlaza a /rutas/ temporalmente
    }
  },

  // Franja informativa de tipos de contenido
  mediaSummary: [
    {
      id: "360",
      title: "360°",
      subtitle: "Experiencias inmersivas",
      type: "panorama360",
      availability: "projected"
    },
    {
      id: "video",
      title: "Vídeo",
      subtitle: "Historias en movimiento",
      type: "video",
      availability: "projected"
    },
    {
      id: "photo",
      title: "Fotografía",
      subtitle: "Instantáneas reales",
      type: "photo",
      availability: "available"
    },
    {
      id: "andes",
      title: "Andes",
      subtitle: "Territorios únicos",
      type: "editorial",
      availability: "available"
    },
    {
      id: "pilot-route",
      title: "Ruta piloto",
      subtitle: "Tramo destacado",
      type: "editorial",
      availability: "available"
    }
  ],

  // Filtros de la galería (informativos)
  filters: [
    { id: "all", label: "Todos", active: true },
    { id: "360", label: "360°", active: false },
    { id: "video", label: "Vídeo", active: false },
    { id: "photo", label: "Fotografía", active: false },
    { id: "curves", label: "Curvas", active: false },
    { id: "altitude", label: "Altura", active: false },
    { id: "forest", label: "Bosque", active: false },
    { id: "valley", label: "Valle", active: false },
    { id: "sunset", label: "Atardecer", active: false }
  ],

  // Bloque editorial con cita
  quoteSection: {
    quote: "Las carreteras no solo se cruzan, se viven. Y los momentos, se guardan.",
    description: "Cada kilómetro trae algo que vale la pena recordar: un paisaje, una emoción, una pausa o simplemente el silencio de la altura.",
    author: "Aldo Jara",
    image: "/images/temp/moments/quote-viajero.webp",
    imageAlt: "Viajero contemplando la carretera en un atardecer andino",
    stats: [
      {
        id: "photos",
        value: "3", // Solo las 3 fotos de la colección piloto
        label: "Fotografías de prueba",
        description: "Disponibles en el piloto"
      },
      {
        id: "videos-360",
        value: "5", // Vídeos + panoramas proyectados
        label: "Escenas multimedia",
        description: "Proyectadas para el recorrido"
      },
      {
        id: "status",
        value: "Fase 1",
        label: "Colección piloto",
        description: "Material en validación"
      }
    ]
  },

  // CTA Final
  closingCallout: {
    title: "¿Listo para vivir la ruta completa?",
    description: "Explora todos los momentos, historias y experiencias del tramo piloto.",
    cta: {
      label: "Entrar a la ruta",
      href: "/rutas/" // Temporalmente enlazado a la lista general de rutas
    }
  }
};
