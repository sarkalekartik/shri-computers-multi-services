export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  price?: string;
  estimatedTime?: string;
  requiredDocuments?: string[];
}

export interface PricingItem {
  id: string;
  serviceName: string;
  price: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
