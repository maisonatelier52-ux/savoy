// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import SavoyHeader from "@/components/SavoyHeader";
// import BrandFooterSection from "@/components/Brandfootersection";

// // ── Only what Tailwind cannot do ────────────────────────────────────────────
// const globalStyles = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&display=swap');
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
//   @import url('https://fonts.cdnfonts.com/css/general-sans');

//   /* SavoyHeader dependency classes */
//   .mobile-nav {
//     position: fixed; inset: 0;
//     background: rgba(0,0,0,0.97);
//     z-index: 100;
//     display: flex; flex-direction: column; align-items: center; justify-content: center;
//     gap: 2.5rem;
//     pointer-events: none; opacity: 0; transform: translateY(-24px);
//     transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//   }
//   .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
//   .mobile-nav a {
//     font-family: 'Cormorant', Georgia, serif;
//     color: #fff; font-size: clamp(1.6rem, 6vw, 2.4rem);
//     font-weight: 300; letter-spacing: 0.18em;
//     text-decoration: none; text-transform: uppercase;
//   }
//   .hamburger-btn {
//     display: none; flex-direction: column; gap: 5px;
//     background: none; border: none; cursor: pointer; padding: 8px; z-index: 110;
//   }
//   .ham-line { width: 22px; height: 1.5px; background: #fff; transition: all 0.3s ease; }
//   @media (max-width: 1024px) {
//     .hamburger-btn { display: flex; }
//     .desktop-nav { display: none !important; }
//   }

//   /* Make header scroll away (NOT fixed) on this page */
//   .page-header {
//     position: absolute !important;
//     background: linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, transparent 100%);
//   }
// `;

// // ── Font shorthands ─────────────────────────────────────────────────────────
// const serif = "'Cormorant Garamond', Georgia, serif";
// const sans = "'General Sans', 'Inter', system-ui, sans-serif";

// // ── Intersection-observer hook ──────────────────────────────────────────────
// function useInView(threshold = 0.15) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) {
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

// // ── Inline fade helpers (state-driven — can't be Tailwind) ──────────────────
// const fadeUp = (inView, delay = "0s") => ({
//   opacity: inView ? 1 : 0,
//   transform: inView ? "translateY(0)" : "translateY(28px)",
//   transition: `opacity 0.9s ease ${delay}, transform 0.9s ease ${delay}`,
// });
// const fadeLeft = (inView, delay = "0s") => ({
//   opacity: inView ? 1 : 0,
//   transform: inView ? "translateX(0)" : "translateX(-36px)",
//   transition: `opacity 0.9s ease ${delay}, transform 0.9s ease ${delay}`,
// });
// const fadeRight = (inView, delay = "0s") => ({
//   opacity: inView ? 1 : 0,
//   transform: inView ? "translateX(0)" : "translateX(36px)",
//   transition: `opacity 0.9s ease ${delay}, transform 0.9s ease ${delay}`,
// });

// // ── Data ────────────────────────────────────────────────────────────────────
// const pillars = [
//   {
//     number: "01",
//     title: "Legacy & Tradition",
//     body: "Rooted in the enduring principles of private banking, Savoy honours a tradition of measured stewardship and personal accountability that has guided trusted institutions for generations.",
//   },
//   {
//     number: "02",
//     title: "International Perspective",
//     body: "Operating from The Bahamas with a global outlook, Savoy serves clients across jurisdictions, bringing cross-border insight to every mandate — from day-to-day treasury to complex fiduciary structures.",
//   },
//   {
//     number: "03",
//     title: "Customised Solutions",
//     body: "No two clients are alike. Savoy designs bespoke banking, trust, and market-service solutions calibrated to individual objectives, timelines, and risk appetites — never off-the-shelf.",
//   },
//   {
//     number: "04",
//     title: "Bahamas-Based, Globally Oriented",
//     body: "Licensed and regulated in The Bahamas, Savoy benefits from a stable, internationally respected financial framework while maintaining the agility to engage markets and counterparties worldwide.",
//   },
// ];

// const stats = [
//   { value: "Bahamas", label: "Regulated & Licensed" },
//   { value: "Private", label: "Ownership Structure" },
//   { value: "Global", label: "Client Reach" },
//   { value: "Bespoke", label: "Service Model" },
// ];

// const visionPoints = [
//   [
//     "Integrity & Trust",
//     "Upholding the highest regulatory and ethical standards to foster long-term, transparent relationships.",
//   ],
//   [
//     "Innovation with Purpose",
//     "Leveraging advanced thinking and strategic partnerships to enhance efficiency, resilience, and client experience.",
//   ],
//   [
//     "Institutional Excellence",
//     "Delivering the infrastructure, governance, and client service consistent with a world-class financial intermediary.",
//   ],
// ];

// // ── Small label component ───────────────────────────────────────────────────
// function OvLabel({ children, center = false }) {
//   return (
//     <p
//       className={`flex items-center gap-3 uppercase text-white/45 ${center ? "justify-center" : ""}`}
//       style={{ fontFamily: sans, fontSize: "0.68rem", letterSpacing: "0.22em" }}
//     >
//       <span className="block w-7 h-px bg-white/30 flex-shrink-0" />
//       {children}
//     </p>
//   );
// }

// // ── Main ────────────────────────────────────────────────────────────────────
// export default function CompanyOverview() {
//   const [heroRef, heroInView] = useInView(0.05);
//   const [introRef, introInView] = useInView(0.1);
//   const [pillarsRef, pillarsInView] = useInView(0.05);
//   const [visionRef, visionInView] = useInView(0.1);
//   const [statsRef, statsInView] = useInView(0.1);
//   const [ctaRef, ctaInView] = useInView(0.1);

//   return (
//     <>
//       <style>{globalStyles}</style>

//       {/* Header — absolute so it scrolls away with the page */}
//       <SavoyHeader phase={4} />

//       <main className="bg-black text-white">
//         {/* ══ HERO ══════════════════════════════════════════ */}
//         <section
//           ref={heroRef}
//           className="relative min-h-screen flex items-end overflow-hidden px-8 md:px-16 pb-20"
//         >
//           <div className="absolute inset-0 pointer-events-none">
//             <Image
//               src="/savoy-4.png"
//               alt="savoy-lighthouse"
//               fill
//               priority
//               style={{
//                 objectFit: "cover",
//                 objectPosition: "center",
//                 opacity: 0.25,
//               }}
//             />
//           </div>

//           <div className="relative pl-5 z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
//             <div>
//               <h1
//                 className="text-white max-w-[680px] leading-none"
//                 style={{
//                   fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//                   // fontSize: "clamp(1.8rem, 2vw, 1.3rem)",
//                   fontSize: "clamp(2rem,3vw,3.5rem)",
//                   fontWeight: 300,
//                   lineHeight: 1.0,
//                 }}
//               >
//                 Guided by Tradition.<br /> Oriented to the World.
//               </h1>
//               {/* <h1
//                 style={{
//                   ...fadeUp(heroInView, "0.2s"),
//                   fontFamily: serif,
//                   fontSize: "clamp(3rem,6vw,6.5rem)",
//                   fontWeight: 300,
//                   lineHeight: 0.95,
//                 }}
//                 className="text-white"
//               >
//                 Guided by
//                 <br />
//                 <em
//                   style={{ fontStyle: "italic", color: "rgb(255, 255, 255)" }}
//                 >
//                   Tradition.
//                 </em>
//                 <br />
//                 Oriented to
//                 <br />
//                 the World.
//               </h1> */}

//               <div style={fadeUp(heroInView, "0.35s")} className="mt-5">
//                 <span className="block w-10  bg-white" />
//                 <p
//                   className="mt-5 max-w-md text-white/90"
//                   style={{
//                     fontFamily: sans,
//                     fontSize: "0.82rem",
//                     fontWeight: 300,
//                     lineHeight: 1.3,
//                   }}
//                 >
//                   Savoy Bank &amp; Trust is a privately held financial
//                   institution licensed and regulated in The Bahamas, offering
//                   tailored banking, trust, and market services for a discerning
//                   international clientele.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Scroll indicator */}
//           {/* <div
//             style={fadeUp(heroInView, "0.6s")}
//             className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
//           >
//             <span
//               className="uppercase tracking-widest text-white/20"
//               style={{ fontFamily: sans, fontSize: "0.6rem" }}
//             >
//               Scroll
//             </span>
//             <div
//               className="w-px h-10"
//               style={{
//                 background:
//                   "linear-gradient(to bottom,rgba(255,255,255,0.3),transparent)",
//               }}
//             />
//           </div> */}
//         </section>

//         <div className="w-full h-px bg-black " />

//         {/* ══ WHO WE ARE ════════════════════════════════════ */}
//         <section
//           ref={introRef}
//           className="relative overflow-hidden py-24 px-8 md:px-16"
//         >
//           <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none">
//             <Image
//               src="/savoy-1.png"
//               alt=""
//               fill
//               style={{
//                 objectFit: "contain",
//                 objectPosition: "left top",
//                 opacity: 0.25,
//                 // maskImage: "linear-gradient(to left,black 15%,transparent 85%)",
//                 // WebkitMaskImage:
//                 //   "linear-gradient(to left,black 15%,transparent 85%)",
//               }}
//             />
//           </div>

//           <div className="relative z-10 pl-5 max-w-3xl">
//             <div style={fadeLeft(introInView)} className="mb-10">
//               <OvLabel>Who We Are</OvLabel>
//             </div>
//             <p
//               style={{
//                 ...fadeUp(introInView, "0.15s"),
//                 fontFamily: serif,
//                 fontSize: "clamp(1.45rem,2vw,2.1rem)",
//                 fontWeight: 300,
//                 lineHeight: 1.0,
//               }}
//               className="text-white"
//             >
//               Savoy Bank &amp; Trust brings together the enduring values of
//               private banking with an international perspective shaped by
//               decades of cross-border experience. From Nassau, we serve a global
//               clientele whose needs span personal treasury, fiduciary services,
//               and access to international markets.
//             </p>
//             <p
//               style={{
//                 ...fadeUp(introInView, "0.28s"),
//                 fontFamily: sans,
//                 fontSize: "0.85rem",
//                 fontWeight: 300,
//                 lineHeight: 1.3,
//               }}
//               className="text-white mt-8 max-w-xl"
//             >
//               Our approach is grounded in personal attention, measured judgment,
//               and long-term relationships built on trust. Rather than
//               standardised service models, Savoy shapes every client engagement
//               around individual objectives — creating the kind of banking
//               partnership that is increasingly rare in an era of institutional
//               scale and automated decision-making.
//             </p>
//           </div>
//         </section>

//         <div className="w-full h-px bg-white/10" />

//         {/* ══ STATS ═════════════════════════════════════════ */}
//         <section ref={statsRef} className="px-8 md:px-16">
//           <div className="grid grid-cols-2 md:grid-cols-4">
//             {stats.map((s, i) => (
//               <div
//                 key={s.label}
//                 style={fadeUp(statsInView, `${0.1 + i * 0.1}s`)}
//                 className={`text-center py-8 px-6 ${i !== 0 ? "border-l border-white/10" : ""}`}
//               >
//                 <div
//                   style={{
//                     fontFamily: serif,
//                     fontSize: "clamp(1.4rem,2vw,1.9rem)",
//                     fontWeight: 300,
//                     letterSpacing: "0.05em",
//                   }}
//                   className="text-white"
//                 >
//                   {s.value}
//                 </div>
//                 <div
//                   style={{
//                     fontFamily: sans,
//                     fontSize: "0.65rem",
//                     letterSpacing: "0.18em",
//                   }}
//                   className="uppercase text-white mt-1"
//                 >
//                   {s.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <div className="w-full h-px bg-white/10" />

//         {/* ══ FOUR PILLARS ══════════════════════════════════ */}
//         <section ref={pillarsRef} className="py-24 px-8 md:px-16">
//           <div style={fadeUp(pillarsInView)} className="mb-14">
//             <OvLabel>Four Pillars</OvLabel>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
//             {pillars.map((p, i) => (
//               <div
//                 key={p.number}
//                 style={fadeUp(pillarsInView, `${0.1 + i * 0.12}s`)}
//                 className="border-t border-white/10 hover:border-white/45 transition-colors duration-300 py-8 flex gap-6 items-start"
//               >
//                 <div
//                   style={{
//                     fontFamily: serif,
//                     fontSize: "0.88rem",
//                     fontWeight: 300,
//                     letterSpacing: "0.1em",
//                     paddingTop: "0.15rem",
//                   }}
//                   className="text-white flex-shrink-0 w-12"
//                 >
//                   {p.number}
//                 </div>
//                 <div>
//                   <div
//                     style={{
//                       fontFamily: serif,
//                       fontSize: "clamp(1.2rem,1.6vw,1.5rem)",
//                       fontWeight: 400,
//                       lineHeight: 1.15,
//                     }}
//                     className="text-white mb-3"
//                   >
//                     {p.title}
//                   </div>
//                   <div
//                     style={{
//                       fontFamily: sans,
//                       fontSize: "0.82rem",
//                       fontWeight: 300,
//                       lineHeight: 1.7,
//                     }}
//                     className="text-white"
//                   >
//                     {p.body}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <div className="w-full h-px bg-black" />

//         {/* ══ VISION ════════════════════════════════════════ */}
//         <section
//           ref={visionRef}
//           className="py-24 px-8 md:px-16 overflow-hidden"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
//             <div>
//               <div style={fadeLeft(visionInView)} className="mb-10">
//                 <OvLabel>The Vision</OvLabel>
//               </div>
//               <h2
//                 style={{
//                   ...fadeUp(visionInView, "0.15s"),
//                   fontFamily: serif,
//                   fontSize: "clamp(2rem,3vw,3.2rem)",
//                   fontWeight: 300,
//                   lineHeight: 1.0,
//                 }}
//                 className="text-white"
//               >
//                 A lighthouse is not a landmark —<br />
//                 <em
//                   style={{
                   
//                     color: "rgb(255, 255, 255)",
//                   }}
//                 >
//                   it is a commitment.
//                 </em>
//               </h2>
//               <p
//                 style={{
//                   ...fadeUp(visionInView, "0.28s"),
//                   fontFamily: sans,
//                   fontSize: "0.83rem",
//                   fontWeight: 300,
//                   lineHeight: 1.3,
//                 }}
//                 className="text-white mt-8"
//               >
//                 Savoy aspires to be the trusted point of reference for clients
//                 navigating complexity — a stable, consistent presence whose
//                 clarity and judgement can be relied upon across generations and
//                 geographies. We are building an institution designed to endure.
//               </p>

//               {visionPoints.map(([title, text], i) => (
//                 <div
//                   key={title}
//                   style={fadeUp(visionInView, `${0.38 + i * 0.1}s`)}
//                   className="mt-7 pl-5 border-l border-white/20"
//                 >
//                   <p
//                     style={{
//                       fontFamily: sans,
//                       fontSize: "0.7rem",
//                       letterSpacing: "0.14em",
//                     }}
//                     className="uppercase text-white mb-1"
//                   >
//                     {title}
//                   </p>
//                   <p
//                     style={{
//                       fontFamily: sans,
//                       fontSize: "0.8rem",
//                       fontWeight: 300,
//                       lineHeight: 1.3,
//                     }}
//                     className="text-white"
//                   >
//                     {text}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Lighthouse — desktop only */}
//             <div
//               style={fadeRight(visionInView, "0.2s")}
//               className="hidden md:flex justify-center"
//             >
//               <div
//                 className="relative w-full max-w-md"
//                 style={{ aspectRatio: "3/4" }}
//               >
//                 <Image
//                   src="/savoy-3.png"
//                   alt="Lighthouse cross-section"
//                   fill
//                   style={{
//                     objectFit: "contain",
//                     opacity: 0.6,
//                     maskImage:
//                       "radial-gradient(ellipse 80% 85% at 50% 50%, black 45%, transparent 100%)",
//                     WebkitMaskImage:
//                       "radial-gradient(ellipse 80% 85% at 50% 50%, black 45%, transparent 100%)",
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         <div className="w-full h-px bg-black" />

//         {/* ══ IMAGE BREAK ═══════════════════════════════════ */}
//         {/* <section
//           className="relative overflow-hidden"
//           style={{ height: "60vh" }}
//         >
//           <Image
//             src="/savoy-2.png"
//             alt="Lighthouse lantern room"
//             fill
//             style={{
//               objectFit: "cover",
//               objectPosition: "center 20%",
//               opacity: 0.25,
//             }}
//           />
//           <div
//             className="absolute inset-0"
//             style={{
//               background:
//                 "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)",
//             }}
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
//             <p
//               className="text-white max-w-xl"
//               style={{
//                 fontFamily: serif,
//                 fontSize: "clamp(1.1rem,2vw,1.7rem)",
//                 fontWeight: 300,
//                 fontStyle: "italic",
//                 lineHeight: 1.6,
//               }}
//             >
//               &ldquo;Traditional Values. International Perspective.&rdquo;
//             </p>
//             <span className="block w-10 h-px bg-white mt-6" />
//             <p
//               className="uppercase tracking-widest text-white mt-4"
//               style={{
//                 fontFamily: sans,
//                 fontSize: "0.65rem",
//                 letterSpacing: "0.2em",
//               }}
//             >
//               Savoy Bank &amp; Trust — Nassau, The Bahamas
//             </p>
//           </div>
//         </section> */}
//         <section
//   className="relative overflow-hidden"
//   style={{ height: "60vh" }}
// >
//   {/* Background Image */}
//   <Image
//     src="/savoy-2.png"
//     alt="Lighthouse lantern room"
//     fill
//     style={{
//       objectFit: "cover",
//       objectPosition: "center 20%",
//       opacity: 0.25,
//     }}
//   />

//   {/* Optional subtle radial overlay */}
//   <div
//     className="absolute inset-0"
//     style={{
//       background:
//         "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)",
//     }}
//   />

//   {/* Black Fade - Top & Bottom */}
//   <div
//     className="absolute inset-0 z-10"
//     style={{
//       background: `
//         linear-gradient(to bottom, 
//           rgba(0,0,0,0.85) 0%, 
//           rgba(0,0,0,0.25) 25%, 
//           transparent 45%,
//           transparent 55%,
//           rgba(0,0,0,0.25) 75%, 
//           rgba(0,0,0,0.85) 100%
//         )
//       `,
//     }}
//   />

//   {/* Content */}
//   <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center z-20">
//     <p
//       className="text-white max-w-xl"
//       style={{
//         fontFamily: serif,
//         fontSize: "clamp(1.1rem,2vw,1.7rem)",
//         fontWeight: 300,
//         fontStyle: "italic",
//         lineHeight: 1.6,
//       }}
//     >
//       &ldquo;Traditional Values. International Perspective.&rdquo;
//     </p>
//     <span className="block w-10 h-px bg-white mt-6" />
//     <p
//       className="uppercase tracking-widest text-white mt-4"
//       style={{
//         fontFamily: sans,
//         fontSize: "0.65rem",
//         letterSpacing: "0.2em",
//       }}
//     >
//       Savoy Bank &amp; Trust — Nassau, The Bahamas
//     </p>
//   </div>
// </section>

//         <div className="w-full h-px bg-black" />

//         {/* ══ CTA ═══════════════════════════════════════════ */}
//         <section
//           ref={ctaRef}
//           className="py-20 px-8 md:px-16 flex flex-col items-center text-center"
//         >
//           <div style={fadeUp(ctaInView)}>
//             <OvLabel center>Get in Touch</OvLabel>
//           </div>

//           <h2
//             style={{
//               ...fadeUp(ctaInView, "0.15s"),
//               fontFamily: serif,
//               fontSize: "clamp(2rem,4vw,3.8rem)",
//               fontWeight: 300,
//               lineHeight: 1.05,
//             }}
//             className="text-white mt-6"
//           >
//             Begin a Conversation
//           </h2>

//           <p
//             style={{
//               ...fadeUp(ctaInView, "0.25s"),
//               fontFamily: sans,
//               fontSize: "0.83rem",
//               fontWeight: 300,
//               lineHeight: 1.3,
//             }}
//             className="text-white mt-5 max-w-md"
//           >
//             Whether you have a specific mandate in mind or simply wish to
//             explore how Savoy might serve your needs, we welcome your enquiry.
//           </p>

//           <a
//             href="mailto:info@savoybankandtrust.com"
//             style={{
//               ...fadeUp(ctaInView, "0.35s"),
//               fontFamily: sans,
//               fontSize: "0.72rem",
//               letterSpacing: "0.18em",
//             }}
//             className="mt-10 inline-flex items-center gap-3 uppercase text-white no-underline border border-white/30 px-8 py-3 transition-all duration-300 hover:border-white hover:bg-white/5"
//           >
//             info@savoybankandtrust.com
//             <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//               <path
//                 d="M1 7h12M8 3l5 4-5 4"
//                 stroke="currentColor"
//                 strokeWidth="1"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </a>
//         </section>

//         <div className="w-full h-px bg-black" />
//       </main>

//       <BrandFooterSection />
//     </>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SavoyHeader from "@/components/SavoyHeader";
import BrandFooterSection from "@/components/Brandfootersection";

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
  @import url('https://fonts.cdnfonts.com/css/general-sans');

  .mobile-nav {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.97);
    z-index: 100;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 2.5rem;
    pointer-events: none; opacity: 0; transform: translateY(-24px);
    transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
  }
  .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
  .mobile-nav a {
    font-family: 'Cormorant', Georgia, serif;
    color: #fff; font-size: clamp(1.6rem, 6vw, 2.4rem);
    font-weight: 300; letter-spacing: 0.18em;
    text-decoration: none; text-transform: uppercase;
  }
  .hamburger-btn {
    display: none; flex-direction: column; gap: 5px;
    background: none; border: none; cursor: pointer; padding: 8px; z-index: 110;
  }
  .ham-line { width: 22px; height: 1.5px; background: #fff; transition: all 0.3s ease; }
  @media (max-width: 1024px) {
    .hamburger-btn { display: flex; }
    .desktop-nav { display: none !important; }
  }

  .page-header {
    position: absolute !important;
    background: linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, transparent 100%);
  }

  @media (max-width: 640px) {
    .ov-section-pad { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
    .ov-pl { padding-left: 0 !important; }
  }
`;

const serif = "'Cormorant Garamond', Georgia, serif";
const sans = "'General Sans', 'Inter', system-ui, sans-serif";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const fadeUp = (inView, delay = "0s") => ({
  opacity: inView ? 1 : 0,
  transform: inView ? "translateY(0)" : "translateY(28px)",
  transition: `opacity 0.9s ease ${delay}, transform 0.9s ease ${delay}`,
});
const fadeLeft = (inView, delay = "0s") => ({
  opacity: inView ? 1 : 0,
  transform: inView ? "translateX(0)" : "translateX(-36px)",
  transition: `opacity 0.9s ease ${delay}, transform 0.9s ease ${delay}`,
});
const fadeRight = (inView, delay = "0s") => ({
  opacity: inView ? 1 : 0,
  transform: inView ? "translateX(0)" : "translateX(36px)",
  transition: `opacity 0.9s ease ${delay}, transform 0.9s ease ${delay}`,
});

const pillars = [
  {
    number: "01",
    title: "Legacy & Tradition",
    body: "Rooted in the enduring principles of private banking, Savoy honours a tradition of measured stewardship and personal accountability that has guided trusted institutions for generations.",
  },
  {
    number: "02",
    title: "International Perspective",
    body: "Operating from The Bahamas with a global outlook, Savoy serves clients across jurisdictions, bringing cross-border insight to every mandate — from day-to-day treasury to complex fiduciary structures.",
  },
  {
    number: "03",
    title: "Customised Solutions",
    body: "No two clients are alike. Savoy designs bespoke banking, trust, and market-service solutions calibrated to individual objectives, timelines, and risk appetites — never off-the-shelf.",
  },
  {
    number: "04",
    title: "Bahamas-Based, Globally Oriented",
    body: "Licensed and regulated in The Bahamas, Savoy benefits from a stable, internationally respected financial framework while maintaining the agility to engage markets and counterparties worldwide.",
  },
];

const stats = [
  { value: "Bahamas", label: "Regulated & Licensed" },
  { value: "Private", label: "Ownership Structure" },
  { value: "Global", label: "Client Reach" },
  { value: "Bespoke", label: "Service Model" },
];

const visionPoints = [
  [
    "Integrity & Trust",
    "Upholding the highest regulatory and ethical standards to foster long-term, transparent relationships.",
  ],
  [
    "Innovation with Purpose",
    "Leveraging advanced thinking and strategic partnerships to enhance efficiency, resilience, and client experience.",
  ],
  [
    "Institutional Excellence",
    "Delivering the infrastructure, governance, and client service consistent with a world-class financial intermediary.",
  ],
];

function OvLabel({ children, center = false }) {
  return (
    <p
      className={`flex items-center gap-3 uppercase text-white/45 ${center ? "justify-center" : ""}`}
      style={{ fontFamily: sans, fontSize: "0.68rem", letterSpacing: "0.22em" }}
    >
      <span className="block w-7 h-px bg-white/30 flex-shrink-0" />
      {children}
    </p>
  );
}

export default function CompanyOverview() {
  const [heroRef, heroInView] = useInView(0.05);
  const [introRef, introInView] = useInView(0.1);
  const [pillarsRef, pillarsInView] = useInView(0.05);
  const [visionRef, visionInView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.1);
  const [ctaRef, ctaInView] = useInView(0.1);

  return (
    <>
      <style>{globalStyles}</style>
      <SavoyHeader phase={4} />

      <main className="bg-black text-white">

        {/* ══ HERO ══════════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-end overflow-hidden px-8 md:px-16 pb-20"
        >
          {/* Desktop bg image */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <Image
              src="/savoy-4.png"
              alt="savoy-lighthouse"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center", opacity: 0.25 }}
            />
          </div>

          {/* Mobile image — top of section */}
          <div className="md:hidden absolute top-0 left-0 right-0" style={{ height: "800px", zIndex: 0 }}>
            <Image
              src="/savoy-4.png"
              alt="savoy-lighthouse"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center", opacity: 0.4 }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, transparent 30%, black 100%)"
            }} />
          </div>

          <div className="relative z-10 w-full mt-[260px] md:mt-0">
            <div className="pl-0 md:pl-5">
              <h1
                className="text-white max-w-[680px] leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                  fontSize: "clamp(2rem, 3vw, 3.5rem)",
                  fontWeight: 300,
                  lineHeight: 1.0,
                }}
              >
                Guided by Tradition.<br /> Oriented to the World.
              </h1>

              <div style={fadeUp(heroInView, "0.35s")} className="mt-5">
                <span className="block w-10 bg-white" />
                <p
                  className="mt-5 max-w-md text-white/90"
                  style={{
                    fontFamily: sans,
                    fontSize: "0.82rem",
                    fontWeight: 300,
                    lineHeight: 1.3,
                  }}
                >
                  Savoy Bank &amp; Trust is a privately held financial
                  institution licensed and regulated in The Bahamas, offering
                  tailored banking, trust, and market services for a discerning
                  international clientele.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-black" />

        {/* ══ WHO WE ARE ════════════════════════════════════ */}
        <section
          ref={introRef}
          className="relative overflow-hidden py-5 md:py-24 px-6 md:px-16"
        >
          {/* Desktop right image */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none hidden md:block">
            <Image
              src="/savoy-15.png"
              alt=""
              fill
              style={{ objectFit: "contain", objectPosition: "left top", opacity: 0.9 }}
            />
          </div>

          {/* Mobile image — above text */}
          <div className="md:hidden relative w-full mb-10" style={{ height: "400px" }}>
            <Image
              src="/savoy-15.png"
              alt=""
              fill
              style={{ objectFit: "contain", objectPosition: "center", opacity: 0.9 }}
            />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div style={fadeLeft(introInView)} className="mb-10">
              <OvLabel>Who We Are</OvLabel>
            </div>
            <p
              style={{
                ...fadeUp(introInView, "0.15s"),
                fontFamily: serif,
                fontSize: "clamp(1.2rem, 2vw, 2.1rem)",
                fontWeight: 300,
                lineHeight: 1.2,
              }}
              className="text-white"
            >
              Savoy Bank &amp; Trust brings together the enduring values of
              private banking with an international perspective shaped by
              decades of cross-border experience. From Nassau, we serve a global
              clientele whose needs span personal treasury, fiduciary services,
              and access to international markets.
            </p>
            <p
              style={{
                ...fadeUp(introInView, "0.28s"),
                fontFamily: sans,
                fontSize: "0.85rem",
                fontWeight: 300,
                lineHeight: 1.6,
              }}
              className="text-white mt-8 max-w-xl"
            >
              Our approach is grounded in personal attention, measured judgment,
              and long-term relationships built on trust. Rather than
              standardised service models, Savoy shapes every client engagement
              around individual objectives — creating the kind of banking
              partnership that is increasingly rare in an era of institutional
              scale and automated decision-making.
            </p>
          </div>
        </section>

        <div className="w-full h-px bg-white/10" />

        {/* ══ STATS ═════════════════════════════════════════ */}
        <section ref={statsRef} className="px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={fadeUp(statsInView, `${0.1 + i * 0.1}s`)}
                className={`text-center py-6 md:py-8 px-3 md:px-6 ${i !== 0 ? "border-l border-white/10" : ""}`}
              >
                <div
                  style={{
                    fontFamily: serif,
                    fontSize: "clamp(1.1rem, 2vw, 1.9rem)",
                    fontWeight: 300,
                    letterSpacing: "0.05em",
                  }}
                  className="text-white"
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: sans,
                    fontSize: "0.6rem",
                    letterSpacing: "0.14em",
                  }}
                  className="uppercase text-white mt-1"
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-white/10" />

        {/* ══ FOUR PILLARS ══════════════════════════════════ */}
        <section ref={pillarsRef} className="py-16 md:py-24 px-6 md:px-16">
          <div style={fadeUp(pillarsInView)} className="mb-10 md:mb-14">
            <OvLabel>Four Pillars</OvLabel>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
            {pillars.map((p, i) => (
              <div
                key={p.number}
                style={fadeUp(pillarsInView, `${0.1 + i * 0.12}s`)}
                className="border-t border-white/10 hover:border-white/45 transition-colors duration-300 py-6 md:py-8 flex gap-4 md:gap-6 items-start"
              >
                <div
                  style={{
                    fontFamily: serif,
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    letterSpacing: "0.1em",
                    paddingTop: "0.15rem",
                  }}
                  className="text-white flex-shrink-0 w-10 md:w-12"
                >
                  {p.number}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: serif,
                      fontSize: "clamp(1.1rem, 1.6vw, 1.5rem)",
                      fontWeight: 400,
                      lineHeight: 1.15,
                    }}
                    className="text-white mb-3"
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontFamily: sans,
                      fontSize: "0.82rem",
                      fontWeight: 300,
                      lineHeight: 1.7,
                    }}
                    className="text-white"
                  >
                    {p.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-black" />

        {/* ══ VISION ════════════════════════════════════════ */}
        <section
          ref={visionRef}
          className="py-5 md:py-24 px-6 md:px-16 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

            {/* Mobile vision image — above text */}
            <div className="md:hidden relative w-full mb-2" style={{ height: "540px" }}>
              <Image
                src="/savoy-3.png"
                alt="Lighthouse cross-section"
                fill
                style={{
                  objectFit: "contain",
                  opacity: 0.9,
                  maskImage: "radial-gradient(ellipse 80% 85% at 50% 50%, black 45%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse 80% 85% at 50% 50%, black 45%, transparent 100%)",
                }}
              />
            </div>

            {/* Text column */}
            <div>
              <div style={fadeLeft(visionInView)} className="mb-10">
                <OvLabel>The Vision</OvLabel>
              </div>
              <h2
                style={{
                  ...fadeUp(visionInView, "0.15s"),
                  fontFamily: serif,
                  fontSize: "clamp(1.7rem, 3vw, 3.2rem)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                }}
                className="text-white"
              >
                A lighthouse is not a landmark —<br />
                <em style={{ color: "rgb(255,255,255)" }}>it is a commitment.</em>
              </h2>
              <p
                style={{
                  ...fadeUp(visionInView, "0.28s"),
                  fontFamily: sans,
                  fontSize: "0.83rem",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
                className="text-white mt-8"
              >
                Savoy aspires to be the trusted point of reference for clients
                navigating complexity — a stable, consistent presence whose
                clarity and judgement can be relied upon across generations and
                geographies. We are building an institution designed to endure.
              </p>

              {visionPoints.map(([title, text], i) => (
                <div
                  key={title}
                  style={fadeUp(visionInView, `${0.38 + i * 0.1}s`)}
                  className="mt-6 pl-4 md:pl-5 border-l border-white/20"
                >
                  <p
                    style={{ fontFamily: sans, fontSize: "0.7rem", letterSpacing: "0.14em" }}
                    className="uppercase text-white mb-1"
                  >
                    {title}
                  </p>
                  <p
                    style={{ fontFamily: sans, fontSize: "0.8rem", fontWeight: 300, lineHeight: 1.6 }}
                    className="text-white"
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop lighthouse — hidden on mobile */}
            <div
              style={fadeRight(visionInView, "0.2s")}
              className="hidden md:flex justify-center"
            >
              <div className="relative w-full max-w-md" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/savoy-3.png"
                  alt="Lighthouse cross-section"
                  fill
                  style={{
                    objectFit: "contain",
                    opacity: 0.9,
                    maskImage: "radial-gradient(ellipse 80% 85% at 50% 50%, black 45%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 85% at 50% 50%, black 45%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-black" />

        {/* ══ IMAGE BREAK ═══════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{ height: "50vh" }}>
          <Image
            src="/savoy-2.png"
            alt="Lighthouse lantern room"
            fill
            style={{ objectFit: "cover", objectPosition: "center 20%", opacity: 0.25 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 z-10"
            style={{
              background: `linear-gradient(to bottom,
                rgba(0,0,0,0.85) 0%,
                rgba(0,0,0,0.25) 25%,
                transparent 45%,
                transparent 55%,
                rgba(0,0,0,0.25) 75%,
                rgba(0,0,0,0.85) 100%)`,
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-8 text-center z-20">
            <p
              className="text-white max-w-xl"
              style={{
                fontFamily: serif,
                fontSize: "clamp(1rem, 2vw, 1.7rem)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.6,
              }}
            >
              &ldquo;Traditional Values. International Perspective.&rdquo;
            </p>
            <span className="block w-10 h-px bg-white mt-6" />
            <p
              className="uppercase tracking-widest text-white mt-4"
              style={{ fontFamily: sans, fontSize: "0.6rem", letterSpacing: "0.18em" }}
            >
              Savoy Bank &amp; Trust — Nassau, The Bahamas
            </p>
          </div>
        </section>

        <div className="w-full h-px bg-black" />

        {/* ══ CTA ═══════════════════════════════════════════ */}
        <section
          ref={ctaRef}
          className="py-14 md:py-20 px-6 md:px-16 flex flex-col items-center text-center"
        >
          <div style={fadeUp(ctaInView)}>
            <OvLabel center>Get in Touch</OvLabel>
          </div>

          <h2
            style={{
              ...fadeUp(ctaInView, "0.15s"),
              fontFamily: serif,
              fontSize: "clamp(1.8rem, 4vw, 3.8rem)",
              fontWeight: 300,
              lineHeight: 1.05,
            }}
            className="text-white mt-6"
          >
            Begin a Conversation
          </h2>

          <p
            style={{
              ...fadeUp(ctaInView, "0.25s"),
              fontFamily: sans,
              fontSize: "0.83rem",
              fontWeight: 300,
              lineHeight: 1.6,
            }}
            className="text-white mt-5 max-w-sm md:max-w-md"
          >
            Whether you have a specific mandate in mind or simply wish to
            explore how Savoy might serve your needs, we welcome your enquiry.
          </p>

          <a
            href="mailto:info@savoybankandtrust.com"
            style={{
              ...fadeUp(ctaInView, "0.35s"),
              fontFamily: sans,
              fontSize: "0.68rem",
              letterSpacing: "0.16em",
            }}
            className="mt-10 inline-flex items-center gap-3 uppercase text-white no-underline border border-white/30 px-6 md:px-8 py-3 transition-all duration-300 hover:border-white hover:bg-white/5 break-all md:break-normal text-center"
          >
            info@savoybankandtrust.com
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
              <path
                d="M1 7h12M8 3l5 4-5 4"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </section>

        <div className="w-full h-px bg-black" />
      </main>

      <BrandFooterSection />
    </>
  );
}