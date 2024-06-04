import React, { useState } from "react";
import "./Download.css";
import device_list from "../../assets/devices.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Download = () => {
  //   const [category, setCategory] = useState("All");
  const datas = { device_list };
  return (
    <motion.div
      className="dn-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="heading-dn">Download DroidX-UI</p>
      <input
        type="search"
        name="searchQuery"
        placeholder="Search by device name or code name"
      ></input>
      <div className="select-vendor">
        {/* {device_list.devices.map((vendor, index) => {
          return (
            <div key="index" className="nav-tryDx vendor-category">
              all
            </div>
          );
        })} */}
        <div className="nav-tryDx vendor-category">all</div>
      </div>

      <div className="gridplease">
        {device_list.devices.map((device, index) => {
          return (
            <div key={index} className="db-card">
              <p className="vendor">{device.vendor}</p>
              <p className="model">{device.model}</p>
              <p className="codename">{device.codename}</p>
              <p className="maintainer">
                <span>Maintainer</span> : {device.maintainer_name}
              </p>
              <p className="version">
                <span>Version</span> : {device.version}
              </p>
              <p className="status">
                <span>Status</span> :{" "}
                <span
                  className={
                    device.status === "Active" ? "active" : "discontinued"
                  }
                >
                  {device.status}
                </span>
              </p>
              <div className="dn-ch">
                <Link
                  className="get-build"
                  to="/DxWeb/DevicePage"
                  state={{
                    model: device.model,
                    status: device.status,
                    version: device.version,
                    maintainer_name: device.maintainer_name,
                    codename: device.codename,
                    latest_release_date: device.last_updated,
                    vendor: device.vendor,
                    dev_chlg: device.device_cglg,
                    maintainer_git: device.gitProfile,
                  }}
                >
                  Get Build
                </Link>
                {/* href={device.Links[0].Gapps} */}
                <a
                  className="changelog"
                  href={device.device_cglg}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Changelog
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Download;
