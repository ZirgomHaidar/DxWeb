import Arrow from "../../assets/Arrow.svg";
import "./StuckedSomewhere.css";
import React, { useState } from "react";
import ContactUs from "../ContactUs/ContactUs";

const StuckedSomewhere = () => {
  const [showCU, setShowCU] = useState(false);

  return (
    <>
      <div
        className="stuck-Container"
        onClick={() => setShowCU(showCU !== true)}
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
