/**
 * Resuelve una ruta pública concatenándola con el BASE_URL del sitio (útil para despliegue en subdirectorios como GitHub Pages).
 * 
 * @param path La ruta relativa al directorio público o la URL interna (por ejemplo, '/assets/imagen.jpg').
 * @returns La ruta absoluta resuelta con el BASE_URL correspondiente sin duplicaciones.
 */
export function publicUrl(path: string): string {
  if (!path) return '';
  
  // Conservar sin cambios URLs absolutas, data-uris, mailto, tel y fragmentos (#)
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#')
  ) {
    return path;
  }

  // Obtener el BASE_URL de Astro (termina en / o es /)
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Limpiar barras
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // Si cleanBase no está vacío y cleanPath comienza con cleanBase
  if (cleanBase && (cleanPath === cleanBase || cleanPath.startsWith(cleanBase + '/'))) {
    return cleanPath.replace(/\/+/g, '/');
  }

  // Combinar base con path limpio
  const combined = `${cleanBase}${cleanPath}`;
  
  // Eliminar barras duplicadas intermedias
  return combined.replace(/\/+/g, '/');
}
