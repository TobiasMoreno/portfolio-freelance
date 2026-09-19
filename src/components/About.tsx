import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ArrowUpRightIcon, MapPinIcon } from "./Icons";
import Reveal from "./Reveal";

const skills = ["Desarrollo web", "Experiencia de usuario", "Soluciones a medida", "Cloud y arquitectura"];

export default function About() {
  return (
    <section id="sobre-mi" className="about section section-anchor">
      <div className="container about-grid">
        <Reveal className="about-portrait-wrap">
          <div className="about-portrait">
            <Image
              src="/images/tobias.jpg"
              alt="Tobias Moreno, desarrollador web"
              fill
              sizes="(max-width: 767px) 92vw, 480px"
              className="about-image"
            />
            <span className="about-caption"><MapPinIcon /> Córdoba, Argentina</span>
          </div>
          <div className="about-stamp" aria-hidden="true">
            <span>TM</span>
            <small>Diseño &amp; desarrollo</small>
          </div>
        </Reveal>

        <Reveal className="about-copy" delay={120}>
          <p className="eyebrow">Un trato directo, de principio a fin</p>
          <h2>Quién está detrás</h2>
          <div className="about-text">
            <p>Soy <strong>Tobias Moreno</strong>, desarrollador de software de Córdoba, Argentina. Creo experiencias web que combinan una imagen cuidada con una navegación simple, rápida y fácil de usar.</p>
            <p>Me involucro de forma directa en cada proyecto: escucho la idea, ordeno la información y la convierto en una web profesional, pensada para representar bien al negocio y generar nuevas consultas.</p>
          </div>
          <div className="skill-list">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
          <div className="about-links">
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRightIcon /></a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRightIcon /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
