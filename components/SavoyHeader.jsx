"use client";

import Link from "next/link";
import { useState } from "react";

export default function SavoyHeader({ phase }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["ABOUT", "COMPANY OVERVIEW", "LEADERSHIP", "CONTACT US"];

  return (
    <>
      {/* Mobile Navigation Drawer */}
      <nav
        className={`mobile-nav${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            zIndex: 120,
          }}
        >
          <span 
            style={{ 
              display: "block", 
              width: "22px", 
              height: "1.5px", 
              background: "#fff", 
              transform: "translateY(3.25px) rotate(45deg)" 
            }} 
          />
          <span 
            style={{ 
              display: "block", 
              width: "22px", 
              height: "1.5px", 
              background: "#fff", 
              transform: "translateY(-3.25px) rotate(-45deg)" 
            }} 
          />
        </button>

        {navItems.map((item) => (
          <Link
            key={item}
            href={item === "COMPANY OVERVIEW" ? "/company" : "#"}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 99 }}
          aria-hidden="true"
        />
      )}

      {/* Main Header */}
      <header
        className="page-header absolute top-0 left-0 right-0 z-30 flex items-center justify-between pl-15 pr-25 py-10 pt-13"
        style={{
          opacity: phase >= 4 ? 1 : 0,
          transform: phase >= 4 ? "translateY(0)" : "translateY(-20px)",
          transition: phase >= 4
            ? "opacity 1.2s ease-out 0.4s, transform 1.2s ease-out 0.4s"
            : "none",
        }}
      >
        <div className="flex items-center">
          <img
            src="/savoy-logo.png"
            alt="Savoy Logo"
            className="header-logo h-27 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav hidden sm:flex items-center gap-4"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transition: phase >= 4 ? "opacity 1.4s ease-out 0.6s" : "none",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "COMPANY OVERVIEW" ? "/company" : "#"}
              className="text-white hover:text-white transition-colors text-xs tracking-widest uppercase"
              style={{
                letterSpacing: "0.1em",
                fontSize: "0.7rem",
                fontFamily: "'General Sans', 'Inter', system-ui, sans-serif",
              }}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="ham-line" style={menuOpen ? { transform: "translateY(6.5px) rotate(45deg)" } : {}} />
          <span className="ham-line" style={menuOpen ? { opacity: 0 } : {}} />
          <span className="ham-line" style={menuOpen ? { transform: "translateY(-6.5px) rotate(-45deg)" } : {}} />
        </button>
      </header>
    </>
  );
}