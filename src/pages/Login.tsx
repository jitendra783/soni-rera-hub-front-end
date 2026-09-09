import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <section className="auth">
      <div className="auth-card">

        <Link to="/" className="brand auth-brand">
          <span>R</span>
          RERA<span className="accent">HUB</span>
        </Link>

        <h1>Welcome back</h1>

        <p>
          Sign in to continue your learning journey.
        </p>

        <form className="auth-form">
          <label htmlFor="login-email">
            Email or mobile number
          </label>

          <input
            id="login-email"
            type="text"
            placeholder="Enter email or mobile number"
            autoComplete="username"
          />

          <label htmlFor="login-password">
            Password
          </label>

          <input
            id="login-password"
            type="password"
            placeholder="Enter password"
            autoComplete="current-password"
          />

          <div className="auth-options">
            <label className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <Link to="/forgot-password">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="cta"
          >
            Login
          </button>
        </form>

        <small>
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </small>

      </div>
    </section>
  );
}