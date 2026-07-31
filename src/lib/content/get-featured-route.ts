import { getCollection } from 'astro:content';

export interface GetFeaturedRouteOptions {
  includeDrafts?: boolean;
}

/**
 * Obtiene la ruta destacada principal del sitio que esté publicada.
 */
export async function getFeaturedRoute(options: GetFeaturedRouteOptions = {}) {
  const { includeDrafts = false } = options;
  const allRoutes = await getCollection('routes');
  const filteredRoutes = allRoutes.filter(route =>
    route.data.status === 'published' || (includeDrafts && route.data.status === 'draft')
  );

  // Buscar la primera marcada como destacada (featured)
  const featured = filteredRoutes.find(route => route.data.featured);

  // Retornar la destacada, o la primera filtrada, o undefined
  return featured || filteredRoutes[0];
}
