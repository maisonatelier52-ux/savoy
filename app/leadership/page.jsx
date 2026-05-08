"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SavoyHeader from "@/components/SavoyHeader";
import BrandFooterSection from "@/components/Brandfootersection";

// ── Global Styles ─────────────────────────────
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
`;

// ── Fonts & Helpers ───────────────────────────────────────────────────────
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

const fadeUp = (v, d = "0s") => ({
  opacity: v ? 1 : 0,
  transform: v ? "translateY(0)" : "translateY(30px)",
  transition: `opacity 0.9s ease ${d}, transform 0.9s ease ${d}`
});

// ── Leadership Data ───────────────────────────────────────────────────────
const leadershipTeam = [
  {
    name: "Alexandre Laurent Duval",
    title: "Chairman & Founder",
    image: "/dummy1.png",
    bio: "With over three decades of experience in international private banking, Alexandre founded Savoy Bank & Trust with a vision of creating a truly independent institution dedicated to generational wealth preservation.",
    credentials: "MBA, Harvard Business School • Former Managing Director, Pictet & Cie"
  },
  {
    name: "Isabella Moreau",
    title: "Chief Executive Officer",
    image: "/dummy2.png",
    bio: "Isabella leads Savoy’s strategic direction and client relationships. She brings deep expertise in cross-border wealth structuring.",
    credentials: "CFA • MSc Finance, London School of Economics"
  },
  {
    name: "Dr. Sebastian Albrecht",
    title: "Chief Investment Officer",
    image: "/dummy1.png",
    bio: "Responsible for portfolio strategy and asset allocation, Sebastian combines rigorous fundamental analysis with a long-term perspective.",
    credentials: "PhD Economics, University of Zurich • CFA"
  },
  {
    name: "Elena Voss",
    title: "Head of Private Client Services",
    image: "/dummy2.png",
    bio: "Elena oversees the delivery of bespoke banking and trust services with exceptional client care and discretion.",
    credentials: "LLM International Law, University of Cambridge"
  }
];

export default function Leadership() {
  const [heroRef, heroInView] = useInView(0.05);
  const [teamRef, teamInView] = useInView(0.08);

  return (
    <>
      <style>{globalStyles}</style>
      <SavoyHeader phase={4} />

      <main className="bg-black text-white">

        {/* HERO */}
        <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden px-6 pb-16 md:px-20 md:pb-24">

          {/* Desktop Watermark */}
          <div className="hidden md:block absolute right-0 top-20 bottom-0 w-1/2 pointer-events-none select-none">
            <div className="absolute inset-0 flex items-center justify-center">
              <div style={{ width: "min(520px, 42vw)", height: "min(620px, 42vw)", position: "relative" }}>
                <Image src="/savoy-8.png" alt="" fill style={{ objectFit: "contain", opacity: 0.50 }} />
              </div>
            </div>
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #000 0%, transparent 40%)" }} />
          </div>

          {/* Mobile Watermark */}
          <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <div style={{ width: "420px", height: "520px", position: "relative", opacity: 0.50 }}>
              <Image 
                src="/savoy-8.png" 
                alt="" 
                fill 
                style={{ objectFit: "contain" }} 
              />
            </div>
          </div>

          <div className="relative z-10 max-w-3xl">
            <h1
              style={{ ...fadeUp(heroInView, "0.15s"), fontFamily: serif, fontSize: "clamp(3.2rem, 7vw, 6.5rem)", fontWeight: 300, lineHeight: 0.92 }}
              className="text-white"
            >
              Leadership
            </h1>

            <div style={fadeUp(heroInView, "0.35s")} className="mt-8">
              <span className="block w-10 h-px bg-white mb-6" />
              <p className="text-white max-w-lg" style={{ fontFamily: sans, fontSize: "0.88rem", lineHeight: 1.3 }}>
                Our leadership team combines deep institutional experience with unwavering commitment to discretion, independence, and long-term thinking.
              </p>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-black" />

        {/* LEADERSHIP TEAM */}
        <section ref={teamRef} className="py-24 px-6 md:px-20">
          <div className="mb-16">
            <p className="flex items-center gap-3 uppercase text-white/40" style={{ fontFamily: sans, fontSize: "0.68rem", letterSpacing: "0.22em" }}>
              <span className="block w-7 h-px bg-white/25 flex-shrink-0" />
              Our Team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
            {leadershipTeam.map((member, i) => (
              <div
                key={member.name}
                style={fadeUp(teamInView, `${0.1 + i * 0.12}s`)}
                className="group"
              >
                <div className="relative aspect-[6/5] mb-8 overflow-hidden bg-black">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-light" style={{ fontFamily: serif }}>
                      {member.name}
                    </h3>
                    <p style={{ fontFamily: sans, fontSize: "0.9rem", letterSpacing: "0.05em" }} className="text-white mt-1">
                      {member.title}
                    </p>
                  </div>
                </div>

                <div className="max-w-lg">
                  <p style={{ fontFamily: sans, fontSize: "0.85rem", lineHeight: 1.3 }} className="text-white">
                    {member.bio}
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p style={{ fontFamily: sans, fontSize: "0.73rem", letterSpacing: "0.04em" }} className="text-white">
                      {member.credentials}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-black" />

        {/* CLOSING QUOTE */}
        <section className="py-5 pb-10 px-6 md:px-20 text-center">
          <div className="max-w-2xl mx-auto">
            
            
            <p style={{ fontFamily: serif, fontSize: "clamp(1.35rem, 2.8vw, 2.1rem)", lineHeight: 1.1, fontStyle: "italic" }} className="text-white">
              “True wealth management is not about products — it is about judgment, continuity, and trust built over decades.”
            </p>
            
            <p style={{ fontFamily: sans, fontSize: "0.75rem", letterSpacing: "0.2em" }} className="uppercase text-white mt-5">
              Savoy Bank &amp; Trust Leadership
            </p>
          </div>
        </section>

      </main>

      <BrandFooterSection />
    </>
  );
}