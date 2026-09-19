import { getEmailUrl, getWhatsAppUrl } from "@/data/site";
import { ArrowUpRightIcon, MailIcon, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section id="contacto" className="contact section section-anchor">
      <div className="container">
        <Reveal className="contact-panel">
          <div className="contact-deco contact-deco--one" aria-hidden="true" />
          <div className="contact-deco contact-deco--two" aria-hidden="true" />
          <p className="eyebrow eyebrow--light">¿Empezamos?</p>
          <h2>¿Tenés una idea<br />para tu página?</h2>
          <p className="contact-lead">Contame sobre tu negocio y vemos juntos qué podemos construir.</p>
          <div className="contact-actions">
            <a className="button button--white button--large" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              Hablar por WhatsApp
              <ArrowUpRightIcon />
            </a>
            <a className="contact-email" href={getEmailUrl()}>
              <MailIcon /> Prefiero enviar un email
            </a>
          </div>
          <span className="no-commitment">Sin compromiso.</span>
        </Reveal>
      </div>
    </section>
  );
}
