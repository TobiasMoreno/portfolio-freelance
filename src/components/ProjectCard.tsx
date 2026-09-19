import Image from "next/image";
import type { Project } from "@/data/projects";
import { CheckIcon, ExternalIcon } from "./Icons";
import Reveal from "./Reveal";

type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectMockup({ project, index }: ProjectCardProps) {
  return (
    <div className={`project-visual project-visual--${index + 1}`}>
      <div className="browser-frame">
        <div className="browser-bar">
          <div className="browser-dots" aria-hidden="true"><span /><span /><span /></div>
          <div className="browser-url">www.tunegocio.com</div>
        </div>
        <div className="browser-screen">
          <Image
            src={project.desktopImage}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 767px) 92vw, (max-width: 1199px) 54vw, 700px"
            className="project-desktop-image"
            priority={index === 0}
          />
        </div>
      </div>
      <div className="phone-frame" aria-hidden="true">
        <div className="phone-speaker" />
        <div className="phone-screen">
          <Image
            src={project.mobileImage}
            alt=""
            fill
            sizes="(max-width: 767px) 22vw, 150px"
            className="project-mobile-image"
          />
        </div>
      </div>
      <span className="project-number" aria-hidden="true">0{index + 1}</span>
    </div>
  );
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const reverse = index % 2 === 1;

  return (
    <article className={`project-card ${reverse ? "project-card--reverse" : ""}`}>
      <Reveal className="project-visual-wrap">
        <ProjectMockup project={project} index={index} />
      </Reveal>

      <Reveal className="project-content" delay={100}>
        <p className="project-client">{project.client}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="case-notes">
          <div>
            <span>Lo que necesitaba</span>
            <p>{project.challenge}</p>
          </div>
          <div>
            <span>La solución</span>
            <p>{project.solution}</p>
          </div>
        </div>

        <ul className="project-services" aria-label="Servicios implementados">
          {project.services.map((service) => (
            <li key={service}><CheckIcon />{service}</li>
          ))}
        </ul>

        <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
          Ver sitio
          <ExternalIcon />
        </a>
      </Reveal>
    </article>
  );
}
