import React from "react";
import "./MiddleHome.css";
import { features } from "../../assets/features";
import { Link } from "react-router-dom";

const MiddleHome = () => {
  const item1 = features[0];
  const item2 = features[1];
  const item3 = features[2];
  const item4 = features[3];
  const item5 = features[4];

  return (
    <div className="feature-container flex items-center justify-center m-60 mb-40">
      <div className="feature-list">
        <div className="feature-top grid grid-flow-col">
          <div className="feature-layout">
            <h1>{item1.name}</h1>
            <p>{item1.desc}</p>
          </div>
          <div className="feature-layout">
            <h1>{item2.name}</h1>
            <p>{item2.desc}</p>
          </div>
        </div>

        <div className="feature-bottom grid grid-flow-col">
          <div className="feature-left grid col-span-2">
            <div className="feature-layout">
              <h1>{item3.name}</h1>
              <p>{item3.desc}</p>
            </div>
            <div className="feature-layout">
              <h1>{item4.name}</h1>
              <p>{item4.desc}</p>
            </div>
          </div>

          <div className="feature-right grid col-span-1">
            <div className="feature-layout">
              <h1>{item5.name}</h1>
              <p>{item5.desc}</p>
            </div>
            <div className="nav-tryDx text-5xl m-2 mb-3 rounded-full border-[6px] border-[#72a7c4] items-center hover:scale-100">
              <Link to="/DxWeb/Download">Try Droidx-UI</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleHome;
