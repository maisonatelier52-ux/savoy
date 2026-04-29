'use client';

const services = [
  {
    label: 'Personal Banking',
    description:
      'Responsive day-to-day banking support delivered with the attention of a relationship-led institution.',
  },
  {
    label: 'e-Banking',
    description:
      'Secure digital access for convenient account visibility and transaction management.',
  },
  {
    label: 'Securities & Custody',
    description:
      'Access to custody and execution capabilities across a range of investment instruments.',
  },
  {
    label: 'Deposits & Liquidity',
    description:
      'Liquidity solutions structured around current accounts, term deposits, and fiduciary deposits.',
  },
  {
    label: 'Foreign Exchange',
    description:
      'Spot, forward, and swap solutions tailored to cross-border requirements.',
  },
  {
    label: 'Precious Metals',
    description:
      'Trading and custody solutions for clients seeking additional diversification.',
  },
  {
    label: 'Transfers & Payments',
    description:
      'Efficient movement of funds supported by attentive service and clear execution.',
  },
  {
    label: 'Lombard & Credit',
    description:
      'Asset-backed credit solutions structured around eligible holdings.',
  },
  {
    label: 'Bespoke Services',
    description:
      'Additional solutions tailored to more specialized requirements.',
  },
];

export default function SavoyServices() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

        .savoy-root,
        .savoy-root *,
        .savoy-root *::before,
        .savoy-root *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .savoy-root {
          font-family: 'Cormorant', Georgia, serif;

          /* ── Real background image from /public ── */
          background-image: url('/savoy-background.png');
          background-repeat: repeat;
          background-size: auto;
          background-color: #0c0c0c;

          width: 100%;
          /* Top/bottom padding keeps vertical breathing room;
             left padding anchors content the same distance from edge as in screenshots (~6.5vw ≈ 100px at 1540px wide) */
          padding: 108px 0 128px 6.5vw;
          color: #ffffff;
        }

        /* Content block occupies ~38% of canvas — left column only */
        .savoy-inner {
          width: 38%;
          min-width: 320px;
          max-width: 550px;
        }

        /* ── Heading ───────────────────────────────── */
        .savoy-heading {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-style: italic;
          font-size: clamp(1.4rem, 2.35vw, 2rem);
          line-height: 1.48;
          letter-spacing: 0.008em;
          color: #ffffff;
          /* Space between heading and first service item */
          margin-bottom: 76px;
        }

        /* ── Service list ───────────────────────────── */
        .savoy-list {
          list-style: none;
        }

        /* Pure whitespace gap — NO borders, matching reference */
        .savoy-item + .savoy-item {
          margin-top: 64px;
        }

        /* Tiny all-caps label (faint, above description) */
        .savoy-label {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 500;
          font-style: normal;
          font-size: clamp(0.58rem, 0.68vw, 0.7rem);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.35);
          margin-bottom: 9px;
        }

        /* Description paragraph */
        .savoy-desc {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 400;
          font-style: normal;
          font-size: clamp(0.8rem, 0.98vw, 0.92rem);
          line-height: 1.7;
          letter-spacing: 0.012em;
          color: rgba(255, 255, 255, 0.78);
          max-width: 430px;
        }

        /* ── Responsive ────────────────────────────── */
        @media (max-width: 1024px) {
          .savoy-root {
            padding: 80px 0 96px 5vw;
          }
          .savoy-inner {
            width: 55%;
          }
        }

        @media (max-width: 700px) {
          .savoy-root {
            padding: 60px 24px 72px 24px;
          }
          .savoy-inner {
            width: 100%;
            min-width: unset;
            max-width: unset;
          }
          .savoy-item + .savoy-item {
            margin-top: 48px;
          }
        }
      `}</style>

      <section className="savoy-root">
        <div className="savoy-inner">

          <h2 className="savoy-heading">
            Savoy offers a focused range of banking and fiduciary
            services designed to meet the needs of a diversified
            international clientele.
          </h2>

          <ul className="savoy-list">
            {services.map((service, i) => (
              <li key={i} className="savoy-item">
                <p className="savoy-label">{service.label}</p>
                <p className="savoy-desc">{service.description}</p>
              </li>
            ))}
          </ul>

        </div>
      </section>
    </>
  );
}