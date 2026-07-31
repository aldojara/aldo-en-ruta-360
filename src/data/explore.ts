import type {
  ExploreFilter,
  ExploreTerritory,
  ExploreExperienceCategory,
  ExploreConceptRoute
} from '../types/explore';

export const exploreFilters: ExploreFilter[] = [
  { id: 'todo', label: 'Todo', type: 'all' },
  { id: 'andes', label: 'Andes', type: 'territory' },
  { id: 'costa', label: 'Costa', type: 'territory' },
  { id: 'selva', label: 'Selva', type: 'territory' },
  { id: 'desierto', label: 'Desierto', type: 'territory' },
  { id: 'sinuosas', label: 'Rutas sinuosas', type: 'experience' },
  { id: 'disponibles', label: 'Disponibles', type: 'status' },
  { id: 'coming', label: 'Próximamente', type: 'status' }
];

export const exploreTerritories: ExploreTerritory[] = [
  {
    id: 'andes',
    title: 'Andes',
    description: 'Montañas imponentes, curvas desafiantes y vistas infinitas.',
    image: '/images/temp/explore/territory-andes.webp',
    icon: 'mountain',
    status: 'available',
    statusLabel: 'Ruta piloto disponible',
    href: '/rutas/'
  },
  {
    id: 'costa',
    title: 'Costa',
    description: 'Carreteras junto al mar, acantilados y horizontes abiertos.',
    image: '/images/temp/explore/territory-coast.webp',
    icon: 'coast',
    status: 'coming-soon',
    statusLabel: 'Próximamente',
    href: '/rutas/'
  },
  {
    id: 'selva',
    title: 'Selva',
    description: 'Vegetación densa, ríos y caminos que conectan lo profundo.',
    image: '/images/temp/explore/territory-jungle.webp',
    icon: 'jungle',
    status: 'coming-soon',
    statusLabel: 'En preparación',
    href: '/rutas/'
  },
  {
    id: 'desierto',
    title: 'Desierto',
    description: 'Paisajes áridos, valles y rutas de aventura.',
    image: '/images/temp/explore/territory-desert.webp',
    icon: 'desert',
    status: 'planning',
    statusLabel: 'En planificación',
    href: '/rutas/'
  }
];

export const exploreExperienceCategories: ExploreExperienceCategory[] = [
  {
    id: 'sinuosas',
    title: 'Rutas sinuosas',
    description: 'Curvas y pendientes que retan y emocionan.',
    icon: 'winding',
    status: 'available',
    statusLabel: 'Disponible en la ruta piloto'
  },
  {
    id: 'panoramas',
    title: 'Panoramas 360°',
    description: 'Escenas inmersivas vinculadas a puntos concretos del recorrido.',
    icon: 'panorama',
    status: 'available',
    statusLabel: 'Disponible en la ruta piloto'
  },
  {
    id: 'video',
    title: 'Vídeo de ruta',
    description: 'Recorridos grabados desde la carretera.',
    icon: 'video',
    status: 'coming-soon',
    statusLabel: 'Próximamente'
  },
  {
    id: 'historia',
    title: 'Historia del trayecto',
    description: 'Relatos, contexto y datos del camino recorrido.',
    icon: 'history',
    status: 'coming-soon',
    statusLabel: 'En preparación'
  },
  {
    id: 'paisaje',
    title: 'Paisaje abierto',
    description: 'Carreteras amplias y horizontes que dominan la experiencia.',
    icon: 'landscape',
    status: 'coming-soon',
    statusLabel: 'Próximamente'
  }
];

export const exploreConceptRoutes: ExploreConceptRoute[] = [
  {
    id: 'concept-costa',
    eyebrow: 'PRÓXIMAMENTE',
    title: 'Costa (Concepto Visual)',
    description: 'Exploración preliminar de carreteras costeras que bordean el pacífico con vistas panorámicas y tramos de curvas al atardecer.',
    image: '/images/temp/explore/route-concept-01.webp',
    status: 'coming-soon',
    statusLabel: 'Próximamente',
    tags: ['Costa', 'Mar', 'Panorámica', 'Sunset']
  },
  {
    id: 'concept-valle',
    eyebrow: 'EN PLANIFICACIÓN',
    title: 'Valle (Concepto Visual)',
    description: 'Planificación de trayecto entre valles interandinos con ascensos moderados, paso de ríos y aproximación a comunidades locales.',
    image: '/images/temp/explore/route-concept-02.webp',
    status: 'planning',
    statusLabel: 'En planificación',
    tags: ['Valle', 'Río', 'Curvas', 'Aventura']
  }
];
