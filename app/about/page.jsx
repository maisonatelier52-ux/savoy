// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import SavoyHeader from "@/components/SavoyHeader";
// import BrandFooterSection from "@/components/Brandfootersection";

// const globalStyles = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&display=swap');
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
//   @import url('https://fonts.cdnfonts.com/css/general-sans');

//   .mobile-nav {
//     position: fixed; inset: 0; background: rgba(0,0,0,0.97); z-index: 100;
//     display: flex; flex-direction: column; align-items: center; justify-content: center;
//     gap: 2.5rem; pointer-events: none; opacity: 0; transform: translateY(-24px);
//     transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//   }
//   .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
//   .mobile-nav a {
//     font-family: 'Cormorant', Georgia, serif; color: #fff;
//     font-size: clamp(1.6rem, 6vw, 2.4rem); font-weight: 300;
//     letter-spacing: 0.18em; text-decoration: none; text-transform: uppercase;
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
//   .page-header {
//     position: absolute !important;
//     background: linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, transparent 100%);
//   }
//   @keyframes slowSpin {
//     from { transform: rotate(0deg); }
//     to   { transform: rotate(360deg); }
//   }
//   .icon-spin { animation: slowSpin 30s linear infinite; }
// `;

// const serif = "'Cormorant Garamond', Georgia, serif";
// const sans  = "'General Sans', 'Inter', system-ui, sans-serif";

// function useInView(threshold = 0.12) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
//       { threshold }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// const fadeUp    = (v, d="0s") => ({ opacity:v?1:0, transform:v?"translateY(0)":"translateY(30px)",  transition:`opacity 0.9s ease ${d},transform 0.9s ease ${d}` });
// const fadeLeft  = (v, d="0s") => ({ opacity:v?1:0, transform:v?"translateX(0)":"translateX(-36px)", transition:`opacity 0.9s ease ${d},transform 0.9s ease ${d}` });
// const fadeRight = (v, d="0s") => ({ opacity:v?1:0, transform:v?"translateX(0)":"translateX(36px)",  transition:`opacity 0.9s ease ${d},transform 0.9s ease ${d}` });

// function Label({ children, center = false }) {
//   return (
//     <p className={`flex items-center gap-3 uppercase text-white/40 ${center ? "justify-center" : ""}`}
//        style={{ fontFamily:sans, fontSize:"0.68rem", letterSpacing:"0.22em" }}>
//       <span className="block w-7 h-px bg-white/25 flex-shrink-0" />
//       {children}
//     </p>
//   );
// }

// const values = [
//   { n:"01", title:"Discretion",   body:"Every client relationship is built on confidentiality and trust. We never compromise on privacy, and we treat every mandate with careful attention regardless of scale." },
//   { n:"02", title:"Continuity",   body:"We build for the long term. Our relationships span generations, and our institutional approach ensures that the knowledge and care we bring today will endure tomorrow." },
//   { n:"03", title:"Independence", body:"As a privately held institution, Savoy is free from the conflicts of interest that affect large financial conglomerates. Our only obligation is to our clients." },
//   { n:"04", title:"Judgement",    body:"Sound judgement — not algorithms or standardised models — drives every recommendation we make. We think carefully, and we advise with conviction." },
// ];

// const milestones = [
//   { year:"Founded",  text:"Savoy Bank & Trust established in Nassau, The Bahamas, with a mandate to serve a discerning international clientele." },
//   { year:"Licensed", text:"Fully licensed and regulated by the Securities Commission of The Bahamas, meeting the highest standards of international financial governance." },
//   { year:"Today",    text:"Serving clients across multiple jurisdictions, offering private banking, trust, and market services shaped entirely around individual needs." },
// ];

// export default function About() {
//   const [heroRef,      heroInView]      = useInView(0.05);
//   const [missionRef,   missionInView]   = useInView(0.1);
//   const [valuesRef,    valuesInView]    = useInView(0.05);
//   const [milestoneRef, milestoneInView] = useInView(0.1);
//   const [locationRef,  locationInView]  = useInView(0.1);
//   const [ctaRef,       ctaInView]       = useInView(0.1);

//   return (
//     <>
//       <style>{globalStyles}</style>
//       <SavoyHeader phase={4} />

//       <main className="bg-black text-white">

//         {/* ══ HERO ══════════════════════════════════════════════ */}
//         <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden px-6 pb-16 md:px-20 md:pb-24">

//           {/* Savoy icon — large spinning watermark, right side desktop */}
//           <div className="hidden md:block absolute right-10 top-10 bottom-0 w-1/2 pointer-events-none select-none">
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div  style={{ width:"min(660px,44vw)", height:"min(560px,44vw)", position:"relative" }}>
//                 <Image src="/savoy-15.png" alt="" fill style={{ objectFit:"contain", opacity:0.75 }} />
//               </div>
//             </div>
//             <div className="absolute inset-0" style={{ background:"linear-gradient(to right,#000 0%,transparent 0%)" }} />
//           </div>

//           {/* Mobile subtle icon */}
//           <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none select-none">
//             <div  style={{ width:"460px", height:"560px", position:"relative" }}>
//               <Image src="/savoy-1.png" alt="" fill style={{ objectFit:"contain", opacity:0.25 }} />
//             </div>
//           </div>

//           <div className="relative z-10 max-w-2xl">
//             {/* Logo mark above heading */}
//             {/* <div style={fadeUp(heroInView,"0.05s")} className="mb-8">
//               <Image src="/savoy-logo.png" alt="Savoy" width={44} height={44} className="opacity-60" />
//             </div> */}

//             <h1
//               style={{ ...fadeUp(heroInView,"0.15s"), fontFamily:serif, fontSize:"clamp(3.2rem,7vw,6.5rem)", fontWeight:300, lineHeight:0.75 }}
//               className="text-white"
//             >
//               About<br />
//               <em style={{  color:"rgb(255, 255, 255)" }}>Savoy.</em>
//             </h1>

//             <div style={fadeUp(heroInView,"0.3s")} className="mt-8">
//               <span className="block w-10 h-px bg-white mb-6" />
//               <p className="text-white max-w-lg" style={{ fontFamily:sans, fontSize:"0.85rem", fontWeight:300, lineHeight:1.3 }}>
//                 Savoy Bank &amp; Trust is a privately held financial institution
//                 licensed in The Bahamas. We exist to serve clients who value
//                 discretion, continuity, and a personal relationship with those
//                 managing their financial affairs.
//               </p>
//             </div>

//             {/* <div style={fadeUp(heroInView,"0.5s")} className="flex items-center gap-3 mt-12">
//               <div className="w-px h-8" style={{ background:"linear-gradient(to bottom,rgba(255,255,255,0.3),transparent)" }} />
//               <span className="uppercase tracking-widest text-white/18" style={{ fontFamily:sans, fontSize:"0.58rem" }}>Scroll</span>
//             </div> */}
//           </div>
//         </section>

//         <div className="w-full h-px bg-black" />

//         {/* ══ MISSION ═══════════════════════════════════════════════ */}
//         <section ref={missionRef} className="relative py-24 px-6 md:px-20 overflow-hidden">
//           {/* Icon watermark left */}
//           <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
//                style={{ width:"300px", height:"300px", marginLeft:"-70px", position:"absolute" }}>
//             {/* <div className="icon-spin w-full h-full relative">
//               <Image src="/savoy-icon.ico" alt="" fill style={{ objectFit:"contain", opacity:0.04 }} />
//             </div> */}
//           </div>

//           <div className="relative z-10 max-w-3xl md:ml-[16%]">
//             <div style={fadeLeft(missionInView)} className="mb-10">
//               <Label>Our Mission</Label>
//             </div>
//             <p
//               style={{ ...fadeUp(missionInView,"0.15s"), fontFamily:serif, fontSize:"clamp(1.5rem,2.5vw,2.4rem)", fontWeight:300, lineHeight:1.0 }}
//               className="text-white"
//             >
//               To be the most trusted private banking partner for internationally
//               minded individuals and families — providing clarity, stability, and
//               bespoke financial guidance across generations.
//             </p>
//             <p
//               style={{ ...fadeUp(missionInView,"0.28s"), fontFamily:sans, fontSize:"0.85rem", fontWeight:300, lineHeight:1.3 }}
//               className="text-white mt-8 max-w-xl"
//             >
//               We do not pursue scale for its own sake. We pursue depth — of
//               relationships, of understanding, and of service. Every client
//               engagement begins with listening and ends with outcomes shaped
//               precisely around what that individual requires.
//             </p>
//           </div>
//         </section>

//         <div className="w-full h-px bg-black" />

//         {/* ══ VALUES ════════════════════════════════════════════════ */}
//         <section ref={valuesRef} className="py-24 px-6 md:px-20">
//           <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
//             <div style={fadeUp(valuesInView)}>
//               <Label>Our Values</Label>
//             </div>
//             {/* <div style={fadeRight(valuesInView,"0.1s")}>
//               <Image src="/savoy-logo.png" alt="Savoy" width={32} height={32} className="opacity-18" />
//             </div> */}
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
//             {values.map((v, i) => (
//               <div
//                 key={v.n}
//                 style={fadeUp(valuesInView, `${0.08 + i * 0.1}s`)}
//                 className="border-t border-white/10 hover:border-white/40 transition-colors duration-300 py-8 flex gap-6 items-start"
//               >
//                 <div style={{ fontFamily:serif, fontSize:"0.85rem", fontWeight:300, letterSpacing:"0.1em" }}
//                      className="text-white flex-shrink-0 w-10 pt-0.5">
//                   {v.n}
//                 </div>
//                 <div>
//                   <div style={{ fontFamily:serif, fontSize:"clamp(1.2rem,1.5vw,1.45rem)", fontWeight:400, lineHeight:1.15 }}
//                        className="text-white mb-3">{v.title}</div>
//                   <div style={{ fontFamily:sans, fontSize:"0.82rem", fontWeight:300, lineHeight:1.3 }}
//                        className="text-white">{v.body}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <div className="w-full h-px bg-black" />

//         {/* ══ MILESTONES ════════════════════════════════════════════ */}
//         <section ref={milestoneRef} className="relative py-24 px-6 md:px-20 overflow-hidden">
//           {/* Icon watermark right */}
//           <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
//                style={{ width:"480px", height:"580px", marginRight:"70px", position:"absolute" }}>
//             <div className=" w-full h-full relative">
//               <Image src="/savoy-2.png" alt="" fill style={{ objectFit:"contain", opacity:0.75 }} />
//             </div>
//           </div>

//           <div className="relative z-10 max-w-2xl">
//             <div style={fadeLeft(milestoneInView)} className="mb-14">
//               <Label>Our Story</Label>
//             </div>

//             {milestones.map((m, i) => (
//               <div
//                 key={m.year}
//                 style={fadeUp(milestoneInView, `${0.1 + i * 0.15}s`)}
//                 className="flex gap-8 items-start pb-10 mb-10 border-b border-white/8 last:border-0 last:mb-0 last:pb-0"
//               >
//                 <div className="flex-shrink-0 pt-1">
//                   <span
//                     className="block border border-white px-3 py-1 text-white uppercase"
//                     style={{ fontFamily:sans, fontSize:"0.6rem", letterSpacing:"0.18em" }}
//                   >
//                     {m.year}
//                   </span>
//                 </div>
//                 <p style={{ fontFamily:sans, fontSize:"0.83rem", fontWeight:300, lineHeight:1.03 }}
//                    className="text-white">
//                   {m.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <div className="w-full h-px bg-black" />

//         {/* ══ LOCATION ══════════════════════════════════════════════ */}
//         <section ref={locationRef} className="py-24 px-6 md:px-20">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

//             <div>
//               <div style={fadeLeft(locationInView)} className="mb-10">
//                 <Label>Where We Operate</Label>
//               </div>

//               <h2
//                 style={{ ...fadeUp(locationInView,"0.12s"), fontFamily:serif, fontSize:"clamp(1.8rem,3vw,3rem)", fontWeight:300, lineHeight:1.1 }}
//                 className="text-white"
//               >
//                 Nassau,<br />
//                 <em style={{  color:"rgb(255, 255, 255)" }}>The Bahamas.</em>
//               </h2>

//               <p
//                 style={{ ...fadeUp(locationInView,"0.25s"), fontFamily:sans, fontSize:"0.83rem", fontWeight:300, lineHeight:1.3 }}
//                 className="text-white mt-7 max-w-md"
//               >
//                 The Bahamas offers one of the most respected and stable financial
//                 regulatory frameworks in the world. Licensed by the Securities
//                 Commission of The Bahamas, Savoy operates within a jurisdiction
//                 that combines sovereign stability, international connectivity, and
//                 a long tradition of private banking excellence.
//               </p>

//               <div style={fadeUp(locationInView,"0.38s")} className="mt-10 flex flex-col gap-5">
//                 {[
//                   ["Regulator",  "Securities Commission of The Bahamas"],
//                   ["Structure",  "Privately Held"],
//                   ["Clientele",  "International"],
//                 ].map(([k,v]) => (
//                   <div key={k} className="flex gap-6 items-start border-l border-white/20 pl-5">
//                     <span style={{ fontFamily:sans, fontSize:"0.62rem", letterSpacing:"0.15em" }}
//                           className="text-white uppercase flex-shrink-0 w-20">{k}</span>
//                     <span style={{ fontFamily:serif, fontSize:"0.95rem", fontWeight:300 }}
//                           className="text-white">{v}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Savoy-logo large spin — desktop only */}
//             <div style={fadeRight(locationInView,"0.15s")} className="hidden md:flex justify-center items-center">
//               <div className="relative" style={{ width:"600px", height:"700px" }}>
//                 <Image
//                   src="/savoy-3.png"
//                   alt="Savoy"
//                   fill
//                   style={{
//                     objectFit:"contain", opacity:0.75,
//                     maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
//                     WebkitMaskImage:"radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         <div className="w-full h-px bg-black" />

//         {/* ══ QUOTE ═════════════════════════════════════════════════ */}
//         <section className="py-20 px-6 md:px-20 flex flex-col items-center text-center">
//           {/* <Image src="/savoy-logo.png" alt="Savoy" width={36} height={36} className="opacity-18 mb-8" /> */}
//           <p
//             style={{ fontFamily:serif, fontSize:"clamp(1.2rem,2.2vw,2rem)", fontWeight:300, fontStyle:"italic", lineHeight:1.3 }}
//             className="text-white max-w-2xl"
//           >
//             &ldquo;We do not measure success by volume. We measure it by the
//             confidence and continuity of the relationships we hold.&rdquo;
//           </p>
//           <span className="block w-10 h-px bg-white mt-8" />
//           <p style={{ fontFamily:sans, fontSize:"0.62rem", letterSpacing:"0.2em" }} className="uppercase text-white mt-4">
//             Savoy Bank &amp; Trust
//           </p>
//         </section>

//         <div className="w-full h-px bg-black" />

//         {/* ══ CTA ═══════════════════════════════════════════════════ */}
//         <section ref={ctaRef} className="py-24 px-6 md:px-20 flex flex-col items-center text-center">
//           <div style={fadeUp(ctaInView)}>
//             <Label center>Get in Touch</Label>
//           </div>

//           <h2
//             style={{ ...fadeUp(ctaInView,"0.15s"), fontFamily:serif, fontSize:"clamp(2rem,4vw,3.8rem)", fontWeight:300, lineHeight:1.05 }}
//             className="text-white mt-6"
//           >
//             Begin a Conversation
//           </h2>

//           <p
//             style={{ ...fadeUp(ctaInView,"0.25s"), fontFamily:sans, fontSize:"0.83rem", fontWeight:300, lineHeight:1.3 }}
//             className="text-white mt-5 max-w-md"
//           >
//             Whether you have a specific mandate in mind or simply wish to explore
//             how Savoy might serve your needs, we welcome your enquiry.
//           </p>

//           <div style={fadeUp(ctaInView,"0.35s")} className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
//             <a
//               href="mailto:info@savoybankandtrust.com"
//               style={{ fontFamily:sans, fontSize:"0.72rem", letterSpacing:"0.18em" }}
//               className="inline-flex items-center gap-3 uppercase text-white no-underline border border-white px-8 py-3 transition-all duration-300 hover:border-white hover:bg-white/5"
//             >
//               Email Us
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                 <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </a>
//             <a
//               href="/contact-us"
//               style={{ fontFamily:sans, fontSize:"0.72rem", letterSpacing:"0.18em" }}
//               className="inline-flex items-center gap-2 uppercase text-white no-underline transition-colors duration-300 hover:text-white"
//             >
//               Contact Page
//               <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
//                 <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </a>
//           </div>
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
    position: fixed; inset: 0; background: rgba(0,0,0,0.97); z-index: 100;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 2.5rem; pointer-events: none; opacity: 0; transform: translateY(-24px);
    transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
  }
  .mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
  .mobile-nav a {
    font-family: 'Cormorant', Georgia, serif; color: #fff;
    font-size: clamp(1.6rem, 6vw, 2.4rem); font-weight: 300;
    letter-spacing: 0.18em; text-decoration: none; text-transform: uppercase;
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
    background: linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, transparent 100%);
  }
  @keyframes slowSpin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  .icon-spin { animation: slowSpin 30s linear infinite; }
`;

const serif = "'Cormorant Garamond', Georgia, serif";
const sans  = "'General Sans', 'Inter', system-ui, sans-serif";

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const fadeUp    = (v, d="0s") => ({ opacity:v?1:0, transform:v?"translateY(0)":"translateY(30px)",  transition:`opacity 0.9s ease ${d},transform 0.9s ease ${d}` });
const fadeLeft  = (v, d="0s") => ({ opacity:v?1:0, transform:v?"translateX(0)":"translateX(-36px)", transition:`opacity 0.9s ease ${d},transform 0.9s ease ${d}` });
const fadeRight = (v, d="0s") => ({ opacity:v?1:0, transform:v?"translateX(0)":"translateX(36px)",  transition:`opacity 0.9s ease ${d},transform 0.9s ease ${d}` });

function Label({ children, center = false }) {
  return (
    <p className={`flex items-center gap-3 uppercase text-white/40 ${center ? "justify-center" : ""}`}
       style={{ fontFamily:sans, fontSize:"0.68rem", letterSpacing:"0.22em" }}>
      <span className="block w-7 h-px bg-white/25 flex-shrink-0" />
      {children}
    </p>
  );
}

const values = [
  { n:"01", title:"Discretion",   body:"Every client relationship is built on confidentiality and trust. We never compromise on privacy, and we treat every mandate with careful attention regardless of scale." },
  { n:"02", title:"Continuity",   body:"We build for the long term. Our relationships span generations, and our institutional approach ensures that the knowledge and care we bring today will endure tomorrow." },
  { n:"03", title:"Independence", body:"As a privately held institution, Savoy is free from the conflicts of interest that affect large financial conglomerates. Our only obligation is to our clients." },
  { n:"04", title:"Judgement",    body:"Sound judgement — not algorithms or standardised models — drives every recommendation we make. We think carefully, and we advise with conviction." },
];

const milestones = [
  { year:"Founded",  text:"Savoy Bank & Trust established in Nassau, The Bahamas, with a mandate to serve a discerning international clientele." },
  { year:"Licensed", text:"Fully licensed and regulated by the Securities Commission of The Bahamas, meeting the highest standards of international financial governance." },
  { year:"Today",    text:"Serving clients across multiple jurisdictions, offering private banking, trust, and market services shaped entirely around individual needs." },
];

export default function About() {
  const [heroRef,      heroInView]      = useInView(0.05);
  const [missionRef,   missionInView]   = useInView(0.1);
  const [valuesRef,    valuesInView]    = useInView(0.05);
  const [milestoneRef, milestoneInView] = useInView(0.1);
  const [locationRef,  locationInView]  = useInView(0.1);
  const [ctaRef,       ctaInView]       = useInView(0.1);

  return (
    <>
      <style>{globalStyles}</style>
      <SavoyHeader phase={4} />

      <main className="bg-black text-white">

        {/* ══ HERO ══════════════════════════════════════════════ */}
        <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden px-6 pt-32 pb-12 md:px-20 md:pb-24 md:pt-0">

          {/* Desktop watermark */}
          {/* <div className="hidden md:block absolute right-10 top-10 bottom-0 w-1/2 pointer-events-none select-none">
            <div className="absolute inset-0 flex items-center justify-center">
              <div style={{ width:"min(660px,44vw)", height:"min(560px,44vw)", position:"relative" }}>
                <Image src="/savoy-15.png" alt="" fill style={{ objectFit:"contain", opacity:0.75 }} />
              </div>
            </div>
            <div className="absolute inset-0" style={{ background:"linear-gradient(to right,#000 0%,transparent 0%)" }} />
          </div> */}

          {/* Mobile icon */}
          {/* <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <div style={{ width:"560px", height:"620px", position:"relative" }}>
              <Image src="/savoy-1.png" alt="" fill style={{ objectFit:"contain", opacity:0.25 }} />
            </div>
          </div> */}

          <div className="relative z-10 w-full md:max-w-2xl">
            <h1
              style={{ ...fadeUp(heroInView,"0.15s"), fontFamily:serif, fontSize:"clamp(3.2rem,7vw,6.5rem)", fontWeight:300, lineHeight:0.75 }}
              className="text-white"
            >
              About<br />
              <em style={{ color:"rgb(255,255,255)" }}>Savoy.</em>
            </h1>

            <div style={fadeUp(heroInView,"0.3s")} className="mt-8">
              <span className="block w-10 h-px bg-white mb-6" />
              <p className="text-white w-full max-w-lg" style={{ fontFamily:sans, fontSize:"0.85rem", fontWeight:300, lineHeight:1.3 }}>
                Savoy Bank &amp; Trust is a privately held financial institution
                licensed in The Bahamas. We exist to serve clients who value
                discretion, continuity, and a personal relationship with those
                managing their financial affairs.
              </p>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-black" />

        {/* ══ MISSION ═══════════════════════════════════════════════ */}
        <section ref={missionRef} className="relative py-12 md:py-24 px-6 md:px-20 overflow-hidden">
          <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
               style={{ width:"300px", height:"300px", marginLeft:"-70px", position:"absolute" }} />

          <div className="relative z-10 max-w-3xl md:ml-[16%]">
            <div style={fadeLeft(missionInView)} className="mb-10">
              <Label>Our Mission</Label>
            </div>
            <p
              style={{ ...fadeUp(missionInView,"0.15s"), fontFamily:serif, fontSize:"clamp(1.5rem,2.5vw,2.4rem)", fontWeight:300, lineHeight:1.0 }}
              className="text-white"
            >
              To be the most trusted private banking partner for internationally
              minded individuals and families — providing clarity, stability, and
              bespoke financial guidance across generations.
            </p>
            <p
              style={{ ...fadeUp(missionInView,"0.28s"), fontFamily:sans, fontSize:"0.85rem", fontWeight:300, lineHeight:1.3 }}
              className="text-white mt-8 max-w-xl"
            >
              We do not pursue scale for its own sake. We pursue depth — of
              relationships, of understanding, and of service. Every client
              engagement begins with listening and ends with outcomes shaped
              precisely around what that individual requires.
            </p>
          </div>
        </section>

        <div className="w-full h-px bg-black" />

        {/* ══ VALUES ════════════════════════════════════════════════ */}
        <section ref={valuesRef} className="py-12 md:py-24 px-6 md:px-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-14">
            <div style={fadeUp(valuesInView)}>
              <Label>Our Values</Label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
            {values.map((v, i) => (
              <div
                key={v.n}
                style={fadeUp(valuesInView, `${0.08 + i * 0.1}s`)}
                className="border-t border-white/10 hover:border-white/40 transition-colors duration-300 py-6 md:py-8 flex gap-4 md:gap-6 items-start"
              >
                <div style={{ fontFamily:serif, fontSize:"0.85rem", fontWeight:300, letterSpacing:"0.1em" }}
                     className="text-white flex-shrink-0 w-10 pt-0.5">
                  {v.n}
                </div>
                <div>
                  <div style={{ fontFamily:serif, fontSize:"clamp(1.2rem,1.5vw,1.45rem)", fontWeight:400, lineHeight:1.15 }}
                       className="text-white mb-2 md:mb-3">{v.title}</div>
                  <div style={{ fontFamily:sans, fontSize:"0.82rem", fontWeight:300, lineHeight:1.3 }}
                       className="text-white">{v.body}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-black" />

        {/* ══ MILESTONES ════════════════════════════════════════════ */}
        <section ref={milestoneRef} className="relative py-12 md:py-24 px-6 md:px-20 overflow-hidden">
          {/* Desktop watermark */}
          {/* <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
               style={{ width:"480px", height:"580px", marginRight:"70px", position:"absolute" }}>
            <div className="w-full h-full relative">
              <Image src="/savoy-2.png" alt="" fill style={{ objectFit:"contain", opacity:0.75 }} />
            </div>
          </div> */}

          <div className="relative z-10 w-full md:max-w-2xl">
            <div style={fadeLeft(milestoneInView)} className="mb-10 md:mb-14">
              <Label>Our Story</Label>
            </div>

            {/* ── The fix: comment removed from between JSX props ── */}
            {milestones.map((m, i) => (
              <div
                key={m.year}
                style={fadeUp(milestoneInView, `${0.1 + i * 0.15}s`)}
                className="flex flex-col sm:flex-row gap-4 md:gap-8 items-start pb-8 mb-8 md:pb-10 md:mb-10 border-b border-white/8 last:border-0 last:mb-0 last:pb-0"
              >
                <div className="flex-shrink-0">
                  <span
                    className="block border border-white px-3 py-1 text-white uppercase"
                    style={{ fontFamily:sans, fontSize:"0.6rem", letterSpacing:"0.18em" }}
                  >
                    {m.year}
                  </span>
                </div>
                <p style={{ fontFamily:sans, fontSize:"0.83rem", fontWeight:300, lineHeight:1.6 }}
                   className="text-white">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-black" />

        {/* ══ LOCATION ══════════════════════════════════════════════ */}
        <section ref={locationRef} className="py-12 md:py-24 px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

            <div>
              <div style={fadeLeft(locationInView)} className="mb-8 md:mb-10">
                <Label>Where We Operate</Label>
              </div>

              <h2
                style={{ ...fadeUp(locationInView,"0.12s"), fontFamily:serif, fontSize:"clamp(1.8rem,3vw,3rem)", fontWeight:300, lineHeight:1.1 }}
                className="text-white"
              >
                Nassau,<br />
                <em style={{ color:"rgb(255,255,255)" }}>The Bahamas.</em>
              </h2>

              <p
                style={{ ...fadeUp(locationInView,"0.25s"), fontFamily:sans, fontSize:"0.83rem", fontWeight:300, lineHeight:1.3 }}
                className="text-white mt-6 md:mt-7 max-w-md"
              >
                The Bahamas offers one of the most respected and stable financial
                regulatory frameworks in the world. Licensed by the Securities
                Commission of The Bahamas, Savoy operates within a jurisdiction
                that combines sovereign stability, international connectivity, and
                a long tradition of private banking excellence.
              </p>

              <div style={fadeUp(locationInView,"0.38s")} className="mt-8 md:mt-10 flex flex-col gap-4 md:gap-5">
                {[
                  ["Regulator",  "Securities Commission of The Bahamas"],
                  ["Structure",  "Privately Held"],
                  ["Clientele",  "International"],
                ].map(([k,v]) => (
                  <div key={k} className="flex gap-4 md:gap-6 items-start border-l border-white/20 pl-4 md:pl-5">
                    <span style={{ fontFamily:sans, fontSize:"0.62rem", letterSpacing:"0.15em" }}
                          className="text-white uppercase flex-shrink-0 w-20">{k}</span>
                    <span style={{ fontFamily:serif, fontSize:"0.95rem", fontWeight:300 }}
                          className="text-white">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop image */}
            {/* <div style={fadeRight(locationInView,"0.15s")} className="hidden md:flex justify-center items-center">
              <div className="relative" style={{ width:"600px", height:"700px" }}>
                <Image
                  src="/savoy-3.png"
                  alt="Savoy"
                  fill
                  style={{
                    objectFit:"contain", opacity:0.75,
                    maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
                    WebkitMaskImage:"radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
                  }}
                />
              </div>
            </div> */}
          </div>
        </section>

        <div className="w-full h-px bg-black" />

        {/* ══ QUOTE ═════════════════════════════════════════════════ */}
        <section className="py-12 md:py-20 px-6 md:px-20 flex flex-col items-center text-center">
          <p
            style={{ fontFamily:serif, fontSize:"clamp(1.2rem,2.2vw,2rem)", fontWeight:300, fontStyle:"italic", lineHeight:1.3 }}
            className="text-white max-w-2xl"
          >
            &ldquo;We do not measure success by volume. We measure it by the
            confidence and continuity of the relationships we hold.&rdquo;
          </p>
          <span className="block w-10 h-px bg-white mt-8" />
          <p style={{ fontFamily:sans, fontSize:"0.62rem", letterSpacing:"0.2em" }} className="uppercase text-white mt-4">
            Savoy Bank &amp; Trust
          </p>
        </section>

        <div className="w-full h-px bg-black" />

        {/* ══ CTA ═══════════════════════════════════════════════════ */}
        <section ref={ctaRef} className="py-14 md:py-24 px-6 md:px-20 flex flex-col items-center text-center">
          <div style={fadeUp(ctaInView)}>
            <Label center>Get in Touch</Label>
          </div>

          <h2
            style={{ ...fadeUp(ctaInView,"0.15s"), fontFamily:serif, fontSize:"clamp(2rem,4vw,3.8rem)", fontWeight:300, lineHeight:1.05 }}
            className="text-white mt-6"
          >
            Begin a Conversation
          </h2>

          <p
            style={{ ...fadeUp(ctaInView,"0.25s"), fontFamily:sans, fontSize:"0.83rem", fontWeight:300, lineHeight:1.3 }}
            className="text-white mt-5 max-w-md"
          >
            Whether you have a specific mandate in mind or simply wish to explore
            how Savoy might serve your needs, we welcome your enquiry.
          </p>

          <div style={fadeUp(ctaInView,"0.35s")} className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="mailto:info@savoybankandtrust.com"
              style={{ fontFamily:sans, fontSize:"0.72rem", letterSpacing:"0.18em" }}
              className="inline-flex items-center gap-3 uppercase text-white no-underline border border-white px-8 py-3 transition-all duration-300 hover:border-white hover:bg-white/5"
            >
              Email Us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="/contact-us"
              style={{ fontFamily:sans, fontSize:"0.72rem", letterSpacing:"0.18em" }}
              className="inline-flex items-center gap-2 uppercase text-white no-underline transition-colors duration-300 hover:text-white"
            >
              Contact Page
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </section>

        <div className="w-full h-px bg-black" />

      </main>

      <BrandFooterSection />
    </>
  );
}