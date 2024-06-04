import Arrow from "../../assets/Arrow.svg";
import "./StuckedSomewhere.css";
import React, { useEffect, useRef, useState } from "react";
import ContactUs from "../ContactUs/ContactUs";

const StuckedSomewhere = () => {
  const [showCU, setShowCU] = useState(false);

  const divRef = useRef(null);
  const handleClickOutside = (event) => {
    try {
      if (!divRef.current.contains(event.target)) {
        setShowCU(false);
      }
    } catch (error) {
      /*nothing*/
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [divRef]);

  return (
    <>
      <div
        className="stuck-Container"
        onClick={() => setShowCU(showCU !== true)}
        ref={divRef}
      >
        <div className="inside-container">
          <div className="contactUs">Contact us</div>
          <img src={Arrow} alt="where arrow bro ?" />
        </div>
      </div>
      {showCU ? <ContactUs /> : <></>}
    </>
  );
};

export default StuckedSomewhere;
