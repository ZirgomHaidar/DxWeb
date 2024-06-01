import React from "react";
import "./About.css";
import team_work from "../../assets/peeps_working.png";
import Arrow from "../../assets/Arrow.svg";
import { leads } from "../../assets/leads";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-top">
        <div className="top-left">
          <p>How it started</p>
          <h1>
            Our dream is to <br />
            make the most <br />
            stable Custom Rom
          </h1>
          <h4>
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
        <div className="top-right">
          <div className="top-section">
            <img src={team_work} alt="" />
          </div>
          <div className="bottom-section">
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
      <div className="about-middle">
        <div>
          <p>Meet the team</p>
        </div>
        <div className="view-all">
          <h1>
            Meet Our Dedicated Team of <br />
            Leaders and Maintainers
          </h1>
          <p>
            view all members{" "}
            <Link to="/DxWeb/Team">
              <img src={Arrow} alt="" />
            </Link>
          </p>
        </div>
        <div className="image-area">
          {leads.map((lead, index) => {
            return (
              <div key={index} className="about-img">
                <img src={lead.pfp} alt="where bro pic ?" />
                <div className="lead-desc">
                  <p>{lead.name}</p>
                  <p>{lead.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="about-bottom">
        <div className="top-left b-left">
          <p>Our vision</p>
          <h1>Give the Pixel feel to non Pixel devices</h1>
          <h4>
            Our vision is to become the premier online destination for custom
            ROM development, fostering a thriving community where users discover
            freedom and developers push the boundaries of the Pixel experience.
          </h4>
        </div>
        <div className="top-left b-right">
          <p>Our mission</p>
          <h1>Providing stable and monthly updates</h1>
          <h4>
            Unleashing Android's potential together: We envision a collaborative
            platform for custom ROM creation, empowering users and igniting
            developer innovation.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
