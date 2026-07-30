import type { Coordinate } from '../../types/route';

/**
 * Calcula la distancia en kilómetros entre dos coordenadas usando la fórmula del semiverseno (Haversine).
 */
export function getDistanceBetweenCoordinates(c1: Coordinate, c2: Coordinate): number {
  const R = 6371; // Radio de la Tierra en km
  const dLat = ((c2.lat - c1.lat) * Math.PI) / 180;
  const dLng = ((c2.lng - c1.lng) * Math.PI) / 180;
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((c1.lat * Math.PI) / 180) *
      Math.cos((c2.lat * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
      
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Calcula la distancia acumulada de toda una ruta de coordenadas.
 */
export function calculateTotalRouteDistance(coordinates: Coordinate[]): number {
  let totalDistance = 0;
  for (let i = 0; i < coordinates.length - 1; i++) {
    totalDistance += getDistanceBetweenCoordinates(coordinates[i], coordinates[i + 1]);
  }
  return parseFloat(totalDistance.toFixed(2));
}
