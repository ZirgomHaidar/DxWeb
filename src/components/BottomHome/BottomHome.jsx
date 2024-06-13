import React from "react";
import { ss_list } from "../../assets/ss_list";
import CustomSlider from "../CustomSlider/custom.slider";

const BottomHome = () => {
  return (
    <>
      <div className="heading flex justify-center m-24 mt-0">
        <h1 className="text-7xl" style={{ "font-family": "Product Sans Bold" }}>
          Screenshots
        </h1>
      </div>
      <div className="container-ss flex justify-center items-center mx-20 mb-36">
        <div className="ss-area flex justify-center items-center">
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
