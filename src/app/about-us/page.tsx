"use client";
import Image from "next/image";
import React from "react";
import robo from "../../../public/cbbfa4_6837841839e8454ca66998053fd8bfa7~mv2 1.svg";
import lappy from "../../../public/cbbfa4_35f92455f1bd435c99a2a25d66c6a849~mv2 1.svg";
import team from "../../../public/cbbfa4_3fae424ab9a8427783f01e129fad3527~mv2 1.svg";
import cf from "../../../public/e81d8d8032101ffab2ddc3fd1e2d8ab1 1.png";
import Carousel from "../components/Carousel";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center bg-gradient-to-b from-[#331D63] to-[#030114]">
        <div className="bg-[url('/Global/hero_bg.svg')] bg-cover bg-no-repeat bg-center sm:pt-40 md:pt-48 lg:pt-2 xl:pt-60 pb-48">
          <p className="text-6xl pb-2.5 font-bold text-white">About Us</p>
          <p className="text-gray-500">
            Home / &nbsp;<span className="text-white">About Us</span>
          </p>
        </div>
      </div>

      {/* Details Sections */}
      <div className="w-[90%] lg:w-[75%] xl:w-[70%] xxl:w-[80%] m-auto text-[20px] pb-[100px]">
        <p className="leading-8 pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales
          ipsum non turpis malesuada sagittis. Ut gravida augue ac massa luctus
          fringilla. Maecenas ut sagittis ligula. Integer eleifend fermentum
          eros id sagittis. Etiam vehicula eget tortor ultrices auctor. Vivamus
          imperdiet dignissim justo. Mauris at posuere felis.
        </p>
        <p className="leading-8 pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales
          ipsum non turpis malesuada sagittis. Ut gravida augue ac massa luctus
          fringilla.
        </p>
        <p className="leading-8 pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales
          ipsum non turpis malesuada sagittis.
        </p>
      </div>

      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[90%] m-auto gap-8">
        <div className="m-auto up-down-animation">
          <Image src={robo} alt="robo" width={500} height={500} />
        </div>
        <div>
          <h2 className="text-6xl mb-8">Why Us?</h2>
          <p className="mb-8 text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            sodales ipsum non turpis malesuada sagittis. Ut gravida augue ac
            massa luctus fringilla. Maecenas ut sagittis ligula. Integer
            eleifend fermentum eros id sagittis.
          </p>
          <p className="mb-8 text-[24px]">
            Etiam vehicula eget tortor ultrices auctor. Vivamus imperdiet
            dignissim justo. Mauris at posuere felis. Quisque laoreet commodo
            sapien nec pellentesque. Donec sollicitudin lacus ac ex consectetur
            vehicula. Donec sagittis vulputate mi, ac convallis felis lacinia
            id.
          </p>
          <p className="mb-8 text-[24px]">
            Proin volutpat libero lectus, sed mattis risus convallis a. Sed sit
            amet eros tortor. Phasellus malesuada dui non dui lobortis egestas.
          </p>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-reverse sm:grid-cols-1 xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[90%] m-auto gap-8">
        <div className="xl:order-1 md:order-2">
          <h2 className="text-6xl mb-8">Our Expertise</h2>
          <p className="mb-8 text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            sodales ipsum non turpis malesuada sagittis. Ut gravida augue ac
            massa luctus fringilla. Maecenas ut sagittis ligula. Integer
            eleifend fermentum eros id sagittis.
          </p>
          <p className="mb-8 text-[24px]">
            Etiam vehicula eget tortor ultrices auctor. Vivamus imperdiet
            dignissim justo. Mauris at posuere felis. Quisque laoreet commodo
            sapien nec pellentesque. Donec sollicitudin lacus ac ex consectetur
            vehicula. Donec sagittis vulputate mi, ac convallis felis lacinia
            id.
          </p>
          <p className="mb-8 text-[24px]">
            Proin volutpat libero lectus, sed mattis risus convallis a. Sed sit
            amet eros tortor. Phasellus malesuada dui non dui lobortis egestas.
          </p>
        </div>
        <div className="m-auto up-down-animation xl:order-2 md:order-1">
          <Image src={lappy} alt="robo" width={500} height={500} />
        </div>
      </div>

      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[90%] m-auto gap-8">
        <div className="m-auto up-down-animation">
          <Image src={team} alt="robo" width={500} height={500} />
        </div>
        <div>
          <h2 className="text-6xl mb-8">Team Work</h2>
          <p className="mb-8 text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            sodales ipsum non turpis malesuada sagittis. Ut gravida augue ac
            massa luctus fringilla. Maecenas ut sagittis ligula. Integer
            eleifend fermentum eros id sagittis.
          </p>
          <p className="mb-8 text-[24px]">
            Etiam vehicula eget tortor ultrices auctor. Vivamus imperdiet
            dignissim justo. Mauris at posuere felis. Quisque laoreet commodo
            sapien nec pellentesque. Donec sollicitudin lacus ac ex consectetur
            vehicula. Donec sagittis vulputate mi, ac convallis felis lacinia
            id.
          </p>
          <p className="mb-8 text-[24px]">
            Proin volutpat libero lectus, sed mattis risus convallis a. Sed sit
            amet eros tortor. Phasellus malesuada dui non dui lobortis egestas.
          </p>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-reverse sm:grid-cols-1 xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[90%] m-auto gap-8">
        <div className="xl:order-1 md:order-2">
          <h2 className="text-6xl mb-8">Customer Focus</h2>
          <p className="mb-8 text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            sodales ipsum non turpis malesuada sagittis. Ut gravida augue ac
            massa luctus fringilla. Maecenas ut sagittis ligula. Integer
            eleifend fermentum eros id sagittis.
          </p>
          <p className="mb-8 text-[24px]">
            Etiam vehicula eget tortor ultrices auctor. Vivamus imperdiet
            dignissim justo. Mauris at posuere felis. Quisque laoreet commodo
            sapien nec pellentesque. Donec sollicitudin lacus ac ex consectetur
            vehicula. Donec sagittis vulputate mi, ac convallis felis lacinia
            id.
          </p>
          <p className="mb-8 text-[24px]">
            Proin volutpat libero lectus, sed mattis risus convallis a. Sed sit
            amet eros tortor. Phasellus malesuada dui non dui lobortis egestas.
          </p>
        </div>
        <div className="m-auto spin-animation xl:order-2 md:order-1">
          <Image src={cf} alt="robo" width={500} height={500} />
        </div>
      </div>

      <div className="mt-20 mb-20">
        <Carousel />
      </div>
    </div>
  );
};

export default AboutUs;
