import "../pages/Home.css";
import Links from "./Links";
import SideBar from "./SideBar";

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
