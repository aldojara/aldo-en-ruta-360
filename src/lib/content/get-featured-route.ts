import { getCollection } from 'astro:content';

/**
 * Obtiene la ruta destacada principal del sitio que esté publicada.
 */
export async function getFeaturedRoute() {
  const allRoutes = await getCollection('routes');
  const publishedRoutes = allRoutes.filter(route => route.data.status === 'published');
  
  // Buscar la primera marcada como destacada (featured)
  const featured = publishedRoutes.find(route => route.data.featured);
  
  // Retornar la destacada, o la primera publicada, o undefined
  return featured || publishedRoutes[0];
}
