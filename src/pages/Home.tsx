import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  ShieldCheck,
  Scale,
  FileCheck,
  MessageCircle,
  Play,
} from "lucide-react";

import { Link } from "react-router-dom";

import CourseCard from "../components/cards/CourseCard";
import { courses } from "../data/courses";

import "./Home.css";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TeamPreview {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface BlogPreview {
  category: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <ShieldCheck size={22} />,
    title: "RERA Knowledge",
    description:
      "Build a strong understanding of RERA rules, regulations and compliance.",
  },
  {
    icon: <Scale size={22} />,
    title: "Legal Guidance",
    description:
      "Learn practical aspects of real-estate law and regulatory compliance.",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Structured Learning",
    description:
      "Learn through structured courses designed for professionals and students.",
  },
  {
    icon: <Users size={22} />,
    title: "Professional Community",
    description:
      "Connect with professionals and learners interested in the RERA ecosystem.",
  },
];

const teamPreview: TeamPreview[] = [
  {
    name: "CEO & Director",
    role: "Leadership",
    description:
      "Leading the vision and growth of Soni RERA Hub.",
    image: "/team/ceo.png",
  },
  {
    name: "Legal Team",
    role: "RERA & Compliance",
    description:
      "Providing legal knowledge and practical RERA guidance.",
    image: "/team/legal.png",
  },
  {
    name: "Academic Faculty",
    role: "Training & Exams",
    description:
      "Designing learning programs and examination preparation.",
    image: "/team/faculty.png",
  },
];

const blogPreview: BlogPreview[] = [
  {
    category: "RERA Basics",
    title:
      "Why RERA registration matters for real-estate professionals",
    description:
      "Understand the importance of RERA registration and compliance.",
  },
  {
    category: "Compliance",
    title:
      "RERA compliance checklist for project stakeholders",
    description:
      "Important areas that project stakeholders should understand.",
  },
  {
    category: "Exam Preparation",
    title:
      "How to prepare for a RERA certification exam",
    description:
      "Practical tips for structured RERA examination preparation.",
  },
];

export default function Home() {
  return (
    <main className="home">

      {/* ================= HERO ================= */}

      <section className="home-hero">
        <div className="home-hero-inner">

          <div className="home-hero-content">

            <div className="home-eyebrow">
              <ShieldCheck size={16} />
              RERA EDUCATION & PROFESSIONAL DEVELOPMENT
            </div>

            <h1>
              Build your
              <br />
              <span className="highlight">RERA knowledge.</span>
              <br />
              Build your career.
            </h1>

            <p className="home-hero-description">
              Soni RERA Hub helps real-estate professionals,
              students and industry stakeholders understand RERA
              through structured learning, practical knowledge and
              exam preparation.
            </p>

            <div className="home-hero-actions">

              <Link
                to="/courses"
                className="home-primary-btn"
              >
                Explore Courses
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/about"
                className="home-secondary-btn"
              >
                <Play size={16} />
                Why RERA?
              </Link>

            </div>

          </div>

          {/* HERO CARD */}

          <div className="home-hero-visual">

            <div className="hero-decoration one" />
            <div className="hero-decoration two" />

            <div className="hero-card">

              <img
                src="/logo.png"
                alt="Soni RERA Hub"
                className="hero-card-logo"
              />

              <h3>
                Learn. Prepare. Grow.
              </h3>

              <p>
                Practical RERA education for today's
                real-estate professionals.
              </p>

              <div className="hero-card-badge">
                <CheckIcon />
                Professional Learning
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="home-stats">

        <div className="home-stat">
          <span className="home-stat-value">
            15K+
          </span>
          <span className="home-stat-label">
            Learners
          </span>
        </div>

        <div className="home-stat">
          <span className="home-stat-value">
            50+
          </span>
          <span className="home-stat-label">
            Experts
          </span>
        </div>

        <div className="home-stat">
          <span className="home-stat-value">
            95%
          </span>
          <span className="home-stat-label">
            Success Rate
          </span>
        </div>

        <div className="home-stat">
          <span className="home-stat-value">
            25+
          </span>
          <span className="home-stat-label">
            Programs
          </span>
        </div>

      </section>

      {/* ================= WHY SONI RERA HUB ================= */}

      <section className="home-section">

        <div className="home-section-head">

          <div className="home-section-eyebrow">
            WHY SONI RERA HUB
          </div>

          <h2>
            Everything you need to understand RERA.
          </h2>

          <p>
            Learn the regulatory framework and develop
            practical knowledge that can help you navigate
            the real-estate ecosystem.
          </p>

        </div>

        <div className="home-features">

          {features.map((feature) => (
            <article
              className="home-feature-card"
              key={feature.title}
            >

              <div className="home-feature-icon">
                {feature.icon}
              </div>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>

            </article>
          ))}

        </div>

      </section>

      {/* ================= COURSES ================= */}

      <section className="home-course-section">
  <div className="home-section">

    <div className="home-section-head course-section-head">
      <div>
        <div className="home-eyebrow">
          <BookOpen size={16} />
          LEARNING PROGRAMS
        </div>

        <h2>Featured Courses</h2>

        <p>
          Choose a learning program based on your professional
          goals and RERA requirements.
        </p>
      </div>

      <Link
        to="/courses"
        className="view-all-courses-btn"
      >
        View All Courses
        <ArrowRight size={17} />
      </Link>
    </div>

    <div className="home-course-grid">
      {courses.map((course) => (
  <CourseCard
    key={course.id}
    course={course}
  />
))}
    </div>

  </div>
</section>

      {/* ================= EXAM PREPARATION ================= */}

      <section className="home-exam">

        <div className="home-exam-box">

          <div className="home-exam-content">

            <div className="home-section-eyebrow">
              EXAM PREPARATION
            </div>

            <h2>
              Prepare with confidence.
            </h2>

            <p>
              Structured preparation programs designed to
              help learners understand important RERA concepts
              and prepare for professional examinations.
            </p>

          </div>

          <Link
            to="/our-selections"
            className="home-exam-btn"
          >
            Explore Preparation
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

      {/* ================= TEAM ================= */}

      <section className="home-section">

        <div className="home-section-head center">

          <div className="home-section-eyebrow">
            OUR TEAM
          </div>

          <h2>
            Professionals behind Soni RERA Hub.
          </h2>

          <p>
            A multidisciplinary team bringing together
            legal, academic, marketing and professional
            expertise.
          </p>

        </div>

        <div className="home-team-grid">

          {teamPreview.map((member) => (
            <article
              className="home-team-card"
              key={member.name}
            >

              <div className="home-team-avatar">
  <img
    src={member.image}
    alt={member.name}
  />
</div>

              <h3>
                {member.name}
              </h3>

              <span>
                {member.role}
              </span>

              <p>
                {member.description}
              </p>

            </article>
          ))}

        </div>

        <div className="home-hero-actions">

          <Link
            to="/team"
            className="home-secondary-btn"
          >
            Meet Our Team
            <ArrowRight size={16} />
          </Link>

        </div>

      </section>

      {/* ================= BLOGS ================= */}

      <section className="home-course-section">

        <div className="home-section">

          <div className="home-section-head">

            <div className="home-section-eyebrow">
              KNOWLEDGE CENTER
            </div>

            <h2>
              Latest from our Blog
            </h2>

            <p>
              Explore RERA insights, compliance information
              and professional learning resources.
            </p>

          </div>

          <div className="home-blog-grid">

            {blogPreview.map((blog) => (
              <article
                className="home-blog-card"
                key={blog.title}
              >

                <div className="home-blog-image">
                  {blog.category}
                </div>

                <div className="home-blog-content">

                  <div className="home-blog-category">
                    {blog.category}
                  </div>

                  <h3>
                    {blog.title}
                  </h3>

                  <p>
                    {blog.description}
                  </p>

                  <Link to="/blogs">
                    Read More →
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="home-final-cta">

        <div className="home-final-cta-box">

          <MessageCircle
            size={35}
            color="#166534"
          />

          <h2>
            Ready to start your RERA journey?
          </h2>

          <p>
            Explore our courses, connect with our team
            and take the next step in your professional
            development.
          </p>

          <div className="home-hero-actions">

            <Link
              to="/courses"
              className="home-primary-btn"
            >
              Explore Courses
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="home-secondary-btn"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

function CheckIcon() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        background: "#166534",
        color: "#ffffff",
        fontSize: "10px",
      }}
    >
      ✓
    </span>
  );
}