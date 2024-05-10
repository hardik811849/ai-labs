import { Button } from "@/components/ui/button";
import { CircleCheckBig, TrendingUp } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col lg:gap-10 sm:gap-0 mb-[100px]">
      <div className="flex items-center parent-about-hand">
        <Image
          src={"/about4.svg"}
          width={2000}
          height={2000}
          className="about-hand"
          alt="about"
        />
      </div>

      <div className="font-inter sm:ml-[40px] md:ml-[100px] lg:ml-0">
        <p className="text-[18px] mb-2.5 sm:mt-10">Who We Are</p>
        <p className="lg:text-[40px] xl:text-[60px] sm:text-[40px] xl:mb-[30px] md:mb-[10px]">
          About &nbsp;
          <span className="text-gradient">AI Labs</span>
        </p>
        <p className="lg:text-[25px] xl:text-[40px] sm:text-[25px] w-3/4 mb-[30px] font-semibold">
          Empower your creativity with artificial intelligence
        </p>
        <p className="xl:text-[18px] md:text-[16px] w-3/4 leading-7 text-zinc-400 mb-[50px]">
          Artificial intelligence, or AI, is the simulation of human
          intelligence in machines that are programmed to think and learn. The
          field of AI research began in the 1950s and has since evolved to
          encompass a wide range of technologies and applications.
        </p>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 w-3/4 gap-5 about-button-container">
          <Button className="p-7 bg-transparent rounded-xl flex justify-around about-button">
            <CircleCheckBig className="icon" />
            <p className="truncate">Computer Vision</p>
          </Button>
          <Button className="py-7 bg-transparent rounded-xl flex justify-around about-button">
            <CircleCheckBig className="icon" />
            <p className="truncate">Content Services</p>
          </Button>
          <Button className="p-7 bg-transparent rounded-xl flex justify-around about-button">
            <CircleCheckBig className="icon" />
            <p className="truncate">Digital Publishing</p>
          </Button>
          <Button className="p-7 bg-transparent rounded-xl flex justify-around about-button">
            <CircleCheckBig className="icon" />
            <p className="truncate">Data Enhancement</p>
          </Button>
        </div>
        <Button className="mt-[50px] bg-transparent !font-sarpanch flex gap-3 text-[26px] know-more">
          Know more <TrendingUp className="know-more-arrow" />
        </Button>
      </div>
    </div>
  );
};

export default About;
