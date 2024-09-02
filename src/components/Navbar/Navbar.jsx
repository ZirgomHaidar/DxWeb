import React, { useRef, useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/dxlogo_2.svg";
import navopen from "../../assets/navopen.svg";
import navclose from "../../assets/navclose.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
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
      <NavLink to="/">
        <div className="h-[70px] w-[70px] md:h-[120px] md:w-[120px] flex items-center">
          <img src={logo} alt="DX-UI"/>
        </div>
      </NavLink>

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
              if (document.documentElement.clientWidth <= 768) closeMenu();
            }}
          >
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }>Home</NavLink>
          </li>
          <li
            onClick={() => {
              if (document.documentElement.clientWidth <= 768) closeMenu();
            }}
          >
            <NavLink to="/Blog" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }>Blog</NavLink>
          </li>
          <li
            onClick={() => {
              if (document.documentElement.clientWidth <= 768) closeMenu();
            }}
          >
            <NavLink to="/Team" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }>Team</NavLink>
          </li>
          <li
            onClick={() => {
              setShowMore(true);
            }}
          >
            <div className="cursor-pointer" ref={divRef}>
              <div className={ window.location.pathname == "/About" || window.location.pathname == "/Help" ? "active" : "hover:text-[#3cb1ff]"}>More</div>
              {showMore ? (
                <div className="dropdown absolute right-0 bottom-0 md:right-0 md:top-0 text-white">
                  <div className="dropdown-content">
                    <NavLink
                      className={
                        window.location.pathname === "/About"
                          ? "p-3 text-xl hover:scale-105 duration-300 text-[#3cb1ff]"
                          : "p-3 text-xl"
                      }
                      to="/About"
                      onClick={() => {
                        if (document.documentElement.clientWidth <= 768)
                          closeMenu();
                      }}
                    >
                      About
                    </NavLink>
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
                    <NavLink
                      className={
                        window.location.pathname === "/Help"
                          ? "p-3 text-xl hover:scale-105 duration-300 text-[#3cb1ff]"
                          : "p-3 text-xl"
                      }
                      to="/Help"
                      onClick={() => {
                        if (document.documentElement.clientWidth <= 768)
                          closeMenu();
                        setShowMore(false);
                      }}
                    >
                      Help
                    </NavLink>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </li>
          <hr className="hidden md:block border-[0.5px] border-gray-500 h-10" />
          <li>
            <NavLink to="/Download" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "nav-tryDx active" : "nav-tryDx"
              }>
              <div
                onClick={() => {
                  if (document.documentElement.clientWidth <= 768) closeMenu();
                }}
              >
                <h4>Try Droidx-UI</h4>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
