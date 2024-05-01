"use client";
import React, { useRef, useState } from "react";
import right from "../../../public/right.svg";
import left from "../../../public/left.svg";
import Image from "next/image";

import { TrendingUp } from "lucide-react";
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
    <div className="w-full mb-[200px]">
      <div className="w-[80%] m-auto flex justify-between items-center mb-[100px] font-inter">
        <div>
          <p className="text-[50px]  font-semibold mb-[20px]">
            Our Useful Resources
          </p>
          <p className="w-[53%] text-zinc-500 text-[16px]">
            Dive into the forefront of innovation and thought leadership with
            our latest resources. Where insightful content meets the pulse of
            contemporary ideas, keeping you informed and inspired.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="image-gradient" onClick={goToPrevSlide}>
            <Image src={left} width={50} height={50} alt="left" />
          </div>
          <div className="image-gradient" onClick={goToNextSlide}>
            <Image src={right} width={50} height={50} alt="right" />
          </div>
        </div>
      </div>

      <div className="">
        <div className="w-[80%] font-inter m-auto gap-24">
          <SecondCarousel ref={sliderRef} />
        </div>
      </div>
    </div>
  );
};

export default Resouces;
