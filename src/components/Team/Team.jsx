import React from "react";
import "./Team.css";
import { leads } from "../../assets/leads";
import reach_tg from "../../assets/reachtg.svg";

const Team = () => {
  return (
    <div className="teams">
      <p className="first-header">
        These are the people who play an important role in maintaining
        <span> DROID-X UI </span>source from day to day work to monthly updates
      </p>
      <div className="mains">
        <p className="heading">Back bone of the project</p>
        <div className="gridplease">
          {leads.map((lead, index) => {
            return (
              <div key={index} className="card">
                <img src={lead.pfp} alt="where bro pic ?" />
                <p className="role">{lead.role}</p>
                <p className="name">{lead.name}</p>
                <div className="reachout">
                  <a
                    className="nav-tryDx"
                    href={lead.donate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate
                  </a>
                  <a
                    className="tg"
                    href={lead.tg_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={reach_tg} alt="TG" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
