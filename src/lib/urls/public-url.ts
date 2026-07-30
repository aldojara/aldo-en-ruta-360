/**
 * Resuelve una ruta pública concatenándola con el BASE_URL del sitio (útil para despliegue en subdirectorios como GitHub Pages).
 * 
 * @param path La ruta relativa al directorio público (por ejemplo, '/assets/imagen.jpg').
 * @returns La ruta absoluta resuelta con el BASE_URL correspondiente.
 */
export function publicUrl(path: string): string {
  if (!path) return '';
  
  // Si la ruta ya es una URL absoluta o data-uri, no modificarla
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  // Obtener el BASE_URL de Astro (garantizado que termine en / o sea /)
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Limpiar barras iniciales del path y barras finales del baseUrl para evitar duplicaciones
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // Combinar base con path limpio
  const combined = `${cleanBase}${cleanPath}`;
  
  // Eliminar barras duplicadas intermedias accidentales (por ejemplo //assets/ -> /assets/)
  return combined.replace(/\/+/g, '/');
}
