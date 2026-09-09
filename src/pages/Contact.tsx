import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import "./Contact.css";

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">
          GET IN TOUCH
        </div>

        <h1>
          We'd love to hear from you.
        </h1>

        <p>
          Ask about courses, collaborations,
          exam preparation or professional programs.
        </p>
      </section>

      <section className="section contact-grid">
        <div>
          <h2>
            Contact Soni RERA Hub
          </h2>

          <p>
            Our team will get back to you with
            the right information.
          </p>

          <div className="contact-item">
            <Mail size={20} />
            <span>
              [Your email address]
            </span>
          </div>

          <div className="contact-item">
            <Phone size={20} />
            <span>
              [Your phone number]
            </span>
          </div>

          <div className="contact-item">
            <MapPin size={20} />
            <span>
              Maharashtra, India
            </span>
          </div>
        </div>

        <form className="form">
          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <textarea
            placeholder="How can we help?"
          />

          <button
            className="cta"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}