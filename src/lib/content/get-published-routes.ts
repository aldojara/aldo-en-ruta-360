import { getCollection } from 'astro:content';

/**
 * Obtiene todas las rutas publicadas en el sitio (excluye borradores y archivados).
 * Las rutas con estado "coming-soon" se excluyen de la navegación principal pero
 * se podrían mostrar según la interfaz.
 */
export async function getPublishedRoutes() {
  const allRoutes = await getCollection('routes');
  return allRoutes
    .filter(route => route.data.status === 'published')
    .sort((a, b) => {
      // Ordenar destacadas primero
      if (a.data.featured && !b.data.featured) return -1;
      if (!a.data.featured && b.data.featured) return 1;
      return a.data.title.localeCompare(b.data.title);
    });
}
