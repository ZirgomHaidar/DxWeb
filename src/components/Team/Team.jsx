import React from "react";
import { leads } from "../../assets/leads";
import reach_tg from "../../assets/reachtg.svg";
import reach_gh from "../../assets/reach_gh.svg";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <motion.div
      className="teams-container m-12 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="first-header text-3xl p-8">
        These are the people who play an important role in maintaining
        <span className="text-[#3282b8]"> DROID-X UI </span>source from day to
        day work to monthly updates
      </p>
      <div className="mains flex flex-col items-center justify-center">
        <p
          className="heading mt-12 text-5xl mb-14"
          style={{ "font-family": "Product Sans Bold" }}
        >
          Back Bone of the <span className="text-[#3282b8]"> DROID-X UI </span>
        </p>
        <div className="gridplease gap-x-64 gap-y-24">
          {leads.map((lead, index) => {
            return (
              <div
                key={index}
                className="card flex flex-col justify-center items-center duration-300 hover:scale-105;"
              >
                <img
                  className="w-[200px] rounded-full object-cover"
                  src={lead.pfp}
                  alt="where bro pic ?"
                />
                <p className="role m-4 p-3 mb-2 text-[1rem] bg-gradient-to-r from-[#16415e] to-[#17557f] rounded-2xl">
                  {lead.role}
                </p>
                <p className="name text-3xl m-3">{lead.name}</p>
                <div className="reachout">
                  <a
                    className="nav-tryDx text-xl"
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
                    <img
                      className="w-[50px] hover:scale-105 duration-100"
                      src={reach_tg}
                      alt="TG"
                    />
                  </a>
                  <a
                    className="tg"
                    href={lead.tg_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-[50px] hover:scale-105 duration-100"
                      src={reach_gh}
                      alt="TG"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
