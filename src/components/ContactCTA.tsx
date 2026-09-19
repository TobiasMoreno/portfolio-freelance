import { MailIcon, WhatsAppIcon } from "./Icons";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section id="contacto" className="contact section section-anchor">
      <div className="container">
        <Reveal className="contact-panel">
          <div className="contact-deco contact-deco--one" aria-hidden="true" />
          <div className="contact-deco contact-deco--two" aria-hidden="true" />
          <div className="contact-copy">
            <p className="eyebrow eyebrow--light">¿Empezamos?</p>
            <h2>Hablemos de<br />tu próxima web.</h2>
            <p className="contact-lead">
              Contame sobre tu negocio y vemos juntos qué podemos construir. Elegí la forma que te resulte más cómoda.
            </p>

            <div className="contact-channels" aria-label="Canales de contacto disponibles">
              <span><MailIcon /> Email</span>
              <span><WhatsAppIcon /> WhatsApp</span>
            </div>

            <div className="contact-note">
              <MailIcon />
              <span>Completá el formulario una sola vez y elegí cómo querés enviarlo.</span>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span>Tu consulta</span>
              <p>Elegí cómo enviarla</p>
            </div>
            <ContactForm />
            <span className="no-commitment">Sin compromiso. Tus datos no se comparten.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
