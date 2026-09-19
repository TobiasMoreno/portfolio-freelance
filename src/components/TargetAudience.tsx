import { CheckIcon } from "./Icons";
import Reveal from "./Reveal";

const situations = [
  "Tenés un negocio y solamente utilizás Instagram.",
  "Tus clientes siempre preguntan la misma información.",
  "Querés mostrar tus productos o servicios.",
  "Querés aparecer profesionalmente cuando alguien busca tu negocio.",
  "Querés recibir consultas directamente por WhatsApp.",
  "Tu página actual quedó vieja.",
  "Tu sitio funciona mal desde el celular.",
];

export default function TargetAudience() {
  return (
    <section className="audience section">
      <div className="container audience-panel">
        <Reveal className="audience-intro">
          <p className="eyebrow eyebrow--light">¿Te suena familiar?</p>
          <h2>Una web puede ayudarte si...</h2>
          <p>No se trata solo de “estar en internet”. Se trata de hacer más fácil que te conozcan, te elijan y te contacten.</p>
        </Reveal>
        <Reveal className="audience-list" delay={100}>
          {situations.map((situation) => (
            <div key={situation}>
              <span><CheckIcon /></span>
              <p>{situation}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
