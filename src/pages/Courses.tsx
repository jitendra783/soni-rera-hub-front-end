import CourseCard from "../components/cards/CourseCard";
import { courses } from "../data/courses";
import "./Courses.css";

export default function Courses() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">
          LEARNING PROGRAMS
        </div>

        <h1>
          Courses designed for your RERA journey.
        </h1>

        <p>
          Explore RERA education, professional programs
          and exam preparation courses.
        </p>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              OUR COURSES
            </div>

            <h2>
              Explore Our Programs
            </h2>

            <p>
              Choose a program based on your learning
              and career goals.
            </p>
          </div>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
  <CourseCard
    key={course.id}
    course={course}
  />
))}
        </div>
      </section>
    </>
  );
}