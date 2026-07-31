export interface RoutePageConceptCard {
  id: string;
  title: string;
  description: string;
  image: string;
  status: 'coming-soon' | 'planning';
  statusLabel: string;
  tags: string[];
}

export interface RoutePageMetric {
  value: string | number;
  label: string;
}

export interface RoutePageFilter {
  id: string;
  label: string;
  isActive: boolean;
}

export interface RoutePageSort {
  id: string;
  label: string;
  isActive: boolean;
}

export interface RoutePageFeatureItem {
  icon: string;
  title: string;
  description: string;
  badge?: {
    text: string;
    variant: 'available' | 'proyectado';
  };
}
