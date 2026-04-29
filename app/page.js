"use client";

import BrandFooterSection from "@/components/Brandfootersection";
import SecondSection from "@/components/Secondsection";
import Thirdsection from "@/components/Thirdsection";
import FourthSection from "@/components/Fourthsection";
import { useEffect, useRef, useState } from "react";

// SVG Star/Compass Logo — 8-pointed star matching the Savoy design
function StarLogo({ className = "", size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 8-pointed compass star */}
      <path
        d="M50 2 L54 46 L98 50 L54 54 L50 98 L46 54 L2 50 L46 46 Z"
        fill="white"
        opacity="0.95"
      />
      <path
        d="M50 15 L52.5 47.5 L85 50 L52.5 52.5 L50 85 L47.5 52.5 L15 50 L47.5 47.5 Z"
        fill="white"
        transform="rotate(45 50 50)"
        opacity="0.6"
      />
    </svg>
  );
}

export default function Home() {
  // Animation phases:
  // 0 = black screen
  // 1 = video fades in + logo grows from center
  // 2 = header slides in (logo moves top-left, nav fades top-right)
  // 3 = video fades out to black
  // 4 = content text fades in
  const [phase, setPhase] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    // Phase 1: fade in video + logo after brief black hold
    const t1 = setTimeout(() => setPhase(1), 400);
    // Phase 2: header slides in
    const t2 = setTimeout(() => setPhase(2), 2800);
    // Phase 3: video fades to black
    const t3 = setTimeout(() => setPhase(3), 5200);
    // Phase 4: content text appears
    const t4 = setTimeout(() => setPhase(4), 7000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
   <div>
     <div className="relative w-full min-h-screen bg-black overflow-hidden">

      {/* ─── VIDEO LAYER ─── */}
      <div
        className="absolute inset-0 transition-opacity"
        style={{
          opacity: phase === 1 ? 1 : phase === 2 ? 1 : phase >= 3 ? 0 : 0,
          transitionDuration: phase === 1 ? "1800ms" : "2000ms",
          transitionTimingFunction: "ease-in-out",
        }}
      >
        {/* 
          Replace the src below with your actual lighthouse video path.
          Place the video file in /public/lighthouse.mp4
          The video should be a dark, moody ocean/lighthouse clip.
        */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/homebannervideo.mp4"
        />
        {/* Dark overlay so the star pops */}
        {/* <div className="absolute inset-0 bg-black/40" /> */}
      </div>

      {/* ─── CENTER STAR LOGO (phases 1-2) ─── */}
      {/* Grows from tiny dot → full size from center, then vanishes as header takes over */}
      {/* <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          opacity: phase === 0 ? 0 : phase === 1 ? 1 : phase === 2 ? 0 : 0,
          transition: "opacity 1s ease-in-out",
          zIndex: 20,
        }}
      >
        <div
          style={{
            transform: phase <= 1 ? "scale(1)" : "scale(0.1)",
            opacity: phase === 1 ? 1 : 0,
            transition:
              phase === 1
                ? "transform 1.8s cubic-bezier(0.16,1,0.3,1), opacity 1.2s ease-in"
                : "opacity 0.6s ease-out",
          }}
        >
          <StarLogo size={220} />
        </div>
      </div> */}

      {/* ─── HEADER (phases 2+) ─── */}
      <header
        className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between pl-15 pr-25 py-10 pt-11"
        style={{
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? "translateY(0)" : "translateY(-20px)",
          transition: "opacity 1.2s ease-out, transform 1.2s ease-out",
        }}
      >
        {/* Logo */}
        {/* <div className="flex items-center gap-3">
          <StarLogo size={28} />
          <span
            className="text-white tracking-[0.3em] text-sm font-light uppercase"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontSize: "1rem", letterSpacing: "0.25em" }}
          >
            SAVOY
          </span>
        </div> */}

        <div className="flex items-center ">
          <img 
            src="/savoy-logo.png" 
            alt="Savoy Logo" 
            className="h-30 w-auto" 
          />

        </div>

        {/* Nav */}
        <nav
          className="hidden sm:flex items-center gap-8"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transition: "opacity 1.4s ease-out 0.3s",
          }}
        >
          {["ABOUT", "COMPANY OVERVIEW", "LEADERSHIP", "CONTACT US"].map((item) => (
            <a
              key={item}
              href="#"
              // className="text-white/80 hover:text-white transition-colors text-xs tracking-widest uppercase"
              // style={{ letterSpacing: "0.15em", fontSize: "0.7rem", fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              className="text-white/80 hover:text-white transition-colors text-xs tracking-widest uppercase"
              style={{ letterSpacing: "0.15em", fontSize: "0.7rem", fontFamily: "'General Sans', 'Inter', system-ui, sans-serif" }}
               >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* ─── BOTTOM CONTENT (phase 4) ─── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 px-10 pb-14"
        style={{
          opacity: phase >= 4 ? 1 : 0,
          transform: phase >= 4 ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 1.4s ease-out, transform 1.4s ease-out",
        }}
      >
        <p
          className="text-white/70 text-xs tracking-widest uppercase mb-3"
          style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", letterSpacing: "0.2em" }}
        >
          SAVOY BANK &amp; TRUST &nbsp;|&nbsp; Tailored Banking &amp; Trust Services
        </p>
        <h1
          className="text-white max-w-xl leading-snug"
          style={{
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 300,
          }}
        >
          Tailored banking, trust, and market services for clients
          who value discretion, continuity, and clear guidance in
          a complex international landscape.
        </h1>
      </div>

      {/* ─── FONT IMPORT ─── */}
      {/* <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap');
      `}</style> */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
      `}</style>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/general-sans');
      `}</style>
    </div>
    <SecondSection/>
    <Thirdsection/>
    <FourthSection/>
    <BrandFooterSection/>
    


   </div>
  );
}