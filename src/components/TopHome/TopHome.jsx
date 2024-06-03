import React from "react";
import "./TopHome.css";
import logo_gh from "../../assets/reach_gh.svg";
import logo_tg from "../../assets/ic_telegram.svg";
import logo_X from "../../assets/ic_X.svg";
import img1 from "../../assets/glimpse1.png";
import img2 from "../../assets/glimpse2.png";
import img3 from "../../assets/glimpse3.png";
import { Link } from "react-router-dom";

const TopHome = () => {
  return (
    <div className="header">
      <div className="dx-reach-out">
        <a
          href="https://github.com/DroidX-UI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo_gh} alt="Github" />
        </a>
        <a
          href="https://t.me/DroidXUI_chats"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo_tg} alt="TG" />
        </a>
        <a
          href="https://twitter.com/DroidX_UI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo_X} alt="X" />
        </a>
      </div>
      <div className="dx-middle-desc">
        <p>
          Spice up your Android <br />
          experience with
          <br />
          <span>DroidX-UI</span>
        </p>
        <div className="nav-tryDx">
          <Link to="/DxWeb/Download">Try Droidx-UI</Link>
        </div>
        <div className="dx-support-nums">
          <p>
            <span>30+</span> <br />
            Supported <br />
            Devices
          </p>
          <p>
            <span>500+</span> <br />
            Happy DXUI <br />
            Users
          </p>
          <p>
            <span>20+</span> <br />
            Active <br />
            Developers
          </p>
        </div>
      </div>
      <div className="dx-glimpse">
        <img className="img1" src={img2} alt="" />
        <img className="img2" src={img1} alt="" />
        <img className="img3" src={img3} alt="" />
      </div>
    </div>
  );
};

export default TopHome;
