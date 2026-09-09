import {
  ShieldCheck,
  Scale,
  BookOpen,
  Users,
  Award,
} from "lucide-react";
import "./About.css";

export default function About() {
  return (
    <>
      {/* =========================
          Page Hero
      ========================= */}

      <section className="page-hero">
        <div className="eyebrow">
          ABOUT SONI RERA HUB
        </div>

        <h1>
          Building RERA knowledge for a better
          real-estate ecosystem.
        </h1>

        <p>
          Soni RERA Hub is focused on practical RERA education,
          professional development and exam preparation for
          individuals working in the real-estate sector.
        </p>
      </section>

      {/* =========================
          About
      ========================= */}

      <section className="section">
        <div className="two-col">
          <div>
            <div className="eyebrow">
              WHO WE ARE
            </div>

            <h2>
              Learn. Understand. Grow.
            </h2>

            <p>
              Our platform brings together RERA knowledge,
              legal understanding and practical real-estate
              education in one place.
            </p>

            <p>
              Whether you are a real-estate professional,
              consultant, student or someone preparing for
              a RERA-related examination, our programs are
              designed to help you build practical knowledge.
            </p>
          </div>

          <div className="feature">
            <ShieldCheck size={36} />

            <h3>
              Trusted RERA Education
            </h3>

            <p>
              Structured learning supported by professionals
              with knowledge of RERA, compliance and real estate.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          Mission
      ========================= */}

      <section className="section soft">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              OUR MISSION
            </div>

            <h2>
              Making RERA education accessible.
            </h2>
          </div>
        </div>

        <div className="feature-grid">
          <Feature
            icon={<Scale />}
            title="Legal Knowledge"
            text="Understand RERA regulations, compliance requirements and legal concepts."
          />

          <Feature
            icon={<BookOpen />}
            title="Practical Learning"
            text="Learn concepts through structured and practical educational content."
          />

          <Feature
            icon={<Users />}
            title="Professional Community"
            text="Connect with professionals, mentors and other learners."
          />

          <Feature
            icon={<Award />}
            title="Career Development"
            text="Build knowledge and skills that support your professional journey."
          />
        </div>
      </section>
    </>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function Feature({
  icon,
  title,
  text,
}: FeatureProps) {
  return (
    <div className="feature">
      <div className="feature-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>
    </div>
  );
}