export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  url: string;
  image: string;
  role?: string;
  tech?: string[];
  description?: string;
  subtitle?: string;
  bullets?: string[];
}

export interface CapabilityItem {
  name: string;
  category?: string;
}
