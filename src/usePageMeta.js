import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "Emmanus Wellness";
const SITE_URL = "https://emmanuswellness.com";
const DEFAULT_TITLE = `${SITE} | Telehealth Mental Health Care`;
const DEFAULT_DESC =
  "Emmanus Wellness — compassionate mental health care through secure telehealth. Therapy, psychiatry, and wellness support from wherever you are.";

export default function usePageMeta(title, description) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : DEFAULT_TITLE;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description || DEFAULT_DESC);

    const canonicalUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);
  }, [title, description, pathname]);
}
