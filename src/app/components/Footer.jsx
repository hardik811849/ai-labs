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
    <div className="footer-gradient w-full p-96">
      <div className="grid grid-cols-2 w-[80%] m-auto p-8">
        <div className="w-[50%]">
          <Image src={logo} width={150} height={150} alt="logo" />
          <div className="pt-5">
            At AI Labs, we specialize in Computer Vision, NLP, Chatbots, and
            more, harnessing the power of AI to transform businesses. Explore
            our suite of services and embark on a journey of innovation today.
          </div>
        </div>

        <div className=" flex justify-between">
          <div>
            <p className="footer-text-gradient mb-[30px] text-xl font-bold">
              Follow Us
            </p>
            <p className="mb-2.5">Twitter</p>
            <p className="mb-2.5">Telegram</p>
            <p className="mb-2.5">GitHub</p>
            <p className="mb-2.5">LinkedIn</p>
          </div>
          <div>
            <p className="footer-text-gradient mb-[30px] text-xl font-bold">
              <Link href={"/"}>Home</Link>
            </p>
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
          <div>
            <p className="footer-text-gradient mb-[30px] text-xl font-bold">
              Contact Us
            </p>
            <div className="relative flex w-full max-w-sm items-center space-x-2">
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="rounded-full footer-input placeholder:text-white"
              />
              <div className="absolute top-3 trending-right ">
                <TrendingUp />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider w-[80%] m-auto m-8" />
      <div className="flex justify-between items-center w-[80%] m-auto p-8">
        <p>Copyright © 2024 . All Rights Reserved</p>
        <Image src={gfutureLogo} width={120} height={100} alt="logo" />
        <p>
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
