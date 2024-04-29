import "../pages/Home.css";
import Links from "./Space/Links";

function Header() {
  return (
    <header className="home-section-header">
      <a href="#" className="home-logo">
        Lou<span>nge</span>
      </a>
      <nav className="home-nav">
        <Links />
      </nav>
    </header>
  );
}

export default Header;
