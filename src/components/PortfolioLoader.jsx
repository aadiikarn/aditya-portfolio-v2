
import { useEffect, useState } from "react";

const letters = Array.from("Aditya Kumar Karan");

export default function PortfolioLoader({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {children}

      {isLoading && (
        <div className="portfolio-loader" role="status" aria-label="Loading portfolio">
          <div className="loader-shape loader-shape-lime" />
          <div className="loader-shape loader-shape-purple" />

          <div className="cinematic-stage">
            <div className="cinematic-name">
              {letters.map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  className={`cinematic-letter ${
                    letter === " " ? "cinematic-space" : ""
                  }`}
                  style={{ "--i": index }}
                  aria-hidden="true"
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </div>

            <div className="cinematic-underline" />

            <div className="cinematic-caption">
              <span>DESIGN</span>
              <span className="caption-star">✳</span>
              <span>DEVELOP</span>
              <span className="caption-star">✳</span>
              <span>CREATE</span>
            </div>
          </div>

          <div className="cinematic-corner cinematic-top-left">
            PERSONAL PORTFOLIO
          </div>
          <div className="cinematic-corner cinematic-top-right">
            EST. 2026
          </div>
          <div className="cinematic-corner cinematic-bottom-left">
            ADITYA / DEVELOPER
          </div>
          <div className="cinematic-corner cinematic-bottom-right">
            <span className="loader-live-dot" />
            BUILDING IDEAS
          </div>
        </div>
      )}
    </>
  );
}
