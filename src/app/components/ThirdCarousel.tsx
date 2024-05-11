import React, { forwardRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

const ThirdCarousel = forwardRef<Slider>((props, ref) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          initialSlide: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          initialSlide: 0,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="">
      <div className="slider-container third-carousel ">
        <Slider {...settings}>
          <div className="others-say">
            <p className="sm:text-[14px] md:text-[18px]">
              AI doesn’t have to be evil to destroy humanity-if AI has a goal
              and humanity just happens to come in the way. It will destroy
              humanity as a matter of course.
            </p>
            <hr className="h-[1px] w-[75%] m-[auto] my-6 border-zinc-900" />
            <div className="flex justify-center">
              <Image
                src={"what_others_say/profile1.svg"}
                height={50}
                width={50}
                alt="profile1"
                className="mr-5"
              />
              <div>
                <p className="text-zinc-400 sm:text-[16px] md:text-[20px]">
                  Panglima Bagas
                </p>
                <p className="text-zinc-600"> CEO of Log Zetas</p>
              </div>
            </div>
          </div>
          <div className=" others-say">
            <p className=" sm:text-[14px] md:text-[18px]">
              As more and more artificial intelligence is entering into the
              world, more and more emotional intelligence must enter into
              leadership.
            </p>
            <hr className="h-[1px] w-[75%] m-[auto] my-6 border-zinc-900" />
            <div className="flex justify-center">
              <Image
                src={"what_others_say/profile3.svg"}
                height={50}
                width={50}
                alt="profile2"
                className="mr-5"
              />
              <div>
                <p className=" sm:text-[16px] md:text-[20px]">Amit Ray</p>
                <p className="text-zinc-600"> Co-founder</p>
              </div>
            </div>
          </div>
          <div className=" others-say">
            <p className=" sm:text-[14px] md:text-[18px]">
              As more and more artificial intelligence is entering into the
              world, more and more emotional intelligence must enter into
              leadership.
            </p>
            <hr className="h-[1px] w-[75%] m-[auto] my-6 border-zinc-900" />
            <div className="flex justify-center">
              <Image
                src={"what_others_say/profile2.svg"}
                height={50}
                width={50}
                alt="profile3"
                className="mr-5"
              />
              <div>
                <p className=" sm:text-[16px] md:text-[20px]">Elon Musk</p>
                <p className="text-zinc-600"> Famous AI Scientist</p>
              </div>
            </div>
          </div>
          <div className=" others-say">
            <p className=" sm:text-[14px] md:text-[18px]">
              AI doesn’t have to be evil to destroy humanity-if AI has a goal
              and humanity just happens to come in the way. It will destroy
              humanity as a matter of course.
            </p>
            <hr className="h-[1px] w-[75%] m-[auto] my-6 border-zinc-900" />
            <div className="flex justify-center">
              <Image
                src={"what_others_say/profile1.svg"}
                height={50}
                width={50}
                alt="profile4"
                className="mr-5"
              />
              <div>
                <p className=" sm:text-[16px] md:text-[20px]">Panglima Bagas</p>
                <p className="text-zinc-600"> CEO of Log Zetas</p>
              </div>
            </div>
          </div>
          <div className=" others-say">
            <p className=" sm:text-[14px] md:text-[18px]">
              As more and more artificial intelligence is entering into the
              world, more and more emotional intelligence must enter into
              leadership.
            </p>
            <hr className="h-[1px] w-[75%] m-[auto] my-6 border-zinc-900" />
            <div className="flex justify-center">
              <Image
                src={"what_others_say/profile2.svg"}
                height={50}
                width={50}
                alt="profile5"
                className="mr-5"
              />
              <div>
                <p className=" sm:text-[16px] md:text-[20px]">Elon Musk</p>
                <p className="text-zinc-600">Famous AI Scientist</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
});

ThirdCarousel.displayName = "ThirdCarousel";

export default ThirdCarousel;
