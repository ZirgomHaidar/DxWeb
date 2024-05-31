import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/dxlogo_2.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      {/* <Link to="/">
        <img src={logo} alt="DX-UI" />
      </Link> */}
      <img src={logo} alt="" />

      <div className="nav-right">
        <ul className="nav-menu">
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            {/* <Link to="/">Home</Link> */}Home
          </li>
          <li
            onClick={() => setMenu("blog")}
            className={menu === "blog" ? "active" : ""}
          >
            {/* <Link to="/Blog">Blog</Link> */}Blog
          </li>
          <li
            onClick={() => setMenu("team")}
            className={menu === "team" ? "active" : ""}
          >
            {/* <Link to="/Team">Team</Link> */}Team
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
