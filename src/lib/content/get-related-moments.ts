import { getCollection } from 'astro:content';

export interface GetRelatedMomentsOptions {
  includeDrafts?: boolean;
  limit?: number;
  featuredOnly?: boolean;
  mediaTypes?: ('photo' | 'video' | 'panorama360' | 'editorial')[];
}

/**
 * Obtiene los momentos vinculados a una ruta específica, ordenados por el campo 'order'.
 * 
 * @param routeSlug El slug de la ruta para filtrar los momentos.
 * @param options Opciones de filtrado y ordenación.
 */
export async function getRelatedMoments(routeSlug: string, options: GetRelatedMomentsOptions = {}) {
  const {
    includeDrafts = false,
    limit,
    featuredOnly = false,
    mediaTypes,
  } = options;

  const allMoments = await getCollection('moments');

  let filteredMoments = allMoments.filter(moment => {
    // Relación por routeSlug
    const matchesRoute = moment.data.routeSlug === routeSlug;
    if (!matchesRoute) return false;

    // Filtro por estado
    const isVisible = moment.data.status === 'published' || (includeDrafts && moment.data.status === 'draft');
    if (!isVisible) return false;

    // Filtro por destacados (si aplica)
    if (featuredOnly && !moment.data.featured) return false;

    // Filtro por tipo de media
    if (mediaTypes && !mediaTypes.includes(moment.data.mediaType)) return false;

    return true;
  });

  // Ordenar por el campo 'order' ascendente
  filteredMoments.sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));

  // Limitar resultados si se especifica
  if (limit !== undefined) {
    filteredMoments = filteredMoments.slice(0, limit);
  }

  return filteredMoments;
}
