import "../pages/Home.css";
import Links from "./Space/Links";
import SideBar from "./Space/SideBar";

function Header() {
  return (
    <header className="home-section-header">
      <a href="#" className="home-logo">
        Lou<span>nge</span>
      </a>
      <nav className="home-nav">
        <Links />
      </nav>
      <div className="sidebar">
        <SideBar />
      </div>
    </header>
  );
}

export default Header;
