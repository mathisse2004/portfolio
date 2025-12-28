import Section from "../layout/Section";
import Reveal from "../ui/Reveal";

export default function About({ about }) {
  return (
    <Section
      id="about"
      title="Over mij"
      subtitle="Wie ik ben, hoe ik werk en wat je van mij mag verwachten in een team."
    >
      <div className="aboutLayout">
        <Reveal>
          <div className="aboutIntroCard">
            <p className="aboutLead">
              Developer met een focus op <strong>duidelijke code</strong>,{" "}
              <strong>mooie UX</strong> en
              <strong> betrouwbare oplossingen</strong>.
            </p>

            <div className="aboutHighlights">
              <div className="aboutChip">Clean code</div>
              <div className="aboutChip">Teamwork</div>
              <div className="aboutChip">Probleemoplossend</div>
              <div className="aboutChip">Leergierig</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="aboutCards">
            <div className="aboutCard">
              <div className="aboutCardTitle">Motivatie & mindset</div>
              <p className="aboutText">{about?.[0]}</p>
            </div>

            <div className="aboutCard">
              <div className="aboutCardTitle">Aanpak & kwaliteit</div>
              <p className="aboutText">{about?.[1]}</p>
            </div>

            <div className="aboutCard">
              <div className="aboutCardTitle">Groei & richting</div>
              <p className="aboutText">{about?.[2]}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="quoteCard aboutQuote">
            <p className="quote">
              “Design is not just what it looks like and feels like. Design is
              how it works.”
            </p>
            <p className="muted quoteBy">— Steve Jobs</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
