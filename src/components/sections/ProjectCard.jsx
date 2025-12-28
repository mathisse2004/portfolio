import Pill from "../ui/Pill";

export default function ProjectCard({ p }) {
  return (
    <article className="projectCard">
      <div className="projectHeader">
        <h3>{p.name}</h3>

        <div className="projectLinks">
          {p.repo ? (
            <a className="link" href={p.repo} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          ) : null}
        </div>
      </div>

      <p className="muted projectDesc">{p.description}</p>

      <div className="pillRow projectPills">
        {p.tech.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
    </article>
  );
}
