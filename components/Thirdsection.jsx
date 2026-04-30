// 'use client';

// export default function SavoyAbout() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

//         .savoy-about-root,
//         .savoy-about-root *,
//         .savoy-about-root *::before,
//         .savoy-about-root *::after {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//         }

//         .savoy-about-root {
//           font-family: 'Cormorant', Georgia, serif;
//           background-color: #000000;
//           width: 100%;
//           /* Large top space — content sits at ~32% down the section */
//           padding: 32vh 0 14vh 6.5vw;
//           color: #ffffff;
//           min-height: 100vh;
//         }

//         /* Content column — left ~44% of canvas */
//         .savoy-about-inner {
//           width: 44%;
//           min-width: 320px;
//           max-width: 660px;
//         }

//         /* ── Eyebrow label ─────────────────────────── */
//         /* "SAVOY BANK & TRUST  |  The Bahamas" */
//         .savoy-about-eyebrow {
//           font-family: 'Cormorant', Georgia, serif;
//           font-weight: 500;
//           font-style: normal;
//           font-size: clamp(0.58rem, 0.7vw, 0.7rem);
//           letter-spacing: 0.22em;
//           text-transform: uppercase;
//           color: rgba(255, 255, 255, 0.75);
//           margin-bottom: 20px;
//           display: flex;
//           align-items: center;
//           gap: 0;
//         }

//         /* The pipe separator and location revert to mixed-case */
//         .savoy-about-eyebrow .pipe {
//           margin: 0 10px;
//           font-weight: 300;
//           letter-spacing: 0;
//           color: rgba(255, 255, 255, 0.5);
//         }

//         .savoy-about-eyebrow .location {
//           text-transform: none;
//           font-weight: 300;
//           font-style: italic;
//           letter-spacing: 0.04em;
//           font-size: clamp(0.62rem, 0.75vw, 0.75rem);
//           color: rgba(255, 255, 255, 0.65);
//         }

//         /* ── Main heading paragraph ─────────────────── */
//         .savoy-about-heading {
//           font-family: 'Cormorant', Georgia, serif;
//           font-weight: 300;
//           font-style: italic;
//           font-size: clamp(1.5rem, 2.4vw, 2.05rem);
//           line-height: 1.48;
//           letter-spacing: 0.008em;
//           color: #ffffff;
//           margin-bottom: 36px;
//         }

//         /* ── Body paragraph ─────────────────────────── */
//         .savoy-about-body {
//           font-family: 'Cormorant', Georgia, serif;
//           font-weight: 400;
//           font-style: normal;
//           font-size: clamp(0.8rem, 0.98vw, 0.92rem);
//           line-height: 1.72;
//           letter-spacing: 0.012em;
//           color: rgba(255, 255, 255, 0.78);
//           max-width: 600px;
//         }

//         /* ── Responsive ─────────────────────────────── */
//         @media (max-width: 1024px) {
//           .savoy-about-root {
//             padding: 26vh 0 12vh 5vw;
//           }
//           .savoy-about-inner {
//             width: 62%;
//           }
//         }

//         @media (max-width: 700px) {
//           .savoy-about-root {
//             padding: 18vh 24px 10vh 24px;
//           }
//           .savoy-about-inner {
//             width: 100%;
//             min-width: unset;
//             max-width: unset;
//           }
//         }
//       `}</style>

//       <section className="savoy-about-root">
//         <div className="savoy-about-inner">

//           {/* Eyebrow: "SAVOY BANK & TRUST  |  The Bahamas" */}
//           <p className="savoy-about-eyebrow">
//             Savoy Bank &amp; Trust
//             <span className="pipe">|</span>
//             <span className="location">The Bahamas</span>
//           </p>

//           {/* Large italic heading */}
//           <h1 className="savoy-about-heading">
//             Savoy Bank &amp; Trust is a privately held financial
//             institution in The Bahamas, serving clients through
//             tailored banking and trust services. Its culture draws
//             on the discipline of private banking while maintaining
//             the responsiveness required by modern international
//             clients.
//           </h1>

//           {/* Supporting body copy */}
//           <p className="savoy-about-body">
//             Clients benefit from a relationship-led model shaped by experience,
//             discretion, and continuity. The result is a banking experience
//             designed to feel personal, thoughtful, and dependable over time.
//           </p>

//         </div>
//       </section>
//     </>
//   );
// }

// 'use client';

// export default function SavoyAbout() {
//   return (
//     <section 
//       className="bg-black w-full min-h-screen pt-[33vh] pb-[53vh] pl-[5.1vw]"
//       style={{
//         fontFamily: "'Cormorant', Georgia, serif",
//       }}
//     >
//       <div className="w-[44%] min-w-[320px] max-w-[660px]">
//         {/* Eyebrow: "SAVOY BANK & TRUST  |  The Bahamas" */}
//         {/* <p className="flex items-center gap-0 mb-5 text-white/75 uppercase tracking-[0.22em]">
//           <span className="font-medium" style={{ fontSize: "clamp(0.58rem, 0.7vw, 0.7rem)" }}>
//             Savoy Bank &amp; Trust
//           </span>
//           <span className="mx-[10px] font-light tracking-normal text-white/50">|</span>
//           <span 
//             className="font-light italic normal-case tracking-[0.04em] text-white/65"
//             style={{ fontSize: "clamp(0.62rem, 0.75vw, 0.75rem)" }}
//           >
//             The Bahamas
//           </span>
//         </p> */}
// <p className="flex items-center gap-0 mb-5 text-white uppercase tracking-[0.22em]">
//   <span 
//     className="font-bold" 
//     style={{ 
//       fontFamily: "'Cormorant', Georgia, serif",
//       fontSize: "clamp(0.75rem, 0.9vw, 0.9rem)",
//     }}
//   >
//     Savoy Bank &amp; Trust
//   </span>
//   <span 
//     className="mx-[10px] font-light tracking-normal text-white"
//     style={{ fontSize: "clamp(0.75rem, 0.9vw, 0.9rem)" }}
//   >
//     | 
//   </span>
//   <span 
//     className="font-medium normal-case tracking-[0.04em] text-white"
//     style={{ 
//       fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//       fontSize: "clamp(0.75rem, 0.9vw, 0.9rem)" 
//     }}
//   >
//     The Bahamas
//   </span>
// </p>

//         {/* Large italic heading */}
//         <h1 
//           className="font-light text-white mb-9"
//           style={{
//             fontSize: "clamp(1.0rem, 2.4vw, 2.05rem)",
//             lineHeight: 1.0,
//             // letterSpacing: "0.008em",
//           }}
//         >
//           Savoy Bank &amp; Trust is a privately held financial
//           institution in The Bahamas, serving clients through
//           tailored banking and trust services. Its culture draws
//           on the discipline of private banking while maintaining
//           the responsiveness required by modern international
//           clients.
//         </h1>

//         {/* Supporting body copy */}
//         <p 
//   className="font-normal text-white max-w-[600px]"
//   style={{
//     fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//     fontSize: "clamp(1.0rem, 0.98vw, 0.92rem)",
//     lineHeight: 1.0,
//     letterSpacing: "0.012em",
//   }}
// >
//   Clients benefit from a relationship-led model shaped by experience,
//   discretion, and continuity. The result is a banking experience
//   designed to feel personal, thoughtful, and dependable over time.
// </p>
//       </div>

//       {/* Responsive styles using Tailwind breakpoints */}
//       <style jsx>{`
//         @media (max-width: 1024px) {
//           section {
//             padding-top: 26vh !important;
//             padding-bottom: 12vh !important;
//             padding-left: 5vw !important;
//           }
//           section > div {
//             width: 62% !important;
//           }
//         }
//         @media (max-width: 700px) {
//           section {
//             padding: 18vh 24px 10vh 24px !important;
//           }
//           section > div {
//             width: 100% !important;
//             min-width: unset !important;
//             max-width: unset !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

'use client';

export default function SavoyAbout() {
  return (
    <>
      <style>{`
        /* ── Mobile-only overrides — desktop untouched ── */
        @media (max-width: 1024px) {
          .third-section-root { padding-top: 10vh !important; padding-bottom: 12vh !important; padding-left: 5vw !important; }
          .third-inner { width: 62% !important; }
        }
        @media (max-width: 640px) {
          .third-section-root { padding-left: 6vw !important; padding-right: 6vw !important; }
          .third-inner { width: 100% !important; min-width: unset !important; max-width: unset !important; }
          .third-eyebrow { flex-wrap: wrap !important; gap: 0.2rem !important; }
          .third-heading { font-size: clamp(1.25rem, 5vw, 1.7rem) !important; }
          .third-body { font-size: 0.9rem !important; line-height: 1.65 !important; }
        }
          // padding-top: 14vh !important; padding-bottom: 10vh !important;
      `}</style>

      {/* Original section — untouched */}
      <section
        className="third-section-root bg-black w-full h-[500px] pt-[15vh] pb-[15vh] pl-[5.1vw]"
        style={{ fontFamily: "'Cormorant', Georgia, serif" }}
      >
        <div className="third-inner w-[44%] min-w-[320px] max-w-[660px]">

          {/* Eyebrow — original */}
          <p className="third-eyebrow flex items-center gap-0 mb-5 text-white uppercase tracking-[0.22em]">
            <span
              className="font-bold"
              style={{ fontFamily: "'Cormorant', Georgia, serif", fontSize: "0.99rem" }}
            >
              Savoy Bank &amp; Trust
            </span>
            <span
              className="mx-[10px] font-light tracking-normal text-white"
              style={{ fontSize: "0.99rem"}}
            >
              |
            </span>
            <span
              className="font-medium normal-case tracking-[0.04em] text-white"
              style={{ fontFamily: "'General Sans', 'Inter', system-ui, sans-serif", fontSize: "0.99rem" }}
            >
              The Bahamas
            </span>
          </p>

          {/* Heading — original */}
          <h1
            className="third-heading font-light text-white mb-9"
            style={{ fontSize: "clamp(1.8rem, 2vw, 1.3rem)", lineHeight: 1.0 }}
          >
            Savoy Bank &amp; Trust is a privately held financial
            institution in The Bahamas, serving clients through
            tailored banking and trust services. Its culture draws
            on the discipline of private banking while maintaining
            the responsiveness required by modern international
            clients.
          </h1>

          {/* Body — original */}
          <p
            className="third-body font-normal text-white max-w-[600px]"
            style={{
              fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
              fontSize: "clamp(0.83rem, 1.1vw, 0.95rem)",
              lineHeight: 1.3,
              // letterSpacing: "0.012em",
            }}
          >
            Clients benefit from a relationship-led model shaped by experience,
            discretion, and continuity. The result is a banking experience
            designed to feel personal, thoughtful, and dependable over time.
          </p>

        </div>
      </section>
    </>
  );
}