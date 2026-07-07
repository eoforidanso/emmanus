import { useEffect } from "react";

const SITE = "Emmanus Wellness";
const DEFAULT_TITLE = `${SITE} | Telehealth Mental Health Care`;
const DEFAULT_DESC =
  "Emmanus Wellness — compassionate mental health care through secure telehealth. Therapy, psychiatry, and wellness support from wherever you are.";

export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : DEFAULT_TITLE;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description || DEFAULT_DESC);
  }, [title, description]);
}
