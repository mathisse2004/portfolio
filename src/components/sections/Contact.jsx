import Section from "../layout/Section";
import Reveal from "../ui/Reveal";
import { profile } from "../../models/profileModel";

export default function Contact() {
  const { email, links } = profile;

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Zin om samen te werken of een vraag? Stuur me gerust een bericht."
    >
      <Reveal>
        <div className="contactCard">
          <div className="contactGrid">
            <a className="contactItem" href={`mailto:${email}`}>
              <div className="contactLabel">E-mail</div>
              <div className="contactValue">{email}</div>
            </a>

            <a
              className="contactItem"
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contactLabel">LinkedIn</div>
              <div className="contactValue">Bekijk profiel ↗</div>
            </a>

            <a
              className="contactItem"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contactLabel">GitHub</div>
              <div className="contactValue">Bekijk repositories ↗</div>
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
