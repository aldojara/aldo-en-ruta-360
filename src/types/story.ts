import type { CollectionEntry } from 'astro:content';

export type StoryEntry = CollectionEntry<'stories'>;

export interface StoryFilters {
  tag?: string;
  routeId?: string;
}
