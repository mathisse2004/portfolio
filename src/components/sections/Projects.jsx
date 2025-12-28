import Section from "../layout/Section";
import Reveal from "../ui/Reveal";
import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {
  return (
    <Section
      id="projects"
      title="Projecten"
      subtitle="Een paar dingen waar ik trots op ben met focus op kwaliteit, gebruiksvriendelijkheid en praktische features."
    >
      <div className="projectsGrid">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
