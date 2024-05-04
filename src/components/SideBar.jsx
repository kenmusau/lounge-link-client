import { useState } from "react";
import "./sidebar.css";
import NavToogleBtn from "./NavToogleBtn";

function SideBar() {
  const [open, setOpen] = useState(false);
  const links = [
    "Home",
    "About Us",
    "Services",
    "Contact",
    "Log In",
    "Sign Up",
  ];

  const closeSidebar = () => {
    setOpen(false);
  };
  return (
    <div className="sidebar-section ">
      <NavToogleBtn open={open} setOpen={setOpen} />
      <div
        className={`sidebar-menu ${open ? "sidebar-open" : "sidebar-close"}`}
      >
        {links.map((link) => (
          <a href="#" className="links" key={link} onClick={closeSidebar}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
