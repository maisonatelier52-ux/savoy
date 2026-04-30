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

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function BrandFooterSection() {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const [scale, setScale] = useState(1.55);
  const [opacity, setOpacity] = useState(0.45);

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated.current) return;

      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;

      const progress = Math.min(
        Math.max((windowH - rect.top) / (windowH + rect.height * 0.5), 0),
        1,
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');

        @media (max-width: 640px) {
          .footer-logo-img { width: 52px !important; height: 52px !important; }
          .footer-wordmark { font-size: 3rem !important; }
          .footer-sub { padding-left: 3.5rem !important; font-size: 0.5rem !important; }
          .brand-section-root { padding: 5rem 1.5rem !important; min-height: 10vh !important; }
        }
      `}</style>

      {/* ── 1. BRAND REVEAL SECTION (scroll-animated logo + lighthouse) ── */}
      <section
        ref={sectionRef}
        className="brand-section-root relative w-full bg-[#080808] flex flex-col items-center justify-center overflow-hidden"
        style={{ minHeight: "70vh", padding: "0" }}
      >
        {/* Lighthouse full-width image with dark overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/lighthouse-footer.png"
            alt="Lighthouse"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority={false}
          />
          {/* Dark gradient overlay — stronger at bottom so text reads clearly */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.72) 60%, rgba(8,8,8,0.96) 100%)",
            }}
          />
        </div>

        {/* Scroll-animated logo lockup */}
        <div
          className="relative z-10 flex flex-col items-center"
          style={{
            transform: `scale(${scale})`,
            opacity: opacity,
            willChange: "transform, opacity",
          }}
        >
          {/* Logo row */}
          <div className="flex items-center" style={{ gap: "1.1rem" }}>
            <Image
              src="/logo-savoy.png"
              alt="Savoy"
              width={90}
              height={90}
              className="footer-logo-img"
            />
            <span
              className="footer-wordmark text-7xl text-white"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                letterSpacing: "0.02em",
                lineHeight: 1,
              }}
            >
              SAVOY
            </span>
          </div>

          {/* Subtitle */}
          <p
            className="footer-sub text-[12px] text-white pl-20"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              letterSpacing: "0.04em",
              fontWeight: 300,
            }}
          >
            SAVOY BANK &amp; TRUST &nbsp;|&nbsp;
            <em
              style={{
                fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
              }}
            >
              The Bahamas
            </em>
          </p>

          {/* Tagline beneath logo */}
          {/* <p
            className="mt-6 text-center text-white/60 text-[11px] tracking-widest uppercase"
            style={{
              fontFamily: "Avenir, 'Nunito Sans', sans-serif",
              fontWeight: 100,
              maxWidth: "360px",
            }}
          >
            Tailored Banking &amp; Trust Services
          </p> */}
        </div>
      </section>

      {/* ── 2. FULL FOOTER (EGS-style) ── */}
      <footer
        className="w-full bg-[#080808] text-white"
        style={{ fontFamily: "Avenir, 'Nunito Sans', sans-serif" }}
      >
        {/* Top divider */}
        <div className="w-full h-px bg-white/10" />

        <div className="w-[82%] mx-auto py-16 flex flex-col gap-10">
          {/* Row 1 — Logos + Address + Contact */}
          <div className="flex items-start justify-between gap-10 flex-wrap">
            {/* Left — logos stacked */}
            <div className="flex flex-col gap-3">
              <Image
                src="/logo-savoy.png"
                alt="Savoy Logo"
                width={48}
                height={48}
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p
                className="text-[12px] text-white mt-1 uppercase tracking-widest"
                style={{ fontWeight: 100, maxWidth: "160px" }}
              >
                Savoy Bank &amp; Trust
              </p>
            </div>

            {/* Centre — address */}
            <div
              className="flex flex-col gap-1 text-[12px] text-white"
              style={{ fontWeight: 100, maxWidth: "260px" }}
            >
              <p className="text-white uppercase tracking-widest text-[13px] mb-1">
                Registered Office
              </p>
              <p>Savoy Bank &amp; Trust</p>
              <p>Nassau, New Providence</p>
              <p>The Bahamas</p>
            </div>

            {/* Right — contact */}
            <div
              className="flex flex-col gap-1 text-[12px] text-white"
              style={{ fontWeight: 100 }}
            >
              <p className="text-white uppercase tracking-widest text-[13px] mb-1">
                Contact
              </p>
              <a
                href="mailto:info@savoybankandtrust.com"
                className="hover:text-white transition-colors"
              >
                info@savoybankandtrust.com
              </a>
              <a
                href="tel:+12425000000"
                className="hover:text-white transition-colors mt-1"
              >
                +1 (242) 500-0000
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10" />

          {/* Row 2 — Nav links + copyright */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div
              className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-white"
              style={{ fontWeight: 100 }}
            >
              <a href="#" className="hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Risk Disclosures
              </a>
            </div>
            <p className="text-[12px] text-white" style={{ fontWeight: 100 }}>
              © {new Date().getFullYear()} Savoy Bank &amp; Trust. All rights
              reserved.
            </p>
          </div>

          {/* Disclaimer */}
          <p
            className="text-[12px] text-white leading-relaxed"
            style={{ fontWeight: 100, letterSpacing: "0.01em" }}
          >
            Savoy Bank &amp; Trust is a privately held financial institution
            licensed and regulated in The Bahamas. This website is for
            informational purposes only and does not constitute financial,
            investment, or legal advice. Products and services are available
            only to eligible clients in permitted jurisdictions. Past
            performance is not indicative of future results. Should you have any
            questions, please contact us using the details above.
          </p>
        </div>
      </footer>
    </>
  );
}
