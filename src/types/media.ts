export interface MediaSource {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface VideoSpecs {
  provider: 'youtube' | 'local';
  id: string;
  durationSeconds?: number;
}
