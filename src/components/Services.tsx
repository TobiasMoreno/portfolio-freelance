import Reveal from "./Reveal";

const services = [
  {
    number: "01",
    title: "Página web profesional",
    description: "Sitios modernos para presentar tu negocio, servicios, horarios, ubicación e información importante.",
    icon: "window",
  },
  {
    number: "02",
    title: "Catálogo online",
    description: "Mostrá tus productos o servicios de forma clara, sin necesidad de implementar un e-commerce.",
    icon: "grid",
  },
  {
    number: "03",
    title: "WhatsApp y contacto",
    description: "Integración directa para transformar las visitas a tu página en consultas reales.",
    icon: "message",
  },
  {
    number: "04",
    title: "Diseño responsive",
    description: "Una experiencia impecable en celulares, tablets y computadoras, sin importar la pantalla.",
    icon: "devices",
  },
  {
    number: "05",
    title: "Dominio propio",
    description: "Configuración para que tu negocio tenga una dirección profesional como www.tunegocio.com.",
    icon: "globe",
  },
  {
    number: "06",
    title: "SEO básico",
    description: "Una estructura clara y optimizada para que Google pueda entender correctamente tu sitio.",
    icon: "search",
  },
];

function ServiceIcon({ name }: { name: string }) {
  return (
    <span className={`service-icon service-icon--${name}`} aria-hidden="true">
      <span /><i />
    </span>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="services section section-anchor">
      <div className="container">
        <Reveal className="section-heading section-heading--center">
          <p className="eyebrow">Soluciones simples, bien resueltas</p>
          <h2>¿Qué puedo hacer por tu negocio?</h2>
          <p>Una web pensada para tu objetivo, sin complicaciones ni cosas que no necesitás.</p>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={service.title} className="service-card" delay={(index % 3) * 80}>
              <div className="service-card-top">
                <ServiceIcon name={service.icon} />
                <span>{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
