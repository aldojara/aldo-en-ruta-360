/**
 * Retira el base path (por ejemplo, '/aldo-en-ruta-360') del inicio de un pathname,
 * normalizando el resultado para comparaciones de rutas de navegación.
 *
 * @param pathname El pathname a procesar.
 * @returns El pathname normalizado sin el base path inicial.
 */
export function stripBasePath(pathname: string): string {
  if (!pathname) return '/';

  // Ignorar query string y hash si se reciben
  const pathWithoutQuery = pathname.split('?')[0].split('#')[0];

  // Normalizar barras duplicadas iniciales
  let cleanPath = pathWithoutQuery.replace(/\/+/g, '/');

  // Obtener el BASE_URL de Astro
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.replace(/\/+/g, '/'); // Asegurar barras normalizadas en base

  // Si cleanBase no es simplemente '/' y cleanPath comienza con cleanBase
  if (cleanBase !== '/' && cleanBase !== '') {
    // Para que coincida como segmento, debe ser igual a cleanBase o comenzar con cleanBase + '/'
    const baseWithSlash = cleanBase.endsWith('/') ? cleanBase : `${cleanBase}/`;

    if (cleanPath === cleanBase) {
      cleanPath = '/';
    } else if (cleanPath.startsWith(baseWithSlash)) {
      cleanPath = '/' + cleanPath.slice(baseWithSlash.length);
    }
  }

  // Volver a normalizar barras duplicadas intermedias
  cleanPath = cleanPath.replace(/\/+/g, '/');

  // Conservar '/' para el Home
  if (cleanPath === '/') {
    return '/';
  }

  // Retirar la barra final si existe
  if (cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  // Garantizar barra inicial
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }

  return cleanPath;
}
