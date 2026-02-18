
export enum ServiceCategory {
  DEVELOPMENT = 'Property Development',
  MANAGEMENT = 'Property Management',
  FACILITIES = 'Facilities Management',
  ASSET = 'Asset Management',
  LEASING = 'Leasing & Brokerage'
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  location: string;
  tags: string[];
  image: string;
}

export interface QuizState {
  step: number;
  data: {
    role: string;
    objective: string;
    assetType: string;
    location: string;
    timeline: string;
    name: string;
    email: string;
    phone?: string;
    organization?: string;
    message?: string;
  };
}

export type FunnelType = 'A' | 'B'; // A: Owners/Stakeholders, B: Tenants/Brokers
