"use client";

import { useEffect, useState } from "react";
import { site, whatsappLink, defaultMessage } from "@/lib/site";

const links = [
  { href: "#areas", label: "Áreas de atuação" },
  { href: "#diagnostico", label: "Diagnóstico" },
  { href: "#sobre", label: "Sobre" },
  { href: "#duvidas", label: "Dúvidas" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="header-inner">
        <a href="#topo" className="brand" aria-label={`${site.name} — ${site.title}`} onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">GN</span>
          <span className="brand-text">
            <span className="brand-name">{site.name.toUpperCase()}</span>
            <span className="brand-sub">{site.title}</span>
          </span>
        </a>

        <nav className="nav" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn-gold btn-sm header-cta"
          href={whatsappLink(defaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar com a advogada
        </a>

        <button
          type="button"
          className="menu-btn"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className="mobile-menu" aria-hidden={!open}>
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: `${open ? 120 + i * 60 : 0}ms` }}
          >
            {l.label}
          </a>
        ))}
        <a
          className="btn btn-gold"
          href={whatsappLink(defaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar com a advogada
        </a>
      </div>
    </header>
  );
}
