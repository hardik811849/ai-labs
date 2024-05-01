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
    <div className="w-full">
      <div className="w-full flex flex-col justify-center items-center text-center mb-[100px]">
        <p className="mb-[20px] text-[60px] font-bold">
          Elevate Your Business with Our
          <span className="text-gradient">
            <br />
            &nbsp;Specialized AI & ML Teams
          </span>
        </p>
      </div>

      <div className="teams-parent">
        <div className=" w-[90%]">
          <div className="grid grid-cols-2 gap-72">
            <div>
              <p className="text-[30px] text-zinc-500 mb-[30px]">
                In today’s fast-paced digital landscape, a dedicated team with
                expertise in AI and Machine Learning can significantly propel
                your business ahead of the curve.
              </p>
              <p className="text-[30px] text-zinc-500 mb-[70px]">
                WebOccult Technologies presents you with the opportunity to
                collaborate with our team of seasoned professionals.
              </p>
              <Button className=" p-6 mt-[20px] text-[20px] rounded-full drop-shadow-lg font-semibold button-gradient">
                Hire our Team{" "}
              </Button>
            </div>
            <div>
              <div className="">
                <div className="w-[50%] mx-auto  grid grid-cols-2 justify-end gap-4">
                  <div className="teams-gradient flex justify-center flex-col items-center text-center p-[20px] rounded-lg">
                    <Image
                      src={expert}
                      width={30}
                      height={30}
                      alt="hand"
                      className="mb-[26px]"
                    />
                    <p>Expertise That Delivers Results</p>
                  </div>
                  <div className="teams-gradient flex justify-center flex-col items-center text-center p-[20px] rounded-lg">
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
                  <div className="teams-gradient flex justify-center flex-col items-center text-center p-[20px] rounded-lg">
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
