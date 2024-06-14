import Arrow from "../../assets/Arrow.svg";
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
        className="stuck-Container hidden md:block md:fixed cursor-pointer right-8 bottom-8 w-56 h-16 rounded-full bg-gradient-to-r from-[#5866ad] via-[#c362ad] to-[#e5a0a0]"
        onClick={() => setShowCU(showCU !== true)}
        ref={divRef}
      >
        <div className="inside-container flex w-56 h-16 items-center justify-between p-2">
          <div className="contactUs text-2xl pl-2">Contact us</div>
          <img src={Arrow} alt="where arrow bro ?" />
        </div>
      </div>
      {showCU ? <ContactUs /> : <></>}
    </>
  );
};

export default StuckedSomewhere;
