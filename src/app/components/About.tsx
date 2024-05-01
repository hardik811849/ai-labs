import { Button } from "@/components/ui/button";
import { CircleCheckBig, TrendingUp } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex gap-72 mb-[100px]">
      <div className="flex items-center parent-about-hand">
        <Image
          src={"/about4.svg"}
          width={2000}
          height={2000}
          className="about-hand"
          alt="about"
        />
      </div>

      <div className="font-inter">
        <p className="text-[18px] mb-2.5">Who We Are</p>
        <p className="text-[60px] mb-[30px]">
          About &nbsp;
          <span className="text-gradient">AI Labs</span>
        </p>
        <p className="text-[40px] w-3/4 mb-[30px] font-semibold">
          Empower your creativity with artificial intelligence
        </p>
        <p className="text-[18px] w-3/4 leading-7 text-zinc-400 mb-[50px]">
          Artificial intelligence, or AI, is the simulation of human
          intelligence in machines that are programmed to think and learn. The
          field of AI research began in the 1950s and has since evolved to
          encompass a wide range of technologies and applications.
        </p>

        <div className="grid grid-cols-2 w-3/4 gap-10 about-button-container">
          <Button className="p-8 bg-transparent rounded-xl text-[16px] flex gap-10 about-button">
            <CircleCheckBig className="icon " />
            Computer Vision
          </Button>
          <Button className="p-8 bg-transparent rounded-xl text-[16px] flex gap-10 about-button">
            <CircleCheckBig className="icon" />
            Content Services
          </Button>
          <Button className="p-8 bg-transparent rounded-xl text-[16px] flex gap-10 about-button">
            <CircleCheckBig className="icon " />
            Digital Publishing
          </Button>
          <Button className="p-8 bg-transparent rounded-xl text-[16px] flex gap-10 about-button">
            <CircleCheckBig className="icon " />
            Data Enhancement
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
