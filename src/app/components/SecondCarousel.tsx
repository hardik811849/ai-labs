// SecondCarousel.js
import React, { forwardRef } from "react";
import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import resource1 from "../../../public/resources-1.png.png";
import resource2 from "../../../public/resources-2.png.png";
import resource3 from "../../../public/resources-3.png.png";

const SecondCarousel = forwardRef<Slider>((props, ref) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <div className="slider-container">
        <Slider ref={ref} {...settings}>
          <div className="p-[20px] border border-zinc-700 rounded-3xl carousel-slider">
            <Image
              src={resource1}
              width={500}
              height={500}
              alt="1"
              className="mb-[30px]"
            />
            <p className="text-[24px] mb-[20px]">
              A Journey into the Heart of Innovation
            </p>
            <p className="mb-[30px] text-[14px] text-zinc-500">
              Artificial Intelligence (AI) has transcended the realm of science
              fiction, becoming a pervasive force that...
            </p>
            <Button className="bg-transparent !px-0 !py-0 !font-sarpanch flex gap-3 text-[26px] know-more">
              Know more <TrendingUp className="know-more-arrow" />
            </Button>
          </div>
          <div className="p-[20px] border border-zinc-700 rounded-3xl carousel-slider">
            <Image
              src={resource2}
              width={500}
              height={500}
              alt="2"
              className="mb-[30px]"
            />
            <p className="text-[24px] mb-[20px]">
              The Intersection between Technology and Art{" "}
            </p>
            <p className="mb-[30px] text-[14px] text-zinc-500">
              Contrary to popular belief, AI is not just algorithms and data;
              its also a powerful tool for unleashing...
            </p>
            <Button className="bg-transparent !px-0 !py-0 !font-sarpanch flex gap-3 text-[26px] know-more">
              Know more <TrendingUp className="know-more-arrow" />
            </Button>
          </div>
          <div className="p-[20px] border border-zinc-700 rounded-3xl carousel-slider">
            <Image
              src={resource3}
              width={500}
              height={500}
              alt="3"
              className="mb-[30px]"
            />
            <p className="text-[24px] mb-[20px]">
              Tackle Global Challenges with Technology{" "}
            </p>
            <p className="mb-[30px] text-[14px] text-zinc-500">
              Explore the inspiring initiatives where AI is harnessed for the
              greater good. From addressing environment...
            </p>
            <Button className="bg-transparent !px-0 !py-0 !font-sarpanch flex gap-3 text-[26px] know-more">
              Know more <TrendingUp className="know-more-arrow" />
            </Button>
          </div>
          <div className="p-[20px] border border-zinc-700 rounded-3xl carousel-slider">
            <Image
              src={resource3}
              width={500}
              height={500}
              alt="3"
              className="mb-[30px]"
            />
            <p className="text-[24px] mb-[20px]">
              Tackle Global Challenges with Technology{" "}
            </p>
            <p className="mb-[30px] text-[14px] text-zinc-500">
              Explore the inspiring initiatives where AI is harnessed for the
              greater good. From addressing environment...
            </p>
            <Button className="bg-transparent !px-0 !py-0 !font-sarpanch flex gap-3 text-[26px] know-more">
              Know more <TrendingUp className="know-more-arrow" />
            </Button>
          </div>
          <div className="p-[20px] border border-zinc-700 rounded-3xl carousel-slider">
            <Image
              src={resource3}
              width={500}
              height={500}
              alt="3"
              className="mb-[30px]"
            />
            <p className="text-[24px] mb-[20px]">
              Tackle Global Challenges with Technology{" "}
            </p>
            <p className="mb-[30px] text-[14px] text-zinc-500">
              Explore the inspiring initiatives where AI is harnessed for the
              greater good. From addressing environment...
            </p>
            <Button className="bg-transparent !px-0 !py-0 !font-sarpanch flex gap-3 text-[26px] know-more">
              Know more <TrendingUp className="know-more-arrow" />
            </Button>
          </div>
        </Slider>
      </div>
    </div>
  );
});

SecondCarousel.displayName = "SecondCarousel";

export default SecondCarousel;
