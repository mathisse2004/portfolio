import Section from "../layout/Section";
import Reveal from "../ui/Reveal";
import {
  FaJava,
  FaReact,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaMicrosoft,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiKotlin,
  SiSwift,
  SiBlazor,
  SiPostman,
} from "react-icons/si";

const SKILL_ICONS = {
  Java: FaJava,
  JavaScript: SiJavascript,
  React: FaReact,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  "Blazor (C#)": SiBlazor,
  Kotlin: SiKotlin,
  SwiftUI: SiSwift,
  GitHub: FaGithub,
  "REST APIs": SiPostman,
  "Basis SQL": FaDatabase,
  Azure: FaMicrosoft,
};

export default function Skills({ skills }) {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Tech waar ik graag mee bouw en waar ik dagelijks beter in word."
    >
      <div className="skillsLayout">
        <Reveal>
          <div className="skillsIntro">
            <p className="skillsLead">
              Ik combineer <strong>frontend</strong> met{" "}
              solide <strong>backend</strong> logica. Ik werk graag
              gestructureerd, testbaar en met oog voor UX.
            </p>

            <div className="skillsStats">
              <div className="statCard">
                <div className="statValue">10+</div>
                <div className="statLabel">Technologieën</div>
              </div>
              <div className="statCard">
                <div className="statValue">2</div>
                <div className="statLabel">iOS Apps</div>
              </div>
              <div className="statCard">
                <div className="statValue">React</div>
                <div className="statLabel">Web focus</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="skillsGrid">
            {skills.map((skill) => {
              const Icon = SKILL_ICONS[skill];
              return (
                <div key={skill} className="skillTile">
                  <div className="skillContent">
                    {Icon && <Icon className="skillIcon" aria-hidden />}
                    <span className="skillName">{skill}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
