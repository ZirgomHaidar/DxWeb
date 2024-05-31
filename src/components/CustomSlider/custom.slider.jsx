import React, { useState, useEffect } from "react";
import right_arrow from "../../assets/right-arrow.svg";
import left_arrow from "../../assets/left-arrow.svg";

import "./custom.slider.css";

function CustomCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return -1;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <>
      <button
        className="slider__btn-prev"
        onMouseEnter={AutoPlayStop}
        onMouseLeave={AutoPlayStart}
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        <img className="arrow-left" src={left_arrow}></img>
      </button>

      <div className="bruh">
        <div
          className="container__slider"
          onMouseEnter={AutoPlayStop}
          onMouseLeave={AutoPlayStart}
        >
          {children.map((item, index) => {
            return (
              <div
                className={
                  "slider__item slider__item-active-" + (activeIndex + 1)
                }
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="container__slider__links">
          {children.map((item, index) => {
            return (
              <button
                key={index}
                className={
                  activeIndex === index
                    ? "container__slider__links-small container__slider__links-small-active"
                    : "container__slider__links-small"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setActiveIndex(index);
                }}
              ></button>
            );
          })}
        </div>
      </div>

      <button
        className="slider__btn-next"
        onMouseEnter={AutoPlayStop}
        onMouseLeave={AutoPlayStart}
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        <img className="arrow-right" src={right_arrow}></img>
      </button>
    </>
  );
}

export default CustomCarousel;
