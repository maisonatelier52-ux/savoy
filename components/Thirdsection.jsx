'use client';

export default function SavoyAbout() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

        .savoy-about-root,
        .savoy-about-root *,
        .savoy-about-root *::before,
        .savoy-about-root *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .savoy-about-root {
          font-family: 'Cormorant', Georgia, serif;
          background-color: #000000;
          width: 100%;
          /* Large top space — content sits at ~32% down the section */
          padding: 32vh 0 14vh 6.5vw;
          color: #ffffff;
          min-height: 100vh;
        }

        /* Content column — left ~44% of canvas */
        .savoy-about-inner {
          width: 44%;
          min-width: 320px;
          max-width: 660px;
        }

        /* ── Eyebrow label ─────────────────────────── */
        /* "SAVOY BANK & TRUST  |  The Bahamas" */
        .savoy-about-eyebrow {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 500;
          font-style: normal;
          font-size: clamp(0.58rem, 0.7vw, 0.7rem);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 0;
        }

        /* The pipe separator and location revert to mixed-case */
        .savoy-about-eyebrow .pipe {
          margin: 0 10px;
          font-weight: 300;
          letter-spacing: 0;
          color: rgba(255, 255, 255, 0.5);
        }

        .savoy-about-eyebrow .location {
          text-transform: none;
          font-weight: 300;
          font-style: italic;
          letter-spacing: 0.04em;
          font-size: clamp(0.62rem, 0.75vw, 0.75rem);
          color: rgba(255, 255, 255, 0.65);
        }

        /* ── Main heading paragraph ─────────────────── */
        .savoy-about-heading {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-style: italic;
          font-size: clamp(1.5rem, 2.4vw, 2.05rem);
          line-height: 1.48;
          letter-spacing: 0.008em;
          color: #ffffff;
          margin-bottom: 36px;
        }

        /* ── Body paragraph ─────────────────────────── */
        .savoy-about-body {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 400;
          font-style: normal;
          font-size: clamp(0.8rem, 0.98vw, 0.92rem);
          line-height: 1.72;
          letter-spacing: 0.012em;
          color: rgba(255, 255, 255, 0.78);
          max-width: 600px;
        }

        /* ── Responsive ─────────────────────────────── */
        @media (max-width: 1024px) {
          .savoy-about-root {
            padding: 26vh 0 12vh 5vw;
          }
          .savoy-about-inner {
            width: 62%;
          }
        }

        @media (max-width: 700px) {
          .savoy-about-root {
            padding: 18vh 24px 10vh 24px;
          }
          .savoy-about-inner {
            width: 100%;
            min-width: unset;
            max-width: unset;
          }
        }
      `}</style>

      <section className="savoy-about-root">
        <div className="savoy-about-inner">

          {/* Eyebrow: "SAVOY BANK & TRUST  |  The Bahamas" */}
          <p className="savoy-about-eyebrow">
            Savoy Bank &amp; Trust
            <span className="pipe">|</span>
            <span className="location">The Bahamas</span>
          </p>

          {/* Large italic heading */}
          <h1 className="savoy-about-heading">
            Savoy Bank &amp; Trust is a privately held financial
            institution in The Bahamas, serving clients through
            tailored banking and trust services. Its culture draws
            on the discipline of private banking while maintaining
            the responsiveness required by modern international
            clients.
          </h1>

          {/* Supporting body copy */}
          <p className="savoy-about-body">
            Clients benefit from a relationship-led model shaped by experience,
            discretion, and continuity. The result is a banking experience
            designed to feel personal, thoughtful, and dependable over time.
          </p>

        </div>
      </section>
    </>
  );
}