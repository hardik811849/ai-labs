import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
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
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
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
    <div className="hero-carousel">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <Image
              src={"carousel/5_SVG.svg"}
              width={200}
              height={200}
              alt="slide-1"
            />
          </div>
          <div>
            <Image
              src={"carousel/5_SVG (1).svg"}
              width={200}
              height={200}
              alt="slide-1"
            />{" "}
          </div>
          <div>
            <Image
              src={"carousel/5_SVG (2).svg"}
              width={200}
              height={200}
              alt="slide-1"
            />{" "}
          </div>
          <div>
            <Image
              src={"carousel/5_SVG (3).svg"}
              width={200}
              height={200}
              alt="slide-1"
            />{" "}
          </div>
          <div>
            <Image
              src={"carousel/5_SVG (4).svg"}
              width={200}
              height={200}
              alt="slide-1"
            />{" "}
          </div>
          <div>
            <Image
              src={"carousel/5_SVG.svg"}
              width={200}
              height={200}
              alt="slide-1"
            />{" "}
          </div>
          <div>
            <Image
              src={"carousel/5_SVG (1).svg"}
              width={200}
              height={200}
              alt="slide-1"
            />{" "}
          </div>
          <div>
            <Image
              src={"carousel/5_SVG (2).svg"}
              width={200}
              height={200}
              alt="slide-1"
            />{" "}
          </div>
          <div>
            <Image
              src={"carousel/5_SVG (3).svg"}
              width={200}
              height={200}
              alt="slide-1"
            />{" "}
          </div>
          <div>
            <Image
              src={"carousel/5_SVG (4).svg"}
              width={200}
              height={200}
              alt="slide-1"
            />{" "}
          </div>
          <div>
            <Image
              src={"carousel/5_SVG.svg"}
              width={200}
              height={200}
              alt="slide-1"
            />{" "}
          </div>
          <div>
            <Image
              src={"carousel/5_SVG (1).svg"}
              width={200}
              height={200}
              alt="slide-1"
            />{" "}
          </div>
          <div>
            <Image
              src={"carousel/5_SVG (2).svg"}
              width={200}
              height={200}
              alt="slide-1"
            />{" "}
          </div>
          <div>
            <Image
              src={"carousel/5_SVG (3).svg"}
              width={200}
              height={200}
              alt="slide-1"
            />{" "}
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
