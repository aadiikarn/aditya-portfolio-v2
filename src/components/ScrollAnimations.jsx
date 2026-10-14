
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollAnimations() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const selector = [
      "main > section",
      'main [class*="rounded-[28px]"]',
      'main [class*="rounded-[32px]"]',
      "main article",
    ].join(", ");

    const elements = document.querySelectorAll(selector);

    // Accessibility: respect the user's motion preference.
    if (reduceMotion.matches) {
      elements.forEach((element) => {
        element.classList.remove("ui-reveal");
        element.classList.add("ui-revealed");
      });

      return;
    }

    // Fallback for browsers without IntersectionObserver.
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.remove("ui-reveal");
        element.classList.add("ui-revealed");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ui-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element, index) => {
      element.classList.remove("ui-revealed");
      element.classList.add("ui-reveal");

      element.style.setProperty(
        "--reveal-delay",
        `${(index % 4) * 90}ms`
      );

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
