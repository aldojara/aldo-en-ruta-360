import { getCollection } from 'astro:content';

/**
 * Obtiene los momentos (fotos, clips, panoramas) vinculados a una ruta específica.
 * 
 * @param routeId El ID o slug de la ruta para filtrar los momentos.
 */
export async function getRelatedMoments(routeId: string) {
  const allMoments = await getCollection('moments');
  return allMoments.filter(moment => moment.data.route?.id === routeId);
}
