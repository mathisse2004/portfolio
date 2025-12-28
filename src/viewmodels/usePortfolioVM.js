import { useEffect, useMemo, useState } from "react";
import { profile } from "../models/profileModel";

const SECTION_IDS = ["home", "skills", "projects", "about", "contact"];

export function usePortfolioVM() {
  const [activeId, setActiveId] = useState("home");
  const [reducedMotion, setReducedMotion] = useState(false);

  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projecten" },
      { id: "about", label: "Over mij" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(!!mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    const container = document.querySelector(".container");
    if (!container) return;

    const els = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: container,                
        threshold: [0.35, 0.5, 0.65], 
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollTo = (id) => {
    const container = document.querySelector(".container");
    const el = document.getElementById(id);
    if (!container || !el) return;

    container.scrollTo({
      top: el.offsetTop,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  const highlights = useMemo(() => ([
    { title: "Clean code mindset", text: "Ik werk graag gestructureerd met aandacht voor leesbaarheid, onderhoudbaarheid en schaalbaarheid." },
    { title: "Leergierig", text: "Ik leer snel bij, experimenteer graag en probeer nieuwe technologieën praktisch toe te passen." },
    { title: "Product-focus", text: "Ik hou ervan om features te bouwen die echt nuttig zijn voor gebruikers (UX, performance en kwaliteit)." },
  ]), []);

  return { profile, navItems, activeId, scrollTo, reducedMotion, highlights };
}
