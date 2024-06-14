import React from "react";
import { ss_list } from "../../assets/ss_list";
import CustomSlider from "../CustomSlider/custom.slider";

const BottomHome = () => {
  return (
    <>
      <div className="heading flex justify-center m-6 md:m-24 mt-0">
        <h1
          className="text-5xl md:text-7xl"
          style={{ fontFamily: "Product Sans Bold" }}
        >
          Screenshots
        </h1>
      </div>
      <div className="ss-area flex justify-center items-center md:m-16 md:w-fit">
        <CustomSlider>
          {ss_list.map((image, index) => {
            return <img key={index} src={image.path} alt={image.imgAlt} />;
          })}
        </CustomSlider>
      </div>
    </>
  );
};

export default BottomHome;
