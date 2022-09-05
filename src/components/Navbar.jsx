import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <nav className={isActive ? "active" : ""} id="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/breeds">Breeds</Link>
        </li>
        <li>
          <Link to="/facts">Facts</Link>
        </li>
        <li>
          <Link to="/random">Random</Link>
        </li>
      </ul>
      <button className="icon" id="toggle" onClick={handleToggle}>
        <div className="line line1"></div>
        <div className="line line2"></div>
      </button>
    </nav>
  );
};

export default Navbar;
