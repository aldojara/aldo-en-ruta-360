import type { CollectionEntry } from 'astro:content';

export type RouteEntry = CollectionEntry<'routes'>;

export interface Coordinate {
  lng: number;
  lat: number;
  altitude?: number;
  time?: string;
}

export interface RouteFilters {
  territory?: string;
  difficulty?: 'easy' | 'moderate' | 'advanced';
  status?: string;
}
