import { FaBars } from "react-icons/fa";

import { FaTimes } from "react-icons/fa";

function SideBar() {
  return (
    <div>
      <button>
        <FaTimes />
      </button>
      <button>
        <FaBars />
      </button>
    </div>
  );
}

export default SideBar;
