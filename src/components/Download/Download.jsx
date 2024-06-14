import React, { useState, useEffect } from "react";
import "./Download.css";
import device_list from "../../assets/devices.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Download = () => {
  const [uniqueVendors, getUniqueVendors] = useState([]);
  const [category, setCategory] = useState("Xiaomi");
  //const [FinalDevList, setFinalDevList] = useState([]);

  useEffect(() => {
    const vendorSet = new Set(
      device_list.devices.map((device) => device.vendor)
    );
    getUniqueVendors(Array.from(vendorSet));
  }, []);

  const vendors = [...uniqueVendors];

  const final_dev_list = device_list.devices.filter(
    (device) => device.vendor === category
  );

  return (
    <motion.div
      className="dn-container flex flex-col mt-12 items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p
        className="heading-dn text-4xl md:text-5xl mb-12"
        style={{ fontFamily: "Product Sans Bold" }}
      >
        Download DroidX-UI
      </p>
      {/* <input
        type="search"
        name="searchQuery"
        placeholder="Search by device name or code name"
      ></input> */}
      <div className="select-vendor flex flex-wrap gap-3 justify-center">
        {vendors.map((vendor, index) => {
          return (
            <div
              key={index}
              onClick={() => setCategory(vendor)}
              className={category === vendor ? "nav-tryDx active" : "nav-tryDx"}
            >
              {vendor}
            </div>
          );
        })}
      </div>

      <motion.div
        className="gridplease"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {final_dev_list.map((device, index) => {
          return (
            <motion.div
              key={index}
              className="db-card p-7"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            >
              <p
                className="vendor text-xl md:text-2xl"
                style={{ fontFamily: "Product Sans Bold" }}
              >
                {device.vendor}
              </p>
              <p className="model text-2xl md:text-3xl">{device.model}</p>
              <p className="codename text-[1rem] mt-10 p-2 w-fit rounded-xl bg-[#17557f] mb-2">
                {device.codename}
              </p>
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
              <div className="dn-ch text-xl">
                <Link
                  className="get-build hover:bg-[#adb8f0] hover:text-[#162025] duration-100"
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
                <a
                  className="changelog"
                  href={device.device_cglg}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Changelog
                </a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Download;
