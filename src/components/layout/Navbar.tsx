import { Link } from "react-router-dom";
import {
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

import "./Navbar.css";

interface NavbarProps {
  dark: boolean;
  setDark: (value: boolean) => void;
}

export default function Navbar({
  dark,
  setDark,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="nav">
      <div className="nav-inner">

        {/* ================= BRAND ================= */}

        <Link
          to="/"
          className="brand"
          onClick={closeMobileMenu}
        >
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

        {/* ================= DESKTOP NAV ================= */}

        <nav className="desktop-nav">

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            Why RERA
          </Link>

          <Link to="/courses">
            Courses
          </Link>

          <a href="/#exam">
            Exam Prep
          </a>

          {/* FIXED */}
          <Link to="/blogs">
            Blogs
          </Link>

          {/* FIXED */}
          <Link to="/team">
            Our Team
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </nav>

        {/* ================= ACTIONS ================= */}

        <div className="nav-actions">

          <button
            type="button"
            className="icon-btn"
            aria-label={
              dark
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            onClick={() => setDark(!dark)}
          >
            {dark ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          <Link
            className="login"
            to="/login"
          >
            Login
          </Link>

          <Link
            className="register"
            to="/register"
          >
            Register
          </Link>

          <button
            type="button"
            className="menu"
            aria-label={
              mobileOpen
                ? "Close menu"
                : "Open menu"
            }
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>
      </div>

      {/* ================= MOBILE NAV ================= */}

      {mobileOpen && (
        <div className="mobile-nav">

          <Link
            to="/"
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={closeMobileMenu}
          >
            Why RERA
          </Link>

          <Link
            to="/courses"
            onClick={closeMobileMenu}
          >
            Courses
          </Link>

          <a
            href="/#exam"
            onClick={closeMobileMenu}
          >
            Exam Prep
          </a>

          {/* FIXED */}
          <Link
            to="/blogs"
            onClick={closeMobileMenu}
          >
            Blogs
          </Link>

          {/* FIXED */}
          <Link
            to="/team"
            onClick={closeMobileMenu}
          >
            Our Team
          </Link>

          <Link
            to="/contact"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>

          <div className="mobile-auth">

            <Link
              to="/login"
              onClick={closeMobileMenu}
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={closeMobileMenu}
              className="mobile-register"
            >
              Register
            </Link>

          </div>

        </div>
      )}
    </header>
  );
}