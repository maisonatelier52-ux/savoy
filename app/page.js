// "use client";

// import BrandFooterSection from "@/components/Brandfootersection";
// import SecondSection from "@/components/Secondsection";
// import Thirdsection from "@/components/Thirdsection";
// import FourthSection from "@/components/Fourthsection";
// import { useEffect, useRef, useState } from "react";

// // SVG Star/Compass Logo — 8-pointed star matching the Savoy design
// function StarLogo({ className = "", size = 32 }) {
//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox="0 0 100 100"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//     >
//       {/* 8-pointed compass star */}
//       <path
//         d="M50 2 L54 46 L98 50 L54 54 L50 98 L46 54 L2 50 L46 46 Z"
//         fill="white"
//         opacity="0.95"
//       />
//       <path
//         d="M50 15 L52.5 47.5 L85 50 L52.5 52.5 L50 85 L47.5 52.5 L15 50 L47.5 47.5 Z"
//         fill="white"
//         transform="rotate(45 50 50)"
//         opacity="0.6"
//       />
//     </svg>
//   );
// }

// export default function Home() {
//   // Animation phases:
//   // 0 = black screen
//   // 1 = video fades in + logo grows from center
//   // 2 = header slides in (logo moves top-left, nav fades top-right)
//   // 3 = video fades out to black
//   // 4 = content text fades in
//   const [phase, setPhase] = useState(0);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     // Phase 1: fade in video + logo after brief black hold
//     const t1 = setTimeout(() => setPhase(1), 400);
//     // Phase 2: header slides in
//     const t2 = setTimeout(() => setPhase(2), 2800);
//     // Phase 3: video fades to black
//     const t3 = setTimeout(() => setPhase(3), 5200);
//     // Phase 4: content text appears
//     const t4 = setTimeout(() => setPhase(4), 7000);

//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//       clearTimeout(t3);
//       clearTimeout(t4);
//     };
//   }, []);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.play().catch(() => {});
//     }
//   }, []);

//   return (
//    <div>
//      <div className="relative w-full min-h-screen bg-black overflow-hidden">

//       {/* ─── VIDEO LAYER ─── */}
//       <div
//         className="absolute inset-0 transition-opacity"
//         style={{
//           opacity: phase === 1 ? 1 : phase === 2 ? 1 : phase >= 3 ? 0 : 0,
//           transitionDuration: phase === 1 ? "1800ms" : "2000ms",
//           transitionTimingFunction: "ease-in-out",
//         }}
//       >
//         {/* 
//           Replace the src below with your actual lighthouse video path.
//           Place the video file in /public/lighthouse.mp4
//           The video should be a dark, moody ocean/lighthouse clip.
//         */}
//         <video
//           ref={videoRef}
//           className="w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//           src="/homebannervideo.mp4"
//         />
//         {/* Dark overlay so the star pops */}
//         {/* <div className="absolute inset-0 bg-black/40" /> */}
//       </div>

//       {/* ─── CENTER STAR LOGO (phases 1-2) ─── */}
//       {/* Grows from tiny dot → full size from center, then vanishes as header takes over */}
//       {/* <div
//         className="absolute inset-0 flex items-center justify-center pointer-events-none"
//         style={{
//           opacity: phase === 0 ? 0 : phase === 1 ? 1 : phase === 2 ? 0 : 0,
//           transition: "opacity 1s ease-in-out",
//           zIndex: 20,
//         }}
//       >
//         <div
//           style={{
//             transform: phase <= 1 ? "scale(1)" : "scale(0.1)",
//             opacity: phase === 1 ? 1 : 0,
//             transition:
//               phase === 1
//                 ? "transform 1.8s cubic-bezier(0.16,1,0.3,1), opacity 1.2s ease-in"
//                 : "opacity 0.6s ease-out",
//           }}
//         >
//           <StarLogo size={220} />
//         </div>
//       </div> */}

//       {/* ─── HEADER (phases 2+) ─── */}
//       <header
//         className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between pl-15 pr-25 py-10 pt-13"
//         style={{
//           opacity: phase >= 2 ? 1 : 0,
//           transform: phase >= 2 ? "translateY(0)" : "translateY(-20px)",
//           transition: "opacity 1.2s ease-out, transform 1.2s ease-out",
//         }}
//       >
//         {/* Logo */}
//         {/* <div className="flex items-center gap-3">
//           <StarLogo size={28} />
//           <span
//             className="text-white tracking-[0.3em] text-sm font-light uppercase"
//             style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontSize: "1rem", letterSpacing: "0.25em" }}
//           >
//             SAVOY
//           </span>
//         </div> */}

//         <div className="flex items-center ">
//           <img 
//             src="/savoy-logo.png" 
//             alt="Savoy Logo" 
//             className="h-27 w-auto" 
//           />

//         </div>

//         {/* Nav */}
//         <nav
//           className="hidden sm:flex items-center gap-4"
//           style={{
//             opacity: phase >= 2 ? 1 : 0,
//             transition: "opacity 1.4s ease-out 0.3s",
//           }}
//         >
//           {["ABOUT", "COMPANY OVERVIEW", "LEADERSHIP", "CONTACT US"].map((item) => (
//             <a
//               key={item}
//               href="#"
//               // className="text-white/80 hover:text-white transition-colors text-xs tracking-widest uppercase"
//               // style={{ letterSpacing: "0.15em", fontSize: "0.7rem", fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
//               className="text-white hover:text-white transition-colors text-xs tracking-widest uppercase"
//               style={{ letterSpacing: "0.1em", fontSize: "0.8rem", fontFamily: "'General Sans', 'Inter', system-ui, sans-serif" }}
//                >
//               {item}
//             </a>
//           ))}
//         </nav>
//       </header>

//       {/* ─── BOTTOM CONTENT (phase 4) ─── */}
//       <div
//         className="absolute bottom-0 left-0 right-0 z-30 pl-20 pb-14 "
//         style={{
//           opacity: phase >= 4 ? 1 : 0,
//           transform: phase >= 4 ? "translateY(0)" : "translateY(24px)",
//           transition: "opacity 1.4s ease-out, transform 1.4s ease-out",
//         }}
//       >
//         {/* <p
//           className="text-white tracking-widest uppercase mb-3"
//           style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", letterSpacing: "0.2em", fontSize: "0.95rem" }}
//         >
//           SAVOY BANK &amp; TRUST &nbsp;|&nbsp; Tailored Banking &amp; Trust Services
//         </p> */}
//         <p
//         className="text-white tracking-widest uppercase mb-3"
//         style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontSize: "0.95rem", fontWeight: 300 }}
//       >
//         SAVOY BANK &amp; TRUST &nbsp;|&nbsp; 
//         <span style={{ textTransform: "none", fontFamily: "'General Sans', 'Inter', system-ui, sans-serif" }}>
//           Tailored Banking &amp; Trust Services
//         </span>
//       </p>
//         <h1
//           className="text-white max-w-[680px] leading-none text-3xl"
//           style={{
//             fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//             fontSize: "clamp(1.4rem, 3vw, 2rem)",
//             fontWeight: 300,
//           }}
//         >
//           Tailored banking, trust, and market services for clients
//           who value discretion, continuity, and clear guidance in
//           a complex international landscape.
//         </h1>
//       </div>

//       {/* ─── FONT IMPORT ─── */}
//       {/* <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap');
//       `}</style> */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
//       `}</style>
//       <style>{`
//         @import url('https://fonts.cdnfonts.com/css/general-sans');
//       `}</style>
//     </div>
//     <SecondSection/>
//     <Thirdsection/>
//     <FourthSection/>
//     <BrandFooterSection/>
    


//    </div>
//   );
// }


"use client";

import BrandFooterSection from "@/components/Brandfootersection";
import SecondSection from "@/components/Secondsection";
import Thirdsection from "@/components/Thirdsection";
import FourthSection from "@/components/Fourthsection";
import { useEffect, useRef, useState } from "react";

function StarLogo({ className = "", size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M50 2 L54 46 L98 50 L54 54 L50 98 L46 54 L2 50 L46 46 Z" fill="white" opacity="0.95" />
      <path d="M50 15 L52.5 47.5 L85 50 L52.5 52.5 L50 85 L47.5 52.5 L15 50 L47.5 47.5 Z" fill="white" transform="rotate(45 50 50)" opacity="0.6" />
    </svg>
  );
}

export default function Home() {
  const [phase, setPhase] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 2800);
    const t3 = setTimeout(() => setPhase(3), 5200);
    const t4 = setTimeout(() => setPhase(4), 7000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navItems = ["ABOUT", "COMPANY OVERVIEW", "LEADERSHIP", "CONTACT US"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
        @import url('https://fonts.cdnfonts.com/css/general-sans');

        /* ── Mobile drawer ── */
        .mobile-nav {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.97);
          z-index: 100;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          pointer-events: none;
          opacity: 0;
          transform: translateY(-24px);
          transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .mobile-nav.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }
        .mobile-nav a {
          font-family: 'Cormorant', Georgia, serif;
          color: #fff;
          font-size: clamp(1.6rem, 6vw, 2.4rem);
          font-weight: 300;
          letter-spacing: 0.18em;
          text-decoration: none;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .mobile-nav.open a { opacity: 1; transform: translateY(0); }
        .mobile-nav.open a:nth-child(1) { transition-delay: 0.10s; }
        .mobile-nav.open a:nth-child(2) { transition-delay: 0.18s; }
        .mobile-nav.open a:nth-child(3) { transition-delay: 0.26s; }
        .mobile-nav.open a:nth-child(4) { transition-delay: 0.34s; }

        /* Hamburger — hidden on desktop, shown on tablet/mobile */
        .hamburger-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          position: relative;
          z-index: 110;
          -webkit-tap-highlight-color: transparent;
        }
        .ham-line {
          display: block;
          width: 22px;
          height: 1.5px;
          background: #fff;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        @media (max-width: 1024px) {
          /* Show hamburger, hide desktop nav */
          .hamburger-btn { display: flex; }
          .desktop-nav { display: none !important; }
          /* Tighten header padding on tablet */
          .page-header { padding-left: 2rem !important; padding-right: 2rem !important; padding-top: 2rem !important; }
          .header-logo { height: 4.5rem !important; }
        }

        @media (max-width: 640px) {
          .page-header { padding-left: 1.25rem !important; padding-right: 1.25rem !important; padding-top: 1.5rem !important; }
          .header-logo { height: 3.5rem !important; }
          /* Hero bottom text */
          .hero-bottom { padding-left: 1.25rem !important; padding-bottom: 2rem !important; }
          .hero-bottom h1 { font-size: 1.1rem !important; max-width: 100% !important; }
          .hero-bottom p { font-size: 0.72rem !important; }
        }
      `}</style>

      {/* Mobile drawer nav */}
      {/* <nav className={`mobile-nav${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        {navItems.map((item) => (
          <a key={item} href="#" onClick={() => setMenuOpen(false)}>{item}</a>
        ))}
      </nav> */}
      {/* Mobile drawer nav */}
<nav className={`mobile-nav${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>

  {/* ── Close button ── */}
  <button
    onClick={() => setMenuOpen(false)}
    aria-label="Close menu"
    style={{
      position: "absolute",
      top: "1.5rem",
      right: "1.5rem",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      zIndex: 120,
    }}
  >
    <span style={{ display: "block", width: "22px", height: "1.5px", background: "#fff", transform: "translateY(3.25px) rotate(45deg)", transition: "transform 0.3s ease" }} />
    <span style={{ display: "block", width: "22px", height: "1.5px", background: "#fff", transform: "translateY(-3.25px) rotate(-45deg)", transition: "transform 0.3s ease" }} />
  </button>

  {navItems.map((item) => (
    <a key={item} href="#" onClick={() => setMenuOpen(false)}>{item}</a>
  ))}
</nav>

{/* Tap-outside backdrop */}
{menuOpen && (
  <div
    onClick={() => setMenuOpen(false)}
    style={{
      position: "fixed",
      inset: 0,
      zIndex: 99,
    }}
    aria-hidden="true"
  />
)}

      <div>
        <div className="relative w-full min-h-screen bg-black overflow-hidden">

          {/* ── VIDEO LAYER — unchanged ── */}
          {/* <div
            className="absolute inset-0 transition-opacity"
            style={{
              opacity: phase === 1 ? 1 : phase === 2 ? 1 : phase >= 3 ? 0 : 0,
              transitionDuration: phase === 1 ? "1800ms" : "2000ms",
              transitionTimingFunction: "ease-in-out",
            }}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay muted loop playsInline
              src="/homebannervideo.mp4"
            />
          </div> */}

          {/* ── VIDEO LAYER — unchanged ── */}
<div
  className="absolute inset-0 transition-opacity"
  style={{
    opacity: phase === 1 ? 1 : phase === 2 ? 1 : phase >= 3 ? 0 : 0,
    transitionDuration: phase === 1 ? "1800ms" : "2000ms",
    transitionTimingFunction: "ease-in-out",
  }}
>
  <video
    ref={videoRef}
    className="w-full h-full object-cover"
    autoPlay muted loop playsInline
    src="/homebannervideo.mp4"
  />
</div>

{/* ── LIGHTHOUSE IMAGE — fades in after video fades out (phase >= 3) ── */}
<div
  className="absolute inset-0 transition-opacity"
  style={{
    opacity: phase >= 3 ? 1 : 0,
    transitionDuration: "3000ms",
    transitionTimingFunction: "ease-in-out",
  }}
>
  {/* Right-side lighthouse image - Strong top fade to black */}
  <div
    className="absolute"
    style={{
      right: 0,
      top: 0,                    // Start from the very top
      bottom: 0,
      width: "55%",
    }}
  >
    <img
      src="/lighthouse-2.png"
      alt="Lighthouse"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center top",
        // Improved mask: soft right fade + strong smooth top fade
        maskImage: `
          linear-gradient(to right, transparent 5%, black 50%),
          linear-gradient(to top, transparent 0%, black 50%)
        `,
        WebkitMaskImage: `
          linear-gradient(to right, transparent 5%, black 50%),
          linear-gradient(to top, transparent 0%, black 50%)
        `,
        maskComposite: "intersect",
        WebkitMaskComposite: "intersect",
      }}
    />
  </div>
</div>

          {/* ── HEADER — original layout, hamburger added for mobile ── */}
          <header
            className="page-header absolute top-0 left-0 right-0 z-30 flex items-center justify-between pl-15 pr-25 py-10 pt-13"
            style={{
              opacity: phase >= 4 ? 1 : 0,
              transform: phase >= 4 ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 1.4s ease-out, transform 1.4s ease-out",
            }}
          >
            {/* Logo — exactly as original */}
            <div className="flex items-center">
              <img src="/savoy-logo.png" alt="Savoy Logo" className="header-logo h-27 w-auto" />
            </div>

            {/* Desktop nav — exactly as original */}
            <nav
              className="desktop-nav hidden sm:flex items-center gap-4"
              style={{
                opacity: phase >= 2 ? 1 : 0,
                transition: "opacity 1.4s ease-out 0.3s",
              }}
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white hover:text-white transition-colors text-xs tracking-widest uppercase"
                  style={{ letterSpacing: "0.1em", fontSize: "0.8rem", fontFamily: "'General Sans', 'Inter', system-ui, sans-serif" }}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Hamburger — only visible ≤1024px via CSS */}
            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className="ham-line" style={menuOpen ? { transform: "translateY(6.5px) rotate(45deg)" } : {}} />
              <span className="ham-line" style={menuOpen ? { opacity: 0 } : {}} />
              <span className="ham-line" style={menuOpen ? { transform: "translateY(-6.5px) rotate(-45deg)" } : {}} />
            </button>
          </header>

          {/* ── BOTTOM CONTENT — exactly as original ── */}
          <div
            className="hero-bottom absolute bottom-0 left-0 right-0 z-30 pl-20 pb-14"
            style={{
              opacity: phase >= 4 ? 1 : 0,
              transform: phase >= 4 ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 1.4s ease-out, transform 1.4s ease-out",
            }}
          >
            <p
              className="text-white tracking-widest uppercase mb-3"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontSize: "0.95rem", fontWeight: 300 }}
            >
              SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
              <span style={{ textTransform: "none", fontFamily: "'General Sans', 'Inter', system-ui, sans-serif" }}>
                Tailored Banking &amp; Trust Services
              </span>
            </p>
            <h1
              className="text-white max-w-[680px] leading-none text-3xl"
              style={{
                fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                fontSize: "clamp(1.8rem, 2vw, 1.3rem)",
                fontWeight: 300,
                lineHeight: 1.3,
              }}
            >
              Tailored banking, trust, and market services for clients
              who value discretion, continuity, and clear guidance in
              a complex international landscape.
            </h1>
          </div>

        </div>

        <SecondSection />
        <Thirdsection />
        <FourthSection />
        <BrandFooterSection />
      </div>
    </>
  );
}