import {
  ArrowRight,
  Clock,
  Globe,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./CourseCard.css";
import type { Course } from "../../data/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="course-card">

      {/* Top */}
      <div className="course-card-top">
        <span className="course-category">
          {course.category}
        </span>

        <div className="course-icon">
          <ArrowRight size={20} />
        </div>
      </div>

      {/* Title */}
      <h3>{course.title}</h3>

      {/* Description */}
      <p className="course-description">
        {course.description}
      </p>

      {/* Meta */}
      <div className="course-meta">

        {course.hours && (
          <span className="course-meta-item">
            <Clock size={15} />
            {course.hours}
          </span>
        )}

        {course.language && (
          <span className="course-meta-item">
            <Globe size={15} />
            {course.language}
          </span>
        )}

      </div>

      {/* Rating */}
      <div className="course-rating">
        <Star size={15} />

        <span>
          {course.rating ?? 4.9}
        </span>
      </div>

      <div className="course-card-divider" />

      {/* Price */}
      <div className="course-price">
        <span className="course-price-value">
          {course.price}
        </span>

        <span className="course-price-label">
          / course
        </span>
      </div>

      {/* Button */}
      <Link
        to={`/courses/${course.id}`}
        className="course-card-button"
      >
        View Course
        <ArrowRight size={16} />
      </Link>

    </article>
  );
}