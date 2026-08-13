import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnnouncementBar from "./components/AnnouncementBar";
import BackToTop from "./components/BackToTop";
import BookingWidget from "./components/BookingWidget";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";

// Home stays eager — it’s the landing page. The rest load on navigation,
// which keeps the self-care tools on /resources out of the initial bundle.
const Services = lazy(() => import("./pages/Services"));
const Team = lazy(() => import("./pages/Team"));
const Resources = lazy(() => import("./pages/Resources"));
const HowBookingWorks = lazy(() => import("./pages/HowBookingWorks"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
      ?.setAttribute("content", theme === "dark" ? "#0e1a16" : "#f7f4ef");
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
          {/* Reserve height so swapping in a lazy page doesn’t collapse the
              layout and bounce the footer up on slow connections. */}
          <Suspense fallback={<div style={{ minHeight: "70vh" }} />}>
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
          </Suspense>
        </RouteFade>
      </main>
      <Footer />
      <BackToTop />
      <BookingWidget />
    </BrowserRouter>
  );
}
