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
      `}</style>

      {/*
        Section wrapper
        — bg-[#0c0c0c] = dark base colour
        — backgroundImage via inline style (Tailwind can't express url() with dynamic values safely)
        — px-[6.5vw] mirrors the original 6.5vw left padding
        — pt-[108px] / pb-[128px] = top / bottom breathing room
      */}
      <section
        className="
          relative
          w-full min-h-screen
          bg-[#0c0c0c]
          text-white
          pt-[108px] pb-[128px] px-[6.5vw]
          max-lg:pt-20 max-lg:pb-24 max-lg:px-[5vw]
          max-sm:px-6 max-sm:pt-[60px] max-sm:pb-[72px]
        "
        style={{
          fontFamily: "'Cormorant', Georgia, serif",
          backgroundImage: "url('/savoy-background.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      >
        {/* Dark overlay on top of the background image */}
        <div className="absolute inset-0 bg-black/70" />

        {/*
          Inner column — left ~38% of the canvas
          max-lg widens to 55%, max-sm goes full-width
          relative + z-10 keeps content above the overlay
        */}
        <div className="relative z-10 w-[38%] min-w-[320px] max-w-[550px] max-lg:w-[55%] max-sm:w-full max-sm:min-w-0 max-sm:max-w-none">

          {/* ── Heading ─────────────────────────────── */}
          <h2
            className="font-light italic leading-[1.48] tracking-[0.008em] text-white mb-[76px] max-sm:mb-14"
            style={{ fontSize: 'clamp(1.4rem, 2.35vw, 2rem)' }}
          >
            Savoy offers a focused range of banking and fiduciary
            services designed to meet the needs of a diversified
            international clientele.
          </h2>

          {/* ── Service list ────────────────────────── */}
          <ul className="list-none p-0 m-0 space-y-16 max-sm:space-y-12">
            {services.map((service, i) => (
              <li key={i}>

                {/* Tiny all-caps category label */}
                <p
                  className="font-medium not-italic uppercase tracking-[0.2em] text-white/35 mb-[9px]"
                  style={{ fontSize: 'clamp(0.58rem, 0.68vw, 0.7rem)' }}
                >
                  {service.label}
                </p>

                {/* Description paragraph */}
                <p
                  className="font-normal not-italic leading-[1.7] tracking-[0.012em] text-white/[0.78] max-w-[430px]"
                  style={{ fontSize: 'clamp(0.8rem, 0.98vw, 0.92rem)' }}
                >
                  {service.description}
                </p>

              </li>
            ))}
          </ul>

        </div>
      </section>
    </>
  );
}