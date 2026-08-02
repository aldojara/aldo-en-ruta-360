export type VerificationStatus = 'pending' | 'verified' | 'conceptual';

export interface AboutMetric {
  value: string;
  label: string;
  description: string;
  statusLabel: string;
  verificationStatus: VerificationStatus;
}

export interface AboutValue {
  title: string;
  description: string;
  iconName: string; // Nombre del icono para resolverlo en el componente
}

export interface AboutPlace {
  title: string;
  image: string;
  alt: string;
  status: 'provisional' | 'verified';
}

export interface AboutPageData {
  showPrototypeAboutContent: boolean;
  seo: {
    title: string;
    description: string;
    canonical: string;
    noindex: boolean;
    ogImage: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    backgroundImage: string;
    portraitImage: string;
    portraitAlt: string;
    quote: {
      text: string;
      author: string;
      label: string;
      verificationStatus: VerificationStatus;
    };
    socials: {
      platform: string;
      icon: string;
      href: string | null;
      label: string;
      status: string;
    }[];
  };
  metrics: AboutMetric[];
  story: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
    profileButton: {
      label: string;
      note: string;
      disabled: boolean;
    };
  };
  values: AboutValue[];
  places: AboutPlace[];
  closing: {
    title: string;
    description: string;
    href: string;
    label: string;
    backgroundImage: string;
  };
}

export const aboutPageData: AboutPageData = {
  showPrototypeAboutContent: true,
  
  seo: {
    title: "Sobre Aldo | Aldo en Ruta",
    description: "Conoce la historia, los valores y la visión detrás de Aldo en Ruta, un proyecto que une tecnología, viajes por carretera y experiencias inmersivas en el Perú.",
    canonical: "/sobre-aldo/",
    noindex: true,
    ogImage: "/images/temp/about/about-hero.webp"
  },

  hero: {
    eyebrow: "HOLA, SOY ALDO",
    title: "Apasionado por los viajes, las carreteras y las historias que nos conectan.",
    description: "Creo experiencias digitales para que más personas descubran el Perú desde una perspectiva inmersiva, auténtica y profundamente humana.",
    backgroundImage: "/images/temp/about/about-hero-bg.webp",
    portraitImage: "/images/aldo-conduciendo.jpg",
    portraitAlt: "Aldo conduciendo durante un recorrido por carretera",
    quote: {
      text: "La carretera siempre me ha enseñado algo nuevo. Este proyecto es mi forma de compartirlo.",
      author: "Aldo Jara",
      label: "Mensaje editorial",
      verificationStatus: "conceptual"
    },
    socials: [
      { platform: "instagram", icon: "instagram", href: null, label: "Instagram", status: "Próximamente" },
      { platform: "youtube", icon: "youtube", href: null, label: "YouTube", status: "Próximamente" },
      { platform: "website", icon: "globe", href: null, label: "Sitio Web", status: "Próximamente" }
    ]
  },

  metrics: [
    {
      value: "+15 años",
      label: "Tecnología y datos",
      description: "Experiencia profesional",
      statusLabel: "Dato por confirmar",
      verificationStatus: "conceptual"
    },
    {
      value: "+25,000 km",
      label: "Caminos recorridos",
      description: "Exploración por carretera",
      statusLabel: "En validación",
      verificationStatus: "conceptual"
    },
    {
      value: "360°",
      label: "Historias y escenas",
      description: "Material audiovisual",
      statusLabel: "En crecimiento",
      verificationStatus: "conceptual"
    },
    {
      value: "24",
      label: "Territorios",
      description: "Regiones por descubrir",
      statusLabel: "En planificación",
      verificationStatus: "conceptual"
    },
    {
      value: "100+",
      label: "Momentos inmersivos",
      description: "Experiencias compartidas",
      statusLabel: "Prototipo",
      verificationStatus: "conceptual"
    }
  ],

  story: {
    eyebrow: "MI HISTORIA",
    title: "De la tecnología a la exploración",
    paragraphs: [
      "Soy Ingeniero de Sistemas y profesional vinculado a la analítica y los datos, con amplia experiencia ayudando a organizaciones a tomar mejores decisiones.",
      "Pero más allá de los datos, está mi otra pasión: viajar, conducir, descubrir caminos y capturar momentos únicos.",
      "Aldo en Ruta nace de la unión de estas dos pasiones: la tecnología y la exploración, para crear experiencias que inspiran a otros a salir, descubrir y vivir el Perú."
    ],
    image: "/images/aldo-louvre.png",
    imageAlt: "Aldo frente a la Pirámide del Louvre en París",
    profileButton: {
      label: "Conoce mi perfil profesional",
      note: "Próximamente",
      disabled: true
    }
  },

  values: [
    {
      title: "Autenticidad",
      description: "Mostrar el Perú real, sin filtros ni artificios.",
      iconName: "shield"
    },
    {
      title: "Exploración",
      description: "Ir más allá de lo conocido y encontrar lo extraordinario en lo simple.",
      iconName: "compass"
    },
    {
      title: "Conexión",
      description: "Contar historias que conecten personas con lugares.",
      iconName: "heart"
    },
    {
      title: "Respeto",
      description: "Viajar consciente, cuidando cada destino y su gente.",
      iconName: "map-pin"
    },
    {
      title: "Compartir",
      description: "Inspirar a otros a vivir sus propias aventuras.",
      iconName: "share-2"
    }
  ],

  places: [
    {
      title: "Carretera Central",
      image: "/images/temp/about/about-place-central.webp",
      alt: "Vista panorámica de las curvas de la Carretera Central en los Andes",
      status: "provisional"
    },
    {
      title: "Cañón del Colca",
      image: "/images/temp/about/about-place-colca.webp",
      alt: "El imponente Cañón del Colca con terrazas agrícolas y montañas al fondo",
      status: "provisional"
    },
    {
      title: "Laguna 69",
      image: "/images/temp/about/about-place-laguna.webp",
      alt: "Aguas turquesas de Laguna 69 bajo picos nevados en la Cordillera Blanca",
      status: "provisional"
    },
    {
      title: "Carretera Austral",
      image: "/images/temp/about/about-place-austral.webp",
      alt: "Ruta escénica rodeada de bosques y lagos de agua cristalina",
      status: "provisional"
    },
    {
      title: "Desierto de Ica",
      image: "/images/temp/about/about-place-ica.webp",
      alt: "Dunas gigantescas del desierto de Ica en el atardecer",
      status: "provisional"
    },
    {
      title: "Selva Central",
      image: "/images/temp/about/about-place-jungle.webp",
      alt: "Río serpenteante entre la densa vegetación de la selva alta peruana",
      status: "provisional"
    }
  ],

  closing: {
    title: "Este proyecto es una invitación.",
    description: "Acompáñame a descubrir el Perú en ruta.",
    href: "/explorar/",
    label: "Explorar rutas",
    backgroundImage: "/images/temp/about/about-closing-bg.webp"
  }
};
