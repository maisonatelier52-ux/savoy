// 'use client';

// const services = [
//   {

//     description:
//       'Responsive day-to-day banking support delivered with the attention of a relationship-led institution.',
//   },
//   {

//     description:
//       'Secure digital access for convenient account visibility and transaction management.',
//   },
//   {

//     description:
//       'Access to custody and execution capabilities across a range of investment instruments.',
//   },
//   {

//     description:
//       'Liquidity solutions structured around current accounts, term deposits, and fiduciary deposits.',
//   },
//   {

//     description:
//       'Spot, forward, and swap solutions tailored to cross-border requirements.',
//   },
//   {

//     description:
//       'Trading and custody solutions for clients seeking additional diversification.',
//   },
//   {

//     description:
//       'Efficient movement of funds supported by attentive service and clear execution.',
//   },
//   {

//     description:
//       'Asset-backed credit solutions structured around eligible holdings.',
//   },
//   {
//     description:
//       'Additional solutions tailored to more specialized requirements.',
//   },
// ];

// export default function SavoyServices() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
//       `}</style>

//       {/*
//         Section wrapper
//         — bg-[#0c0c0c] = dark base colour
//         — backgroundImage via inline style (Tailwind can't express url() with dynamic values safely)
//         — px-[6.5vw] mirrors the original 6.5vw left padding
//         — pt-[108px] / pb-[128px] = top / bottom breathing room
//       */}
//       <section
//         className="
//           relative
//           w-full min-h-screen
//           bg-[#0c0c0c]
//           text-white
//           pt-[33vh] pb-[128px] px-[6.5vw]
//           max-lg:pt-20 max-lg:pb-24 max-lg:px-[5vw]
//           max-sm:px-6 max-sm:pt-[60px] max-sm:pb-[72px]
//         "
//         style={{
//           fontFamily: "'Cormorant', Georgia, serif",
//           backgroundImage: "url('/savoy-background.png')",
//           backgroundRepeat: 'repeat',
//           backgroundSize: 'auto',
//         }}
//       >
//         {/* Dark overlay on top of the background image */}
//         <div className="absolute inset-0 bg-black/70" />

//         {/*
//           Inner column — left ~38% of the canvas
//           max-lg widens to 55%, max-sm goes full-width
//           relative + z-10 keeps content above the overlay
//         */}
//         <div className="relative z-10 w-[38%] min-w-[320px] max-w-[550px] max-lg:w-[55%] max-sm:w-full max-sm:min-w-0 max-sm:max-w-none">

//           {/* ── Heading ─────────────────────────────── */}
//           {/* <h2
//             className="font-light leading-[1.48] tracking-[0.008em] text-white mb-[76px] max-sm:mb-14"
//             style={{ fontSize: 'clamp(1.4rem, 2.35vw, 2rem)' }}
//           >
//             Savoy offers a focused range of banking and fiduciary
//             services designed to meet the needs of a diversified
//             international clientele.
//           </h2> */}
//           <h2
//   className="font-light text-white mb-[76px] max-sm:mb-14"
//   style={{ 
//     fontSize: 'clamp(1.4rem, 2.35vw, 2rem)',
//     lineHeight: 1.0,
//     // letterSpacing: "-0.01em",
//   }}
// >
//   Savoy offers a focused range of banking and fiduciary
//   services designed to meet the needs of a diversified
//   international clientele.
// </h2>

//           {/* ── Service list ────────────────────────── */}
// <ul className="list-none p-0 m-0 space-y-16 max-sm:space-y-12">
//   {services.map((service, i) => (
//     <li key={i}>
//       {/* Description paragraph */}
//       <p
//         className="font-normal not-italic text-white max-w-[430px]"
//         style={{
//           fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//           fontSize: 'clamp(1.0rem, 1.1vw, 1rem)',
//           lineHeight: 1.65,
//           letterSpacing: "0.008em",
//         }}
//       >
//         {service.description}
//       </p>
//     </li>
//   ))}
// </ul>

//         </div>
//       </section>
//     </>
//   );
// }


'use client';

const services = [
  { description: 'Responsive day-to-day banking support delivered with the attention of a relationship-led institution.' },
  { description: 'Secure digital access for convenient account visibility and transaction management.' },
  { description: 'Access to custody and execution capabilities across a range of investment instruments.' },
  { description: 'Liquidity solutions structured around current accounts, term deposits, and fiduciary deposits.' },
  { description: 'Spot, forward, and swap solutions tailored to cross-border requirements.' },
  { description: 'Trading and custody solutions for clients seeking additional diversification.' },
  { description: 'Efficient movement of funds supported by attentive service and clear execution.' },
  { description: 'Asset-backed credit solutions structured around eligible holdings.' },
  { description: 'Additional solutions tailored to more specialized requirements.' },
];

export default function SavoyServices() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

        /* ── Mobile-only overrides — desktop untouched ── */
        @media (max-width: 1024px) {
          .fourth-section-root { padding-top: 20vh !important; padding-bottom: 10vh !important; padding-left: 5vw !important; padding-right: 5vw !important; }
          .fourth-inner { width: 55% !important; }
        }
        @media (max-width: 640px) {
          .fourth-section-root { padding-top: 12vh !important; padding-bottom: 8vh !important; padding-left: 6vw !important; padding-right: 6vw !important; }
          .fourth-inner { width: 100% !important; min-width: unset !important; max-width: unset !important; }
          .fourth-heading { font-size: clamp(1.2rem, 5vw, 1.6rem) !important; margin-bottom: 3rem !important; }
          .fourth-service-list { gap: 2.75rem !important; }
          .fourth-service-desc { font-size: 0.9rem !important; }
        }
      `}</style>

      <section
        className="fourth-section-root relative w-full min-h-screen bg-[#0c0c0c] text-white pt-[15vh] pb-[128px] px-[6.5vw] max-lg:pt-20 max-lg:pb-24 max-lg:px-[5vw] max-sm:px-6 max-sm:pt-[60px] max-sm:pb-[72px]"
        style={{
          fontFamily: "'Cormorant', Georgia, serif",
          backgroundImage: "url('/savoy-background.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="fourth-inner relative z-10 w-[38%] min-w-[320px] max-w-[550px] max-lg:w-[55%] max-sm:w-full max-sm:min-w-0 max-sm:max-w-none">

          <h2
            className="fourth-heading font-light text-white mb-[76px] max-sm:mb-14"
            style={{ fontSize: "clamp(1.8rem, 2vw, 1.3rem)", lineHeight: 1.0,}}
          >
            Savoy offers a focused range of banking and fiduciary
            services designed to meet the needs of a diversified
            international clientele.
          </h2>

          <ul className="fourth-service-list list-none p-0 m-0 space-y-16 max-sm:space-y-12">
            {services.map((service, i) => (
              <li key={i}>
                <p
                  className="fourth-service-desc font-normal not-italic text-white max-w-[430px]"
                  style={{
                    fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
                    fontSize: 'clamp(1.0rem, 1.1vw, 1rem)',
                    lineHeight: 1.65,
                    letterSpacing: "0.008em",
                  }}
                >
                  {service.description}
                </p>
              </li>
            ))}
          </ul>

        </div>
      </section>
    </>
  );
}