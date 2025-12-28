import "../styles/theme.css";
import "../styles/components.css";
import { usePortfolioVM } from "../viewmodels/usePortfolioVM";
import PortfolioPage from "../views/PortfolioPage";

export default function App() {
  const vm = usePortfolioVM();
  return <PortfolioPage vm={vm} />;
}
