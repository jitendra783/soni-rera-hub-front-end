import { Users } from "lucide-react";
import "./Team";
interface TeamMember {
  name: string;
  role: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "CEO & Director",
    role: "Leadership",
    description:
      "Driving the vision, strategy and growth of Soni RERA Hub.",
  },
  {
    name: "Legal Team",
    role: "RERA & Compliance",
    description:
      "Providing legal expertise and practical guidance on RERA and real-estate regulations.",
  },
  {
    name: "Academic Faculty",
    role: "Training & Exams",
    description:
      "Designing structured learning programs and examination preparation.",
  },
  {
    name: "Marketing Team",
    role: "Marketing & Growth",
    description:
      "Building awareness and connecting learners with relevant programs.",
  },
  {
    name: "Public Relations",
    role: "Community & Partnerships",
    description:
      "Managing relationships, collaborations and community engagement.",
  },
];

export default function Team() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">
          <Users size={16} />
          PEOPLE BEHIND THE PLATFORM
        </div>

        <h1>
          Meet Our Team
        </h1>

        <p>
          Meet the professionals working together to
          build better RERA education.
        </p>
      </section>

      <section className="section">
        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.name}
              member={member}
            />
          ))}
        </div>
      </section>
    </>
  );
}

interface TeamCardProps {
  member: TeamMember;
}

function TeamCard({
  member,
}: TeamCardProps) {
  return (
    <article className="team-card">
      <div className="avatar">
        {member.name.charAt(0)}
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
  );
}