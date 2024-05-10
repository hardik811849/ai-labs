"use client";
import React, { useRef, useState } from "react";
import right from "../../../public/right.svg";
import left from "../../../public/left.svg";
import Image from "next/image";

import { Dot, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import SecondCarousel from "./SecondCarousel";
import Slider from "react-slick";

const Resouces = () => {
  const sliderRef = useRef<Slider>(null);

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div className="w-full lg:mb-[120px] sm:mb-[20px] mt-16">
      <div className=" text-center  mb-[100px] font-inter">
        <div>
          <p className="lg:text-[50px] sm:mx-[5px] sm:text-[30px] font-semibold mb-[20px]">
            Our Useful Resources
          </p>
          <p className="lg:mx-64 sm:mx-12 text-zinc-500 text-[16px] sm:mb-[-40px] md:mb-0">
            Dive into the forefront of innovation and thought leadership with
            our latest resources. Where insightful content meets the pulse of
            contemporary ideas, keeping you informed and inspired.
          </p>
        </div>
      </div>

      <div className="sm:flex sm:flex-col justify-between sm:mb-20 ">
        <div className=" sm:w-[90%] lg:w-[95%] xl:w-[80%] font-inter lg:mx-auto gap-24 sm:mx-[30px]">
          <SecondCarousel ref={sliderRef} />
        </div>
        {/* <div className="flex justify-center mt-8">
          <div className="image-gradient" onClick={goToPrevSlide}>
            <Image src={left} width={50} height={50} alt="left" />
          </div>
          <div className="image-gradient " onClick={goToNextSlide}>
            <Image src={right} width={50} height={50} alt="right" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Resouces;
