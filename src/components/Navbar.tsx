"use client";

import { useEffect, useState } from "react";
import { getWhatsAppUrl, navigation, siteConfig } from "@/data/site";
import { ArrowUpRightIcon } from "./Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={`site-header ${scrolled || isOpen ? "site-header--active" : ""}`}>
      <nav className="container nav-shell" aria-label="Navegación principal">
        <a href="#inicio" className="brand" aria-label={`${siteConfig.name}, ir al inicio`}>
          <span className="brand-mark" aria-hidden="true">TM</span>
          <span>{siteConfig.name}</span>
        </a>

        <div className="nav-links" aria-label="Secciones">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </div>

        <a className="button button--dark nav-cta" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
          Hablemos
          <ArrowUpRightIcon />
        </a>

        <button
          className={`menu-toggle ${isOpen ? "is-open" : ""}`}
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${isOpen ? "is-open" : ""}`}>
        <div className="container mobile-menu-inner">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
          <a className="button button--accent" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
            Hablemos por WhatsApp
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
