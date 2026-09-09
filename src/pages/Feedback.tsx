import {
  MessageCircle,
  Star,
} from "lucide-react";
import "./Feedback.css";

interface FeedbackItem {
  name: string;
  role: string;
  message: string;
  rating: number;
}


const feedback: FeedbackItem[] = [
  {
    name: "Student",
    role: "Course Participant",
    message:
      "The structured learning approach helped me understand RERA concepts much better.",
    rating: 5,
  },
  {
    name: "Real Estate Professional",
    role: "Professional Learner",
    message:
      "The practical approach makes the learning experience useful for real-world situations.",
    rating: 5,
  },
  {
    name: "Exam Candidate",
    role: "RERA Exam Preparation",
    message:
      "The preparation material and practice questions were very helpful.",
    rating: 5,
  },
];

export default function Feedback() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">
          <MessageCircle size={16} />
          LEARNER FEEDBACK
        </div>

        <h1>
          What our learners say
        </h1>

        <p>
          Feedback from learners and professionals
          who have experienced our programs.
        </p>
      </section>

      <section className="section">
        <div className="blog-grid">
          {feedback.map((item, index) => (
            <article
              className="feature"
              key={index}
            >
              <div className="feature-icon">
                <MessageCircle />
              </div>

              <div>
                {Array.from({
                  length: item.rating,
                }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={16}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p>
                "{item.message}"
              </p>

              <h3>
                {item.name}
              </h3>

              <span>
                {item.role}
              </span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}