import type { Coordinate } from '../../types/route';
import { getDistanceBetweenCoordinates } from './route-distance';

/**
 * Encuentra el punto más cercano de la ruta a una coordenada dada.
 * Útil para sincronizar la posición del cursor con el track GPS.
 * 
 * @param currentPos Coordenada a evaluar (e.g. la posición actual del cursor).
 * @param routeCoordinates Listado de coordenadas de la ruta.
 * @returns El índice del punto más cercano en el array.
 */
export function findClosestRouteIndex(currentPos: Coordinate, routeCoordinates: Coordinate[]): number {
  if (routeCoordinates.length === 0) return -1;

  let closestIndex = 0;
  let minDistance = Infinity;

  for (let i = 0; i < routeCoordinates.length; i++) {
    const dist = getDistanceBetweenCoordinates(currentPos, routeCoordinates[i]);
    if (dist < minDistance) {
      minDistance = dist;
      closestIndex = i;
    }
  }

  return closestIndex;
}
