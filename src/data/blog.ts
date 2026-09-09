export interface Blog {
  id: number;
  title: string;
  category: string;
  description: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title:
      "Why RERA registration matters for real-estate professionals",
    category: "RERA Basics",
    description:
      "Understand the importance of RERA registration and compliance.",
  },
  {
    id: 2,
    title:
      "RERA compliance checklist for project stakeholders",
    category: "Compliance",
    description:
      "Key areas that project stakeholders should understand.",
  },
  {
    id: 3,
    title:
      "How to prepare for a RERA certification exam",
    category: "Exam Prep",
    description:
      "Practical tips for structured RERA examination preparation.",
  },
];