import React, { useRef, useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/dxlogo_2.svg";
import navopen from "../../assets/navopen.svg";
import navclose from "../../assets/navclose.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [showMore, setShowMore] = useState(false);
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.top = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.top = "-2500px";
  };

  const divRef = useRef(null);
  const handleClickOutside = (event) => {
    try {
      if (!divRef.current.contains(event.target)) {
        setShowMore(false);
      }
    } catch (error) {
      /*nothing*/
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [divRef]);

  return (
    <motion.div
      className="navbar-container flex justify-between m-6 md:mx-12 md:my-3 items-center text-nowrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Link to="/DxWeb/">
        <div className="h-[70px] w-[70px] md:h-[120px] md:w-[120px] flex items-center">
          <img src={logo} alt="DX-UI" onClick={() => setMenu("home")} />
        </div>
      </Link>

      <img
        className="navopen block md:hidden"
        src={navopen}
        alt="navopen"
        onClick={openMenu}
      />
      <div
        ref={menuRef}
        className="nav-right fixed right-0 left-0 h-full top-[-1000px] md:top-0 ease-in-out duration-300 bg-[#000000] md:bg-transparent md:relative md:right-2 md:flex gap-8 items-center z-20"
      >
        <img
          className="navclose fixed right-12 mt-12 md:hidden"
          src={navclose}
          alt="navmob"
          onClick={closeMenu}
        />
        <ul className="nav-menu flex flex-col h-fit md:flex-row items-center justify-center gap-10 mt-72 md:m-0 md:gap-20 text-xl md:pt-0 ease-in-out duration-300">
          <li
            onClick={() => {
              setMenu("home");
              if (document.documentElement.clientWidth <= 768) closeMenu();
            }}
            className={menu === "home" ? "active" : ""}
          >
            <Link to="/DxWeb/">Home</Link>
          </li>
          <li
            onClick={() => {
              setMenu("blog");
              if (document.documentElement.clientWidth <= 768) closeMenu();
            }}
            className={menu === "blog" ? "active" : ""}
          >
            <Link to="/DxWeb/Blog">Blog</Link>
          </li>
          <li
            onClick={() => {
              setMenu("team");
              if (document.documentElement.clientWidth <= 768) closeMenu();
            }}
            className={menu === "team" ? "active" : ""}
          >
            <Link to="/DxWeb/Team">Team</Link>
          </li>
          <li
            onClick={() => {
              setMenu("more");
              setShowMore(true);
            }}
            className={menu === "more" ? "text-[#3cb1ff] bg-clip-text" : ""}
          >
            <div className="cursor-pointer" ref={divRef}>
              <p className="hover:text-[#3cb1ff]">More</p>{" "}
              {showMore ? (
                <div className="dropdown absolute right-0 bottom-0 md:right-0 md:top-0 text-white">
                  <div className="dropdown-content">
                    <Link
                      className={
                        window.location.pathname === "/DxWeb/About"
                          ? "p-3 text-xl hover:scale-105 duration-300 text-[#3cb1ff]"
                          : "p-3 text-xl"
                      }
                      to="/DxWeb/About"
                      onClick={() => {
                        if (document.documentElement.clientWidth <= 768)
                          closeMenu();
                      }}
                    >
                      About
                    </Link>
                    <a
                      className="p-3 text-xl hover:scale-105 duration-300"
                      href="https://t.me/DroidXUI_walls"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wallpaper
                    </a>
                    <a
                      className="p-3 text-xl hover:scale-105 duration-300"
                      href="https://github.com/DroidX-UI/Release_changelogs/blob/14/DroidX-Changelogs.mk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Changelog
                    </a>
                    <Link
                      className={
                        window.location.pathname === "/DxWeb/Help"
                          ? "p-3 text-xl hover:scale-105 duration-300 text-[#3cb1ff]"
                          : "p-3 text-xl"
                      }
                      to="/DxWeb/Help"
                      onClick={() => {
                        if (document.documentElement.clientWidth <= 768)
                          closeMenu();
                        setShowMore(false);
                      }}
                    >
                      Help
                    </Link>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </li>
          <hr className="hidden md:block border-[0.5px] border-gray-500 h-10" />
          <li>
            <Link to="/DxWeb/Download">
              <div
                onClick={() => {
                  setMenu("Download");
                  if (document.documentElement.clientWidth <= 768) closeMenu();
                }}
                className={
                  menu === "Download" ? "nav-tryDx active" : "nav-tryDx"
                }
              >
                <h4>Try Droidx-UI</h4>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
