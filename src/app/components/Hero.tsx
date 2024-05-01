"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CirclePlay } from "lucide-react";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <>
      <div className="h-auto flex flex-col items-center mb-[100px]">
        <div className=" top-0 z-0 w-full ">
          <video
            src={"video/hero.mp4"}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          ></video>
        </div>

        <div className="absolute top-52 left-80">
          <Badge
            variant="outline"
            className="text-white font-inter bg-gradient-to-b from-gray-500 border-none w-[264px] text-xl text-center"
          >
            Soar to New Heights!
          </Badge>
          <p className="text-6xl font-inter  w-[510px] mt-[20px] leading-tight">
            Elevate your Experience With Power{" "}
            <span className="text-gradient">AI Labs</span>
          </p>
          <p className="text-zinc-400  w-[30rem] text-lg font-inter leading-9 left-80">
            Unleash the next level of innovation and efficiency with Power AI,
            transforming your digital journey into a realm of unparalleled
            possibilities.
          </p>
          <Button className="w-[183px] p-6 mt-[20px] text-[16px] font-inter rounded-full drop-shadow-lg font-semibold button-gradient">
            Get Started
            <ArrowRight className="text-white ml-2 arrow-gradient" />
          </Button>
          <Button className="ml-[30px] w-[183px] p-6 mt-[20px] text-[16px] font-inter rounded-full font-semibold button-without-gradient ">
            Watch Demo{" "}
            <CirclePlay className="text-white ml-2 arrow-without-gradient" />
          </Button>
        </div>

        <div className=" absolute top-[60rem] w-[80%]">
          <Carousel />
          <p className="text-slate-500 font-inter text-[14px] ">
            <span className="text-white">AI Labs</span> is used by over{" "}
            <span className="text-white">15,000+</span> companies across the
            global
          </p>
        </div>
      </div>
      {/* <div className="absolute top-[68rem] w-full border border-red-600 z-10">
        <div className="">highhhhhhhhhhhh</div>
      </div> */}
    </>
  );
};

export default Hero;

// const SPAN = styled.span`
//   background: linear-gradient(90deg, #6430fb, #b596fd);
//   -webkit-background-clip: text;
//   background-clip: text;
//   color: transparent;
// `;
