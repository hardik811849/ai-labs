"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/Ai-labs-logo.svg";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import styled from "styled-components";

const Navbar = () => {
  return (
    <div className=" w-full absolute z-10 flex flex-col items-center justify-center pt-5 ">
      <div className=" w-4/5 flex justify-between items-center ">
        <Link href={"/"}>
          <Image src={logo} alt="Logo" className="w-72" />
        </Link>

        <div className="text-white font-semibold text-2xl w-[882px] flex justify-between ">
          <Link href={"/"} className="hover:cursor-pointer text-gradient-hover">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="border-none text-gradient-hover">
              About
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-transparent text-white hover:bg-none">
              <DropdownMenuLabel>
                <Link href={"/about-us"} className="text-gradient-hover">
                  About US
                </Link>
              </DropdownMenuLabel>
              <DropdownMenuLabel className="text-gradient-hover">
                Profile
              </DropdownMenuLabel>
              <DropdownMenuLabel className="text-gradient-hover">
                Billing
              </DropdownMenuLabel>
              <DropdownMenuLabel className="text-gradient-hover">
                Team
              </DropdownMenuLabel>
              <DropdownMenuLabel className="text-gradient-hover">
                Subscription
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href={"/solutions"} className="text-gradient-hover">
            Solutions
          </Link>
          <Link href={"/case-studys"} className="text-gradient-hover">
            Case Studies
          </Link>
          <Link href={"/blog"} className="text-gradient-hover">
            Blog
          </Link>
          <Link href={"/contact-us"} className="text-gradient-hover">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// const DIV = styled.div`
//   .text-gradient:hover {
//   }
// `;
