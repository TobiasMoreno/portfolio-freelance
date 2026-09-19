import { getWhatsAppUrl } from "@/data/site";
import { ArrowDownIcon, ArrowUpRightIcon, CheckIcon } from "./Icons";

const benefits = [
  "Diseño personalizado",
  "Responsive",
  "Dominio propio",
  "Optimizado para Google",
];

export default function Hero() {
  return (
    <section id="inicio" className="hero section-anchor">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow animate-in" style={{ animationDelay: "80ms" }}>
            <span className="status-dot" />
            Desarrollo web para negocios
          </div>
          <h1 className="animate-in" style={{ animationDelay: "160ms" }}>
            Creo páginas web que ayudan a negocios a <em>verse mejor</em> y conseguir más clientes.
          </h1>
          <p className="hero-lead animate-in" style={{ animationDelay: "260ms" }}>
            Diseño y desarrollo sitios modernos, rápidos y adaptados a cualquier dispositivo para negocios, emprendimientos y profesionales.
          </p>
          <div className="hero-actions animate-in" style={{ animationDelay: "360ms" }}>
            <a className="button button--accent button--large" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
              Quiero mi página
              <ArrowUpRightIcon />
            </a>
            <a className="button button--text" href="#trabajos">
              Ver trabajos
              <ArrowDownIcon />
            </a>
          </div>
        </div>

        <div className="hero-proof animate-in" style={{ animationDelay: "440ms" }}>
          <div className="proof-heading">
            <div className="proof-avatars" aria-hidden="true">
              <span>01</span><span>02</span>
            </div>
            <p>Proyectos reales<br />actualmente en producción</p>
          </div>
          <ul>
            {benefits.map((benefit) => (
              <li key={benefit}><CheckIcon />{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container hero-foot animate-in" style={{ animationDelay: "560ms" }}>
        <span>Córdoba, Argentina</span>
        <span className="hero-line" />
        <span>Disponible para nuevos proyectos</span>
      </div>
    </section>
  );
}
