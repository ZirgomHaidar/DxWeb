import React from "react";
import "./DevicePage.css";
import Collapsible from "react-collapsible";
import { Link, useLocation } from "react-router-dom";
import reach_tg from "../../assets/reachtg.svg";
import reach_gh from "../../assets/reach_gh.svg";
import arrow2 from "../../assets/Arrow_2.svg";
import arrow_black from "../../assets/Arrow_2_black.svg";
import caution from "../../assets/caution.svg";
import { motion } from "framer-motion";

function DevicePage(props) {
  const location = useLocation();
  const {
    model,
    status,
    version,
    maintainer_name,
    codename,
    latest_release_date,
    vendor,
    dev_chlg,
    maintainer_git,
  } = location.state;
  return (
    <motion.div
      className="dp-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="db-card dp-top">
        <div className="dp-top-left">
          <div className="pairs">
            <h3>Model</h3>
            <h1>{vendor + " " + model}</h1>
          </div>
          <div className="pairs">
            <h3>Codename</h3>
            <h1>{codename}</h1>
          </div>
          <div className="pairs">
            <h3>Status</h3>
            <h1>{status}</h1>
          </div>
          <div className="pairs">
            <h3>Version</h3>
            <h1>{version}</h1>
          </div>
        </div>
        <div className="dp-top-right">
          <div className="right-top">
            <div className="pairs">
              <h3>Latest release</h3>
              <h1>{latest_release_date}</h1>
            </div>
            <div className="pairs">
              <h3>Security Patch</h3>
              <h1>5 June 2024</h1>
            </div>
          </div>
          <div className="db-card right-bottom">
            <h3>Maintainer</h3>
            <h1>{maintainer_name}</h1>
            <div className="reachout">
              <a
                className="nav-tryDx"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
              <a
                className="tg"
                href="#TGLINK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={reach_tg} alt="TG" />
              </a>
              <a
                className="tg"
                href="#TGLINK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={reach_gh} alt="TG" />
              </a>
            </div>
            <div className="get-latest-build">
              <a
                className="nav-tryDx build"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Older Builds
                <img src={arrow2} alt="" />
              </a>
              <a
                className="nav-tryDx build"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Latest Build
                <img src={arrow2} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="dp-bottom">
        <div className="dp-bottom-left">
          <Collapsible
            open
            transitionTime="200"
            trigger="Note"
            triggerTagName="div"
          >
            <ul>
              <li>Clean flash recomended</li>
              <li>whatever</li>
              <li>whatever</li>
              <li>whatever</li>
              <li>whatever</li>
              <li>what not so ever</li>
            </ul>
          </Collapsible>
          <Collapsible
            transitionTime="200"
            trigger="Changelog"
            triggerTagName="div"
          >
            <p>Nothing to See Here. Move Along...!!!</p>
          </Collapsible>
        </div>
        <div className="dp-bottom-right">
          <div className="top-help caution">
            <div className="help-heading">
              <img src={caution} alt="" />
              <h1>Caution</h1>
            </div>
            <h2>
              Flashing a custom ROM can breathe new life into your phone, but
              proceed with caution: there's a risk of bricking your device if
              not done correctly. <br />{" "}
              <span>
                Back up everything first! Our team cannot be held responsible
                for any damage caused to your device.
              </span>
            </h2>
            <Link to="/DxWeb/Help">
              <p className="learn-more">
                Learn More <img src={arrow_black} alt="" />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DevicePage;
