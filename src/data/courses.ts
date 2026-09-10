export interface Course {
  id: number;
  title: string;
  category: string;
  description: string;
  hours: string;
  price: string;
  rating?: number;
  language?: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "RERA Agent Certification",
    category: "Certification",
    description:
      "Complete preparation program for RERA agent certification with practical real-estate knowledge.",
    hours: "40 Hours",
    price: "₹3,999",
    rating: 4.9,
    language: "EN / HI",
  },
  {
    id: 2,
    title: "RERA Consultant Masterclass",
    category: "Professional",
    description:
      "Advanced RERA learning program covering compliance, documentation and practical consultation.",
    hours: "55 Hours",
    price: "₹5,999",
    rating: 4.9,
    language: "EN / HI",
  },
  {
    id: 3,
    title: "Real Estate Legal Essentials",
    category: "Legal",
    description:
      "Understand essential legal concepts, RERA provisions and compliance requirements for real estate.",
    hours: "32 Hours",
    price: "₹2,999",
    rating: 4.9,
    language: "EN / HI",
  },
];