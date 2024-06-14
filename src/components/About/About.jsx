import React from "react";
import "./About.css";
import team_work from "../../assets/peeps_working.png";
import Arrow from "../../assets/Arrow.svg";
import { leads } from "../../assets/leads";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about-container flex flex-col my-10 mx-4 md:my-16 md:mx-36 gap-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="about-top flex flex-col md:flex-row gap-5">
        <div className="top-left bg-[#19415c] rounded-[27px] py-10 px-6">
          <p className="text-[#f2eba7] text-xl md:text-2xl pb-10 md:pb-24">
            How it started
          </p>
          <h1
            className="md:pb-20 text-[2.7rem] md:text-7xl leading-[2.8rem]"
            style={{ fontFamily: "Product Sans Bold" }}
          >
            Our dream is to <br />
            make the most <br />
            stable Custom Rom
          </h1>
          <h4 className="text-xl md:text-3xl pt-12 md:leading-10">
            DroidX-UI is founded by <span>Ashwani</span>, a passionate lifelong
            learner. With relentless dedication, they gathered a team of best
            maintainers and launched this innovative project, creating a global
            community of users, all connected by the desire to explore, learn
            and grow. DroidX-UI was founded by <span>Ashwani</span>, a
            passionate lifelong learner. With relentless dedication, they
            gathered a team of best maintainers and launched this innovative
            project, creating a global community of users, all connected by the
            desire to explore, learn and grow.{" "}
          </h4>
        </div>
        <div className="top-right flex md:flex-col gap-5">
          <div className="top-section md:w-[775px] hidden md:block">
            <img src={team_work} alt="" />
          </div>
          <div className="bottom-section grid grid-cols-2 gap-7 p-5 md:p-10 bg-[#19415c] rounded-[27px]">
            <div className="inner-container">
              <h1>1+</h1>
              <h3>Years Experience</h3>
            </div>
            <div className="inner-container">
              <h1>500+</h1>
              <h3>Happy Users</h3>
            </div>
            <div className="inner-container">
              <h1>30+</h1>
              <h3>Supported devices</h3>
            </div>
            <div className="inner-container">
              <h1>100+</h1>
              <h3>Positive reviews</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="about-middle bg-[#19415c] rounded-[27px] p-9 pb-20">
        <div>
          <p className="text-[#f2eba7] text-xl md:text-2xl">Meet the team</p>
        </div>
        <div className="view-all flex justify-between items-center py-10">
          <h1
            className="text-[2.7rem] leading-[2.8rem] md:text-5xl"
            style={{ fontFamily: "Product Sans Bold" }}
          >
            Meet Our Dedicated Team of <br className="hidden md:block" />
            Leaders and Maintainers
          </h1>
          <p className="hidden md:flex items-center text-[#f2eba7] text-2xl gap-5">
            view all members
            <Link to="/DxWeb/Team">
              <img src={Arrow} alt="" />
            </Link>
          </p>
        </div>
        <div className="image-area flex gap-10 overflow-x-scroll">
          {leads.map((lead, index) => {
            return (
              <div
                key={index}
                className="about-img flex flex-col items-center relative"
              >
                <img
                  className="min-w-48 h-[300px] rounded-[27px] object-cover"
                  src={lead.pfp}
                  alt="where bro pic ?"
                />
                <div className="lead-desc bg-[#19415c70] backdrop-blur rounded-lg p-2 w-40 absolute bottom-5">
                  <p className="text-slate-100 text-xl">{lead.name}</p>
                  <p className="text-slate-100 text-xs">{lead.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="about-bottom flex flex-col md:flex-row gap-5">
        <div className="mission p-10 pl-7 md:w-1/2 bg-[#19415c] rounded-[27px]">
          <p>Our vision</p>
          <h1>Give the Pixel feel to non Pixel devices</h1>
          <h4>
            Our vision is to become the premier online destination for custom
            ROM development, fostering a thriving community where users discover
            freedom and developers push the boundaries of the Pixel experience.
          </h4>
        </div>
        <div className="mission p-10 pl-7 md:w-1/2 bg-[#19415c] rounded-[27px]">
          <p>Our mission</p>
          <h1>Providing stable and monthly updates</h1>
          <h4>
            Unleashing Android's potential together: We envision a collaborative
            platform for custom ROM creation, empowering users and igniting
            developer innovation.
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
