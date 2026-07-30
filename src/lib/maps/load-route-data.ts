/**
 * Carga los datos geográficos de una ruta (GeoJSON) de forma asíncrona.
 * 
 * @param geojsonUrl URL del archivo GeoJSON de la ruta.
 */
export async function loadRouteData(geojsonUrl: string) {
  console.log(`Esqueleto de carga: Descargando datos geográficos desde ${geojsonUrl}`);
  
  // En el futuro:
  // const res = await fetch(geojsonUrl);
  // return await res.json();
  return {
    type: 'FeatureCollection',
    features: [],
    status: 'empty_placeholder_geojson'
  };
}
