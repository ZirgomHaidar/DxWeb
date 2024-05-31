import React from "react";
import "./ShowMore.css";

const ShowMore = () => {
  return (
    <div className="dropdown">
      <a className="active dd">More</a>
      <div className="dropdown-content">
        <a href="#home">About</a>
        <a href="#home">Wallpaper</a>
        <a href="#home">Changelog</a>
        <a href="#home">Help</a>
      </div>
    </div>
  );
};

export default ShowMore;
