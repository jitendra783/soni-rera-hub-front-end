import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">

        <div>
          <Link to="/" className="brand footer-brand">
            <span>SONI</span>
            RERA<span className="accent">HUB</span>
          </Link>

          <p>
            Professional RERA education, exam preparation and
            real-estate compliance learning.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/courses">Courses</Link>
          <Link to="/courses">Exam Preparation</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/achievements">Achievements</Link>
        </div>

        <div>
          <h4>Company</h4>
          <Link to="/about">About RERA</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/about">Collaboration</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link to="/contact">FAQs</Link>
          <Link to="/contact">Privacy Policy</Link>
          <Link to="/contact">Terms</Link>
          <Link to="/contact">Support</Link>
        </div>

      </div>

      <div className="copyright">
        © 2026 Soni RERA Hub. All rights reserved.
      </div>
    </footer>
  );
}