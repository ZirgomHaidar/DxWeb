import React, { useState } from "react";
import "./Download.css";
import device_list from "../../assets/devices.json";

const Download = () => {
  //   const [category, setCategory] = useState("All");
  return (
    <div className="dn-container">
      <p className="heading">Download DroidX-UI</p>
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
                <a
                  className="get-build"
                  href={device.Links[0].Gapps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Build
                </a>
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
    </div>
  );
};

export default Download;
