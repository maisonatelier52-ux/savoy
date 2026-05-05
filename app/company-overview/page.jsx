"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BrandFooterSection from "@/components/Brandfootersection";

// ── Intersection-observer hook ──────────────────────────────────────────────
function useInView(threshold = 0.15) {
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

// ── Data ────────────────────────────────────────────────────────────────────
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

// ── Main Component ──────────────────────────────────────────────────────────
export default function CompanyOverview() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoSpun, setLogoSpun] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLogoSpun(true), 300);
    return () => clearTimeout(t);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  // Section observers
  const [heroRef, heroInView]       = useInView(0.05);
  const [introRef, introInView]     = useInView(0.1);
  const [pillarsRef, pillarsInView] = useInView(0.05);
  const [visionRef, visionInView]   = useInView(0.1);
  const [statsRef, statsInView]     = useInView(0.1);
  const [ctaRef, ctaInView]         = useInView(0.1);

  const navItems = ["ABOUT", "COMPANY OVERVIEW", "LEADERSHIP", "CONTACT US"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
        @import url('https://fonts.cdnfonts.com/css/general-sans');

        /* ── Logo spin (same as home page) ── */
        @keyframes ovSpinIn {
          0%   { transform: rotate(-360deg) scale(0.5); opacity: 0; }
          65%  { transform: rotate(12deg) scale(1.06); opacity: 1; }
          100% { transform: rotate(0deg) scale(1); opacity: 1; }
        }
        @keyframes ovSpinIdle {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .ov-logo-spin { transition: transform 0.3s ease; }
        .ov-logo-spin.spun { animation: ovSpinIn 1.1s cubic-bezier(0.16,1,0.3,1) forwards; }
        .ov-logo-spin:hover { animation: ovSpinIdle 8s linear infinite; }

        /* ── Mobile drawer — same as home ── */
        .ov-mobile-nav {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.97);
          z-index: 100;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 2.5rem;
          pointer-events: none; opacity: 0; transform: translateY(-24px);
          transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .ov-mobile-nav.open { opacity: 1; transform: translateY(0); pointer-events: all; }
        .ov-mobile-nav a {
          font-family: 'Cormorant', Georgia, serif;
          color: #fff; font-size: clamp(1.6rem,6vw,2.4rem);
          font-weight: 300; letter-spacing: 0.18em;
          text-decoration: none; text-transform: uppercase;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .ov-mobile-nav.open a { opacity: 1; transform: translateY(0); }
        .ov-mobile-nav.open a:nth-child(2) { transition-delay: 0.10s; }
        .ov-mobile-nav.open a:nth-child(3) { transition-delay: 0.18s; }
        .ov-mobile-nav.open a:nth-child(4) { transition-delay: 0.26s; }
        .ov-mobile-nav.open a:nth-child(5) { transition-delay: 0.34s; }

        /* ── Hamburger — same as home ── */
        .ov-hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 8px;
          position: relative; z-index: 110;
          -webkit-tap-highlight-color: transparent;
        }
        .ov-ham-line {
          display: block; width: 22px; height: 1.5px; background: #fff;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        /* ── Desktop nav links — same style as home ── */
        .ov-desktop-nav { display: flex; align-items: center; gap: 1.5rem; }
        .ov-desktop-nav a {
          font-family: 'General Sans','Inter',system-ui,sans-serif;
          font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: #fff; text-decoration: none;
          opacity: 0.65; transition: opacity 0.25s; position: relative;
        }
        .ov-desktop-nav a:hover { opacity: 1; }
        .ov-desktop-nav a.active { opacity: 1; }
        .ov-desktop-nav a.active::after {
          content: ''; position: absolute;
          bottom: -4px; left: 0; right: 0; height: 1px; background: #fff;
        }

        /* ── Scroll fade helpers ── */
        .fade-up   { opacity:0; transform:translateY(32px); transition:opacity 0.9s ease,transform 0.9s ease; }
        .fade-up.in { opacity:1; transform:translateY(0); }
        .fade-left  { opacity:0; transform:translateX(-40px); transition:opacity 0.9s ease,transform 0.9s ease; }
        .fade-left.in { opacity:1; transform:translateX(0); }
        .fade-right { opacity:0; transform:translateX(40px); transition:opacity 0.9s ease,transform 0.9s ease; }
        .fade-right.in { opacity:1; transform:translateX(0); }

        /* ── Layout tokens ── */
        .ov-rule      { width:100%; height:1px; background:rgba(255,255,255,0.10); }
        .ov-rule-line { display:block; width:40px; height:1px; background:#ffffff; }
        .ov-label {
          font-family:'General Sans',system-ui,sans-serif;
          font-size:0.68rem; letter-spacing:0.22em; text-transform:uppercase;
          color:rgba(255,255,255,0.45);
          display:flex; align-items:center; gap:0.9rem;
        }
        .ov-label::before {
          content:''; display:block; width:28px; height:1px; background:rgba(255,255,255,0.3);
        }

        /* ── Pillar cards ── */
        .ov-pillar {
          border-top: 1px solid rgba(255,255,255,0.09);
          padding: 2rem 0;
          display: grid; grid-template-columns: 56px 1fr; gap: 1.5rem; align-items: start;
          transition: border-color 0.3s;
        }
        .ov-pillar:hover { border-color: rgba(255,255,255,0.45); }

        /* ── Stat cells ── */
        .ov-stat {
          text-align: center;
          border-left: 1px solid rgba(255,255,255,0.09);
          padding: 2rem 1.5rem;
        }
        .ov-stat:first-child { border-left: none; }

        /* ── EGS nav arrows ── */
        .ov-arrows {
          display:flex; justify-content:space-between; align-items:center;
          padding: 2.5rem 4rem;
          border-top: 1px solid rgba(255,255,255,0.09);
        }
        .ov-arrow-link {
          display:flex; align-items:center; gap:0.75rem;
          font-family:'General Sans',system-ui,sans-serif;
          font-size:0.72rem; letter-spacing:0.16em; text-transform:uppercase;
          color:rgba(255,255,255,0.38); text-decoration:none; transition:color 0.25s;
        }
        .ov-arrow-link:hover { color:#fff; }
        .ov-arrow-link svg { transition:transform 0.3s ease; }
        .ov-arrow-link:hover svg { transform:translateX(4px); }
        .ov-arrow-link.prev:hover svg { transform:translateX(-4px); }

        /* ── Responsive ── */
        @media (max-width:1024px) {
          .ov-page-header { padding-left:2rem !important; padding-right:2rem !important; padding-top:2rem !important; }
          .ov-header-logo { height:4.5rem !important; }
          .ov-hamburger   { display:flex !important; }
          .ov-desktop-nav { display:none !important; }
          .ov-hero-grid   { grid-template-columns:1fr !important; }
          .ov-hero-img    { display:none !important; }
          .ov-pillars     { grid-template-columns:1fr !important; gap:0 !important; }
          .ov-vision-grid { grid-template-columns:1fr !important; }
          .ov-vision-img  { display:none !important; }
          .ov-stats       { grid-template-columns:repeat(2,1fr) !important; }
          .ov-stat:nth-child(3) { border-left:none !important; }
          .ov-arrows      { padding:2rem 1.5rem !important; }
        }
        @media (max-width:640px) {
          .ov-page-header { padding-left:1.25rem !important; padding-right:1.25rem !important; padding-top:1.5rem !important; }
          .ov-header-logo { height:3.5rem !important; }
          .ov-hero-sec    { padding:10rem 1.5rem 4rem !important; }
          .ov-pad         { padding:4rem 1.5rem !important; }
          .ov-pad-sm      { padding:3rem 1.5rem !important; }
          .ov-stats       { grid-template-columns:1fr 1fr !important; }
          .ov-arrows      { flex-direction:column; gap:1.5rem; align-items:flex-start; padding:2rem 1.5rem !important; }
        }
      `}</style>

      {/* ── Mobile drawer ── */}
      <nav className={`ov-mobile-nav${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{ position:"absolute", top:"1.5rem", right:"1.5rem", background:"none", border:"none", cursor:"pointer", padding:"8px", display:"flex", flexDirection:"column", gap:"5px", zIndex:120 }}
        >
          <span style={{ display:"block", width:"22px", height:"1.5px", background:"#fff", transform:"translateY(3.25px) rotate(45deg)", transition:"transform 0.3s ease" }} />
          <span style={{ display:"block", width:"22px", height:"1.5px", background:"#fff", transform:"translateY(-3.25px) rotate(-45deg)", transition:"transform 0.3s ease" }} />
        </button>
        {navItems.map((item) => (
          <a key={item} href={item === "COMPANY OVERVIEW" ? "/overview" : "#"} onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      {menuOpen && <div onClick={() => setMenuOpen(false)} style={{ position:"fixed", inset:0, zIndex:99 }} aria-hidden="true" />}

      {/* ══════════════════════════════════════════════════════
          HEADER — exact same structure as home page
      ══════════════════════════════════════════════════════ */}
      <header
        className="ov-page-header"
        style={{
          position:"fixed", top:0, left:0, right:0, zIndex:30,
          display:"flex", alignItems:"center", justifyContent:"space-between",
          paddingLeft:"3.75rem", paddingRight:"6.25rem",
          paddingTop:"2.5rem", paddingBottom:"2rem",
          background:"linear-gradient(to bottom, rgba(0,0,0,0.88) 0%, transparent 100%)",
        }}
      >
        {/* Logo — same src, same sizing class, spin animation */}
        <div style={{ display:"flex", alignItems:"center" }}>
          <a href="/" style={{ display:"block" }}>
            <img
              src="/savoy-logo.png"
              alt="Savoy Logo"
            //   className={`ov-header-logo ov-logo-spin${logoSpun ? " spun" : ""}`}
              style={{ height:"6.75rem", width:"auto" }}
            />
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="ov-desktop-nav">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === "COMPANY OVERVIEW" ? "/company-overview" : "#"}
              className={item === "COMPANY OVERVIEW" ? "active" : ""}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="ov-hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="ov-ham-line" style={menuOpen ? { transform:"translateY(6.5px) rotate(45deg)" } : {}} />
          <span className="ov-ham-line" style={menuOpen ? { opacity:0 } : {}} />
          <span className="ov-ham-line" style={menuOpen ? { transform:"translateY(-6.5px) rotate(-45deg)" } : {}} />
        </button>
      </header>

      {/* ══════════════════════════════════════════════════════
          MAIN CONTENT — pure black bg, black & white only
      ══════════════════════════════════════════════════════ */}
      <main style={{ background:"#000000", color:"#ffffff" }}>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="ov-hero-sec ov-pad"
          style={{
            position:"relative", minHeight:"100vh",
            display:"flex", alignItems:"flex-end",
            padding:"0 4rem 5rem", overflow:"hidden",
          }}
        >
          {/* Very dim background compass */}
          <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
            <Image src="/savoy-4.png" alt="" fill priority
              style={{ objectFit:"cover", objectPosition:"center", opacity:0.04 }}
            />
          </div>

          <div
            className="ov-hero-grid"
            style={{
              position:"relative", zIndex:2,
              display:"grid", gridTemplateColumns:"1fr 1fr",
              gap:"4rem", alignItems:"flex-end", width:"100%",
            }}
          >
            {/* Text */}
            <div>
              {/* <p className={`ov-label fade-up${heroInView ? " in" : ""}`} style={{ marginBottom:"2rem", transitionDelay:"0.1s" }}>
                Company Overview
              </p> */}
              <h1
                className={`fade-up${heroInView ? " in" : ""}`}
                style={{
                  fontFamily:"'Cormorant Garamond',Georgia,serif",
                  fontSize:"clamp(3rem,6vw,6.5rem)",
                  fontWeight:300, lineHeight:0.95, color:"#ffffff",
                  transitionDelay:"0.2s",
                }}
              >
                Guided by<br />
                <em style={{ fontStyle:"italic", color:"rgba(255,255,255,0.45)" }}>Tradition.</em><br />
                Oriented to<br />
                the World.
              </h1>
              <div className={`fade-up${heroInView ? " in" : ""}`} style={{ marginTop:"2.5rem", transitionDelay:"0.35s" }}>
                <span className="ov-rule-line" />
                <p style={{
                  fontFamily:"'General Sans',system-ui,sans-serif",
                  fontSize:"0.82rem", fontWeight:300, color:"rgba(255,255,255,0.4)",
                  lineHeight:1.8, marginTop:"1.25rem", maxWidth:"440px",
                }}>
                  Savoy Bank &amp; Trust is a privately held financial institution
                  licensed and regulated in The Bahamas, offering tailored banking,
                  trust, and market services for a discerning international clientele.
                </p>
              </div>
            </div>

            {/* Compass illustration */}
            <div
              className={`ov-hero-img fade-right${heroInView ? " in" : ""}`}
              style={{ transitionDelay:"0.4s", display:"flex", justifyContent:"flex-end" }}
            >
              {/* <div style={{ position:"relative", width:"min(500px,50vw)", aspectRatio:"1/1" }}>
                <Image src="/savoy-icon.ico" alt="Navigation compass" fill
                  style={{ objectFit:"contain", opacity:0.6 }}
                />
              </div> */}
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className={`fade-up${heroInView ? " in" : ""}`}
            style={{
              position:"absolute", bottom:"2.5rem", left:"50%", transform:"translateX(-50%)",
              display:"flex", flexDirection:"column", alignItems:"center", gap:"0.5rem",
              transitionDelay:"0.6s",
            }}
          >
            <span style={{ fontFamily:"'General Sans',system-ui,sans-serif", fontSize:"0.6rem", letterSpacing:"0.2em", color:"rgba(255,255,255,0.2)", textTransform:"uppercase" }}>Scroll</span>
            <div style={{ width:"1px", height:"40px", background:"linear-gradient(to bottom,rgba(255,255,255,0.3),transparent)" }} />
          </div>
        </section>

        <div className="ov-rule" />

        {/* ── WHO WE ARE ───────────────────────────────────── */}
        <section ref={introRef} className="ov-pad" style={{ padding:"6rem 4rem", position:"relative", overflow:"hidden" }}>
          {/* Ghost lighthouse — right edge */}
          <div style={{ position:"absolute", right:0, top:0, bottom:0, width:"34%", pointerEvents:"none" }}>
            <Image src="/savoy-1.png" alt="" fill
              style={{
                objectFit:"contain", objectPosition:"right top", opacity:0.08,
                maskImage:"linear-gradient(to left,black 15%,transparent 85%)",
                WebkitMaskImage:"linear-gradient(to left,black 15%,transparent 85%)",
              }}
            />
          </div>
          <div style={{ position:"relative", zIndex:1, maxWidth:"860px" }}>
            <p className={`ov-label fade-left${introInView ? " in" : ""}`} style={{ marginBottom:"2.5rem" }}>Who We Are</p>
            <p className={`fade-up${introInView ? " in" : ""}`} style={{
              fontFamily:"'Cormorant Garamond',Georgia,serif",
              fontSize:"clamp(1.45rem,2.2vw,2.1rem)",
              fontWeight:300, color:"#ffffff", lineHeight:1.55,
              transitionDelay:"0.15s",
            }}>
              Savoy Bank &amp; Trust brings together the enduring values of
              private banking with an international perspective shaped by
              decades of cross-border experience. From Nassau, we serve a
              global clientele whose needs span personal treasury, fiduciary
              services, and access to international markets.
            </p>
            <p className={`fade-up${introInView ? " in" : ""}`} style={{
              fontFamily:"'General Sans',system-ui,sans-serif",
              fontSize:"0.85rem", fontWeight:300, color:"rgba(255,255,255,0.4)",
              lineHeight:1.85, marginTop:"2rem", maxWidth:"620px",
              transitionDelay:"0.28s",
            }}>
              Our approach is grounded in personal attention, measured judgment,
              and long-term relationships built on trust. Rather than standardised
              service models, Savoy shapes every client engagement around individual
              objectives — creating the kind of banking partnership that is
              increasingly rare in an era of institutional scale and automated
              decision-making.
            </p>
          </div>
        </section>

        <div className="ov-rule" />

        {/* ── STATS ────────────────────────────────────────── */}
        <section ref={statsRef} style={{ padding:"0 4rem" }}>
          <div className="ov-stats" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)" }}>
            {stats.map((s, i) => (
              <div key={s.label} className={`ov-stat fade-up${statsInView ? " in" : ""}`} style={{ transitionDelay:`${0.1 + i * 0.1}s` }}>
                <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(1.4rem,2vw,1.9rem)", fontWeight:300, color:"#ffffff", letterSpacing:"0.05em" }}>{s.value}</div>
                <div style={{ fontFamily:"'General Sans',system-ui,sans-serif", fontSize:"0.65rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,0.3)", marginTop:"0.35rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="ov-rule" />

        {/* ── FOUR PILLARS ─────────────────────────────────── */}
        <section ref={pillarsRef} className="ov-pad" style={{ padding:"6rem 4rem" }}>
          <p className={`ov-label fade-up${pillarsInView ? " in" : ""}`} style={{ marginBottom:"3.5rem" }}>Four Pillars</p>
          <div className="ov-pillars" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0 5rem" }}>
            {pillars.map((p, i) => (
              <div key={p.number} className={`ov-pillar fade-up${pillarsInView ? " in" : ""}`} style={{ transitionDelay:`${0.1 + i * 0.12}s` }}>
                <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"0.88rem", color:"rgba(255,255,255,0.28)", fontWeight:300, letterSpacing:"0.1em", paddingTop:"0.15rem" }}>{p.number}</div>
                <div>
                  <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(1.2rem,1.6vw,1.5rem)", fontWeight:400, color:"#ffffff", marginBottom:"0.7rem", lineHeight:1.15 }}>{p.title}</div>
                  <div style={{ fontFamily:"'General Sans',system-ui,sans-serif", fontSize:"0.82rem", fontWeight:300, color:"rgba(255,255,255,0.4)", lineHeight:1.7 }}>{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="ov-rule" />

        {/* ── VISION ───────────────────────────────────────── */}
        <section ref={visionRef} className="ov-pad" style={{ padding:"6rem 4rem", position:"relative", overflow:"hidden" }}>
          <div className="ov-vision-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"center" }}>
            <div>
              <p className={`ov-label fade-left${visionInView ? " in" : ""}`} style={{ marginBottom:"2.5rem" }}>The Vision</p>
              <h2 className={`fade-up${visionInView ? " in" : ""}`} style={{
                fontFamily:"'Cormorant Garamond',Georgia,serif",
                fontSize:"clamp(2rem,3vw,3.2rem)", fontWeight:300, lineHeight:1.1, color:"#ffffff",
                transitionDelay:"0.15s",
              }}>
                A lighthouse is not a landmark —<br />
                <em style={{ fontStyle:"italic", color:"rgba(255,255,255,0.4)" }}>it is a commitment.</em>
              </h2>
              <p className={`fade-up${visionInView ? " in" : ""}`} style={{
                fontFamily:"'General Sans',system-ui,sans-serif",
                fontSize:"0.83rem", fontWeight:300, color:"rgba(255,255,255,0.4)",
                lineHeight:1.85, marginTop:"2rem", transitionDelay:"0.28s",
              }}>
                Savoy aspires to be the trusted point of reference for clients
                navigating complexity — a stable, consistent presence whose clarity
                and judgement can be relied upon across generations and geographies.
                We are building an institution designed to endure.
              </p>
              {[
                ["Integrity & Trust", "Upholding the highest regulatory and ethical standards to foster long-term, transparent relationships."],
                ["Innovation with Purpose", "Leveraging advanced thinking and strategic partnerships to enhance efficiency, resilience, and client experience."],
                ["Institutional Excellence", "Delivering the infrastructure, governance, and client service consistent with a world-class financial intermediary."],
              ].map(([title, text], i) => (
                <div key={title} className={`fade-up${visionInView ? " in" : ""}`} style={{
                  marginTop:"1.75rem", paddingLeft:"1.2rem",
                  borderLeft:"1px solid rgba(255,255,255,0.1)",
                  transitionDelay:`${0.38 + i * 0.1}s`,
                }}>
                  <p style={{ fontFamily:"'General Sans',system-ui,sans-serif", fontSize:"0.7rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(255,255,255,0.5)", marginBottom:"0.35rem" }}>{title}</p>
                  <p style={{ fontFamily:"'General Sans',system-ui,sans-serif", fontSize:"0.8rem", fontWeight:300, color:"rgba(255,255,255,0.35)", lineHeight:1.7 }}>{text}</p>
                </div>
              ))}
            </div>

            {/* Lighthouse cross-section */}
            <div className={`ov-vision-img fade-right${visionInView ? " in" : ""}`} style={{ transitionDelay:"0.2s", display:"flex", justifyContent:"center" }}>
              <div style={{ position:"relative", width:"min(460px,38vw)", aspectRatio:"3/4" }}>
                <Image src="/savoy-3.png" alt="Lighthouse cross-section" fill
                  style={{
                    objectFit:"contain", opacity:0.6,
                    maskImage:"radial-gradient(ellipse 80% 85% at 50% 50%, black 45%, transparent 100%)",
                    WebkitMaskImage:"radial-gradient(ellipse 80% 85% at 50% 50%, black 45%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="ov-rule" />

        {/* ── FULL-WIDTH IMAGE BREAK ────────────────────────── */}
        <section style={{ position:"relative", height:"60vh", overflow:"hidden" }}>
          <Image src="/savoy-2.png" alt="Lighthouse lantern room" fill
            style={{ objectFit:"cover", objectPosition:"center 20%", opacity:0.25 }}
          />
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 55% 55% at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)" }} />
          <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"2rem" }}>
            <p style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(1.1rem,2vw,1.7rem)", fontWeight:300, fontStyle:"italic", color:"rgba(255,255,255,0.65)", textAlign:"center", maxWidth:"640px", lineHeight:1.6 }}>
              &ldquo;Traditional Values. International Perspective.&rdquo;
            </p>
            <span className="ov-rule-line" style={{ marginTop:"1.5rem" }} />
            <p style={{ fontFamily:"'General Sans',system-ui,sans-serif", fontSize:"0.65rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.28)", marginTop:"1rem" }}>
              Savoy Bank &amp; Trust — Nassau, The Bahamas
            </p>
          </div>
        </section>

        <div className="ov-rule" />

        {/* ── CTA ──────────────────────────────────────────── */}
        <section ref={ctaRef} className="ov-pad-sm" style={{ padding:"5rem 4rem", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center" }}>
          <p className={`ov-label fade-up${ctaInView ? " in" : ""}`} style={{ justifyContent:"center" }}>Get in Touch</p>
          <h2 className={`fade-up${ctaInView ? " in" : ""}`} style={{
            fontFamily:"'Cormorant Garamond',Georgia,serif",
            fontSize:"clamp(2rem,4vw,3.8rem)", fontWeight:300, color:"#ffffff",
            marginTop:"1.5rem", lineHeight:1.05, transitionDelay:"0.15s",
          }}>
            Begin a Conversation
          </h2>
          <p className={`fade-up${ctaInView ? " in" : ""}`} style={{
            fontFamily:"'General Sans',system-ui,sans-serif",
            fontSize:"0.83rem", fontWeight:300, color:"rgba(255,255,255,0.38)",
            marginTop:"1.25rem", maxWidth:"480px", lineHeight:1.8,
            transitionDelay:"0.25s",
          }}>
            Whether you have a specific mandate in mind or simply wish to
            explore how Savoy might serve your needs, we welcome your enquiry.
          </p>
          <a
            href="mailto:info@savoybankandtrust.com"
            className={`fade-up${ctaInView ? " in" : ""}`}
            style={{
              marginTop:"2.5rem",
              display:"inline-flex", alignItems:"center", gap:"0.75rem",
              fontFamily:"'General Sans',system-ui,sans-serif",
              fontSize:"0.72rem", letterSpacing:"0.18em", textTransform:"uppercase",
              color:"#ffffff", textDecoration:"none",
              padding:"0.85rem 2rem",
              border:"1px solid rgba(255,255,255,0.22)",
              transition:"border-color 0.3s,background 0.3s",
              transitionDelay:"0.35s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor="#ffffff"; e.currentTarget.style.background="rgba(255,255,255,0.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.22)"; e.currentTarget.style.background="transparent"; }}
          >
            info@savoybankandtrust.com
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </section>

        <div className="ov-rule" />

        {/* ── EGS-style nav arrows ─────────────────────────── */}
        {/* <div className="ov-arrows">
          <a href="/" className="ov-arrow-link prev">
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" style={{ transform:"rotate(180deg)" }}>
              <path d="M1 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Home
          </a>
          <a href="/leadership" className="ov-arrow-link">
            Leadership
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M1 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div> */}

      </main>

      {/* ── Footer — same BrandFooterSection as home page ── */}
      <BrandFooterSection />
    </>
  );
}