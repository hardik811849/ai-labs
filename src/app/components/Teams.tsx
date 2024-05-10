import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import hand from "../../../public/robot-hand-background-presenting-technology-gesture (1)@2x 1.svg";
import ball from "../../../public/ball.svg";
import expert from "../../../public/teams/1 (1).svg";
import collobration from "../../../public/teams/2.svg";
import endtoend from "../../../public/teams/3.svg";

const Teams = () => {
  return (
    <div className="w-full xl:px-0">
      <div className="w-full flex flex-col justify-center items-center text-center lg:mb-[100px] sm:mb-6">
        <p className="xl:mb-[20px] xl:text-[60px] sm:text-[30px] sm:mx-6 xl:mx-0 font-bold">
          Elevate Your Business with Our
          <span className="text-gradient">
            <br />
            &nbsp;Specialized AI & ML Teams
          </span>
        </p>
      </div>

      <div className="teams-parent">
        <div className=" w-[90%]">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-20 xl:gap-46 sm:gap-20">
            <div className="sm:mx-6 xl:mx-0">
              <p className="md:text-[20px] xl:text-[30px] sm:text-[18px] text-zinc-500 mb-[30px]">
                In today’s fast-paced digital landscape, a dedicated team with
                expertise in AI and Machine Learning can significantly propel
                your business ahead of the curve.
              </p>
              <p className="md:text-[20px] xl:text-[30px] sm:text-[18px] text-zinc-500 xl:mb-[70px] sm:mb-[20px]">
                WebOccult Technologies presents you with the opportunity to
                collaborate with our team of seasoned professionals.
              </p>
              <Button className=" p-6 mt-[20px] text-[20px] rounded-full drop-shadow-lg font-semibold button-gradient">
                Hire our Team{" "}
              </Button>
            </div>
            <div>
              <div className="">
                <div className="md:w-[50%]  sm:w-[92%] lg:w-[80%] xl:w-[55%] mx-auto  grid grid-cols-2 justify-end gap-4">
                  <div className="sm:text-[12px] md:text-[16px] teams-gradient flex justify-center flex-col items-center text-center p-[20px] rounded-lg">
                    <Image
                      src={expert}
                      width={30}
                      height={30}
                      alt="hand"
                      className="mb-[26px]"
                    />
                    <p>Expertise That Delivers Results</p>
                  </div>
                  <div className="sm:text-[12px] md:text-[16px] teams-gradient flex justify-center flex-col items-center text-center p-[20px] rounded-lg">
                    <Image
                      src={collobration}
                      width={30}
                      height={30}
                      alt="hand"
                      className="mb-[26px]"
                    />
                    <p>Collaboration & Transparency</p>
                  </div>
                  <div className="ball-parent flex justify-center flex-col items-center text-center p-[20px] rounded-lg">
                    <Image
                      src={ball}
                      width={100}
                      height={100}
                      alt="hand"
                      className="ball"
                    />
                  </div>
                  <div className="sm:text-[12px] md:text-[16px] teams-gradient flex justify-center flex-col items-center text-center p-[20px] rounded-lg">
                    <Image
                      src={endtoend}
                      width={30}
                      height={30}
                      alt="hand"
                      className="mb-[26px]"
                    />
                    <p>End-to-End Project Execution</p>
                  </div>
                </div>
              </div>
              <Image src={hand} width={1000} height={1000} alt="hand" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
