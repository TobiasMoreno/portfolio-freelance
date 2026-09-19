import Reveal from "./Reveal";

const steps = [
  { number: "01", title: "Hablemos", description: "Me contás sobre tu negocio y qué necesitás." },
  { number: "02", title: "Propuesta", description: "Definimos qué vamos a construir, alcance y tiempos." },
  { number: "03", title: "Desarrollo", description: "Construyo la página y vas viendo los avances." },
  { number: "04", title: "Publicación", description: "Configuramos dominio, hosting y dejamos todo funcionando." },
];

export default function Process() {
  return (
    <section className="process section">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow">De la idea a internet</p>
          <h2>Así trabajo</h2>
          <p>Un proceso claro, acompañado y sin vueltas.</p>
        </Reveal>

        <div className="process-grid">
          {steps.map((step, index) => (
            <Reveal key={step.number} className="process-step" delay={index * 80}>
              <div className="step-number">{step.number}</div>
              <div className="step-line" aria-hidden="true"><span /></div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
