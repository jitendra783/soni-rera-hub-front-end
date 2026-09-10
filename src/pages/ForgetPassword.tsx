import { Link } from "react-router-dom";
import "./ForgetPassword.css";

export default function ForgotPassword() {
  return (
    <section className="auth">
      <div className="auth-card forgot-card">

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

        <h1>Forgot your password?</h1>

        <p>
          Enter your registered email or mobile number and
          we'll help you reset your password.
        </p>

        <form className="auth-form">

          <label htmlFor="forgot-identifier">
            Email or mobile number
          </label>

          <input
            id="forgot-identifier"
            type="text"
            placeholder="Enter email or mobile number"
            autoComplete="username"
          />

          <button
            type="submit"
            className="cta"
          >
            Continue
          </button>

        </form>

        <small>
          Remember your password?{" "}
          <Link to="/login">
            Login
          </Link>
        </small>

      </div>
    </section>
  );
}