import React from "react";
import "./BottomHome.css";
import { ss_list } from "../../assets/ss_list";
import CustomSlider from "../CustomSlider/custom.slider";

const BottomHome = () => {
  return (
    <>
      <div className="heading">
        <h1>Screenshots</h1>
      </div>
      <div className="container-ss">
        <div className="ss-area">
          <CustomSlider>
            {ss_list.map((image, index) => {
              return <img key={index} src={image.path} alt={image.imgAlt} />;
            })}
          </CustomSlider>
        </div>
      </div>
    </>
  );
};

export default BottomHome;
