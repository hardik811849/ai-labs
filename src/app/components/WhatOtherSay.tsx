"use client";
import React, { useRef } from "react";
import Image from "next/image";
import ThirdCarousel from "./ThirdCarousel";
import Slider from "react-slick";

const WhatOtherSay = () => {
  const sliderRef = useRef<Slider>(null);
  return (
    <div className=" mb-[120px]">
      <p className="text-center mb-[60px] lg:text-[60px] sm:text-[30px] font-bold m-[auto]">
        What <span className="text-gradient">Others say</span>
      </p>
      <ThirdCarousel ref={sliderRef} />
      {/* <div className="sm:flex sm:flex-col justify-between sm:mb-20 ">
        <div className=" sm:w-[90%] lg:w-[95%] xl:w-[80%] font-inter lg:m-auto gap-40 sm:mx-[20px]">
          <ThirdCarousel ref={sliderRef} />
        </div>
      </div> */}
    </div>
  );
};

export default WhatOtherSay;
