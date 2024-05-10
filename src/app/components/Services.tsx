import Image from "next/image";
import React from "react";
import services1 from "../../../public/service/1 (1).svg";
import services2 from "../../../public/service/2.svg";
import services3 from "../../../public/service/3.svg";
import services4 from "../../../public/service/4.svg";
import services5 from "../../../public/service/5.svg";
import services6 from "../../../public/service/6.svg";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const Services = () => {
  return (
    <div className="max-w-[100%]">
      <div className=" flex flex-col justify-center items-center text-center mb-[100px]">
        <p className="mb-[20px] lg:text-[60px] sm:text-[30px] font-bold">
          <span className="text-gradient">Services</span> We Provide
        </p>
        <p className="text-zinc-500 lg:text-[30px] sm:text-[16px]  lg:w-3/5 sm:w-[80%]">
          Transforming businesses through cutting-edge technologies. Our
          expertise includes AI-powered automation, predictive insights, and
          personalized experiences, driving efficiency, growth, and customer
          satisfaction.
        </p>
      </div>

      <div className="mx-auto sm:w-[80%] md:w-[90%] lg:w-[80%] grid md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 gap-8 justify-center items-center">
        <div className="p-[20px] pr-0 bg-transparent rounded-xl text-[16px] services-button">
          <div className="p-[10px] pl-[15px] pr-[15px] w-fit rounded-lg bg-gradient-to-r from-[#6430fb] to-[#b596fd] mb-[30px]">
            <Image
              src={services1}
              alt="service-1"
              width={50}
              height={50}
              className="sm:size-[30px] xl:size-[50px]"
            />
          </div>
          <div className="top-gradient-image-top">
            <p className="mb-[22px] md:text-[28px] sm:text-[20px]">
              Mobile App Development
            </p>
            <p className="mb-[30px] md:text-[18px] sm:text-[14px] text-zinc-500">
              We provide comprehensive Mobile App Development services, creating
              solutions for various platforms including iOS, Android, &
              cross-platform. Our mobi...
            </p>
            <Button className="bg-transparent !px-0 !py-0 !font-sarpanch flex gap-3 text-[26px] sm:text-[20px] know-more">
              Know more <TrendingUp className="know-more-arrow" />
            </Button>
          </div>
        </div>
        {/* 2 */}
        <div className="p-[20px] pr-0 bg-transparent rounded-xl text-[16px] services-button">
          <div className="p-[10px] pl-[15px] pr-[15px] w-fit  rounded-lg bg-gradient-to-r from-[#6430fb] to-[#b596fd] mb-[30px]">
            <Image
              src={services2}
              alt="service-1"
              width={50}
              height={50}
              className="sm:size-[30px] xl:size-[50px]"
            />
          </div>
          {/* <div className="gradient-image w-[26.85rem] h-[14.5rem]"></div> */}
          <div className="top-gradient-image-top">
            <p className="mb-[22px] md:text-[28px] sm:text-[20px]">
              Mobile App Development
            </p>
            <p className="mb-[30px] md:text-[18px] sm:text-[14px] text-zinc-500 ">
              We provide comprehensive Mobile App Development services, creating
              solutions for various platforms including iOS, Android, &
              cross-platform. Our mobi...
            </p>
            <Button className="bg-transparent !px-0 !py-0 !font-sarpanch flex gap-3 text-[26px] sm:text-[20px] know-more">
              Know more <TrendingUp className="know-more-arrow" />
            </Button>
          </div>
        </div>
        {/* 3 */}
        <div className="p-[20px] pr-0 bg-transparent rounded-xl text-[16px] services-button">
          <div className="p-[10px] pl-[15px] pr-[15px] w-fit  rounded-lg bg-gradient-to-r from-[#6430fb] to-[#b596fd] mb-[30px]">
            <Image
              src={services3}
              alt="service-1"
              width={50}
              height={50}
              className="sm:size-[30px] xl:size-[50px]"
            />
          </div>
          {/* <div className="gradient-image w-[26.85rem] h-[14.5rem]"></div> */}
          <div className="top-gradient-image-top">
            <p className="mb-[22px] md:text-[28px] sm:text-[20px]">
              Mobile App Development
            </p>
            <p className="mb-[30px] md:text-[18px] sm:text-[14px] text-zinc-500 ">
              We provide comprehensive Mobile App Development services, creating
              solutions for various platforms including iOS, Android, &
              cross-platform. Our mobi...
            </p>
            <Button className="bg-transparent !px-0 !py-0 !font-sarpanch flex gap-3 text-[26px] sm:text-[20px] know-more">
              Know more <TrendingUp className="know-more-arrow" />
            </Button>
          </div>
        </div>
        {/* 4 */}
        <div className="p-[20px] pr-0 bg-transparent rounded-xl text-[16px] services-button">
          <div className="p-[10px] pl-[15px] pr-[15px] w-fit  rounded-lg bg-gradient-to-r from-[#6430fb] to-[#b596fd] mb-[30px]">
            <Image
              src={services4}
              alt="service-1"
              width={50}
              height={50}
              className="sm:size-[30px] xl:size-[50px]"
            />
          </div>
          {/* <div className="gradient-image w-[26.85rem] h-[14.5rem]"></div> */}
          <div className="top-gradient-image-bottom">
            <p className="mb-[22px] md:text-[28px] sm:text-[20px]">
              Mobile App Development
            </p>
            <p className="mb-[30px] md:text-[18px] sm:text-[14px] text-zinc-500 ">
              We provide comprehensive Mobile App Development services, creating
              solutions for various platforms including iOS, Android, &
              cross-platform. Our mobi...
            </p>
            <Button className="bg-transparent !px-0 !py-0 !font-sarpanch flex gap-3 text-[26px] sm:text-[20px] know-more">
              Know more <TrendingUp className="know-more-arrow" />
            </Button>
          </div>
        </div>
        {/* 5 */}
        <div className="p-[20px] pr-0 bg-transparent rounded-xl text-[16px] services-button">
          <div className="p-[10px] pl-[15px] pr-[15px] w-fit  rounded-lg bg-gradient-to-r from-[#6430fb] to-[#b596fd] mb-[30px]">
            <Image
              src={services5}
              alt="service-1"
              width={50}
              height={50}
              className="sm:size-[30px] xl:size-[50px]"
            />
          </div>
          {/* <div className="gradient-image w-[26.85rem] h-[14.5rem]"></div> */}
          <div className="top-gradient-image-bottom">
            <p className="mb-[22px] md:text-[28px] sm:text-[20px]">
              Mobile App Development
            </p>
            <p className="mb-[30px] md:text-[18px] sm:text-[14px] text-zinc-500 ">
              We provide comprehensive Mobile App Development services, creating
              solutions for various platforms including iOS, Android, &
              cross-platform. Our mobi...
            </p>
            <Button className="bg-transparent !px-0 !py-0 !font-sarpanch flex gap-3 text-[26px] sm:text-[20px] know-more">
              Know more <TrendingUp className="know-more-arrow" />
            </Button>
          </div>
        </div>
        {/* 6 */}
        <div className="p-[20px] pr-0 bg-transparent rounded-xl text-[16px] services-button">
          <div className="p-[10px] pl-[15px] pr-[15px] w-fit  rounded-lg bg-gradient-to-r from-[#6430fb] to-[#b596fd] mb-[30px]">
            <Image
              src={services6}
              alt="service-1"
              width={50}
              height={50}
              className="sm:size-[30px] xl:size-[50px]"
            />
          </div>
          {/* <div className="gradient-image w-[26.85rem] h-[14.5rem]"></div> */}
          <div className="top-gradient-image-bottom">
            <p className="mb-[22px] md:text-[28px] sm:text-[20px]">
              Mobile App Development
            </p>
            <p className="mb-[30px] md:text-[18px] sm:text-[14px] text-zinc-500 ">
              We provide comprehensive Mobile App Development services, creating
              solutions for various platforms including iOS, Android, &
              cross-platform. Our mobi...
            </p>
            <Button className="bg-transparent !px-0 !py-0 !font-sarpanch flex gap-3 text-[26px] sm:text-[20px] know-more">
              Know more <TrendingUp className="know-more-arrow" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[50px] mb-[100px]">
        <Button className=" p-6 mt-[20px] text-[20px] rounded-full drop-shadow-lg font-semibold button-gradient">
          Explore more
        </Button>
      </div>

      <div className="mx-auto font-inter mb-[100px] w-[80%]">
        <div className="achievement flex md:flex-row sm:flex-col justify-between items-center sm:text-center">
          <div className="text-gradient text-[23px] md:w-[180px] ">
            See our Achievement
          </div>
          <hr className="border-none h-[2px] hr-gradient sm:hidden md:block" />
          <div>
            <p className="lg:text-[60px] sm:text-[40px]">89 %</p>
            <p className="text-zinc-500">Accuracy in Data</p>
          </div>{" "}
          <hr className="border-none h-[2px] hr-gradient sm:hidden md:block" />
          <div>
            <p className="lg:text-[60px] sm:text-[40px]">5M+</p>
            <p className="text-zinc-500">Global Users</p>
          </div>{" "}
          <hr className="border-none h-[2px] hr-gradient sm:hidden md:block" />
          <div>
            <p className="lg:text-[60px] sm:text-[40px]">2M+</p>
            <p className="text-zinc-500">Accuracy in Data</p>
          </div>{" "}
        </div>
        {/* <hr className="border border-zinc-700 h-1 mb-72" /> */}
      </div>
    </div>
  );
};

export default Services;
