import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/dxlogo_2.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <Link to="/portfolio/">
        <img src={logo} alt="DX-UI" />
      </Link>

      <div className="nav-right">
        <ul className="nav-menu">
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            <Link to="/portfolio/">Home</Link>
          </li>
          <li
            onClick={() => setMenu("blog")}
            className={menu === "blog" ? "active" : ""}
          >
            <Link to="/portfolio/Blog">Blog</Link>
          </li>
          <li
            onClick={() => setMenu("team")}
            className={menu === "team" ? "active" : ""}
          >
            <Link to="/portfolio/Team">Team</Link>
          </li>
          <li
            onClick={() => setMenu("contact")}
            className={menu === "contact" ? "active" : ""}
          >
            {/* <Link to="/Contact">Contact</Link> */}Contact
          </li>
          <li
            onClick={() => setMenu("more")}
            className={menu === "more" ? "active" : ""}
          >
            {/* <Link to="/More">More</Link> */}More
          </li>
        </ul>
        <hr />
        <div
          onClick={() => setMenu("Download")}
          className={menu === "Download" ? "active nav-tryDx" : "nav-tryDx"}
        >
          {/* <Link to="/Download">Try Droidx-UI</Link> */}Try Droidx-UI
        </div>
      </div>
    </div>
  );
};

export default Navbar;
