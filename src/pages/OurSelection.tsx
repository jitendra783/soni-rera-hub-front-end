import {
  CheckCircle,
  Award,
  BookOpen,
  Users,
} from "lucide-react";
import "./OurSelection.css";
interface Selection {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const selections: Selection[] = [
  {
    title: "RERA Learning Programs",
    description:
      "Structured programs for understanding RERA and real-estate regulations.",
    icon: <BookOpen />,
  },
  {
    title: "Exam Preparation",
    description:
      "Focused preparation with practice questions, mock tests and revision.",
    icon: <CheckCircle />,
  },
  {
    title: "Professional Development",
    description:
      "Programs designed to support real-estate professionals in their careers.",
    icon: <Users />,
  },
  {
    title: "Certification Programs",
    description:
      "Learning programs designed around professional certification goals.",
    icon: <Award />,
  },
];

export default function OurSelections() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">
          OUR SELECTIONS
        </div>

        <h1>
          Choose the right learning path.
        </h1>

        <p>
          Explore selected programs designed around
          different learning and professional goals.
        </p>
      </section>

      <section className="section">
        <div className="feature-grid">
          {selections.map((selection) => (
            <article
              className="feature"
              key={selection.title}
            >
              <div className="feature-icon">
                {selection.icon}
              </div>

              <h3>
                {selection.title}
              </h3>

              <p>
                {selection.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}