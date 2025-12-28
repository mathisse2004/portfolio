export default function Navbar({ items, activeId, onNavigate }) {
  return (
    <header className="nav">
      <button
        className="brand"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Portfolio
      </button>

      <nav className="navLinks">
        {items.map((it) => (
          <button
            key={it.id}
            className={`navLink ${activeId === it.id ? "isActive" : ""}`}
            onClick={() => onNavigate(it.id)}
          >
            {it.label}
            <span className="navDot" aria-hidden />
          </button>
        ))}
      </nav>
    </header>
  );
}
