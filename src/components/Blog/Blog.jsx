import React from "react";
import "./Blog.css";
import leadpic from "../../assets/ashwini.jpg";

const Blog = () => {
  return (
    <div className="blog-container">
      <p className="heading-blog">DroidX-UI blog</p>
      <div className="db-card">
        <p>March 26, 2024 1 min read</p>
        <div className="made-by">
          <img src={leadpic} alt="" />
          <div className="maker">
            <p>Ashwini</p>
            <p className="b-role">Founder</p>
          </div>
        </div>
        <p className="patch-month">April 2024 security Patch.</p>
        <p className="patch-desc">
          Their are many changes that will be applied int the April Security
          Patch. For example: new QS styles, new fonts and AOD customizations.
          The work on the source is ongoing. We'll give an update when the
          source is complete. We are also very eager to push this update when
          April patch comes. Till then stay tuned.
        </p>
      </div>
    </div>
  );
};

export default Blog;
