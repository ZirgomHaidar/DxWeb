import React from "react";
import "./MiddleHome.css";
import { features } from "../../assets/features";

const MiddleHome = () => {
  const item1 = features[0];
  const item2 = features[1];
  const item3 = features[2];
  const item4 = features[3];
  const item5 = features[4];

  return (
    <div className="container">
      <div className="feature-list">
        <div className="feature-top">
          <div className="feature-layout">
            <h1>{item1.name}</h1>
            <p>{item1.desc}</p>
          </div>
          <div className="feature-layout">
            <h1>{item2.name}</h1>
            <p>{item2.desc}</p>
          </div>
        </div>

        <div className="feature-bottom">
          <div className="feature-left">
            <div className="feature-layout">
              <h1>{item3.name}</h1>
              <p>{item3.desc}</p>
            </div>
            <div className="feature-layout">
              <h1>{item4.name}</h1>
              <p>{item4.desc}</p>
            </div>
          </div>

          <div className="feature-right">
            <div className="feature-layout">
              <h1>{item5.name}</h1>
              <p>{item5.desc}</p>
            </div>
            <div className="nav-tryDx">Droidx-UI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleHome;
