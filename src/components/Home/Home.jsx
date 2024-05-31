import React from "react";
import "./Home.css";
import TopHome from "../TopHome/TopHome";
import MiddleHome from "../MiddleHome/MiddleHome";
import BottomHome from "../BottomHome/BottomHome";

const Home = () => {
  return (
    <div>
      <TopHome />
      <MiddleHome />
      <BottomHome />
    </div>
  );
};

export default Home;
