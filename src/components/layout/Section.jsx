export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="snapSection">
      <div className="snapInner">
        <div className="sectionHead">
          <h2>{title}</h2>
          {subtitle ? <p className="muted">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
