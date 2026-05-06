// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// /* ── Intersection Observer hook — fires once when section enters viewport ── */
// function useInView(threshold = 0.12) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           obs.disconnect();
//         }
//       },
//       { threshold },
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// const pillars = [
//   "Legacy and Tradition",
//   "International Perspective",
//   "Customized Solutions",
//   "Bahamas-Based, Globally Oriented",
// ];

// export default function SecondSection() {
//   const [rowRef, rowInView] = useInView(0.1);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');
//       `}</style>

//       <section
//         className="relative w-full overflow-hidden bg-[#0a0a0a]"
//         style={{ minHeight: "100vh" }}
//       >
//         {/* ── Tiled star pattern background ── */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           //   style={{
//           //     backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
//           //       <svg xmlns='http://www.w3.org/2000/svg' width='88' height='88' viewBox='0 0 88 88'>
//           //         <g fill='white' opacity='0.11'>
//           //           <path d='M44 4 L46.5 40 L44 44 L41.5 40 Z'/>
//           //           <path d='M44 84 L46.5 48 L44 44 L41.5 48 Z'/>
//           //           <path d='M4 44 L40 41.5 L44 44 L40 46.5 Z'/>
//           //           <path d='M84 44 L48 41.5 L44 44 L48 46.5 Z'/>
//           //           <path d='M74 14 L48 40 L44 44 L40 40 Z' opacity='0.65'/>
//           //           <path d='M14 14 L40 40 L44 44 L48 40 Z' opacity='0.65'/>
//           //           <path d='M74 74 L48 48 L44 44 L40 48 Z' opacity='0.65'/>
//           //           <path d='M14 74 L40 48 L44 44 L48 48 Z' opacity='0.65'/>
//           //         </g>
//           //       </svg>
//           //     `)}`,
//           //     backgroundRepeat: "repeat",
//           //     backgroundSize: "88px 88px",
//           //   }}

//           style={{ backgroundImage: `url("/savoy-background.png")` }}
//         />
//         <div className="absolute inset-0 bg-black/70" />

//         {/* ── Top text block ── */}
//         <div className="relative z-10 pl-18 pt-50 pb-4 max-w-[660px] ">
//           {/* <p
//             className="mb-6 uppercase tracking-widest"
//             style={{
//               fontFamily: "'Cormorant Garamond', Georgia, serif",
//               color: "rgb(255, 255, 255)",
//               // fontSize: "0.67rem",
//               letterSpacing: "0.18em",
//             }}
//           >
//             SAVOY BANK &amp; TRUST &nbsp;|&nbsp; Traditional Values. International Perspective
//           </p> */}
//           <p
//             className="mb-6 tracking-widest"
//             style={{
//               color: "rgb(255, 255, 255)",
//               fontSize: "0.95rem",
//               // letterSpacing: "0.18em",
//             }}
//           >
//             <span
//               style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
//             >
//               SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
//             </span>
//             <span
//               style={{
//                 fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//                 // textTransform: "lowercase",
//               }}
//             >
//               Traditional Values. International Perspective
//             </span>
//           </p>

//           <p
//   className="mb-8"
//   style={{
//     fontFamily: "'Cormorant Garamond', Georgia, serif",
//     color: "white",
//     fontSize: "clamp(1.8rem, 2vw, 1.3rem)",
//     fontWeight: 300,
//     lineHeight: 1.3,  // Reduced from default (~1.7)
//   }}
// >
//   Savoy Bank &amp; Trust brings together traditional banking values
//   and an international perspective to deliver tailored financial
//   solutions for a discerning clientele. Our approach is grounded in
//   personal attention, measured judgment, and long-term relationships
//   built on trust.
// </p>

//           <p
//   style={{
//     fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//     color: "rgb(255, 255, 255)",
//     fontSize: "clamp(0.90rem, 1.3vw, 0.83rem)",
//     fontWeight: 400,
//     lineHeight: 1.3,
//   }}
// >
//   From day-to-day banking needs to more specialized fiduciary and
//   market-related requirements, Savoy offers a refined client
//   experience shaped around individual objectives rather than
//   standardized service models.
// </p>
//         </div>

//         {/* ── Bottom row: oversized star (left) + pillar text (right) ── */}
//         <div
//           ref={rowRef}
//           className="relative z-10 flex items-center px-20 pb-35"
//           style={{ minHeight: "100vh" }}
//         >
//           {/* Left column — logo grows in, bleeds off-screen left */}
//           <div
//             className="relative flex-shrink-0 overflow-hidden"
//             style={{ width: "44%", minHeight: "100vh" }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 left: "1%",
//                 top: "50%",
//                 transformOrigin: "center center",
//                 transform: rowInView
//                   ? "translateY(-50%) scale(1)"
//                   : "translateY(-50%) scale(0.08)",
//                 opacity: rowInView ? 1 : 0,
//                 transition: [
//                   "transform 1.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
//                   "opacity 1s ease-in 0.1s",
//                 ].join(", "),
//               }}
//             >
//               {/*
//                 ── Replace with your actual logo image:
//                    <Image src="/savoy-star.png" alt="Savoy" width={560} height={560} />
//                 ──
//               */}
//               <Image
//                 src="/logo-savoy.png"
//                 alt="Savoy Star"
//                 width={600}
//                 height={600}
//                 priority
//               />
//             </div>
//           </div>

//           {/* Right column — staggered pillar lines */}
//           {/* <div className="flex flex-col pl-50" style={{ width: "56%", paddingRight: "3rem" }}>
//             {pillars.map((text, i) => (
//               <p
//                 key={text}
//                 style={{
//                   fontFamily: "'Cormorant Garamond', Georgia, serif",
//                   color: "white",
//                   fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
//                   fontWeight: 300,
//                   lineHeight: 1.8,
//                   margin: 0,
//                   opacity: rowInView ? 1 : 0,
//                   transform: rowInView ? "translateX(0)" : "translateX(28px)",
//                   transition: [
//                     `opacity 1s ease ${0.5 + i * 0.2}s`,
//                     `transform 1s ease ${0.5 + i * 0.2}s`,
//                   ].join(", "),
//                 }}
//               >
//                 {text}
//               </p>
//             ))}
//           </div> */}
//           <div
//             className="flex flex-col pl-50"
//             style={{ width: "56%", paddingRight: "3rem" }}
//           >
//             {pillars.map((text, i) => (
//               <p
//                 key={text}
//                 style={{
//                   fontFamily: "'Cormorant Garamond', Georgia, serif",
//                   color: "white",
//                   fontSize: "clamp(0.95rem, 1.8vw, 2.2rem)",
//                   fontWeight: 400,
//                   lineHeight: 1.0,
//                   margin: 0,
//                   opacity: rowInView ? 1 : 0,
//                   transition: `opacity 6s cubic-bezier(0.4, 0, 0.2, 1)`,
//                 }}
//               >
//                 {text}
//               </p>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// function useInView(threshold = 0.12) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           obs.disconnect();
//         }
//       },
//       { threshold },
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// const pillars = [
//   "Legacy and Tradition",
//   "International Perspective",
//   "Customized Solutions",
//   "Bahamas-Based, Globally Oriented",
// ];

// export default function SecondSection() {
//   const [rowRef, rowInView] = useInView(0.1);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');

//         /* ── Mobile-only overrides — desktop untouched ── */
//         @media (max-width: 1024px) {
//           .second-top-block { padding-left: 5vw !important; padding-top: 18vh !important; }
//           .second-bottom-row { padding-left: 5vw !important; padding-right: 5vw !important; }
//           .second-logo-col { width: 40% !important; }
//           .second-pillars-col { width: 60% !important; padding-left: 1.5rem !important; }
//         }

//         @media (max-width: 640px) {
//           .second-top-block {
//             padding-left: 6vw !important;
//             padding-right: 6vw !important;
//             padding-top: 12vh !important;
//             max-width: 100% !important;
//           }
//           .second-bottom-row {
//             flex-direction: column !important;
//             align-items: center !important;
//             padding-left: 6vw !important;
//             padding-right: 6vw !important;
//             padding-bottom: 12vh !important;
//             min-height: unset !important;
//           }
//           .second-logo-col {
//             width: 100% !important;
//             min-height: 260px !important;
//             height: 260px !important;
//           }
//           .second-logo-inner {
//             right: 50% !important;
//             transform-origin: center center !important;
//           }
//           .second-logo-inner-animated-in {
//             transform: translate(-50%, -50%) scale(1) !important;
//           }
//           .second-logo-inner-animated-out {
//             transform: translate(-50%, -50%) scale(0.08) !important;
//           }
//           .second-pillars-col {
//             width: 100% !important;
//             padding-left: 0 !important;
//             text-align: left !important;
//           }
//           .second-pillar-text {
//             font-size: clamp(1.1rem, 5vw, 1.6rem) !important;
//           }
//         }
//       `}</style>

//       <section
//         className="relative w-full overflow-hidden bg-[#0a0a0a]"
//         style={{ minHeight: "100vh" }}
//       >
//         {/* Background — unchanged */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           // style={{ backgroundImage: `url("/savoy-background2.png")` }}
//           style={{
//             fontFamily: "'Cormorant', Georgia, serif",
//             backgroundImage: "url('/savoy-background2.png')",
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//         <div className="absolute inset-0 bg-black/50" />

//         {/* ── Top text block — original styles ── */}
//         <div className="second-top-block relative z-10 pl-18 pt-30 pb-40 max-w-[660px]">
//           <p
//             className="mb-6 tracking-widest"
//             style={{ color: "rgb(255, 255, 255)", fontSize: "0.95rem" }}
//           >
//             <span
//               style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
//             >
//               SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
//             </span>
//             <span
//               style={{
//                 fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//               }}
//             >
//               Traditional Values. International Perspective
//             </span>
//           </p>

//           <p
//             className="mb-8"
//             style={{
//               fontFamily: "'Cormorant Garamond', Georgia, serif",
//               color: "white",
//               fontSize: "clamp(1.8rem, 2vw, 1.3rem)",
//               fontWeight: 300,
//               lineHeight: 1.0,
//             }}
//           >
//             Savoy Bank &amp; Trust brings together traditional banking values
//             and an international perspective to deliver tailored financial
//             solutions for a discerning clientele. Our approach is grounded in
//             personal attention, measured judgment, and long-term relationships
//             built on trust.
//           </p>

//           <p
//             style={{
//               fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//               color: "rgb(255, 255, 255)",
//               fontSize: "clamp(0.83rem, 1.1vw, 0.95rem)",
//               fontWeight: 300,
//               lineHeight: 1.3,
//             }}
//           >
//             From day-to-day banking needs to more specialized fiduciary and
//             market-related requirements, Savoy offers a refined client
//             experience shaped around individual objectives rather than
//             standardized service models.
//           </p>
//         </div>

//         {/* ── Bottom row — original styles ── */}
//         <div
//           ref={rowRef}
//           className="second-bottom-row relative z-10 flex items-center px-20 pb-25"
//           style={{ minHeight: "100vh" }}
//         >
//           {/* Logo col */}
//           <div
//             className="second-logo-col relative flex-shrink-0 overflow-hidden"
//             style={{ width: "44%", minHeight: "100vh" }}
//           >
//             <div
//               className="second-logo-inner"
//               style={{
//                 position: "absolute",
//                 left: "1%",
//                 top: "50%",
//                 transformOrigin: "center center",
//                 transform: rowInView
//                   ? "translateY(-50%) scale(1)"
//                   : "translateY(-50%) scale(0.08)",
//                 opacity: rowInView ? 1 : 0,
//                 transition: [
//                   "transform 1.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
//                   "opacity 1s ease-in 0.1s",
//                 ].join(", "),
//               }}
//             >
//               <Image
//                 src="/logo-savoy.png"
//                 alt="Savoy Star"
//                 width={600}
//                 height={600}
//                 priority
//               />
//             </div>
//           </div>

//           {/* Pillars col */}
//           <div
//             className="second-pillars-col flex flex-col pl-50"
//             style={{ width: "56%", paddingRight: "3rem" }}
//           >
//             {pillars.map((text, i) => (
//               <p
//                 key={text}
//                 className="second-pillar-text"
//                 style={{
//                   fontFamily: "'Cormorant Garamond', Georgia, serif",
//                   color: "white",
//                   fontSize: "clamp(1.8rem, 2vw, 1.3rem)",
//                   fontWeight: 500,
//                   lineHeight: 1.1,
//                   margin: 0,
//                   opacity: rowInView ? 1 : 0,
//                   transition: `opacity 6s cubic-bezier(0.4, 0, 0.2, 1)`,
//                 }}
//               >
//                 {text}
//               </p>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
      { threshold },
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
  const [topRef, topInView] = useInView(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');

        /* ── Top block grid ── */
        .second-top-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 3rem;
        }

        /* ── Image fade-in ── */
        @keyframes imgFadeIn {
          from { opacity: 0; transform: scale(0.96) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .second-top-img-wrap.visible {
          animation: imgFadeIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .second-top-img-wrap {
          opacity: 0;
        }

        /* ── Desktop untouched ── */
        @media (min-width: 1025px) {
          .second-top-block {
            padding-left: 4.5rem;
            padding-top: 7.5rem;
            padding-bottom: 10rem;
          }
        }

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .second-top-block  { padding-left: 5vw !important; padding-top: 18vh !important; }
          .second-top-grid   { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
          .second-bottom-row { padding-left: 5vw !important; padding-right: 5vw !important; }
          .second-logo-col   { width: 40% !important; }
          .second-pillars-col { width: 60% !important; padding-left: 1.5rem !important; }
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
            .second-top-img-inner {
              transform: translateX(0) !important;
            }
          }
        @media (max-width: 640px) {
          .second-top-block {
            padding-left: 6vw !important;
            padding-right: 6vw !important;
            padding-top: 10vh !important;
            padding-bottom: 6vh !important;
            max-width: 100% !important;
          }

          /* Stack: image on top, text below */
          .second-top-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          /* Move image to row 1, text to row 2 */
          .second-top-text  { order: 2 !important; }
          .second-top-image { order: 1 !important; }

          /* Image sizing on mobile */
          .second-top-image {
            width: 100% !important;
            max-width: 100% !important;
          }
          .second-top-img-inner {
            width: 100% !important;
            height: 280px !important;
            border-radius: 4px !important;
          }

          .second-bottom-row {
            flex-direction: column !important;
            align-items: center !important;
            padding-left: 6vw !important;
            padding-right: 6vw !important;
            padding-bottom: 12vh !important;
            min-height: unset !important;
          }
          .second-logo-col {
            width: 100% !important;
            min-height: 260px !important;
            height: 260px !important;
          }
          .second-logo-inner {
            right: 50% !important;
            transform-origin: center center !important;
          }
          .second-logo-inner-animated-in  { transform: translate(-50%, -50%) scale(1)    !important; }
          .second-logo-inner-animated-out { transform: translate(-50%, -50%) scale(0.08) !important; }
          .second-pillars-col {
            width: 100% !important;
            padding-left: 0 !important;
            text-align: left !important;
          }
          .second-pillar-text {
            font-size: clamp(1.1rem, 5vw, 1.6rem) !important;
          }
        }
      `}</style>

      <section
        className="relative w-full overflow-hidden bg-[#0a0a0a]"
        style={{ minHeight: "100vh" }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/savoy-background2.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* ── Top block: text LEFT + image RIGHT ── */}
        <div
          ref={topRef}
          className="second-top-block relative z-10"
          style={{ paddingLeft: "4.5rem", paddingTop: "7.5rem", paddingBottom: "3rem" }}
        >
          <div className="second-top-grid" style={{ maxWidth: "1100px" }}>

            {/* LEFT — text content */}
            <div className="second-top-text">
              <p
                className="mb-6 tracking-widest"
                style={{ color: "rgb(255, 255, 255)", fontSize: "0.95rem" }}
              >
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
                </span>
                <span style={{ fontFamily: "'General Sans', 'Inter', system-ui, sans-serif" }}>
                  Traditional Values. International Perspective
                </span>
              </p>

              <p
                className="mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: "white",
                  fontSize: "clamp(1.8rem, 2vw, 1.3rem)",
                  fontWeight: 300,
                  lineHeight: 1.0,
                }}
              >
                Savoy Bank &amp; Trust brings together traditional banking values
                and an international perspective to deliver tailored financial
                solutions for a discerning clientele. Our approach is grounded in
                personal attention, measured judgment, and long-term relationships
                built on trust.
              </p>

              <p
                style={{
                  fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
                  color: "rgb(255, 255, 255)",
                  fontSize: "clamp(0.83rem, 1.1vw, 0.95rem)",
                  fontWeight: 300,
                  lineHeight: 1.3,
                }}
              >
                From day-to-day banking needs to more specialized fiduciary and
                market-related requirements, Savoy offers a refined client
                experience shaped around individual objectives rather than
                standardized service models.
              </p>
            </div>

            {/* RIGHT — illustration image */}
            <div
              className={`second-top-image second-top-img-wrap${topInView ? " visible" : ""}`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingRight: "2rem",
                animationDelay: "0.25s",
              }}
            >
              <div
                className="second-top-img-inner"
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "460px",
                  aspectRatio: "3/4",
                  borderRadius: "2px",
                  overflow: "hidden",
                  transform: "translateX(14rem)",   /* ← move right — increase to taste */
                }}
              >
                <Image
                  src="/savoy-14.png"
                  alt="Savoy illustration"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",      /* ← back to center, translateX handles positioning */
                    opacity: 0.88,
                    maskImage:
                      "radial-gradient(ellipse 88% 88% at 50% 50%, black 55%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 88% 88% at 50% 50%, black 55%, transparent 100%)",
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom row — logo + pillars (unchanged) ── */}
        <div
          ref={rowRef}
          className="second-bottom-row relative z-10 flex items-center px-20 pb-25"
          style={{ minHeight: "100vh" }}
        >
          {/* Logo col */}
          <div
            className="second-logo-col relative flex-shrink-0 overflow-hidden"
            style={{ width: "44%", minHeight: "100vh" }}
          >
            <div
              className="second-logo-inner"
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
              <Image
                src="/logo-savoy.png"
                alt="Savoy Star"
                width={600}
                height={600}
                priority
              />
            </div>
          </div>

          {/* Pillars col */}
          <div
            className="second-pillars-col flex flex-col pl-50"
            style={{ width: "56%", paddingRight: "3rem" }}
          >
            {pillars.map((text) => (
              <p
                key={text}
                className="second-pillar-text"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: "white",
                  fontSize: "clamp(1.8rem, 2vw, 1.3rem)",
                  fontWeight: 500,
                  lineHeight: 1.1,
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
