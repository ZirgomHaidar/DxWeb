import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/dxlogo_2.svg";
import { Link } from "react-router-dom";
import ShowMore from "../ShowMore/ShowMore";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <motion.div
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Link to="/DxWeb/">
        <img src={logo} alt="DX-UI" onClick={() => setMenu("home")} />
      </Link>

      <div className="nav-right">
        <ul className="nav-menu">
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            <Link to="/DxWeb/">Home</Link>
          </li>
          <li
            onClick={() => setMenu("blog")}
            className={menu === "blog" ? "active" : ""}
          >
            <Link to="/DxWeb/Blog">Blog</Link>
          </li>
          <li
            onClick={() => setMenu("team")}
            className={menu === "team" ? "active" : ""}
          >
            <Link to="/DxWeb/Team">Team</Link>
          </li>
          <li className={menu === "more" ? "active" : ""}>
            <ShowMore />
          </li>
        </ul>
        <hr />
        <Link to="/DxWeb/Download">
          <div
            onClick={() => setMenu("Download")}
            className={menu === "Download" ? "active nav-tryDx" : "nav-tryDx"}
          >
            <h4>Try Droidx-UI</h4>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
