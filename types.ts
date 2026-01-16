import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  image: string;
  role: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  stepNumber: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
