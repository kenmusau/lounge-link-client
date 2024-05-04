import "./sidebar.css";

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
function NavToogleBtn({ open, setOpen }) {
  return (
    <div>
      {open ? (
        <button className=" btn btn-close" onClick={() => setOpen(false)}>
          <FaTimes />
        </button>
      ) : (
        <button className="btn btn-open" onClick={() => setOpen(true)}>
          <FaBars />
        </button>
      )}
    </div>
  );
}

export default NavToogleBtn;
