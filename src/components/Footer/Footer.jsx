import React from "react";
import "./Footer.css";
import heart from "../../assets/heart.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="middle">
          <div className="documentation-info">
            <h2>Documentation</h2>
            <h4>Maintainership form</h4>
            <h4>GitHub</h4>
            <h4>XDA</h4>
            <h4>Device requirements</h4>
          </div>
          <div className="help-info">
            <h2>Help & Support</h2>
            <h4>Website</h4>
            <h4>Telegram</h4>
            <h4>Twitter</h4>
            <h4>News</h4>
          </div>
          <div className="legal-info">
            <h2>Legal Info</h2>
            <h4>Privacy Policies</h4>
            <h4>Disclaimer</h4>
          </div>
        </div>
        <div className="bottom">
          <p>
            Made with <img src={heart} alt="heart where bro ?" />
            by Zirgom Haidar & Kshitij Bhale
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
