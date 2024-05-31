import React from "react";
import "./Header.css";
import logo_discord from "../../assets/ic_discord.svg";
import logo_tg from "../../assets/ic_telegram.svg";
import logo_X from "../../assets/ic_X.svg";
import img1 from "../../assets/glimpse1.png";
import img2 from "../../assets/glimpse2.png";
import img3 from "../../assets/glimpse3.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="dx-reach-out">
        <img src={logo_discord} alt="Discord" />
        <img src={logo_tg} alt="TG" />
        <img src={logo_X} alt="X" />
      </div>
      <div className="dx-middle-desc">
        <p>
          Spice up your Android <br />
          experience with
          <br />
          <span>DroidX-UI</span>
        </p>
        <div className="nav-tryDx">
          Try Droidx-UI
          {/* <Link to="/Download">Try Droidx-UI</Link> */}
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

export default Header;
