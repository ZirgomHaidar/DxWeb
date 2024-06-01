import React from "react";
import "./ShowMore.css";
import { Link } from "react-router-dom";

const ShowMore = () => {
  return (
    <div className="dropdown">
      <a className="active dd">More</a>
      <div className="dropdown-content">
        <Link to="/DxWeb/About">About</Link>
        <a href="#home">Wallpaper</a>
        <a href="#home">Changelog</a>
        <a href="#home">Help</a>
      </div>
    </div>
  );
};

export default ShowMore;
