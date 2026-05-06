// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// export default function BrandFooterSection() {
//   const sectionRef = useRef(null);
//   const hasAnimated = useRef(false);
//   const [scale, setScale] = useState(1.55);
//   const [opacity, setOpacity] = useState(0.45);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (hasAnimated.current) return;

//       const el = sectionRef.current;
//       if (!el) return;

//       const rect = el.getBoundingClientRect();
//       const windowH = window.innerHeight;

//       const progress = Math.min(
//         Math.max((windowH - rect.top) / (windowH + rect.height * 0.5), 0),
//         1
//       );

//       if (progress >= 0.99) {
//         setScale(1);
//         setOpacity(1);
//         hasAnimated.current = true;
//         window.removeEventListener("scroll", handleScroll);
//         return;
//       }

//       setScale(1.55 - progress * 0.55);
//       setOpacity(0.45 + progress * 0.55);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');

//         /* ── Mobile-only overrides — desktop untouched ── */
//         @media (max-width: 640px) {
//           .footer-logo-img { width: 52px !important; height: 52px !important; }
//           .footer-wordmark { font-size: 3rem !important; }
//           .footer-sub { padding-left: 3.5rem !important; font-size: 0.5rem !important; }
//           .footer-section-root { padding: 5rem 1.5rem !important; min-height: 10vh !important; }
//         }
//       `}</style>

//       <section
//         ref={sectionRef}
//         className="footer-section-root relative w-full bg-[#080808] flex items-center justify-center overflow-hidden"
//         style={{ minHeight: "52vh", padding: "6rem 2rem" }}
//       >
//         <div className="absolute inset-0 pointer-events-none bg-black" />

//         <div
//           className="relative z-10 flex flex-col items-center"
//           style={{
//             transform: `scale(${scale})`,
//             opacity: opacity,
//             willChange: "transform, opacity",
//           }}
//         >
//           {/* Logo row — original */}
//           <div className="flex items-center" style={{ gap: "1.1rem" }}>
//             <Image
//               src="/logo-savoy.png"
//               alt="Savoy"
//               width={90}
//               height={90}
//               className="footer-logo-img"
//             />
//             <span
//               className="footer-wordmark text-7xl"
//               style={{
//                 fontFamily: "'Cormorant Garamond', Georgia, serif",
//                 fontWeight: 400,
//                 letterSpacing: "0.02em",
//                 lineHeight: 1,
//                 color: "#ffffff",
//               }}
//             >
//               SAVOY
//             </span>
//           </div>

//           {/* Subtitle — original */}
//           <p
//             className="footer-sub text-[12px] pl-20"
//             style={{
//               fontFamily: "'Cormorant Garamond', Georgia, serif",
//               letterSpacing: "0.04em",
//               fontWeight: 300,
//               color: "#ffffff",
//             }}
//           >
//             SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
//             <em style={{ fontFamily: "'General Sans', 'Inter', system-ui, sans-serif" }}>The Bahamas</em>
//           </p>
//         </div>
//       </section>
//     </>
//   );
// }


// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// export default function BrandFooterSection() {
//   const sectionRef = useRef(null);
//   const hasAnimated = useRef(false);
//   const [scale, setScale] = useState(1.55);
//   const [opacity, setOpacity] = useState(0.45);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (hasAnimated.current) return;

//       const el = sectionRef.current;
//       if (!el) return;

//       const rect = el.getBoundingClientRect();
//       const windowH = window.innerHeight;

//       const progress = Math.min(
//         Math.max((windowH - rect.top) / (windowH + rect.height * 0.5), 0),
//         1,
//       );

//       if (progress >= 0.99) {
//         setScale(1);
//         setOpacity(1);
//         hasAnimated.current = true;
//         window.removeEventListener("scroll", handleScroll);
//         return;
//       }

//       setScale(1.55 - progress * 0.55);
//       setOpacity(0.45 + progress * 0.55);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');

//         @media (max-width: 640px) {
//           .footer-logo-img { width: 52px !important; height: 52px !important; }
//           .footer-wordmark { font-size: 3rem !important; }
//           .footer-sub { padding-left: 3.5rem !important; font-size: 0.5rem !important; }
//           .brand-section-root { padding: 5rem 1.5rem !important; min-height: 10vh !important; }
//         }
//       `}</style>

//       {/* ── 1. BRAND REVEAL SECTION (scroll-animated logo + lighthouse) ── */}
//       <section
//         ref={sectionRef}
//         className="brand-section-root relative w-full bg-[#080808] flex flex-col items-center justify-center overflow-hidden"
//         style={{ minHeight: "70vh", padding: "0" }}
//       >
//         {/* Lighthouse full-width image with dark overlay */}
//         <div className="absolute inset-0 w-full h-full">
//           <Image
//             src="/lighthouse-footer2.png"
//             alt="Lighthouse"
//             fill
//             style={{ objectFit: "fill", objectPosition: "center" }}
//             priority={false}
//           />
//           {/* Dark gradient overlay — stronger at bottom so text reads clearly */}
//           <div
//             className="absolute inset-0"
//             style={{
//               background:
//                 "linear-gradient(to bottom, rgba(8, 8, 8, 0.3) 0%, rgba(8, 8, 8, 0.35) 60%, rgba(8, 8, 8, 0.34) 100%)",
//             }}
//           />
//         </div>

//         {/* Scroll-animated logo lockup */}
//         <div
//           className="relative z-10 flex flex-col items-center"
//           style={{
//             transform: `scale(${scale})`,
//             opacity: opacity,
//             willChange: "transform, opacity",
//           }}
//         >
//           {/* Logo row */}
//           <div className="flex items-center" style={{ gap: "1.1rem" }}>
//             <Image
//               src="/logo-savoy.png"
//               alt="Savoy"
//               width={90}
//               height={90}
//               className="footer-logo-img"
//             />
//             <span
//               className="footer-wordmark text-7xl text-white"
//               style={{
//                 fontFamily: "'Cormorant Garamond', Georgia, serif",
//                 fontWeight: 400,
//                 letterSpacing: "0.02em",
//                 lineHeight: 1,
//               }}
//             >
//               SAVOY
//             </span>
//           </div>

//           {/* Subtitle */}
//           <p
//             className="footer-sub text-[12px] text-white pl-20"
//             style={{
//               fontFamily: "'Cormorant Garamond', Georgia, serif",
//               letterSpacing: "0.04em",
//               fontWeight: 300,
//             }}
//           >
//             SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
//             <em
//               style={{
//                 fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//               }}
//             >
//               The Bahamas
//             </em>
//           </p>

//           {/* Tagline beneath logo */}
//           {/* <p
//             className="mt-6 text-center text-white/60 text-[11px] tracking-widest uppercase"
//             style={{
//               fontFamily: "Avenir, 'Nunito Sans', sans-serif",
//               fontWeight: 100,
//               maxWidth: "360px",
//             }}
//           >
//             Tailored Banking &amp; Trust Services
//           </p> */}
//         </div>
//       </section>

//       {/* ── 2. FULL FOOTER (EGS-style) ── */}
//       <footer
//         className="w-full bg-black text-white"
//         style={{ fontFamily: "'General Sans', 'Inter', system-ui, sans-serif" }}
//       >
//         {/* Top divider */}
//         <div className="w-full h-px bg-black" />

//         <div className="w-[82%] mx-auto py-16 flex flex-col gap-10">
//           {/* Row 1 — Logos + Address + Contact */}
//           <div className="flex items-start justify-between gap-10 flex-wrap">
//             {/* Left — logos stacked */}
//             <div className="flex flex-col gap-3">
//               <Image
//                 src="/logo-savoy.png"
//                 alt="Savoy Logo"
//                 width={48}
//                 height={48}
//                 style={{ filter: "brightness(0) invert(1)" }}
//               />
//               <p
//                 className="text-[12px] text-white mt-1 uppercase tracking-widest"
//                 style={{ fontWeight: 100, maxWidth: "160px" }}
//               >
//                 Savoy Bank &amp; Trust
//               </p>
//             </div>

//             {/* Centre — address */}
//             <div
//               className="flex flex-col gap-1 text-[12px] text-white"
//               style={{ fontWeight: 100, maxWidth: "260px" }}
//             >
//               <p className="text-white uppercase tracking-widest text-[13px] mb-1">
//                 Registered Office
//               </p>
//               <p>Savoy Bank &amp; Trust</p>
//               <p>Nassau, New Providence</p>
//               <p>The Bahamas</p>
//             </div>

//             {/* Right — contact */}
//             <div
//               className="flex flex-col gap-1 text-[12px] text-white"
//               style={{ fontWeight: 100 }}
//             >
//               <p className="text-white uppercase tracking-widest text-[13px] mb-1">
//                 Contact
//               </p>
//               <a
//                 href="mailto:info@savoybankandtrust.com"
//                 className="hover:text-white transition-colors"
//               >
//                 info@savoybankandtrust.com
//               </a>
//               <a
//                 href="tel:+12425000000"
//                 className="hover:text-white transition-colors mt-1"
//               >
//                 +1 (242) 500-0000
//               </a>
//             </div>
//           </div>

//           {/* Divider */}
//           <div className="w-full h-px bg-white/10" />

//           {/* Row 2 — Nav links + copyright */}
//           <div className="flex items-center justify-between flex-wrap gap-4">
//             <div
//               className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-white"
//               style={{ fontWeight: 100 }}
//             >
//               <a href="#" className="hover:text-white transition-colors">
//                 Terms of Use
//               </a>
//               <a href="#" className="hover:text-white transition-colors">
//                 Privacy Policy
//               </a>
//               <a href="#" className="hover:text-white transition-colors">
//                 Cookies Policy
//               </a>
//               <a href="#" className="hover:text-white transition-colors">
//                 Risk Disclosures
//               </a>
//             </div>
//             <p className="text-[12px] text-white" style={{ fontWeight: 100 }}>
//               © {new Date().getFullYear()} Savoy Bank &amp; Trust. All rights
//               reserved.
//             </p>
//           </div>

//           {/* Disclaimer */}
//           {/* <p
//             className="text-[12px] text-white leading-relaxed"
//             style={{ fontWeight: 100, letterSpacing: "0.01em" }}
//           >
//             Savoy Bank &amp; Trust is a privately held financial institution
//             licensed and regulated in The Bahamas. This website is for
//             informational purposes only and does not constitute financial,
//             investment, or legal advice. Products and services are available
//             only to eligible clients in permitted jurisdictions. Past
//             performance is not indicative of future results. Should you have any
//             questions, please contact us using the details above.
//           </p> */}
//           <p
//             className="text-[12px] text-white leading-relaxed"
//             style={{ fontWeight: 100, letterSpacing: "0.01em" }}
//           >
//             Savoy Bank & Trust is a licensed financial institution in The Bahamas. This site is for informational purposes only and not financial, legal, or investment advice. Services are offered to eligible clients only. Past performance does not guarantee future results.
//           </p>

//         </div>
//       </footer>
//     </>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// export default function BrandFooterSection() {
//   const sectionRef = useRef(null);
//   const hasAnimated = useRef(false);
//   const [scale, setScale] = useState(1.55);
//   const [opacity, setOpacity] = useState(0.45);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (hasAnimated.current) return;

//       const el = sectionRef.current;
//       if (!el) return;

//       const rect = el.getBoundingClientRect();
//       const windowH = window.innerHeight;

//       const progress = Math.min(
//         Math.max((windowH - rect.top) / (windowH + rect.height * 0.5), 0),
//         1,
//       );

//       if (progress >= 0.99) {
//         setScale(1);
//         setOpacity(1);
//         hasAnimated.current = true;
//         window.removeEventListener("scroll", handleScroll);
//         return;
//       }

//       setScale(1.55 - progress * 0.55);
//       setOpacity(0.45 + progress * 0.55);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');

//         @media (max-width: 640px) {
//           .footer-logo-img { width: 52px !important; height: 52px !important; }
//           .footer-wordmark { font-size: 3rem !important; }
//           .footer-sub { padding-left: 3.5rem !important; font-size: 0.5rem !important; }
//           .lighthouse-side { display: none !important; }
//         }
//       `}</style>

//       {/* BRAND REVEAL SECTION */}
//       <section
//         ref={sectionRef}
//         className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden"
//         style={{ minHeight: "100vh" }}
//       >
//         {/* Lighthouse - Right Side */}
//         <div
//           className="lighthouse-side absolute right-0 top-0 h-full"
//           style={{ width: "50%", pointerEvents: "none" }}
//         >
//           <Image
//             src="/lighthouse-footer3.png"
//             alt="Lighthouse"
//             fill
//             style={{
//               objectFit: "fill",
//               objectPosition: "right center",
//             }}
//             priority={false}
//           />

//           {/* Strong fade to pure black */}
//           <div
//             className="absolute inset-0"
//             style={{
//               background: "linear-gradient(to right, #000000 0%, transparent 40%)",
//             }}
//           />
//         </div>

//         {/* Scroll Animated Logo */}
//         <div
//           className="relative z-10 flex flex-col items-center"
//           style={{
//             transform: `scale(${scale})`,
//             opacity: opacity,
//             willChange: "transform, opacity",
//             marginRight: "55%", // Balance with lighthouse on right
//           }}
//         >
//           <div className="flex items-center" style={{ gap: "1.1rem" }}>
//             <Image
//               src="/logo-savoy.png"
//               alt="Savoy"
//               width={90}
//               height={90}
//               className="footer-logo-img"
//             />
//             <span
//               className="footer-wordmark text-7xl text-white"
//               style={{
//                 fontFamily: "'Cormorant Garamond', Georgia, serif",
//                 fontWeight: 400,
//                 letterSpacing: "0.02em",
//                 lineHeight: 1,
//               }}
//             >
//               SAVOY
//             </span>
//           </div>

//           <p
//             className="footer-sub text-[12px] text-white pl-20"
//             style={{
//               fontFamily: "'Cormorant Garamond', Georgia, serif",
//               letterSpacing: "0.04em",
//               fontWeight: 300,
//             }}
//           >
//             SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
//             <em style={{ fontFamily: "'General Sans', 'Inter', system-ui, sans-serif" }}>
//               The Bahamas
//             </em>
//           </p>
//         </div>
//       </section>

//       {/* FULL FOOTER */}
//       <footer
//         className="w-full bg-black text-white"
//         style={{ fontFamily: "'General Sans', 'Inter', system-ui, sans-serif" }}
//       >
//         <div className="w-full h-px bg-black" />

//         <div className="w-[82%] mx-auto py-16 flex flex-col gap-10">
//           <div className="flex items-start justify-between gap-10 flex-wrap">
//             <div className="flex flex-col gap-3">
//               <Image
//                 src="/logo-savoy.png"
//                 alt="Savoy Logo"
//                 width={48}
//                 height={48}
//                 style={{ filter: "brightness(0) invert(1)" }}
//               />
//               <p className="text-[12px] text-white mt-1 uppercase tracking-widest" style={{ fontWeight: 100 }}>
//                 Savoy Bank &amp; Trust
//               </p>
//             </div>

//             <div className="flex flex-col gap-1 text-[12px] text-white" style={{ fontWeight: 100, maxWidth: "260px" }}>
//               <p className="uppercase tracking-widest text-[13px] mb-1">Registered Office</p>
//               <p>Savoy Bank &amp; Trust</p>
//               <p>Nassau, New Providence</p>
//               <p>The Bahamas</p>
//             </div>

//             <div className="flex flex-col gap-1 text-[12px] text-white" style={{ fontWeight: 100 }}>
//               <p className="uppercase tracking-widest text-[13px] mb-1">Contact</p>
//               <a href="mailto:info@savoybankandtrust.com" className="hover:text-white transition-colors">
//                 info@savoybankandtrust.com
//               </a>
//               <a href="tel:+12425000000" className="hover:text-white transition-colors mt-1">
//                 +1 (242) 500-0000
//               </a>
//             </div>
//           </div>

//           <div className="w-full h-px bg-white/10" />

//           <div className="flex items-center justify-between flex-wrap gap-4">
//             <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-white" style={{ fontWeight: 100 }}>
//               <a href="#" className="hover:text-white">Terms of Use</a>
//               <a href="#" className="hover:text-white">Privacy Policy</a>
//               <a href="#" className="hover:text-white">Cookies Policy</a>
//               <a href="#" className="hover:text-white">Risk Disclosures</a>
//             </div>
//             <p className="text-[12px] text-white" style={{ fontWeight: 100 }}>
//               © {new Date().getFullYear()} Savoy Bank &amp; Trust. All rights reserved.
//             </p>
//           </div>

//           <p className="text-[12px] text-white leading-relaxed" style={{ fontWeight: 100, letterSpacing: "0.01em" }}>
//             Savoy Bank & Trust is a licensed financial institution in The Bahamas. This site is for informational purposes only and not financial, legal, or investment advice. Services are offered to eligible clients only. Past performance does not guarantee future results.
//           </p>
//         </div>
//       </footer>
//     </>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Only font import stays — Tailwind can't do @import
const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
`;

const serif = "'Cormorant Garamond', Georgia, serif";
const sans  = "'General Sans', 'Inter', system-ui, sans-serif";

export default function BrandFooterSection() {
  const sectionRef  = useRef(null);
  const hasAnimated = useRef(false);
  const [scale,   setScale]   = useState(1.55);
  const [opacity, setOpacity] = useState(0.45);

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated.current) return;
      const el = sectionRef.current;
      if (!el) return;

      const rect     = el.getBoundingClientRect();
      const windowH  = window.innerHeight;
      const progress = Math.min(
        Math.max((windowH - rect.top) / (windowH + rect.height * 0.5), 0),
        1
      );

      if (progress >= 0.99) {
        setScale(1);
        setOpacity(1);
        hasAnimated.current = true;
        window.removeEventListener("scroll", handleScroll);
        return;
      }

      setScale(1.55 - progress * 0.55);
      setOpacity(0.45 + progress * 0.55);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{fontStyle}</style>

      {/* ── BRAND REVEAL SECTION ──────────────────────────── */}

      {/* ── MOBILE layout: image on top, logo below ── */}
      <section ref={sectionRef} className="block md:hidden w-full bg-black overflow-hidden">
        {/* Lighthouse image — full width, fitted */}
        <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
          <Image
            src="/lighthouse-footer3.png"
            alt="Lighthouse"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority={false}
          />
          {/* Fade bottom edge into black */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, transparent 55%, #000000 100%)" }}
          />
        </div>

        {/* Logo below image */}
        <div
          className="flex flex-col items-center pb-16 -mt-10 relative z-10"
          style={{ opacity, transform: `scale(${scale})`, willChange: "transform, opacity" }}
        >
          <div className="flex items-center gap-4">
            <Image src="/logo-savoy.png" alt="Savoy" width={60} height={60} />
            <span
              className="text-5xl text-white"
              style={{ fontFamily: serif, fontWeight: 400, letterSpacing: "0.02em", lineHeight: 1 }}
            >
              SAVOY
            </span>
          </div>
          <p
            className="text-[0.6rem] text-white pl-14 mt-1"
            style={{ fontFamily: serif, letterSpacing: "0.04em", fontWeight: 300 }}
          >
            SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
            <em style={{ fontFamily: sans }}>The Bahamas</em>
          </p>
        </div>
      </section>

      {/* ── DESKTOP layout: logo left, lighthouse right (unchanged) ── */}
      <section className="hidden md:flex relative w-full bg-black flex-col items-center justify-center overflow-hidden min-h-screen">
        {/* Lighthouse — right side */}
        <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
          <Image
            src="/lighthouse-footer3.png"
            alt="Lighthouse"
            fill
            style={{ objectFit: "fill", objectPosition: "right center" }}
            priority={false}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, #000000 0%, transparent 40%)" }}
          />
        </div>

        {/* Scroll-animated logo */}
        <div
          className="relative z-10 flex flex-col items-center mr-[55%]"
          style={{ transform: `scale(${scale})`, opacity, willChange: "transform, opacity" }}
        >
          <div className="flex items-center gap-4">
            <Image src="/logo-savoy.png" alt="Savoy" width={90} height={90} />
            <span
              className="text-7xl text-white"
              style={{ fontFamily: serif, fontWeight: 400, letterSpacing: "0.02em", lineHeight: 1 }}
            >
              SAVOY
            </span>
          </div>
          <p
            className="text-[12px] text-white pl-20 mt-1"
            style={{ fontFamily: serif, letterSpacing: "0.04em", fontWeight: 300 }}
          >
            SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
            <em style={{ fontFamily: sans }}>The Bahamas</em>
          </p>
        </div>
      </section>

      {/* ── FULL FOOTER ───────────────────────────────────── */}
      <footer className="w-full bg-black text-white" style={{ fontFamily: sans }}>
        <div className="w-full h-px bg-black" />

        <div className="w-[82%] mx-auto py-16 flex flex-col gap-10">

          {/* Top row */}
          <div className="flex items-start justify-between gap-10 flex-wrap">

            {/* Logo + name */}
            <div className="flex flex-col gap-3">
              <Image
                src="/logo-savoy.png"
                alt="Savoy Logo"
                width={48}
                height={48}
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p className="text-xs text-white mt-1 uppercase tracking-widest font-thin">
                Savoy Bank &amp; Trust
              </p>
            </div>

            {/* Registered office */}
            <div className="flex flex-col gap-1 text-xs text-white font-thin max-w-[260px]">
              <p className="uppercase tracking-widest text-[13px] mb-1">Registered Office</p>
              <p>Savoy Bank &amp; Trust</p>
              <p>Nassau, New Providence</p>
              <p>The Bahamas</p>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-1 text-xs text-white font-thin">
              <p className="uppercase tracking-widest text-[13px] mb-1">Contact</p>
              <a href="mailto:info@savoybankandtrust.com" className="hover:text-white/80 transition-colors no-underline">
                info@savoybankandtrust.com
              </a>
              <a href="tel:+12425000000" className="hover:text-white/80 transition-colors no-underline mt-1">
                +1 (242) 500-0000
              </a>
            </div>
          </div>

          <div className="w-full h-px bg-white/10" />

          {/* Links + copyright */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white font-thin">
              <a href="#" className="hover:text-white/80 transition-colors no-underline">Terms of Use</a>
              <a href="#" className="hover:text-white/80 transition-colors no-underline">Privacy Policy</a>
              <a href="#" className="hover:text-white/80 transition-colors no-underline">Cookies Policy</a>
              <a href="#" className="hover:text-white/80 transition-colors no-underline">Risk Disclosures</a>
            </div>
            <p className="text-xs text-white font-thin">
              © {new Date().getFullYear()} Savoy Bank &amp; Trust. All rights reserved.
            </p>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-white font-thin leading-relaxed" style={{ letterSpacing: "0.01em" }}>
            Savoy Bank &amp; Trust is a licensed financial institution in The Bahamas. This site is for
            informational purposes only and not financial, legal, or investment advice. Services are
            offered to eligible clients only. Past performance does not guarantee future results.
          </p>

        </div>
      </footer>
    </>
  );
}