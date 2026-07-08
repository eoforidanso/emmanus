import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnnouncementBar from "./components/AnnouncementBar";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Resources from "./pages/Resources";
import HowBookingWorks from "./pages/HowBookingWorks";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

function RouteFade({ children }) {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="page-fade">
      {children}
    </div>
  );
}

function getInitialTheme() {
  const saved = localStorage.getItem("ew-theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("ew-theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#121b15" : "#faf7f2");
  }, [theme]);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar
        theme={theme}
        onToggleTheme={() =>
          setTheme((t) => (t === "light" ? "dark" : "light"))
        }
      />
      <main id="main">
        <RouteFade>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/how-booking-works" element={<HowBookingWorks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RouteFade>
      </main>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}
