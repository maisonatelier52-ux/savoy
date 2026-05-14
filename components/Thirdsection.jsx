

"use client";

import Image from "next/image";

export default function SavoyAbout() {
  return (
    <>
      <style>{`
        /* ── Layout ── */
        .third-section-root {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 0;
          /* No fixed height — section grows to fit content */
          min-height: 500px;
        }

        /* ── Left text column ── */
        .third-text-col {
          flex: 0 0 auto;
          width: 50%;
          padding: 10vh 0 10vh 5.1vw;
        }

        /* ── Right image column ── */
        .third-img-col {
          flex: 0 0 auto;
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4vh 3vw;
          align-self: stretch;      /* fills full section height */
        }

        .third-img-wrap {
          width: 100%;
          max-width: 520px;
          /* Soft fade on left edge so compass blends into black bg */
          -webkit-mask-image: linear-gradient(
            to right, transparent 0%, black 18%, black 82%, transparent 100%
          );
          mask-image: linear-gradient(
            to right, transparent 0%, black 18%, black 82%, transparent 100%
          );
        }

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .third-text-col {
            width: 55%;
            padding: 10vh 0 10vh 5vw;
          }
          .third-img-col { width: 45%; padding: 4vh 2vw; }
          .third-img-wrap { max-width: 360px; }
        }

        /* ── Mobile: image FIRST, text SECOND ── */
        @media (max-width: 640px) {
          .third-section-root {
            flex-direction: column;
            min-height: unset;
          }
          .third-img-col {
            order: 1;
            width: 100%;
            padding: 5vh 8vw 2vh;
            align-self: auto;
          }
          .third-text-col {
            order: 2;
            width: 100%;
            padding: 3vh 6vw 8vh;
          }
          .third-img-wrap {
            max-width: 260px;
            /* No side-fade on mobile */
            -webkit-mask-image: none;
            mask-image: none;
          }
          .third-eyebrow { flex-wrap: wrap !important; gap: 0.2rem !important; }
          .third-heading { font-size: clamp(1.25rem, 5vw, 1.7rem) !important; }
          .third-body { font-size: 0.88rem !important; line-height: 1.65 !important; }
        }
      `}</style>

      <section
        className="third-section-root bg-black w-full"
        style={{ fontFamily: "'Cormorant', Georgia, serif" }}
      >
        {/* ── LEFT: text ── */}
        <div className="third-text-col">
          <div className="w-full max-w-[540px]">

            {/* Eyebrow */}
            <p className="third-eyebrow flex items-center gap-0 mb-5 text-white uppercase tracking-[0.22em]">
              <span
                className="font-bold"
                style={{ fontFamily: "'Cormorant', Georgia, serif", fontSize: "0.99rem" }}
              >
                Savoy Bank &amp; Trust
              </span>
              <span
                className="mx-[10px] font-light tracking-normal text-white"
                style={{ fontSize: "0.99rem" }}
              >
                |
              </span>
              <span
                className="font-medium normal-case tracking-[0.04em] text-white"
                style={{
                  fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
                  fontSize: "0.99rem",
                }}
              >
                The Bahamas
              </span>
            </p>

            {/* Heading */}
            <h1
              className="third-heading font-light text-white mb-9"
              style={{ fontSize: "clamp(1.8rem, 2vw, 1.3rem)", lineHeight: 1.0 }}
            >
              Savoy Bank &amp; Trust is a privately held financial institution in
              The Bahamas, serving clients through tailored banking and trust
              services. Its culture draws on the discipline of private banking
              while maintaining the responsiveness required by modern
              international clients.
            </h1>

            {/* Body */}
            <p
              className="third-body font-normal text-white max-w-[540px]"
              style={{
                fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
                fontSize: "clamp(0.83rem, 1.1vw, 0.95rem)",
                lineHeight: 1.3,
              }}
            >
              Clients benefit from a relationship-led model shaped by experience,
              discretion, and continuity. The result is a banking experience
              designed to feel personal, thoughtful, and dependable over time.
            </p>
          </div>
        </div>

        {/* ── RIGHT: compass illustration ── */}
        <div className="third-img-col">
          <div className="third-img-wrap">
            <Image
              src="/savoy-13.png"
              alt="Compass illustration"
              width={620}
              height={760}
              style={{ width: "100%", height: "auto", display: "block", opacity: 0.88 }}
              priority={false}
            />
          </div>
        </div>
      </section>
    </>
  );
}



// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";

// export default function SavoyAbout() {
//   const imgColRef = useRef(null);           // Simple ref - most stable
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.unobserve(entry.target);   // Animate only once
//         }
//       },
//       {
//         threshold: 0.35,
//         rootMargin: "-80px 0px",
//       }
//     );

//     const current = imgColRef.current;
//     if (current) {
//       observer.observe(current);
//     }

//     return () => {
//       if (current) observer.unobserve(current);
//     };
//   }, []);

//   return (
//     <>
//       <style>{`
//         .third-section-root {
//           display: flex;
//           flex-direction: row;
//           align-items: center;
//           justify-content: space-between;
//           min-height: 500px;
//           background: black;
//         }

//         .third-text-col {
//           flex: 0 0 auto;
//           width: 50%;
//           padding: 10vh 0 10vh 5.1vw;
//         }

//         .third-img-col {
//           flex: 0 0 auto;
//           width: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 4vh 3vw;
//           overflow: hidden;
//         }

//         .third-img-wrap {
//           width: 100%;
//           max-width: 520px;
//           -webkit-mask-image: linear-gradient(
//             to right, transparent 0%, black 18%, black 82%, transparent 100%
//           );
//           mask-image: linear-gradient(
//             to right, transparent 0%, black 18%, black 82%, transparent 100%
//           );
//         }

//         /* Tablet */
//         @media (max-width: 1024px) {
//           .third-text-col { width: 55%; padding-left: 5vw; }
//           .third-img-col { width: 45%; }
//           .third-img-wrap { max-width: 360px; }
//         }

//         /* Mobile */
//         @media (max-width: 640px) {
//           .third-section-root { flex-direction: column; }
//           .third-img-col {
//             order: 1;
//             width: 100%;
//             padding: 6vh 8vw 3vh;
//           }
//           .third-text-col {
//             order: 2;
//             width: 100%;
//             padding: 2vh 6vw 8vh;
//           }
//           .third-img-wrap { max-width: 260px; mask-image: none; }
//         }
//       `}</style>

//       <section className="third-section-root w-full">
//         {/* LEFT TEXT */}
//         <div className="third-text-col">
//           <div className="w-full max-w-[540px]">
//             <p className="flex items-center gap-0 mb-5 text-white uppercase tracking-[0.22em] text-sm">
//               <span className="font-bold">Savoy Bank &amp; Trust</span>
//               <span className="mx-3 font-light">|</span>
//               <span style={{ fontFamily: "'General Sans', sans-serif" }}>
//                 The Bahamas
//               </span>
//             </p>

//             <h1 className="font-light text-white mb-9 leading-tight" 
//                 style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)" }}>
//               Savoy Bank &amp; Trust is a privately held financial institution in
//               The Bahamas, serving clients through tailored banking and trust
//               services.
//             </h1>

//             <p className="text-white/90" 
//                style={{ 
//                  fontFamily: "'General Sans', 'Inter', sans-serif",
//                  fontSize: "0.95rem",
//                  lineHeight: 1.65 
//                }}>
//               Clients benefit from a relationship-led model shaped by experience,
//               discretion, and continuity. The result is a banking experience
//               designed to feel personal, thoughtful, and dependable over time.
//             </p>
//           </div>
//         </div>

//         {/* RIGHT ANIMATED IMAGE */}
//        <div ref={imgColRef} className="third-img-col">
//         <div
//           className="third-img-wrap"
//           style={{
//             transformOrigin: "center center",
//             transform: inView ? "scale(1)" : "scale(0.08)",
//             opacity: inView ? 1 : 0,
//             transition: "transform 3.2s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, opacity 2.4s ease-out 0.25s",
//           }}
//         >
//           <Image
//             src="/illustration-5.png"
//             alt="Compass illustration"
//             width={520}
//             height={660}
//             style={{ width: "100%", height: "auto", display: "block", opacity: 0.88 }}
//             priority={false}
//           />
//         </div>
//       </div>
//       </section>
//     </>
//   );
// }