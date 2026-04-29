"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ── Intersection Observer hook — fires once when section enters viewport ── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const pillars = [
  "Legacy and Tradition",
  "International Perspective",
  "Customized Solutions",
  "Bahamas-Based, Globally Oriented",
];

export default function SecondSection() {
  const [rowRef, rowInView] = useInView(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');
      `}</style>

      <section className="relative w-full overflow-hidden bg-[#0a0a0a]" style={{ minHeight: "100vh" }}>

        {/* ── Tiled star pattern background ── */}
        <div
          className="absolute inset-0 pointer-events-none"
        //   style={{
        //     backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
        //       <svg xmlns='http://www.w3.org/2000/svg' width='88' height='88' viewBox='0 0 88 88'>
        //         <g fill='white' opacity='0.11'>
        //           <path d='M44 4 L46.5 40 L44 44 L41.5 40 Z'/>
        //           <path d='M44 84 L46.5 48 L44 44 L41.5 48 Z'/>
        //           <path d='M4 44 L40 41.5 L44 44 L40 46.5 Z'/>
        //           <path d='M84 44 L48 41.5 L44 44 L48 46.5 Z'/>
        //           <path d='M74 14 L48 40 L44 44 L40 40 Z' opacity='0.65'/>
        //           <path d='M14 14 L40 40 L44 44 L48 40 Z' opacity='0.65'/>
        //           <path d='M74 74 L48 48 L44 44 L40 48 Z' opacity='0.65'/>
        //           <path d='M14 74 L40 48 L44 44 L48 48 Z' opacity='0.65'/>
        //         </g>
        //       </svg>
        //     `)}`,
        //     backgroundRepeat: "repeat",
        //     backgroundSize: "88px 88px",
        //   }}

        style={{ backgroundImage: `url("/savoy-background.png")`}}
       
        />

        {/* ── Top text block ── */}
        <div className="relative z-10 pl-18 pt-20 pb-4 max-w-[660px]">
          <p
            className="mb-6 uppercase tracking-widest"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.67rem",
              letterSpacing: "0.18em",
            }}
          >
            SAVOY BANK &amp; TRUST &nbsp;|&nbsp; Traditional Values. International Perspective
          </p>

          <p
            className="mb-8 leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "white",
              fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Savoy Bank &amp; Trust brings together traditional banking values and an
            international perspective to deliver tailored financial solutions for a
            discerning clientele. Our approach is grounded in personal attention,
            measured judgment, and long-term relationships built on trust.
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "rgba(255,255,255,0.45)",
              fontSize: "clamp(0.73rem, 1.3vw, 0.83rem)",
              fontWeight: 300,
              lineHeight: 1.75,
            }}
          >
            From day-to-day banking needs to more specialized fiduciary and market-related
            requirements, Savoy offers a refined client experience shaped around individual
            objectives rather than standardized service models.
          </p>
        </div>

        {/* ── Bottom row: oversized star (left) + pillar text (right) ── */}
        <div
          ref={rowRef}
          className="relative z-10 flex items-center px-30"
          style={{ minHeight: "100vh" }}
        >
          {/* Left column — logo grows in, bleeds off-screen left */}
          <div
            className="relative flex-shrink-0 overflow-hidden"
            style={{ width: "44%", minHeight: "100vh" }}
          >
            <div
              style={{
                position: "absolute",
                left: "1%",
                top: "50%",
                transformOrigin: "center center",
                transform: rowInView
                  ? "translateY(-50%) scale(1)"
                  : "translateY(-50%) scale(0.08)",
                opacity: rowInView ? 1 : 0,
                transition: [
                  "transform 1.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
                  "opacity 1s ease-in 0.1s",
                ].join(", "),
              }}
            >
              {/*
                ── Replace with your actual logo image:
                   <Image src="/savoy-star.png" alt="Savoy" width={560} height={560} />
                ──
              */}
              <Image
                src="/logo-savoy.png"
                alt="Savoy Star"
                width={600}
                height={600}
                priority
              />
            </div>
          </div>

          {/* Right column — staggered pillar lines */}
          {/* <div className="flex flex-col pl-50" style={{ width: "56%", paddingRight: "3rem" }}>
            {pillars.map((text, i) => (
              <p
                key={text}
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: "white",
                  fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  margin: 0,
                  opacity: rowInView ? 1 : 0,
                  transform: rowInView ? "translateX(0)" : "translateX(28px)",
                  transition: [
                    `opacity 1s ease ${0.5 + i * 0.2}s`,
                    `transform 1s ease ${0.5 + i * 0.2}s`,
                  ].join(", "),
                }}
              >
                {text}
              </p>
            ))}
          </div> */}
            <div className="flex flex-col pl-50" style={{ width: "56%", paddingRight: "3rem" }}>
            {pillars.map((text, i) => (
                <p
                key={text}
                style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: "white",
                    fontSize: "clamp(0.95rem, 1.8vw, 2.2rem)",
                    fontWeight: 300,
                    lineHeight: 1.3,
                    margin: 0,
                    opacity: rowInView ? 1 : 0,
                    transition: `opacity 6s cubic-bezier(0.4, 0, 0.2, 1)`,
                }}
                >
                {text}
                </p>
            ))}
            </div>
        </div>
      </section>
    </>
  );
}