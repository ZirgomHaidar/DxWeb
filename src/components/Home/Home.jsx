import React from "react";
import TopHome from "../TopHome/TopHome";
import MiddleHome from "../MiddleHome/MiddleHome";
import BottomHome from "../BottomHome/BottomHome";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <TopHome />
      <MiddleHome />
      <BottomHome />
    </motion.div>
  );
};

export default Home;
