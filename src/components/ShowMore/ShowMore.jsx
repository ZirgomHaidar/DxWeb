import React from "react";
import "./ShowMore.css";
import { Link } from "react-router-dom";

const ShowMore = () => {
  return (
    <div className="dropdown">
      <a className="active dd">More</a>
      <div className="dropdown-content">
        <Link to="/DxWeb/About">About</Link>
        <a
          href="https://t.me/DroidXUI_walls"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wallpaper
        </a>
        <a
          href="https://github.com/DroidX-UI/Release_changelogs/blob/14/DroidX-Changelogs.mk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Changelog
        </a>
        <Link to="/DxWeb/Help">Help</Link>
      </div>
    </div>
  );
};

export default ShowMore;
