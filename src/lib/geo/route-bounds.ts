import type { Coordinate } from '../../types/route';

/**
 * Calcula los límites rectangulares geográficos (bounding box) de una serie de coordenadas.
 * 
 * @param coordinates Array de coordenadas GPS de la ruta.
 * @returns Una tupla con los límites [minLng, minLat, maxLng, maxLat].
 */
export function calculateRouteBounds(coordinates: Coordinate[]): [number, number, number, number] {
  if (coordinates.length === 0) {
    return [0, 0, 0, 0];
  }

  let minLng = Infinity;
  let minLat = Infinity;
  let maxLng = -Infinity;
  let maxLat = -Infinity;

  for (const coord of coordinates) {
    if (coord.lng < minLng) minLng = coord.lng;
    if (coord.lat < minLat) minLat = coord.lat;
    if (coord.lng > maxLng) maxLng = coord.lng;
    if (coord.lat > maxLat) maxLat = coord.lat;
  }

  return [minLng, minLat, maxLng, maxLat];
}
