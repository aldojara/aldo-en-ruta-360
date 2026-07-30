import { getCollection } from 'astro:content';

/**
 * Obtiene las historias (artículos editoriales) vinculadas a una ruta específica.
 * 
 * @param routeId El ID o slug de la ruta para filtrar las historias.
 */
export async function getRelatedStories(routeId: string) {
  const allStories = await getCollection('stories');
  return allStories.filter(story => story.data.route?.id === routeId);
}
