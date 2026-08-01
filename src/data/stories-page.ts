export const storiesPageData = {
  hero: {
    eyebrow: "HISTORIAS DE CAMINO",
    title: "Historias que nacen en la carretera.",
    description: "Crónicas, aprendizajes, encuentros y decisiones que forman parte de cada recorrido. Relatos vinculados con la preparación del viaje, los paisajes del Perú y las experiencias que deja cada kilómetro recorrido.",
    ctaPrimary: {
      label: "Leer historias destacadas",
      href: "#historias-destacadas"
    },
    ctaSecondary: {
      label: "Ver rutas relacionadas",
      href: "/rutas/"
    }
  },

  filters: [
    { id: "all", label: "Todas", active: true },
    { id: "chronicle", label: "Crónicas", active: false },
    { id: "logbook", label: "Bitácora", active: false },
    { id: "preparation", label: "Preparación", active: false },
    { id: "learning", label: "Aprendizajes", active: false },
    { id: "behind-the-route", label: "Detrás de cámara", active: false },
    { id: "encounter", label: "Encuentros", active: false },
    { id: "routes-peru", label: "Rutas del Perú", active: false }
  ],

  timeline: [
    {
      step: 1,
      title: "La idea",
      description: "Todo recorrido comienza con una intención, una ruta preliminar y una historia por descubrir.",
      image: "/images/temp/stories/story-timeline-idea.webp"
    },
    {
      step: 2,
      title: "La preparación",
      description: "Revisión de equipo, planificación del trayecto y criterios para documentar la experiencia.",
      image: "/images/temp/stories/story-timeline-preparation.webp"
    },
    {
      step: 3,
      title: "En la ruta",
      description: "Paisajes, decisiones y observaciones que se registran durante el recorrido.",
      image: "/images/temp/stories/story-timeline-route.webp"
    },
    {
      step: 4,
      title: "Lo que queda",
      description: "Imágenes, notas, aprendizajes y preguntas que aparecen después del camino.",
      image: "/images/temp/stories/story-timeline-memory.webp"
    },
    {
      step: 5,
      title: "La reflexión",
      description: "El trayecto se convierte en un relato que permite volver a mirar el territorio.",
      image: "/images/temp/stories/story-timeline-reflection.webp"
    }
  ],

  quoteSection: {
    quote: "Viajar por carretera no es únicamente llegar. También es aprender a observar, escuchar y comprender el territorio.",
    attribution: "Principio editorial de Aldo en Ruta",
    image: "/images/temp/stories/stories-quote.webp",
    imageAlt: "Libreta de viaje, cámara fotográfica y gafas sobre una mesa de madera",
    principles: [
      {
        title: "Experiencias documentadas",
        description: "Captura honesta de las condiciones de manejo y el entorno natural."
      },
      {
        title: "Relatos desde el camino",
        description: "Bitácoras de viaje escritas durante las pausas del recorrido."
      },
      {
        title: "Aprendizajes de ruta",
        description: "Lecciones y decisiones de conducción en geografías complejas."
      },
      {
        title: "Historias que conectan",
        description: "Crónicas sobre las personas, comunidades y parajes del trayecto."
      }
    ]
  },

  closingCallout: {
    title: "¿Quieres vivir la ruta desde dentro?",
    description: "Explora los recorridos, momentos y paisajes que dan contexto a estas historias.",
    cta: {
      label: "Entrar a la ruta",
      href: "/rutas/"
    }
  }
};
