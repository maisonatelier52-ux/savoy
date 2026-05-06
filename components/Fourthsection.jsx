"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    description:
      "Responsive day-to-day banking support delivered with the attention of a relationship-led institution.",
  },
  {
    description:
      "Secure digital access for convenient account visibility and transaction management.",
  },
  {
    description:
      "Access to custody and execution capabilities across a range of investment instruments.",
  },
  {
    description:
      "Liquidity solutions structured around current accounts, term deposits, and fiduciary deposits.",
  },
  {
    description:
      "Spot, forward, and swap solutions tailored to cross-border requirements.",
  },
  {
    description:
      "Trading and custody solutions for clients seeking additional diversification.",
  },
  {
    description:
      "Efficient movement of funds supported by attentive service and clear execution.",
  },
  {
    description:
      "Asset-backed credit solutions structured around eligible holdings.",
  },
  {
    description:
      "Additional solutions tailored to more specialized requirements.",
  },
];

export default function SavoyServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

        /* ── Section shell ── */
        .fourth-section-root {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          overflow: hidden;
        }

        /* ── Dark overlay sits above bg image ── */
        .fourth-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.20);
          z-index: 0;
          pointer-events: none;
        }

        /* ── Left text column ── */
        .fourth-text-col {
          position: relative;
          z-index: 1;
          flex: 0 0 auto;
          width: 50%;
          padding: 15vh 4vw 12vh 6.5vw;
        }

        /* ── Right image column ── */
        .fourth-img-col {
          position: relative;
          z-index: 1;
          flex: 0 0 auto;
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          /* Sticky so the lighthouse stays in view while you scroll the list */
          position: sticky;
          top: 0;
          height: 100vh;
          padding: 6vh 3vw;
        }

        .fourth-img-wrap {
          width: 100%;
          max-width: 660px;
          margin-top: 110vh;   /* nudge image down */
          /* Fade left edge into the background */
          -webkit-mask-image: linear-gradient(
            to right, transparent 0%, black 22%, black 100%
          );
          mask-image: linear-gradient(
            to right, transparent 0%, black 22%, black 100%
          );
        }

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .fourth-text-col {
            width: 58%;
            padding: 12vh 3vw 10vh 5vw;
          }
          .fourth-img-col {
            width: 42%;
            padding: 4vh 2vw;
          }
          .fourth-img-wrap { max-width: 340px; }
          .fourth-heading { font-size: clamp(1.2rem, 3vw, 1.6rem) !important; }
        }

        /* ── Mobile: image FIRST, text SECOND ── */
        @media (max-width: 640px) {
          .fourth-section-root {
            flex-direction: column;
            min-height: unset;
          }

          /* image on top */
          .fourth-img-col {
            order: 1;
            width: 100%;
            height: auto;          /* un-stick on mobile */
            position: relative;
            top: unset;
            padding: 6vh 10vw 2vh;
            justify-content: center;
          }

          /* text below */
          .fourth-text-col {
            order: 2;
            width: 100%;
            padding: 4vh 6vw 10vh;
          }

          .fourth-img-wrap {
            max-width: 320px;
            -webkit-mask-image: none;
            mask-image: none;
            margin-top: 1vh;
          }

          .fourth-heading {
            font-size: clamp(1.2rem, 5vw, 1.6rem) !important;
            margin-bottom: 3rem !important;
          }
          .fourth-service-desc { font-size: 0.9rem !important; }
        }
      `}</style>

      <section
        className="fourth-section-root bg-[#0c0c0c] text-white"
        style={{
          fontFamily: "'Cormorant', Georgia, serif",
          backgroundImage: "url('/savoy-background2.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="fourth-overlay" />

        {/* ── LEFT: text + service list ── */}
        {/* <div className="fourth-text-col">
          <h2
            className="fourth-heading font-light text-white mb-[76px]"
            style={{ fontSize: "clamp(1.8rem, 2vw, 1.3rem)", lineHeight: 1.0 }}
          >
            Savoy offers a focused range of banking and fiduciary services
            designed to meet the needs of a diversified international clientele.
          </h2>

          <ul className="fourth-service-list list-none p-0 m-0 space-y-16">
            {services.map((service, i) => (
              <li key={i}>
                <p
                  className="fourth-service-desc font-normal not-italic text-white max-w-[530px]"
                  style={{
                    fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
                    fontSize: "clamp(0.8rem, 1vw, 0.95rem)",
                    lineHeight: 1.0,
                  }}
                >
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="fourth-text-col ">
          <h2
            className="fourth-heading font-light text-white"
            style={{
              fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)",
              lineHeight: 1.0,
              marginBottom: "4rem",
              maxWidth: "480px",
              letterSpacing: "0.02em",
              fontFamily: "'Cormorant', Georgia, serif",
            }}
          >
            Savoy offers a focused range of banking and fiduciary services
            designed to meet the needs of a diversified international clientele.
          </h2>

          {/* <ul className="fourth-service-list list-none p-0 m-0"> */}
          <ul className="fourth-service-list list-none p-0 m-0" style={{ paddingBottom: "1.4rem" }}>
            {services.map((service, i) => (
              <li
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  padding: "1.4rem 0",
                  borderTop:
                    i === 0
                      ? "1px solid rgba(255,255,255,0.18)"
                      : "1px solid rgba(255,255,255,0.08)",
                  position: "relative",
                  paddingLeft: "1.25rem",
                  cursor: "default",
                  transition: "background 0.3s ease",
                  background:
                    hoveredIndex === i
                      ? "rgba(255,255,255,0.04)"
                      : "transparent",
                }}
              >
                {/* Left accent bar */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "2px",
                    height: hoveredIndex === i ? "100%" : "60%",
                    transition: "height 0.3s ease, background 0.3s ease",
                    background:
                      hoveredIndex === i
                        ? "rgba(255,255,255,0.9)"
                        : i % 3 === 0
                          ? "rgba(255,255,255,0.55)"
                          : i % 3 === 1
                            ? "rgba(255,255,255,0.25)"
                            : "rgba(255,255,255,0.1)",
                  }}
                />

                <p
                  className="fourth-service-desc"
                  style={{
                    fontFamily:
                      "'General Sans', 'Inter', system-ui, sans-serif",
                    fontSize: "clamp(0.75rem, 1vw, 0.9rem)",
                    fontWeight: hoveredIndex === i ? 500 : 300,
                    lineHeight: 1.65,
                    color:
                      hoveredIndex === i
                        ? "rgba(255,255,255,1)"
                        : "rgba(255,255,255,0.82)",
                    margin: 0,
                    maxWidth: "460px",
                    letterSpacing: hoveredIndex === i ? "0.02em" : "0.01em",
                    transition:
                      "font-weight 0.2s ease, color 0.2s ease, letter-spacing 0.2s ease",
                  }}
                >
                  {service.description}
                </p>
              </li>
            ))}

            {/* closing rule */}
            <li
              style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                height: 0,
              }}
            />
          </ul>
        </div>

        {/* ── RIGHT: lighthouse illustration ── */}
        <div className="fourth-img-col">
          <div className="fourth-img-wrap">
            <Image
              src="/illustration-1-2.png"
              alt="Lighthouse illustration"
              width={460}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                opacity: 0.9,
              }}
              priority={false}
            />
          </div>
        </div>
      </section>
    </>
  );
}
