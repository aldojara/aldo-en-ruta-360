import type {
  RoutePageMetric,
  RoutePageFilter,
  RoutePageSort,
  RoutePageConceptCard,
  RoutePageFeatureItem
} from '../types/routes-page';

export const routesPageMetrics: RoutePageMetric[] = [
  { value: '1', label: 'Ruta piloto' },
  { value: '1', label: 'Recorrido disponible para prototipo' },
  { value: 'Validación', label: 'Contenido geográfico en proceso' },
  { value: 'Pendiente', label: 'Nuevas rutas por incorporar' }
];

export const routesPageFilters: RoutePageFilter[] = [
  { id: 'all', label: 'Todas', isActive: true },
  { id: 'available', label: 'Disponible', isActive: false },
  { id: 'coming-soon', label: 'Próximamente', isActive: false },
  { id: 'planning', label: 'En planificación', isActive: false }
];

export const routesPageSorts: RoutePageSort[] = [
  { id: 'featured', label: 'Destacadas', isActive: true },
  { id: 'recent', label: 'Más recientes', isActive: false },
  { id: 'distance', label: 'Mayor distancia', isActive: false }
];

export const routesPageConceptCards: RoutePageConceptCard[] = [
  {
    id: 'concept-coming-soon',
    title: 'Nuevo recorrido en preparación',
    description: 'Documentación en curso de tramos adicionales de carretera. La información detallada se publicará al concluir la validación de material.',
    image: '/images/temp/routes/concept-coming-soon.webp',
    status: 'coming-soon',
    statusLabel: 'Próximamente',
    tags: ['Carretera', 'Exploración']
  },
  {
    id: 'concept-planning',
    title: 'Próxima ruta por documentar',
    description: 'Planificación de itinerarios futuros para expandir la cobertura de rutas. La definición geográfica y los contenidos multimedia están en fase de diseño.',
    image: '/images/temp/routes/concept-planning.webp',
    status: 'planning',
    statusLabel: 'En planificación',
    tags: ['Proyecto', 'Planificación']
  }
];

export const routesPageFeatures: RoutePageFeatureItem[] = [
  {
    icon: 'map',
    title: 'Recorrido sobre mapa',
    description: 'La experiencia completa permitirá visualizar la trayectoria del recorrido y sus puntos destacados sobre un mapa interactivo.',
    badge: { text: 'Proyectado', variant: 'proyectado' }
  },
  {
    icon: 'video-sync',
    title: 'Vídeo sincronizado',
    description: 'Sigue el avance por carretera sincronizado en tiempo real con el marcador del mapa interactivo.',
    badge: { text: 'Proyectado', variant: 'proyectado' }
  },
  {
    icon: 'milestones',
    title: 'Capítulos y puntos destacados',
    description: 'Navega por el recorrido saltando entre hitos clave, miradores y paradas narradas del trayecto.',
    badge: { text: 'Proyectado', variant: 'proyectado' }
  },
  {
    icon: 'metrics',
    title: 'Datos de distancia, altitud y duración',
    description: 'Información precisa de kilómetros, perfil altimétrico interactivo y tiempos de conducción estimados.',
    badge: { text: 'Disponible en prototipo', variant: 'available' }
  },
  {
    icon: 'gallery',
    title: 'Fotografías vinculadas',
    description: 'Galería de imágenes de alta resolución capturadas en puntos específicos del viaje.',
    badge: { text: 'Proyectado', variant: 'proyectado' }
  },
  {
    icon: 'panorama-360',
    title: 'Escenas e imágenes 360°',
    description: 'La experiencia completa incorporará panoramas y escenas 360° vinculados a puntos concretos del recorrido.',
    badge: { text: 'Proyectado', variant: 'proyectado' }
  },
  {
    icon: 'narrative',
    title: 'Contexto narrativo del viaje',
    description: 'Relatos escritos que narran las vivencias, anécdotas y detalles logísticos de cada viaje.',
    badge: { text: 'Proyectado', variant: 'proyectado' }
  }
];
