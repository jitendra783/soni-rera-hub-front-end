import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blog";
import Feedback from "./pages/Feedback";
import OurSelections from "./pages/OurSelection";
import Achievements from "./pages/Achievements";
import Register from "./pages/Register";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <Navbar
        dark={dark}
        setDark={setDark}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route
          path="/our-selections"
          element={<OurSelections />}
        />
        <Route
          path="/achievements"
          element={<Achievements />}
        />
      </Routes>

      <Footer />
    </div>
  );
}