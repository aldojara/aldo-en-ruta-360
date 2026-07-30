import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Esquema para la colección de Rutas
const routesCollection = defineCollection({
  loader: glob({ pattern: '**/[^._]*.{md,mdx,json}', base: './src/content/routes' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    status: z.enum(['draft', 'coming-soon', 'published', 'archived']),
    featured: z.boolean().default(false),
    
    // Bloque Location
    location: z.object({
      country: z.string(),
      department: z.string().nullable().optional(),
      province: z.string().nullable().optional(),
      territory: z.string(),
      startLabel: z.string().nullable().optional(),
      endLabel: z.string().nullable().optional(),
    }),

    // Bloque Metrics
    metrics: z.object({
      distanceKm: z.number(),
      durationSeconds: z.number(),
      minimumAltitudeMeters: z.number().nullable().optional(),
      maximumAltitudeMeters: z.number().nullable().optional(),
      elevationGainMeters: z.number().nullable().optional(),
      drivingDifficulty: z.enum(['easy', 'moderate', 'advanced']),
      gpsPoints: z.number().nullable().optional(),
    }),

    // Bloque Geography / Map
    map: z.object({
      sourceGpx: z.string().nullable().optional(),
      routeGeojson: z.string(),
      previewGeojson: z.string().nullable().optional(),
      elevationData: z.string().nullable().optional(),
      center: z.tuple([z.number(), z.number()]), // [longitud, latitud]
      zoom: z.number(),
      bounds: z.array(z.number()).length(4).nullable().optional(), // [minLon, minLat, maxLon, maxLat]
    }),

    // Bloque Media
    media: z.object({
      cover: z.string(),
      gallery: z.array(z.string()).default([]),
      video: z.string().nullable().optional(),
      verticalVideo: z.string().nullable().optional(),
      panoramas: z.array(z.string()).default([]),
    }),

    // Bloque Capabilities (Funcionalidades)
    capabilities: z.object({
      map: z.boolean().default(true),
      animatedRoute: z.boolean().default(false),
      synchronizedVideo: z.boolean().default(false),
      elevationProfile: z.boolean().default(false),
      panoramas360: z.boolean().default(false),
      momentsTimeline: z.boolean().default(false),
    }),

    // Bloque Taxonomy
    taxonomy: z.object({
      territories: z.array(z.string()).default([]),
      experienceTypes: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
    }),

    // Bloque SEO
    seo: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().nullable().optional(),
      noindex: z.boolean().default(false),
    }),

    // Bloque Verification para datos pendientes
    verification: z.object({
      locationStatus: z.enum(['pending', 'confirmed']).default('pending'),
      notes: z.string().nullable().optional(),
    }).nullable().optional(),
  }),
});

// Esquema para la colección de Destinos (con relación opcional a rutas)
const destinationsCollection = defineCollection({
  loader: glob({ pattern: '**/[^._]*.{md,mdx,json}', base: './src/content/destinations' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featuredImage: z.string().nullable().optional(),
    route: reference('routes').optional(),
  }),
});

// Esquema para la colección de Momentos (con relación opcional a rutas)
const momentsCollection = defineCollection({
  loader: glob({ pattern: '**/[^._]*.{md,mdx,json}', base: './src/content/moments' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['image', 'video-clip', 'panorama-360']),
    mediaUrl: z.string(),
    route: reference('routes').optional(),
    timestamp: z.string().optional(),
  }),
});

// Esquema para la colección de Historias (con relación opcional a rutas)
const storiesCollection = defineCollection({
  loader: glob({ pattern: '**/[^._]*.{md,mdx,json}', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishDate: z.string(),
    authorName: z.string(),
    coverImage: z.string().nullable().optional(),
    route: reference('routes').optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  routes: routesCollection,
  destinations: destinationsCollection,
  moments: momentsCollection,
  stories: storiesCollection,
};
