import { Button } from "../ui/Button";
import Highlights from "./Highlights";

export default function Hero({ profile, highlights }) {
  return (
    <section className="snapSection heroSection" id="home">
      <div className="snapInner heroInner">
        <p className="kicker">{profile.location}</p>

        <h1 className="heroTitle">
          {profile.name} <span className="muted">— {profile.title}</span>
        </h1>

        <p className="lead">{profile.homeIntro}</p>

        <div className="ctaRow">
          <Button href={profile.links.cv} download="Mathisse-Snauwaert-CV.pdf">
            Download CV
          </Button>
        </div>

        <div className="heroMeta muted">
          <span className="badge">Open voor kansen</span>
          <span className="dotSep" aria-hidden>
            •
          </span>
          <span>Full-stack / Mobile</span>
          <span className="dotSep" aria-hidden>
            •
          </span>
          <span>Clean code + UX</span>
        </div>

        <Highlights items={highlights} />
      </div>
    </section>
  );
}
