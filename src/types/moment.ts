import type { CollectionEntry } from 'astro:content';

export type MomentEntry = CollectionEntry<'moments'>;

export interface MomentFilters {
  type?: 'image' | 'video-clip' | 'panorama-360';
  routeId?: string;
}
