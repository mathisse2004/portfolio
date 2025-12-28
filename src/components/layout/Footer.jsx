export default function Footer({ name }) {
  return (
    <footer className="footer muted">
      © {new Date().getFullYear()} {name} • Built with React
    </footer>
  );
}
