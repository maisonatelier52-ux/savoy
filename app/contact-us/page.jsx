"use client";

import { useState } from "react";
import SavoyHeader from "@/components/SavoyHeader";
import BrandFooterSection from "@/components/Brandfootersection";

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

  .savoy-input {
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.18);
    color: #fff;
    outline: none;
    width: 100%;
    padding: 0.55rem 0;
    font-weight: 300;
    transition: border-color 0.25s;
  }
  .savoy-input::placeholder { color: rgba(255,255,255,0.22); }
  .savoy-input:focus { border-bottom-color: rgba(255,255,255,0.7); }

  .savoy-textarea {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.18);
    color: #fff;
    outline: none;
    width: 100%;
    padding: 0.75rem;
    font-weight: 300;
    resize: vertical;
    transition: border-color 0.25s;
    min-height: 160px;
  }
  .savoy-textarea::placeholder { color: rgba(255,255,255,0.22); }
  .savoy-textarea:focus { border-color: rgba(255,255,255,0.7); }

  .savoy-checkbox {
    appearance: none;
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    border: 1px solid rgba(255,255,255,0.35);
    background: transparent;
    cursor: pointer;
    flex-shrink: 0;
    transition: border-color 0.25s, background 0.25s;
  }
  .savoy-checkbox:checked { background: #fff; border-color: #fff; }
  .savoy-checkbox:focus { outline: none; }
`;

const serif = "'Cormorant Garamond', Georgia, serif";
const sans  = "'General Sans', 'Inter', system-ui, sans-serif";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", enquiry: "", agreed: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.agreed) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  }

  return (
    <>
      <style>{globalStyles}</style>
      <SavoyHeader phase={4} />

      <main className="bg-black text-white min-h-screen">

        {/* ── HEADING ─────────────────────────────────────── */}
        <section className="pt-48 pb-16 px-8 md:px-20 lg:px-32">
          <h1
            style={{ fontFamily: serif, fontSize: "clamp(1.2rem,4vw,2.8rem)", fontWeight: 300, lineHeight: 1.0, letterSpacing: "0.04em" }}
            className="text-white uppercase mb-5"
          >
            Contact Us
          </h1>
          <div className="w-10 h-px bg-white mb-6" />
          <p style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 300 }} className="text-white tracking-wider">
            For Professional Clients and Market Counterparties only
          </p>
        </section>

        <div className="w-full h-px bg-white/10" />

        {/* ── FORM ─────────────────────────────────────────── */}
        <section className="py-16 px-8 md:px-20 lg:px-32">
          <div className="max-w-lg">

            {submitted ? (
              <div className="py-16">
                <span className="block w-10 h-px bg-white mb-8" />
                <h2 style={{ fontFamily: serif, fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 300, lineHeight: 1.1 }} className="text-white mb-4">
                  Thank you for your enquiry.
                </h2>
                <p style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.8 }} className="text-white/45">
                  Your submission has been received. Only relevant introductions will receive a response.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>

                {/* Name */}
                <div className="mb-8">
                  <label style={{ fontFamily: sans, fontSize: "0.7rem", letterSpacing: "0.12em" }} className="block text-white uppercase mb-3">
                    Name in Full
                  </label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange}
                    placeholder="Your full name" className="savoy-input" style={{ fontFamily: sans, fontSize: "0.85rem" }} />
                </div>

                {/* Email */}
                <div className="mb-8">
                  <label style={{ fontFamily: sans, fontSize: "0.7rem", letterSpacing: "0.12em" }} className="block text-white uppercase mb-3">
                    Email
                  </label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange}
                    placeholder="your@email.com" className="savoy-input" style={{ fontFamily: sans, fontSize: "0.85rem" }} />
                </div>

                {/* Phone */}
                <div className="mb-8">
                  <label style={{ fontFamily: sans, fontSize: "0.7rem", letterSpacing: "0.12em" }} className="block text-white uppercase mb-3">
                    Phone Number
                  </label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+1 000 000 0000" className="savoy-input" style={{ fontFamily: sans, fontSize: "0.85rem" }} />
                </div>

                {/* Enquiry */}
                <div className="mb-10">
                  <label style={{ fontFamily: sans, fontSize: "0.7rem", letterSpacing: "0.12em" }} className="block text-white uppercase mb-3">
                    Enquiry
                  </label>
                  <textarea name="enquiry" required value={form.enquiry} onChange={handleChange}
                    placeholder="Please describe your enquiry…" className="savoy-textarea" style={{ fontFamily: sans, fontSize: "0.85rem" }} />
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3 mb-10">
                  <input type="checkbox" name="agreed" id="agreed" checked={form.agreed} onChange={handleChange} className="savoy-checkbox mt-1" />
                  <label htmlFor="agreed"
                    style={{ fontFamily: sans, fontSize: "0.78rem", fontWeight: 300, lineHeight: 1.7, cursor: "pointer" }}
                    className="text-white/45"
                  >
                    I confirm that I am a Professional Client / Market Counterparty and agree to the terms.
                  </label>
                </div>

                {/* Submit */}
                <div className="mb-10">
                  <button
                    type="submit"
                    disabled={!form.agreed || loading}
                    style={{ fontFamily: sans, fontSize: "0.72rem", letterSpacing: "0.18em", cursor: form.agreed ? "pointer" : "not-allowed" }}
                    className={`uppercase text-white border px-10 py-3 transition-all duration-300 bg-transparent
                      ${form.agreed ? "border-white/30 hover:border-white hover:bg-white/5" : "border-white/10 text-white/25"}`}
                  >
                    {loading ? "Sending…" : "Submit"}
                  </button>
                </div>

                {/* Disclaimer */}
                <div className="border-t border-white/10 pt-6">
                  <p style={{ fontFamily: sans, fontSize: "0.72rem", fontWeight: 300, lineHeight: 1.8 }} className="text-white/30">
                    All submissions are subject to internal review.<br />
                    Only relevant introductions will receive a response.
                  </p>
                </div>

              </form>
            )}
          </div>
        </section>

        <div className="w-full h-px bg-white/10" />

        {/* ── CONTACT DETAILS ─────────────────────────────── */}
        <section className="py-16 px-8 md:px-20 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-2xl">

            <div>
              <p style={{ fontFamily: sans, fontSize: "0.65rem", letterSpacing: "0.2em" }} className="uppercase text-white/30 mb-3">Email</p>
              <a href="mailto:info@savoybankandtrust.com"
                style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 300 }}
                className="text-white/65 hover:text-white transition-colors no-underline">
                info@savoybankandtrust.com
              </a>
            </div>

            <div>
              <p style={{ fontFamily: sans, fontSize: "0.65rem", letterSpacing: "0.2em" }} className="uppercase text-white/30 mb-3">Location</p>
              <p style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.7 }} className="text-white/65">
                Nassau,<br />The Bahamas
              </p>
            </div>

            <div>
              <p style={{ fontFamily: sans, fontSize: "0.65rem", letterSpacing: "0.2em" }} className="uppercase text-white/30 mb-3">Regulated By</p>
              <p style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.7 }} className="text-white/65">
                Securities Commission<br />of The Bahamas
              </p>
            </div>

          </div>
        </section>

        <div className="w-full h-px bg-white/10" />

      </main>

      <BrandFooterSection />
    </>
  );
}