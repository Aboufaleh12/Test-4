import { FileText, TrendingUp, ShieldCheck, CreditCard, AlertTriangle, XCircle, Search, MessageSquare } from 'lucide-react';
import { ServiceItem, Testimonial, ProcessStep, FAQItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    title: "Late Payments",
    description: "We challenge questionable late payment marks to help restore your payment history score.",
    Icon: AlertTriangle
  },
  {
    title: "Collections",
    description: "Our experts negotiate and dispute collection accounts to remove them from your report.",
    Icon: FileText
  },
  {
    title: "Bankruptcies",
    description: "Navigate the complexities of public records. We help verify and dispute bankruptcy inaccuracies.",
    Icon: XCircle
  },
  {
    title: "Inquiries",
    description: "Remove unauthorized hard inquiries that drag down your score unnecessarily.",
    Icon: Search
  },
  {
    title: "Credit Card Debt",
    description: "Strategic advice on utilization and disputing incorrect balance reporting.",
    Icon: CreditCard
  },
  {
    title: "Identity Theft",
    description: "Comprehensive support to reclaim your identity and clean up fraudulent accounts.",
    Icon: ShieldCheck
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Consultation & Analysis",
    description: "We review your credit reports from all three bureaus to identify negative items.",
    stepNumber: "01"
  },
  {
    title: "Dispute & Negotiation",
    description: "We communicate directly with bureaus and creditors to challenge inaccuracies.",
    stepNumber: "02"
  },
  {
    title: "Monitoring & Education",
    description: "Watch your score improve while we teach you how to maintain excellent credit.",
    stepNumber: "03"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    location: "Austin, TX",
    role: "Homeowner",
    quote: "ClearPath helped me remove 3 collections in just 45 days. I finally qualified for my dream home mortgage!",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Michael Ross",
    location: "Denver, CO",
    role: "Small Business Owner",
    quote: "Professional, transparent, and effective. They didn't just fix my credit; they taught me how to keep it healthy.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Elena Rodriguez",
    location: "Miami, FL",
    role: "Marketing Director",
    quote: "I was skeptical at first, but the 24/7 portal kept me updated every step of the way. Truly amazing results.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How long does the credit repair process take?",
    answer: "While every case is unique, most clients see initial results within 30-45 days. A complete restoration typically takes 3-6 months depending on the number of items."
  },
  {
    question: "Is credit repair legal?",
    answer: "Absolutely. The Fair Credit Reporting Act (FCRA) gives you the right to dispute any item on your credit report that is inaccurate, untimely, misleading, incomplete, or unverifiable."
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Yes. We stand by our service. If we cannot remove or correct any questionable items on your report within 90 days, we offer a full refund."
  },
  {
    question: "Will items come back after they are removed?",
    answer: "It is rare. If an item is legitimately verified by the creditor, it can be re-reported, but we have a very high permanent deletion rate for inaccurate items."
  }
];
