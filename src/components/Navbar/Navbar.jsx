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
      className="navbar-container flex flex-row justify-between m-10 items-center text-nowrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Link to="/DxWeb/">
        <img
          className="w-auto"
          src={logo}
          alt="DX-UI"
          onClick={() => setMenu("home")}
        />
      </Link>

      <div className="nav-right flex gap-8 items-center">
        <ul className="nav-menu flex items-center gap-20 text-xl ease-in-out duration-300">
          <li
            c
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
        <hr className="border-[0.5px] border-gray-500 h-10" />
        <Link to="/DxWeb/Download">
          <div
            onClick={() => setMenu("Download")}
            className={menu === "Download" ? "nav-tryDx active" : "nav-tryDx"}
          >
            <h4>Try Droidx-UI</h4>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
