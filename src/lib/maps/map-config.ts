export interface MapConfig {
  styleUrl: string;
  defaultCenter: [number, number]; // [lng, lat]
  defaultZoom: number;
  minZoom: number;
  maxZoom: number;
}

export const defaultMapConfig: MapConfig = {
  // CARTO Dark Matter es un mapa base recomendado y estético para el piloto nocturno
  styleUrl: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
  defaultCenter: [-76.85, -11.5], // Sierra Central del Perú
  defaultZoom: 8,
  minZoom: 2,
  maxZoom: 18,
};
