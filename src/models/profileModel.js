export const profile = {
  name: "Mathisse Snauwaert",
  title: "Developer",
  location: "België",
  email: "mathissesnauwaert2@gmail.com",
  links: {
    github: "https://github.com/mathisse2004",
    linkedin: "https://www.linkedin.com/in/mathissesnauwaert/",
    cv: "/cv.pdf",
  },
  homeIntro:
    "Ik bouw gebruiksvriendelijke applicaties met oog voor detail, structuur en onderhoudbare code. Gedreven door nieuwsgierigheid en de drang om elke dag beter te worden.",
  about: [
    "Leergierige en gemotiveerde software developer met een sterke interesse in IT en softwareontwikkeling. Ik haal voldoening uit probleemoplossing en het continu bijleren van nieuwe technologieën.",
    "Ervaring met het bouwen van gestructureerde en gebruiksvriendelijke applicaties met aandacht voor codekwaliteit en onderhoudbaarheid.",
    "Ik werkte met Java, JavaScript, React, Blazor (C#), Kotlin en SwiftUI en ben op zoek naar een job waarin ik kan groeien en bijdragen aan innovatieve softwareoplossingen binnen een professioneel team."
  ],
  skills: [
    "Java",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Blazor (C#)",
    "Kotlin",
    "SwiftUI",
    "GitHub",
    "REST APIs",
    "Basis SQL",
    "Azure"
  ],
  projects: [
    {
        name: "PowerPeek",
        description: "iOS-app die het energieverbruik in realtime visualiseert via een Raspberry Pi. De app toont actuele verbruiksdata, waarschuwt bij piekverbruik en geeft praktische tips om energie te besparen. Gebruikers kunnen hun historisch verbruik tot één week terug raadplegen een functionaliteit die niet beschikbaar is in standaard apps van energieleveranciers.",
        tech: ["SwiftUI", "iOS", "Raspberry Pi", "Realtime data", "Energie monitoring"],
        repo: "https://github.com/mathisse2004/PowerPeek"
    },
    {
        name: "Lyrify",
        description:
            "iOS-muziekapp ontwikkeld in SwiftUI die muziek kan afspelen via externe bronnen. De applicatie ondersteunt achtergrondweergave (ook bij vergrendeld scherm), songteksten en automatische vertaling van lyrics naar meerdere talen. Voor het ophalen van muziek- en lyricdata werd gewerkt met verschillende externe API’s en open-source libraries.",
        tech: ["SwiftUI", "iOS", "REST APIs", "Background audio", "Lyrics & translation"],
        repo: "https://github.com/mathisse2004/Lyrify"
    },
    {
        name: "ComfyCandy",
        description: "Volledige webshop gebouwd met React waarin gebruikers verschillende soorten snoep kunnen bekijken en kopen. Klanten kunnen producten toevoegen aan hun winkelwagen, veilig afrekenen, hun profiel beheren en contact opnemen indien nodig. De applicatie bevat ook een admin-gedeelte waarmee producten kunnen worden toegevoegd en beheerd.",
        tech: ["JavaScript", "React", "Stripe", "User authentication", "Admin dashboard"],
        repo: "https://github.com/mathisse2004/candyshop-webshop"
    }
  ],
};
