// "use client";

// import BrandFooterSection from "@/components/Brandfootersection";
// import SecondSection from "@/components/Secondsection";
// import Thirdsection from "@/components/Thirdsection";
// import FourthSection from "@/components/Fourthsection";
// import { useEffect, useRef, useState } from "react";

// export default function Home() {
//   // ─── Phase legend ───────────────────────────────────────────────────
//   // 0  black screen (mount)
//   // 1  video fades in
//   // 2  header slides in over video
//   // 3  video fades out  ← triggered by video "ended" event
//   // 4  lighthouse + bottom copy fade in
//   // ────────────────────────────────────────────────────────────────────
//   const [phase, setPhase] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [videoEnded, setVideoEnded] = useState(false);

//   const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//       setIsMobile(window.innerWidth <= 768);
//     }, []);

//   const videoRef = useRef(null);
//   // Track whether we already handled the end so fallback doesn't double-fire
//   const endHandled = useRef(false);

//   // ── 1. Scroll to very top on every mount / refresh ──────────────────
//   useEffect(() => {
//     // history.scrollRestoration prevents browser from restoring scroll pos
//     if (typeof window !== "undefined") {
//       if ("scrollRestoration" in history) {
//         history.scrollRestoration = "manual";
//       }
//       window.scrollTo({ top: 0, left: 0, behavior: "instant" });
//     }
//   }, []);

//   // ── 2. Lock scroll until video ends (or fallback fires) ─────────────
//   useEffect(() => {
//     // Combine video-lock and menu-lock without fighting each other
//     const locked = !videoEnded || menuOpen;
//     document.body.style.overflow = locked ? "hidden" : "";
//     document.documentElement.style.overflow = locked ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     };
//   }, [videoEnded, menuOpen]);

//   // ── 3. Start video + initial phase timer ────────────────────────────
//   useEffect(() => {
//     // Tiny delay so the browser paints the black screen first
//     const t1 = setTimeout(() => setPhase(1), 300);
//     // Header slides in ~2 s after video is visible
//     // const t2 = setTimeout(() => setPhase(2), 300);

//     // Play video
//     const vid = videoRef.current;
//     if (vid) {
//       vid.play().catch(() => {
//         // Autoplay blocked → skip straight to post-video state
//         handleVideoEnd();
//       });
//     }

//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // ── 4. Fallback: unlock scroll if video hasn't ended after 15 s ─────
//   useEffect(() => {
//     const fallback = setTimeout(() => {
//       if (!endHandled.current) {
//         handleVideoEnd();
//       }
//     }, 15_000);
//     return () => clearTimeout(fallback);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // ── 5. What happens when the video finishes ──────────────────────────
//   function handleVideoEnd() {
//     if (endHandled.current) return;
//     endHandled.current = true;

//     // Phase 3 → video layer fades out (CSS transition ~2 s)
//     setPhase(3);

//     // Phase 4 → lighthouse + bottom copy fade in after video is gone
//     setTimeout(() => {
//       setPhase(4);
//       // Unlock scroll AFTER the transition so the page doesn't jump
//       setVideoEnded(true);
//     }, 1_800);
//   }

//   const navItems = ["ABOUT", "COMPANY OVERVIEW", "LEADERSHIP", "CONTACT US"];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
//         @import url('https://fonts.cdnfonts.com/css/general-sans');

//         /* ── Mobile drawer ── */
//         .mobile-nav {
//           position: fixed;
//           inset: 0;
//           background: rgba(0,0,0,0.97);
//           z-index: 100;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 2.5rem;
//           pointer-events: none;
//           opacity: 0;
//           transform: translateY(-24px);
//           transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//         }
//         .mobile-nav.open {
//           opacity: 1;
//           transform: translateY(0);
//           pointer-events: all;
//         }
//         .mobile-nav a {
//           font-family: 'Cormorant', Georgia, serif;
//           color: #fff;
//           font-size: clamp(1.6rem, 6vw, 2.4rem);
//           font-weight: 300;
//           letter-spacing: 0.18em;
//           text-decoration: none;
//           text-transform: uppercase;
//           opacity: 0;
//           transform: translateY(14px);
//           transition: opacity 0.4s ease, transform 0.4s ease;
//         }
//         .mobile-nav.open a { opacity: 1; transform: translateY(0); }
//         .mobile-nav.open a:nth-child(1) { transition-delay: 0.10s; }
//         .mobile-nav.open a:nth-child(2) { transition-delay: 0.18s; }
//         .mobile-nav.open a:nth-child(3) { transition-delay: 0.26s; }
//         .mobile-nav.open a:nth-child(4) { transition-delay: 0.34s; }

//         /* Hamburger — hidden on desktop */
//         .hamburger-btn {
//           display: none;
//           flex-direction: column;
//           gap: 5px;
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 8px;
//           position: relative;
//           z-index: 110;
//           -webkit-tap-highlight-color: transparent;
//         }
//         .ham-line {
//           display: block;
//           width: 22px;
//           height: 1.5px;
//           background: #fff;
//           transition: transform 0.3s ease, opacity 0.3s ease;
//         }

//         @media (max-width: 1024px) {
//           .hamburger-btn { display: flex; }
//           .desktop-nav { display: none !important; }
//           .page-header { padding-left: 2rem !important; padding-right: 2rem !important; padding-top: 2rem !important; }
//           .header-logo { height: 4.5rem !important; }
//         }

//         @media (max-width: 640px) {
//           .page-header { padding-left: 1.25rem !important; padding-right: 1.25rem !important; padding-top: 1.5rem !important; }
//           .header-logo { height: 3.5rem !important; }
//           .hero-bottom { padding-left: 1.25rem !important; padding-bottom: 2rem !important; }
//           .hero-bottom h1 { font-size: 1.1rem !important; max-width: 100% !important; }
//           .hero-bottom p { font-size: 0.72rem !important; }
//         }

//         /* ── Lighthouse responsive ── */
//         .lighthouse-wrap {
//           right: 0;
//           top: 0;
//           bottom: 0;
//           width: 55%;
//         }
//         .lighthouse-img {
//           mask-image:
//             linear-gradient(to right, transparent 5%, black 50%),
//             linear-gradient(to top, transparent 0%, black 45%);
//           -webkit-mask-image:
//             linear-gradient(to right, transparent 5%, black 50%),
//             linear-gradient(to top, transparent 0%, black 45%);
//           mask-composite: intersect;
//           -webkit-mask-composite: source-in;
//         }
//         @media (max-width: 1024px) {
//           .lighthouse-wrap { width: 70% !important; }
//           .lighthouse-img {
//             mask-image:
//               linear-gradient(to right, transparent 0%, black 40%),
//               linear-gradient(to top, transparent 0%, black 45%);
//             -webkit-mask-image:
//               linear-gradient(to right, transparent 0%, black 40%),
//               linear-gradient(to top, transparent 0%, black 45%);
//           }
//         }
//         @media (max-width: 640px) {
//           .lighthouse-wrap { width: 100% !important; top: 0 !important; }
//           .lighthouse-img {
//             mask-image:
//               linear-gradient(to right, transparent 0%, black 30%),
//               linear-gradient(to top, transparent 0%, black 40%),
//               linear-gradient(to bottom, transparent 0%, black 30%);
//             -webkit-mask-image:
//               linear-gradient(to right, transparent 0%, black 30%),
//               linear-gradient(to top, transparent 0%, black 40%),
//               linear-gradient(to bottom, transparent 0%, black 30%);
//             mask-composite: intersect;
//             -webkit-mask-composite: source-in;
//             object-position: right top !important;
//           }
//         }
//       `}</style>

//       {/* ── Mobile drawer nav ── */}
//       <nav
//         className={`mobile-nav${menuOpen ? " open" : ""}`}
//         aria-hidden={!menuOpen}
//       >
//         {/* Close button */}
//         <button
//           onClick={() => setMenuOpen(false)}
//           aria-label="Close menu"
//           style={{
//             position: "absolute",
//             top: "1.5rem",
//             right: "1.5rem",
//             background: "none",
//             border: "none",
//             cursor: "pointer",
//             padding: "8px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "5px",
//             zIndex: 120,
//           }}
//         >
//           <span style={{ display: "block", width: "22px", height: "1.5px", background: "#fff", transform: "translateY(3.25px) rotate(45deg)", transition: "transform 0.3s ease" }} />
//           <span style={{ display: "block", width: "22px", height: "1.5px", background: "#fff", transform: "translateY(-3.25px) rotate(-45deg)", transition: "transform 0.3s ease" }} />
//         </button>

//         {navItems.map((item) => (
//           <a key={item} href="#" onClick={() => setMenuOpen(false)}>
//             {item}
//           </a>
//         ))}
//       </nav>

//       {/* Tap-outside backdrop */}
//       {menuOpen && (
//         <div
//           onClick={() => setMenuOpen(false)}
//           style={{ position: "fixed", inset: 0, zIndex: 99 }}
//           aria-hidden="true"
//         />
//       )}

//       <div>
//         <div className="relative w-full min-h-screen bg-black overflow-hidden">

//           {/* ── VIDEO LAYER ──────────────────────────────────────────────
//               • No `loop` — must fire the `ended` event
//               • `onEnded` drives the entire post-video transition
//               • Fades OUT when phase reaches 3
//           ─────────────────────────────────────────────────────────────── */}
//           <div
//             className="absolute inset-0 transition-opacity"
//             style={{
//               opacity: phase >= 1 && phase < 3 ? 1 : 0,
//               transitionDuration: phase === 1 ? "1800ms" : "2000ms",
//               transitionTimingFunction: "ease-in-out",
//               // Keep the layer in the DOM (but invisible) so the video
//               // element always exists and the ended event still fires
//               pointerEvents: phase >= 3 ? "none" : "auto",
//             }}
//           >
//             <video
//               ref={videoRef}
//               className="w-full h-full object-cover"
//               autoPlay
//               muted
//               playsInline
//               // ⚠️  NO `loop` — we need the ended event
//               onEnded={handleVideoEnd}
//               // src="/homebannervideo2.mp4"
//               src={isMobile ? "/homebannervideo-mobile.mp4" : "/homebannervideo2.mp4"}
//             />
//           </div>

//           {/* ── LIGHTHOUSE IMAGE — fades in after video fades out ── */}
//           <div
//             className="absolute inset-0 transition-opacity"
//             style={{
//               opacity: phase >= 3 ? 1 : 0,
//               transitionDuration: "3000ms",
//               transitionTimingFunction: "ease-in-out",
//             }}
//           >
//             <div
//               className="absolute lighthouse-wrap"
//               style={{ right: 0, top: '10%', bottom: 0, width: "70%" }}
//             >
//               <img
//                 src="/savoy-12.png"
//                 alt="Lighthouse"
//                 className="lighthouse-img"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   objectPosition: "center top",
//                   maskImage: `
//                     linear-gradient(to right, transparent 5%, black 50%),
//                     linear-gradient(to bottom, black 60%, transparent 100%),
//                     linear-gradient(to top, transparent 0%, black 45%)
//                   `,
//                   WebkitMaskImage: `
//                     linear-gradient(to right, transparent 5%, black 50%),
//                     linear-gradient(to bottom, black 60%, transparent 100%),
//                     linear-gradient(to top, transparent 0%, black 45%)
//                   `,
//                   maskComposite: "intersect",
//                   WebkitMaskComposite: "source-in",
//                 }}
//               />
//             </div>
//           </div>

//           {/* ── HEADER ── */}
//           <header
//             className="page-header absolute top-0 left-0 right-0 z-30 flex items-center justify-between pl-15 pr-25 py-10 pt-13"
//             // style={{
//             //   opacity: phase >= 2 ? 1 : 0,
//             //   transform: phase >= 2 ? "translateY(0)" : "translateY(-20px)",
//             //   transition: "opacity 1.2s ease-out, transform 1.2s ease-out",
//             // }}
//             style={{
//                   opacity: phase >= 4 ? 1 : 0,
//                   transform: phase >= 4 ? "translateY(0)" : "translateY(-20px)",
//                   transition: phase >= 4
//                     ? "opacity 1.2s ease-out 0.4s, transform 1.2s ease-out 0.4s"  // 0.4s delay on entry
//                     : "none",  // instant hide — no fade out flash
//                 }}
//           >
//             <div className="flex items-center">
//               <img
//                 src="/savoy-logo.png"
//                 alt="Savoy Logo"
//                 className="header-logo h-27 w-auto"
//               />
//             </div>

//             {/* Desktop nav */}
//             <nav
//               className="desktop-nav hidden sm:flex items-center gap-4"
//               // style={{
//               //   opacity: phase >= 2 ? 1 : 0,
//               //   transition: "opacity 1.4s ease-out 0.3s",
//               // }}
//               style={{
//                       opacity: phase >= 4 ? 1 : 0,
//                       transition: phase >= 4
//                         ? "opacity 1.4s ease-out 0.6s"  // slightly later than header
//                         : "none",
//                     }}
//             >
//               {navItems.map((item) => (
//                 <a
//                   key={item}
//                   href="#"
//                   className="text-white hover:text-white transition-colors text-xs tracking-widest uppercase"
//                   style={{
//                     letterSpacing: "0.1em",
//                     fontSize: "0.8rem",
//                     fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//                   }}
//                 >
//                   {item}
//                 </a>
//               ))}
//             </nav>

//             {/* Hamburger */}
//             <button
//               className="hamburger-btn"
//               onClick={() => setMenuOpen((v) => !v)}
//               aria-label={menuOpen ? "Close menu" : "Open menu"}
//               aria-expanded={menuOpen}
//             >
//               <span className="ham-line" style={menuOpen ? { transform: "translateY(6.5px) rotate(45deg)" } : {}} />
//               <span className="ham-line" style={menuOpen ? { opacity: 0 } : {}} />
//               <span className="ham-line" style={menuOpen ? { transform: "translateY(-6.5px) rotate(-45deg)" } : {}} />
//             </button>
//           </header>

//           {/* ── BOTTOM CONTENT — fades in with phase 4 ── */}
//           <div
//             className="hero-bottom absolute bottom-0 left-0 right-0 z-30 pl-20 pb-14"
//             style={{
//               opacity: phase >= 4 ? 1 : 0,
//               transform: phase >= 4 ? "translateY(0)" : "translateY(24px)",
//               transition: "opacity 1.4s ease-out, transform 1.4s ease-out",
//             }}
//           >
//             <p
//               className="text-white tracking-widest uppercase mb-3"
//               style={{
//                 fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//                 fontSize: "0.95rem",
//                 fontWeight: 300,
//               }}
//             >
//               SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
//               <span
//                 style={{
//                   textTransform: "none",
//                   fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//                 }}
//               >
//                 Tailored Banking &amp; Trust Services
//               </span>
//             </p>
//             <h1
//               className="text-white max-w-[680px] leading-none"
//               style={{
//                 fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//                 fontSize: "clamp(1.8rem, 2vw, 1.3rem)",
//                 fontWeight: 300,
//                 lineHeight: 1.0,
//               }}
//             >
//               Tailored banking, trust, and market services for clients who value
//               discretion, continuity, and clear guidance in a complex
//               international landscape.
//             </h1>
//           </div>
//         </div>

//         <SecondSection />
//         <Thirdsection />
//         <FourthSection />
//         <BrandFooterSection />
//       </div>
//     </>
//   );
// }

// "use client";

// import BrandFooterSection from "@/components/Brandfootersection";
// import SecondSection from "@/components/Secondsection";
// import Thirdsection from "@/components/Thirdsection";
// import FourthSection from "@/components/Fourthsection";
// import SavoyHeader from "@/components/SavoyHeader";
// import { useEffect, useRef, useState } from "react";

// export default function Home() {
//   const [phase, setPhase] = useState(0);
//   const [videoEnded, setVideoEnded] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const videoRef = useRef(null);
//   const endHandled = useRef(false);

//   // Detect mobile
//   useEffect(() => {
//     setIsMobile(window.innerWidth <= 768);
//   }, []);

//   // Scroll to top on mount
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       if ("scrollRestoration" in history) {
//         history.scrollRestoration = "manual";
//       }
//       window.scrollTo({ top: 0, left: 0, behavior: "instant" });
//     }
//   }, []);

//   // Lock scroll while video is playing
//   useEffect(() => {
//     const locked = !videoEnded;
//     document.body.style.overflow = locked ? "hidden" : "";
//     document.documentElement.style.overflow = locked ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     };
//   }, [videoEnded]);

//   // Video + Phase timing
//   useEffect(() => {
//     const t1 = setTimeout(() => setPhase(1), 300);

//     const vid = videoRef.current;
//     if (vid) {
//       vid.play().catch(() => handleVideoEnd());
//     }

//     return () => clearTimeout(t1);
//   }, []);

//   // Fallback if video doesn't end
//   useEffect(() => {
//     const fallback = setTimeout(() => {
//       if (!endHandled.current) handleVideoEnd();
//     }, 15000);
//     return () => clearTimeout(fallback);
//   }, []);

//   function handleVideoEnd() {
//     if (endHandled.current) return;
//     endHandled.current = true;

//     setPhase(3);

//     setTimeout(() => {
//       setPhase(4);
//       setVideoEnded(true);
//     }, 1800);
//   }

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
//         @import url('https://fonts.cdnfonts.com/css/general-sans');

//         /* Mobile Nav Styles */
//         .mobile-nav {
//           position: fixed;
//           inset: 0;
//           background: rgba(0,0,0,0.97);
//           z-index: 100;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 2.5rem;
//           pointer-events: none;
//           opacity: 0;
//           transform: translateY(-24px);
//           transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
//         }
//         .mobile-nav.open {
//           opacity: 1;
//           transform: translateY(0);
//           pointer-events: all;
//         }
//         .mobile-nav a {
//           font-family: 'Cormorant', Georgia, serif;
//           color: #fff;
//           font-size: clamp(1.6rem, 6vw, 2.4rem);
//           font-weight: 300;
//           letter-spacing: 0.18em;
//           text-decoration: none;
//           text-transform: uppercase;
//         }

//         /* Hamburger */
//         .hamburger-btn {
//           display: none;
//           flex-direction: column;
//           gap: 5px;
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 8px;
//           z-index: 110;
//         }
//         .ham-line {
//           width: 22px;
//           height: 1.5px;
//           background: #fff;
//           transition: all 0.3s ease;
//         }

//         @media (max-width: 1024px) {
//           .hamburger-btn { display: flex; }
//           .desktop-nav { display: none !important; }
//         }
//       `}</style>

//       {/* Header Component */}
//       <SavoyHeader phase={phase} />

//       {/* Hero Section */}
//       <div className="relative w-full min-h-screen bg-black overflow-hidden">
//         {/* Video */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{
//             opacity: phase >= 1 && phase < 3 ? 1 : 0,
//             transitionDuration: "2000ms",
//           }}
//         >
//           <video
//             ref={videoRef}
//             className="w-full h-full object-cover"
//             autoPlay
//             muted
//             playsInline
//             onEnded={handleVideoEnd}
//             src={
//               isMobile ? "/homebannervideo-mobile.mp4" : "/homebannervideo2.mp4"
//             }
//           />
//         </div>

//         {/* Lighthouse */}
//         <div
//           className="absolute inset-0 transition-opacity"
//           style={{
//             opacity: phase >= 3 ? 1 : 0,
//             transitionDuration: "3000ms",
//           }}
//         >
//           <div
//             className="absolute lighthouse-wrap"
//             style={{ right: 0, top: "10%", bottom: 0, width: "70%" }}
//           >
//             {/* <img
//               src="/savoy-12.png"
//               alt="Lighthouse"
//               className="lighthouse-img"
//               style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
//             /> */}
//           </div>
//         </div>

//         {/* Bottom Content */}
//         {/* <div
//           // className="hero-bottom absolute bottom-0 left-0 right-0 z-30 pl-20 pb-14"
//           className="hero-bottom absolute bottom-0 left-0 right-0 z-30 pl-6 pr-6 pb-10 md:pl-20 md:pr-0 md:pb-14"
//           style={{
//             opacity: phase >= 4 ? 1 : 0,
//             transform: phase >= 4 ? "translateY(0)" : "translateY(24px)",
//             transition: "opacity 1.4s ease-out, transform 1.4s ease-out",
//           }}
//         >
//           <p
//             className="text-white tracking-widest uppercase mb-3"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "0.95rem",
//               fontWeight: 300,
//             }}
//           >
//             SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
//             <span style={{ fontFamily: "'General Sans', 'Inter', system-ui, sans-serif" }}>
//               Tailored Banking &amp; Trust Services
//             </span>
//           </p>
//           <h1
//             className="text-white max-w-[680px] leading-none"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "clamp(1.8rem, 2vw, 1.3rem)",
//               fontWeight: 300,
//             }}
//           >
//             Tailored banking, trust, and market services for clients who value discretion, continuity, and clear guidance in a complex international landscape.
//           </h1>
//         </div> */}
//         {/* Bottom Content */}
//         <div
//           className="hero-bottom absolute bottom-0 left-0 right-0 z-30 px-5 pb-10 md:pl-20 md:pr-0 md:pb-14"
//           style={{
//             opacity: phase >= 4 ? 1 : 0,
//             transform: phase >= 4 ? "translateY(0)" : "translateY(24px)",
//             transition: "opacity 1.4s ease-out, transform 1.4s ease-out",
//           }}
//         >
//           <p
//             className="text-white tracking-widest uppercase mb-3"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "0.95rem",
//               fontWeight: 300,
//             }}
//           >
//             SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
//             <span
//               style={{
//                 fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
//               }}
//             >
//               Tailored Banking &amp; Trust Services
//             </span>
//           </p>

//           <h1
//             className="text-white leading-none"
//             style={{
//               fontFamily: "'Cormorant Garamond', 'Georgia', serif",
//               fontSize: "clamp(1.8rem, 2vw, 1.3rem)", // Much better for mobile
//               fontWeight: 300,
//               maxWidth: "680px",
//             }}
//           >
//             Tailored banking, trust, and market services for clients who value
//             discretion, continuity, and clear guidance in a complex
//             international landscape.
//           </h1>
//         </div>
//       </div>

//       {/* Other Sections */}
//       <SecondSection />
//       <Thirdsection />
//       <FourthSection />
//       <BrandFooterSection />
//     </>
//   );
// }

"use client";

import BrandFooterSection from "@/components/Brandfootersection";
import SecondSection from "@/components/Secondsection";
import Thirdsection from "@/components/Thirdsection";
import FourthSection from "@/components/Fourthsection";
import SavoyHeader from "@/components/SavoyHeader";
import { useEffect, useRef, useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// MODULE-LEVEL flag — this is the key fix.
//
// Unlike sessionStorage (which persists through refresh),
// a module-level variable resets to false on every real page reload/refresh,
// but stays true during client-side Next.js navigation (back button, logo click).
//
//   Fresh tab / Refresh  → introShown = false → play video → set true
//   Back button          → introShown = true  → skip video
//   Logo click           → introShown = true  → skip video
// ─────────────────────────────────────────────────────────────────────────────
let introShown = false;

export default function Home() {
  const [phase, setPhase] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const videoRef = useRef(null);
  const endHandled = useRef(false);

  function handleVideoEnd() {
    if (endHandled.current) return;
    endHandled.current = true;
    setPhase(3);
    setTimeout(() => {
      setPhase(4);
      setVideoEnded(true);
    }, 400);
  }

  function skipToEnd() {
    endHandled.current = true;
    setPhase(4);
    setVideoEnded(true);
  }

  // Detect mobile
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  // Scroll to top
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  // Lock scroll while video plays
  useEffect(() => {
    const locked = !videoEnded;
    document.body.style.overflow = locked ? "hidden" : "";
    document.documentElement.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [videoEnded]);

  // ── Core: play or skip ───────────────────────────────────────
  useEffect(() => {
    if (introShown) {
      // Already played this session load — skip (back button / logo click)
      skipToEnd();
      return;
    }

    // First time this module has loaded (fresh tab or real refresh) — play video
    introShown = true;

    const t1 = setTimeout(() => setPhase(1), 300);
    const vid = videoRef.current;
    if (vid) vid.play().catch(() => handleVideoEnd());
    return () => clearTimeout(t1);
  }, []);

  // Safety fallback: if video never fires onEnded within 15s
  useEffect(() => {
    const fallback = setTimeout(() => {
      if (!endHandled.current) handleVideoEnd();
    }, 15000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
        @import url('https://fonts.cdnfonts.com/css/general-sans');

        .mobile-nav {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.97); z-index: 100;
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
          /* Lighthouse mobile mask */
            @media (max-width: 640px) {
              .lighthouse-img {
                mask-image:
                  linear-gradient(to right, transparent 0%, black 30%),
                  linear-gradient(to top, transparent 0%, black 40%),
                  linear-gradient(to bottom, transparent 0%, black 30%) !important;
                -webkit-mask-image:
                  linear-gradient(to right, transparent 0%, black 30%),
                  linear-gradient(to top, transparent 0%, black 40%),
                  linear-gradient(to bottom, transparent 0%, black 30%) !important;
                mask-composite: intersect !important;
                -webkit-mask-composite: source-in !important;
              }
            }
      `}</style>

      <SavoyHeader phase={phase} />

      {/* ── Hero ── */}
      <div className="relative w-full min-h-screen bg-black overflow-hidden">
        {/* Video */}
        <div
          className="absolute inset-0 transition-opacity"
          style={{
            opacity: phase >= 1 && phase < 3 ? 1 : 0,
            transitionDuration: "2000ms",
          }}
        >
          {/* <video
            ref={videoRef}
            className="w-full h-full object-fill" //h-100% to make below cut video 
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            src={
              isMobile ? "/homebannervideo-mobile.mp4" : "/homebannervideo3.mp4"
            }
          /> */}
          <video
            ref={videoRef}
            className={`w-full h-full ${isMobile ? "object-cover" : "object-fill"}`} //h-100% to make below cut video
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            onCanPlay={(e) => {
              e.target.playbackRate = 1.0;
            }}
            src={
              isMobile ? "/homebannervideo-mobile.mp4" : "/homebannervideo3.mp4"
            }
          />
        </div>

        {/* Post-video layer */}
        <div
          className="absolute inset-0 transition-opacity"
          style={{ opacity: phase >= 3 ? 1 : 0, transitionDuration: "3000ms" }}
        >
          <div
            className="absolute"
            style={{ right: 0, top: "10%", bottom: 0, width: "70%" }}
          />
        </div>
        {/* Post-video layer — lighthouse */}
        <div
          className="absolute inset-0 transition-opacity"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transitionDuration: "3000ms",
            transitionTimingFunction: "ease-in-out",
          }}
        >
          <div className="absolute right-0 bottom-0 w-full top-0 md:w-[40%] md:top-[20%]">
            <img
              src="/savoy-20.png"
              alt="Lighthouse"
              className="lighthouse-img w-full h-full object-cover object-top md:object-[center_top]"
              style={{
                maskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
                WebkitMaskImage: `linear-gradient(to right, transparent 5%, black 50%), linear-gradient(to top, transparent 0%, black 45%)`,
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            />
          </div>
        </div>

        {/* Bottom text */}
        {/* <div
          className="absolute bottom-0 left-0 right-0 z-30 px-5 pb-10 md:pl-20 md:pr-0 md:pb-14"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 1.4s ease-out, transform 1.4s ease-out",
          }}
        >
          <p
            className="text-white tracking-widest uppercase mb-3"
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontSize: "0.95rem", fontWeight: 300,
            }}
          >
            SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
            <span style={{ fontFamily: "'General Sans', 'Inter', system-ui, sans-serif" }}>
              Tailored Banking &amp; Trust Services
            </span>
          </p>
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
              fontWeight: 300, maxWidth: "680px",
            }}
          >
            Tailored banking, trust, and market services for clients who value
            discretion, continuity, and clear guidance in a complex
            international landscape.
          </h1>
        </div> */}
        <div
          className="hero-bottom absolute bottom-0 left-0 right-0 z-30 px-5 pb-10 md:pl-20 md:pr-0 md:pb-14"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 1.4s ease-out, transform 1.4s ease-out",
          }}
        >
          <p
            className="text-white tracking-widest uppercase mb-3"
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontSize: "0.95rem",
              fontWeight: 300,
            }}
          >
            SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
            <span
              style={{
                fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
              }}
            >
              Tailored Banking &amp; Trust Services
            </span>
          </p>

          <h1
            className="text-white leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontSize: "clamp(1.8rem, 2vw, 1.3rem)", // Much better for mobile
              fontWeight: 300,
              maxWidth: "680px",
            }}
          >
            Tailored banking, trust, and market services for clients who value
            discretion, continuity, and clear guidance in a complex
            international landscape.
          </h1>
        </div>
      </div>

      <SecondSection />
      <Thirdsection />
      <FourthSection />
      <BrandFooterSection />
    </>
  );
}
