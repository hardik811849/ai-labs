import Image from "next/image";
import React from "react";
import insight1 from "../../../public/Insight1.png";
import insight2 from "../../../public/insight2.png";
import insight3 from "../../../public/insight3.png";
import belly from "../../../public/Belly.png";
import kevin from "../../../public/Kevin.png";
import mike from "../../../public/mike.png";
import { Button } from "@/components/ui/button";
const Insights = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col justify-center items-center text-center mb-[100px]">
        <p className="mb-[20px] lg:text-[60px] sm:text-[30px] font-bold">
          Featured 
          <span className="text-gradient">Insights </span>
        </p>
        <p className="sm:px-10 lg:p-0">
          Keeping you updated with the most trending and latest AI/ML tech
          insights.
        </p>
      </div>

      <div className="insight-background">
        <div className="xl:w-[80%] lg:w-[92%] m-auto ">
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 sm:mx-[20px] md:mx-[150px] lg:mx-0 gap-10 mb-[50px]">
            <div className="insight-gradient">
              <Image
                src={insight1}
                alt="insight1"
                className="rounded-t-2xl mt-[-40px] sm:w-[100%] lg:w-full h-[auto]"
              />
              <div className="p-[30px] font-inter">
                <div className="mb-[40px]">
                  <p className="text-[16px] text-zinc-500 m-[10px]">
                    Featured Story
                  </p>
                  <p className="xl:text-[24px] md:text-[20px] mb-[20px]">
                    Build a culture where everyone designs.
                  </p>
                  <p className="text-[16px] text-zinc-500">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque.
                  </p>
                </div>
                <div className="flex gap-6">
                  <Image src={belly} alt="belly" />
                  <div>
                    <p className="text-[20px]">Belly Jackson</p>
                    <p className="text-[12px] text-zinc-500">
                      January 01, 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="insight-gradient">
              <Image
                src={insight2}
                alt="insight1"
                className="rounded-t-2xl mt-[-40px] sm:w-[100%] lg:w-full h-[auto]"
              />
              <div className="p-[30px] font-inter">
                <div className="mb-[40px]">
                  <p className="text-[16px] text-zinc-500 m-[10px]">
                    Featured Story
                  </p>
                  <p className="text-[24px] md:text-[20px] mb-[20px]">
                    How To Empower Design Teams By Measuring Value{" "}
                  </p>
                  <p className="text-[16px] text-zinc-500">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque.
                  </p>
                </div>
                <div className="flex gap-6">
                  <Image src={kevin} alt="belly" />
                  <div>
                    <p className="text-[20px]">Kevin Martin</p>
                    <p className="text-[12px] text-zinc-500">
                      February 16, 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="insight-gradient">
              <Image
                src={insight3}
                alt="insight1"
                className="rounded-t-2xl mt-[-40px] sm:w-[100%] lg:w-full h-[auto]"
              />
              <div className="p-[30px] font-inter">
                <div className="mb-[40px]">
                  <p className="text-[16px] text-zinc-500 m-[10px]">
                    Featured Story
                  </p>
                  <p className="text-[24px] md:text-[20px] mb-[20px]">
                    Designing a Node.js dashboard app that increases business
                    rate{" "}
                  </p>
                  <p className="text-[16px] text-zinc-500">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque.
                  </p>
                </div>
                <div className="flex gap-6">
                  <Image src={mike} alt="belly" />
                  <div>
                    <p className="text-[20px]">Mike Hardson</p>
                    <p className="text-[12px] text-zinc-500">March 22, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:mt-[50px] lg:mb-[100px] sm:mb-[45px]">
            <Button className=" p-6 mt-[20px] text-[20px] rounded-full drop-shadow-lg font-semibold button-gradient">
              Our Blogs{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
