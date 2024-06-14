import React, { useState, useEffect, useRef } from "react";
import right_arrow from "../../assets/right-arrow.svg";
import left_arrow from "../../assets/left-arrow.svg";

import "./custom.slider.css";

function CustomCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeyIndex, setActiveyIndex] = useState(1);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  const elementRef = useRef(null);
  const isVisible = divIsVisible(elementRef);

  useEffect(() => {
    if (slideDone && isVisible) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 4000)
      );
    }
  }, [slideDone, isVisible]);

  function divIsVisible(ref) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting);
      });

      observer.observe(ref.current);

      return () => observer.disconnect();
    }, [ref]);

    return isVisible;
  }

  const slideNext = () => {
    if (document.documentElement.clientWidth >= 768) {
      setActiveIndex((val) => {
        if (val >= children.length - 1) {
          return -1;
        } else {
          return val + 1;
        }
      });
    } else {
      setActiveyIndex((val) => {
        if (val >= children.length - 1) {
          return 0;
        } else {
          return val + 1;
        }
      });
    }
  };

  const slidePrev = () => {
    if (document.documentElement.clientWidth >= 768) {
      setActiveIndex((val) => {
        if (val <= 0) {
          return children.length - 1;
        } else {
          return val - 1;
        }
      });
    } else {
      setActiveyIndex((val) => {
        if (val <= 0) {
          return children.length - 1;
        } else {
          return val - 1;
        }
      });
    }
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
        className="slider__btn-prev duration-100 active:scale-110 ml-3 md:ml-0"
        onMouseEnter={AutoPlayStop}
        onMouseLeave={AutoPlayStart}
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        <img className="arrow-left w-16" src={left_arrow}></img>
      </button>

      <div className="myslider md:m-0 mt-[-40px] w-[400px] md:w-fit">
        <div
          className="container__slider p-0 overflow-y-hidden overflow-x-hidden m-3 mb-10 h-[700px] md:h-fit md:m-5 relative md:flex"
          onMouseEnter={AutoPlayStop}
          onMouseLeave={AutoPlayStart}
          ref={elementRef}
        >
          {children.map((item, index) => {
            return (
              <div
                className={
                  document.documentElement.clientWidth >= 768
                    ? "slider__item slider__item-active-" + (activeIndex + 1)
                    : "slider__item slider__item-y-active-" + (activeyIndex + 1)
                }
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="container__slider__links md:flex justify-center hidden">
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
                  document.documentElement.clientWidth >= 768
                    ? setActiveIndex(index)
                    : setActiveyIndex(index);
                }}
              ></button>
            );
          })}
        </div>
      </div>

      <button
        className="slider__btn-next duration-100 active:scale-110 mr-3 md:mr-0"
        onMouseEnter={AutoPlayStop}
        onMouseLeave={AutoPlayStart}
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        <img className="arrow-right w-16" src={right_arrow}></img>
      </button>
    </>
  );
}

export default CustomCarousel;
