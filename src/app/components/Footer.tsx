import Image from "next/image";
import React from "react";
import logo from "../../../public/Ai-labs-logo.svg";
import gfutureLogo from "../../../public/gfutureLogo.svg";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <div className="footer-gradient text-[16px] w-full">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:w-[95%] xl:w-[80%] m-auto p-8">
        <div className="lg:w-[300px] sm:w-full sm:mb-6 lg:mb-0">
          <Image src={logo} width={150} height={150} alt="logo" />
          <div className="pt-5">
            At AI Labs, we specialize in Computer Vision, NLP, Chatbots, and
            more, harnessing the power of AI to transform businesses. Explore
            our suite of services and embark on a journey of innovation today.
          </div>
        </div>

        <div className=" flex lg:flex-row sm:flex-col justify-between sm:text-center md:text-left">
          {/* <div className=" flex lg:flex-row sm:flex-col sm:text-center justify-between"> */}
          <div>
            <p className="footer-text-gradient mb-[30px] text-2xl font-bold">
              Follow Us
            </p>
            <div className="sm:flex sm:flex-col md:flex-row lg:block justify-between sm:mb-6 lg:mb-0">
              <p className="mb-2.5">Twitter</p>
              <p className="mb-2.5">Telegram</p>
              <p className="mb-2.5">GitHub</p>
              <p className="mb-2.5">LinkedIn</p>
            </div>
          </div>
          <div>
            <p className="footer-text-gradient mb-[30px] text-2xl font-bold">
              <Link href={"/"}>Home</Link>
            </p>
            <div className="sm:flex sm:flex-col md:flex-row lg:block justify-between sm:mb-6 lg:mb-0">
              <p className="mb-2.5">
                <Link href={"/about-uus"}>About Us</Link>
              </p>
              <p className="mb-2.5">
                <Link href={"/career"}>Career</Link>
              </p>
              <p className="mb-2.5">
                <Link href={"/hire-dev"}>Hire Developers</Link>
              </p>
              <p className="mb-2.5">
                <Link href={"/blog"}>Blog</Link>
              </p>
            </div>
          </div>
          <div>
            <p className="footer-text-gradient mb-[30px] text-2xl font-bold">
              Contact Us
            </p>
            <div className="relative flex w-full max-w-sm items-center space-x-2">
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="rounded-full footer-input placeholder:text-white text-[14px]"
              />
              <div className="absolute top-2 trending-right ">
                <TrendingUp />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider md:w-[95%] xl:w-[80%]" />
      <div className="flex lg:flex-row sm:flex-col justify-between items-center md:w-[95%] xl:w-[80%] m-auto p-8">
        <p className="sm:mb-4 lg:mb-0 sm:text-center lg:text-left">
          Copyright © 2024 . All Rights Reserved
        </p>
        <Image
          src={gfutureLogo}
          width={120}
          height={100}
          alt="logo"
          className="sm:mb-4 lg:mb-0"
        />
        <p className="sm:text-center lg:text-left">
          Powered by:{" "}
          <span className="footer-text-gradient">
            Gfuture Tech Private Limited
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
