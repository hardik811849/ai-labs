"use client";
import Image from "next/image";
import React, { useState } from "react";
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
import { Menu, Plus } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" w-full absolute z-10 flex flex-col items-center justify-center sm:pt-3 xl:pt-5 sm:pt-0">
      <div className="w-[90%] flex justify-between items-center ">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Logo"
            className="md:h-[50px] md:w-[auto] sm:h-[48px] sm:w-[auto] xl:h-[60px] xl:w-[auto] mt-0"
          />
        </Link>
        {!isMenuOpen && (
          <Menu className="xl:hidden" onClick={toggleMenu} size="28px" />
        )}
        {isMenuOpen && (
          <Plus
            className="xl:hidden sm:z-20 sm:rotate-45"
            onClick={toggleMenu}
          />
        )}
        <div
          className={` xl:flex xl:flex-row xl:bg-none xl:p-0 xl:pt-0 xl:space-y-0 xl:relative xl:top-0 text-white font-semibold xl:text-2xl xl:w-[65%] justify-between sm:${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex-col sm:bg-gradient-to-b from-[#322b4d] to-[#030114] sm:mt-[-10px] sm:p-4 sm:pt-[50px] sm:px-10 sm:space-y-4 sm:absolute sm:w-full sm:top-1 sm:left-0 sm:text-lg sm:items-center`}
        >
          <Link href={"/"} className="hover:cursor-pointer text-gradient-hover">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="border-none text-gradient-hover sm:w-fit xl:w-[auto]">
              About
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-white text-center border-none xl:hover:bg-none bg-[#0C0E16] sm:w-56 xl:w-fit">
              <DropdownMenuLabel>
                <Link href={"/about-us"} className="text-gradient-hover">
                  About Us
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
