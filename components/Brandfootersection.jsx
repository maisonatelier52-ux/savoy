"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function BrandFooterSection() {
  const sectionRef = useRef(null);
  const [scale, setScale] = useState(1.55);
  const [opacity, setOpacity] = useState(0.45);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;

      // progress: 0 when section top hits bottom of screen → 1 when centered
      const progress = Math.min(
        Math.max((windowH - rect.top) / (windowH + rect.height * 0.5), 0),
        1
      );

      // Scale: starts at 1.55, settles to 1.0 as section scrolls into view
      const s = 1.55 - progress * 0.55;
      // Opacity: starts at 0.45 (dim grey), becomes 1.0 fully white
      const o = 0.45 + progress * 0.55;

      setScale(Math.max(1, s));
      setOpacity(Math.min(1, Math.max(0.45, o)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
      `}</style>

      <section
        ref={sectionRef}
        className="relative w-full bg-[#080808] flex items-center justify-center overflow-hidden"
        style={{ minHeight: "52vh", padding: "6rem 2rem" }}
      >
        {/* Tiled star pattern background */}
        <div
          className="absolute inset-0 pointer-events-none bg-black"
        />

        {/* Vignette bottom-right */}
        <div
          className="absolute inset-0 pointer-events-none"
        />

        {/* Scroll-animated lockup */}
        <div
          className="relative z-10 flex flex-col items-center"
          style={{
            transform: `scale(${scale})`,
            opacity: opacity,
            willChange: "transform, opacity",
          }}
        >
          {/* Star + SAVOY on one row */}
          <div className="flex items-center" style={{ gap: "1.1rem" }}>
            {/*
              Replace svg below with your actual logo:
              <Image src="/savoy-star.png" alt="Savoy" width={82} height={82} />
            */}
              <Image src="/logo-savoy.png" alt="Savoy" width={82} height={82} />

            <span className="text-7xl  text-white"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                // fontSize: "clamp(4rem, 9vw, 7rem)",
                fontWeight: 400,
                letterSpacing: "0.02em",
                lineHeight: 1,
              }}
            >
              SAVOY
            </span>
          </div>

          {/* Subtitle — tight, no extra spacing */}
          <p className="text-[10px] text-white pl-20"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            //   fontSize: "clamp(0.72rem, 1.2vw, 0.82rem)",
              letterSpacing: "0.04em",
              fontWeight: 300,
            }}
          >
            SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
            <em style={{ fontStyle: "italic" }}>The Bahamas</em>
          </p>
        </div>
      </section>
    </>
  );
}