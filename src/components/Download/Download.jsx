import React, { useState, useEffect, useCallback } from "react";
import "./Download.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loading from "../Loading/Loading";

const Download = () => {
  const [category, setCategory] = useState({ all: true });
  const [activeButton, setActiveButton] = useState("all");
  const [fetchedData, setFetchedData] = useState([]);
  const [FinalDevList, setFinalDevList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://droidx-api.onrender.com/devicelist"
      );
      const data = await response.json();
      setFetchedData(data.reverse());
      setFinalDevList(data);
      setIsLoading(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleButtonSelect = useCallback(
    (vendor) => {
      if (vendor === "all") {
        setFinalDevList(fetchedData);
        setCategory({ ...category, all: true, [vendor]: false });
        setActiveButton(vendor);
      } else {
        const filteredList = fetchedData.filter(
          (item) => item.vendor === vendor
        );
        setFinalDevList(filteredList);
        setActiveButton(vendor);
        setCategory({
          ...category,
          all: false,
          [vendor]: true,
        });
      }
    },
    [fetchedData]
  );

  return isLoading ? (
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
        <button
          className={activeButton === "all" ? "nav-tryDx active" : "nav-tryDx"}
          onClick={() => handleButtonSelect("all")}
        >
          All
        </button>
        {Array.from(new Set(fetchedData.map((item) => item.vendor))).map(
          (vendor) => (
            <button
              className={
                activeButton === vendor ? "nav-tryDx active" : "nav-tryDx"
              }
              key={vendor}
              onClick={() => handleButtonSelect(vendor)}
            >
              {vendor}
            </button>
          )
        )}
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
        {FinalDevList.map((device, index) => {
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
                <span>Maintainer</span> : {device.maintainer}
              </p>
              <p className="version">
                <span>Version</span> : {device.gapps.version}
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
                    version: device.gapps.version,
                    maintainer_name: device.maintainer,
                    codename: device.codename,
                    latest_release_date: device.gapps.last_updated,
                    download: device.gapps.download,
                    vendor: device.vendor,
                    dev_chlg: device.changelog,
                    maintainer_git: device.github,
                    maintainer_tg: device.telegram,
                    old_release: device.old,
                  }}
                >
                  Get Build
                </Link>
                <a
                  className="changelog"
                  href={device.changelog}
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
  ) : (
    <Loading />
  );
};

export default Download;
