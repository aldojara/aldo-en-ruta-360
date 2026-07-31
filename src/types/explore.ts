export interface ExploreFilter {
  id: string;
  label: string;
  type: 'all' | 'territory' | 'experience' | 'status';
}

export interface ExploreTerritory {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  status: 'available' | 'coming-soon' | 'planning';
  statusLabel: string;
  href: string;
}

export interface ExploreExperienceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: 'available' | 'coming-soon' | 'planning';
  statusLabel: string;
}

export interface ExploreConceptRoute {
  id: string;
  title: string;
  description: string;
  image: string;
  status: 'coming-soon' | 'planning';
  statusLabel: string;
  tags: string[];
  eyebrow: string;
}
