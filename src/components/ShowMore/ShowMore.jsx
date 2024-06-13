import React from "react";
import "./ShowMore.css";
import { Link } from "react-router-dom";

const ShowMore = () => {
  return (
    <div className="dropdown block">
      <a className="active hover:text-[#2d6c87] hover:pb-24">More</a>
      <div className="dropdown-content">
        <Link
          className="block p-3 text-xl hover:scale-105 duration-300"
          to="/DxWeb/About"
        >
          About
        </Link>
        <a
          className="block p-3 text-xl hover:scale-105 duration-300"
          href="https://t.me/DroidXUI_walls"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wallpaper
        </a>
        <a
          className="block p-3 text-xl hover:scale-105 duration-300"
          href="https://github.com/DroidX-UI/Release_changelogs/blob/14/DroidX-Changelogs.mk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Changelog
        </a>
        <Link
          className="block p-3 text-xl hover:scale-105 duration-300"
          to="/DxWeb/Help"
        >
          Help
        </Link>
      </div>
    </div>
  );
};

export default ShowMore;
