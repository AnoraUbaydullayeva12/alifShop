import React from "react";
import Slider from "react-slick";
import Img from "../assets/img1.png"; // Make sure the path is correct
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: Img,
    alt: "Скидки до 60%",
  },
  {
    src: Img,
    alt: "Скидки на телефоны",
  },
  {
    src: Img,
    alt: "Скидки на ноутбуки",
  },
];

const SliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full  mx-auto p-4">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderBanner;
