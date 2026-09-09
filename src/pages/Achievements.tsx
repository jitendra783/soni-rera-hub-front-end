import {
  Trophy,
  Users,
  Award,
  BookOpen,
} from "lucide-react";

import "./Achievements.css";

interface Achievement {
  value: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    value: "15K+",
    title: "Learners",
    description:
      "Learners reached through our educational initiatives.",
    icon: <Users />,
  },
  {
    value: "25+",
    title: "Programs",
    description:
      "Courses and professional learning programs.",
    icon: <BookOpen />,
  },
  {
    value: "95%",
    title: "Success Rate",
    description:
      "Strong learner outcomes across our programs.",
    icon: <Award />,
  },
  {
    value: "50+",
    title: "Experts",
    description:
      "Professionals and mentors contributing to learning.",
    icon: <Trophy />,
  },
];

export default function Achievements() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">
          OUR ACHIEVEMENTS
        </div>

        <h1>
          Growing a community of RERA learners.
        </h1>

        <p>
          Our journey is driven by learners,
          professionals and the real-estate community.
        </p>
      </section>

      <section className="section">
        <div className="stats">
          {achievements.map((achievement) => (
            <div key={achievement.title}>
              <div>
                {achievement.icon}
              </div>

              <strong>
                {achievement.value}
              </strong>

              <span>
                {achievement.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section soft">
        <div className="feature-grid">
          {achievements.map((achievement) => (
            <article
              className="feature"
              key={achievement.title}
            >
              <div className="feature-icon">
                {achievement.icon}
              </div>

              <h3>
                {achievement.title}
              </h3>

              <p>
                {achievement.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}