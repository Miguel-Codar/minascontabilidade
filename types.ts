import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceSegment {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface ServiceDifferential {
  text: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  isPopular?: boolean;
  features: string[];
}

export interface ExtraService {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
}