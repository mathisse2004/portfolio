import Reveal from "../ui/Reveal";

export default function Highlights({ items }) {
  return (
    <div className="highlights">
      {items.map((it, idx) => (
        <Reveal key={it.title} delay={idx * 80}>
          <div className="miniCard">
            <h3>{it.title}</h3>
            <p className="muted">{it.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
