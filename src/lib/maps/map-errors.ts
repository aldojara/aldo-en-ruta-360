export class MapError extends Error {
  public code: string;

  constructor(message: string, code: string = 'MAP_GENERIC_ERROR') {
    super(message);
    this.name = 'MapError';
    this.code = code;
  }
}

export function handleMapError(error: unknown) {
  console.error('[Cartografía] Error detectado:', error);
}
