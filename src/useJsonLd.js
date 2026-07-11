import { useEffect } from "react";

// Injects a <script type="application/ld+json"> into <head> for the
// lifetime of the calling component, removing it on unmount/route change.
export default function useJsonLd(data) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => script.remove();
  }, [data]);
}
