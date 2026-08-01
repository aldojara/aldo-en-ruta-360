import type { CollectionEntry } from 'astro:content';

export type StoryEntry = CollectionEntry<'stories'>;

export interface StoryFilters {
  category?: 'chronicle' | 'logbook' | 'preparation' | 'learning' | 'behind-the-route' | 'encounter';
  routeSlug?: string;
  tag?: string;
}
