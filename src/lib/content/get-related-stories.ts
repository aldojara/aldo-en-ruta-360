import { getCollection } from 'astro:content';
import type { StoryEntry } from '../../types/story';

export interface GetRelatedStoriesOptions {
  routeSlug?: string;
  includeDrafts?: boolean;
  featuredOnly?: boolean;
  limit?: number;
}

/**
 * Obtiene las historias de la colección con opciones avanzadas de filtrado y ordenación.
 * Por defecto excluye borradores y provisorios salvo que se especifique includeDrafts.
 * Ordena destacadas primero y luego por el orden editorial.
 */
export async function getRelatedStories(options: GetRelatedStoriesOptions = {}): Promise<StoryEntry[]> {
  const {
    routeSlug,
    includeDrafts = false,
    featuredOnly = false,
    limit
  } = options;

  const allStories = await getCollection('stories');

  let filteredStories = allStories.filter(story => {
    // Filtro por routeSlug
    if (routeSlug && story.data.routeSlug !== routeSlug) return false;

    // Filtro por estado
    const isVisible = story.data.status === 'published' ||
                      (includeDrafts && (story.data.status === 'provisional' || story.data.status === 'draft'));
    if (!isVisible) return false;

    // Filtro por destacadas
    if (featuredOnly && !story.data.featured) return false;

    return true;
  });

  // Ordenar destacadas primero (featured = true) y luego por editorialOrder (de menor a mayor)
  filteredStories.sort((a, b) => {
    if (a.data.featured && !b.data.featured) return -1;
    if (!a.data.featured && b.data.featured) return 1;
    return a.data.editorialOrder - b.data.editorialOrder;
  });

  // Limitar resultados si se especifica
  if (limit !== undefined) {
    filteredStories = filteredStories.slice(0, limit);
  }

  return filteredStories;
}
