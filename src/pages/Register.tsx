import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  return (
    <section className="auth">
      <div className="auth-card register-card">
        <Link to="/" className="brand auth-brand">
           <img
            src="/logo.png"
            alt="Soni RERA Hub"
            className="brand-logo"
          />
            <span className="brand-name">
            SONI{" "}
            <span className="accent">
              RERA
            </span>{" "}
            HUB
          </span>
        </Link>

        <h1>Create your account</h1>
        <p>Start learning and track your progress.</p>

        <form className="auth-form">
          <label htmlFor="register-name">Full Name</label>
          <input
            id="register-name"
            type="text"
            placeholder="Enter your full name"
            autoComplete="name"
          />

          <label htmlFor="register-email">Email Address</label>
          <input
            id="register-email"
            type="email"
            placeholder="Enter your email address"
            autoComplete="email"
          />

          <label htmlFor="register-mobile">Mobile Number</label>
          <input
            id="register-mobile"
            type="tel"
            placeholder="Enter your mobile number"
            autoComplete="tel"
          />

          <label htmlFor="register-password">Password</label>
          <input
            id="register-password"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
          />

          <label htmlFor="register-language">Preferred Language</label>
          <select id="register-language" defaultValue="">
            <option value="" disabled>
              Select your preferred language
            </option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="marathi">Marathi</option>
          </select>

          <button type="submit" className="cta">
            Create Account
          </button>
        </form>

        <small>
          Already registered? <Link to="/login">Login</Link>
        </small>
      </div>
    </section>
  );
}