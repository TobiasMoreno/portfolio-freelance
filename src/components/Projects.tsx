import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="trabajos" className="projects section section-anchor">
      <div className="container">
        <Reveal className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Trabajo seleccionado</p>
            <h2>Trabajos reales</h2>
          </div>
          <p>Algunos proyectos que desarrollé para clientes y que actualmente están en producción.</p>
        </Reveal>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
