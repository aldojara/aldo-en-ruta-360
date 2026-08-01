import type { CollectionEntry } from 'astro:content';

export type MomentEntry = CollectionEntry<'moments'>;

export interface MomentFilters {
  mediaType?: 'photo' | 'video' | 'panorama360' | 'editorial';
  routeSlug?: string;
  territory?: string;
}
