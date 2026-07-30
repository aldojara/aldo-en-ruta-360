import { getCollection } from 'astro:content';

/**
 * Obtiene la ruta destacada principal del sitio que esté publicada.
 */
export async function getFeaturedRoute(includeDraft = false) {
  const allRoutes = await getCollection('routes');
  const filteredRoutes = allRoutes.filter(route =>
    route.data.status === 'published' || (includeDraft && route.data.status === 'draft')
  );

  // Buscar la primera marcada como destacada (featured)
  const featured = filteredRoutes.find(route => route.data.featured);

  // Retornar la destacada, o la primera filtrada, o undefined
  return featured || filteredRoutes[0];
}
