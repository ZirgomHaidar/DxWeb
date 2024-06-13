import React from "react";
import leadpic from "../../assets/ashwini.jpg";
import { motion } from "framer-motion";

// TODO: Add Ability to Post it Like actual Blog :)

const Blog = () => {
  return (
    <motion.div
      className="blog-container flex flex-col mt-12 items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p
        className="heading-blog text-5xl"
        style={{ "font-family": "Product Sans Bold" }}
      >
        DroidX-UI blog
      </p>
      <div className="db-card w-1/2 gap-3 pb-12 mb-10">
        <p>March 26, 2024 1 min read</p>
        <div className="made-by flex items-center gap-5 text-[#97cac7]">
          <img className="w-[60px] rounded-full" src={leadpic} alt="" />
          <div className="maker">
            <p className="maker text-2xl">Ashwini</p>
            <p className="b-role text-xm">Founder</p>
          </div>
        </div>
        <p className="patch-month text-4xl">April 2024 security Patch.</p>
        <p
          className="patch-desc text-xl"
          style={{ "font-family": "Product Sans Light Regular" }}
        >
          Their are many changes that will be applied int the April Security
          Patch. For example: new QS styles, new fonts and AOD customizations.
          The work on the source is ongoing. We'll give an update when the
          source is complete. We are also very eager to push this update when
          April patch comes. Till then stay tuned.
        </p>
      </div>
    </motion.div>
  );
};

export default Blog;
