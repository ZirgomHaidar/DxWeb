import React from "react";
import heart from "../../assets/heart.svg";
import logo from "../../assets/dxlogo_2.svg";
import tg from "../../assets/footer_tg.svg";
import gh from "../../assets/footer_gh.svg";
import mf from "../../assets/footer_mf.svg";
import x from "../../assets/footer_x.svg";
import xda from "../../assets/footer_xda.svg";
import donate from "../../assets/footer_donate.svg";

const Footer = () => {
  return (
    <div className="footer-container relative bottom-0 flex flex-col justify-between h-[250px] md:h-[220px] bg-zinc-950 pt-6 pb-5 px-8 rounded-t-[20px]">
      <div className="dx flex flex-row items-center gap-3">
        <img className="w-20" src={logo} alt="" />
        <h1
          className="text-[#3282B8] text-4xl"
          style={{ fontFamily: "Product Sans Bold" }}
        >
          DroidX-UI
        </h1>
      </div>
      <div className="legal-info flex flex-row text-xl gap-7">
        <h4>Privacy Policy</h4>
        <h4>Disclaimer</h4>
      </div>
      <div className="links flex gap-4 h-[50px]">
        <a
          href="https://t.me/DroidXUI_chats"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tg} alt="tg" />
        </a>
        <a
          href="https://github.com/DroidX-UI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gh} alt="tg" />
        </a>
        <a
          href="https://twitter.com/DroidX_UI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={x} alt="X" />
        </a>
        <a
          href="https://github.com/DroidX-UI-Devices/vendor_droidxOTA/blob/14/README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mf} alt="tg" />
        </a>
        <a
          href="https://twitter.com/DroidX_UI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={donate} alt="X" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
