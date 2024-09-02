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
    download,
    vendor,
    dev_chlg,
    maintainer_git,
    maintainer_tg,
    old_release,
  } = location.state;
  return (
    <motion.div
      className="dp-container flex flex-col mt-12 my-7 mx-5 md:my-14 md:mx-36 justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="db-card dp-top">
        <div className="dp-top-left flex flex-col gap-5 md:gap-0 justify-between md:w-1/3">
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
        <div className="dp-top-right flex flex-col mt-5 md:mt-0">
          <div className="right-top flex flex-col md:flex-row md:gap-44 gap-5">
            <div className="pairs">
              <h3>Latest release</h3>
              <h1>{latest_release_date}</h1>
            </div>
            <div className="pairs">
              <h3>Security Patch</h3>
              <h1>5 June 2024</h1>
            </div>
          </div>
          <div className="db-card right-bottom p-6">
            <h3 className="text-xl">Maintainer</h3>
            <h1 className="text-3xl md:text-5xl py-2">{maintainer_name}</h1>
            <div className="reachout md:pt-5">
              <a
                className="nav-tryDx"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
              <a
                className="tg hover:scale-105 duration-100 mx-2"
                href={maintainer_tg}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={reach_tg} alt="TG" />
              </a>
              <a
                className="gh hover:scale-105 duration-100"
                href={maintainer_git}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={reach_gh} alt="TG" />
              </a>
            </div>
            <div className="get-latest-build flex flex-col md:flex-row justify-center pt-12 md:pt-32 gap-3 md:gap-12">
              <a
                className="nav-tryDx build"
                href={old_release}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Older Builds
                <img src={arrow2} alt="" />
              </a>
              <a
                className="nav-tryDx build"
                href={download}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Latest Build
                <img className="w-12" src={arrow2} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="dp-bottom flex flex-col md:flex-row gap-10 md:gap-[50px]">
        <div className="dp-bottom-left flex flex-col gap-5 md:w-1/2">
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
        <div className="dp-bottom-right flex flex-col gap-5 md:w-1/2">
          <div className="top-help mb-0">
            <div className="help-heading flex gap-5 md:ml-[-2rem] mb-4 md:mb-12 items-center">
              <img src={caution} alt="" />
              <h1 className="text-4xl">Caution</h1>
            </div>
            <h2 className="text-xl md:text-[1.7rem] leading-[2.6rem]">
              Flashing a custom ROM can breathe new life into your phone, but
              proceed with caution: there's a risk of bricking your device if
              not done correctly. <br />{" "}
              <span style={{ fontFamily: "Product Sans Bold" }}>
                Back up everything first! Our team cannot be held responsible
                for any damage caused to your device.
              </span>
            </h2>
            <Link to="/Help">
              <p className="learn-more flex md:justify-end mt-6 gap-5 text-xl md:text-2xl items-center duration-200 hover:scale-105">
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
