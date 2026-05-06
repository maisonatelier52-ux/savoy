"use client";

import BrandFooterSection from "@/components/Brandfootersection";
import SecondSection from "@/components/Secondsection";
import Thirdsection from "@/components/Thirdsection";
import FourthSection from "@/components/Fourthsection";
import SavoyHeader from "@/components/SavoyHeader";

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
        @import url('https://fonts.cdnfonts.com/css/general-sans');

        /* Mobile Nav Styles */
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
        }

        /* Hamburger */
        .hamburger-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 110;
        }

        .ham-line {
          width: 22px;
          height: 1.5px;
          background: #fff;
          transition: all 0.3s ease;
        }

        @media (max-width: 1024px) {
          .hamburger-btn {
            display: flex;
          }

          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>

      {/* Header Component */}
      <SavoyHeader />

      {/* Hero Section */}
      <div className="relative w-full min-h-screen bg-black overflow-hidden">
        
        {/* Optional Background Image */}
        {/* 
        <img
          src="/savoy-12.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        */}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Bottom Content */}
        <div className="hero-bottom absolute bottom-0 left-0 right-0 z-30 pl-20 pb-14">
          <p
            className="text-white tracking-widest uppercase mb-3"
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontSize: "0.95rem",
              fontWeight: 300,
            }}
          >
            SAVOY BANK & TRUST &nbsp;|&nbsp;
            <span
              style={{
                fontFamily:
                  "'General Sans', 'Inter', system-ui, sans-serif",
              }}
            >
              Tailored Banking & Trust Services
            </span>
          </p>

          <h1
            className="text-white max-w-[680px] leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontSize: "clamp(1.8rem, 2vw, 3.5rem)",
              fontWeight: 300,
            }}
          >
            Tailored banking, trust, and market services for clients who value
            discretion, continuity, and clear guidance in a complex
            international landscape.
          </h1>
        </div>
      </div>

      {/* Other Sections */}
      <SecondSection />
      <Thirdsection />
      <FourthSection />
      <BrandFooterSection />
    </>
  );
}