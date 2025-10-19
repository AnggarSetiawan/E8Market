import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const Categories = [
  {
    id: "1",
    image: "/assets/sold/CARHAT-DETROIT.svg",
    name: "CARHATT DETROIT",
  },
  {
    id: "2",
    image: "/assets/sold/CARHAT-BLUE.svg",
    name: "VINTAGE 00s CARHATT HOODIE",
  },
  {
    id: "3",
    image: "/assets/sold/CARHAT-PANTS2.svg",
    name: "CARHATT DETROIT",
  },
  {
    id: "4",
    image: "/assets/sold/GREEN-CARHAT.svg",
    name: "VINTAGE 00s CARHATT ACTIVE JACKET",
  },
  {
    id: "5",
    image: "/assets/sold/CARHAT-PANTS1.svg",
    name: "VINTAGE CARHATT DOUBLEKNEE PANTS",
  },
  {
    id: "6",
    image: "/assets/sold/MB-TEES.svg",
    name: "MODERN BOOTLEG TEES",
  },
];

export default function SwiperReact() {
  return (
    <div>
      <div className="flex justify-center min-[200px]:mt-9 min-lg:mt-29">
        <h1 className="min-sm:text-[2rem] min-xl:text-4xl text-center font-bold text-shadow-2xs text-shadow-gray-800 italic">
          RECENTLY SOLD THIS WEEK
        </h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {Categories.map((item, index) => (
          <SwiperSlide key={index} className="mt-8  mb-12">
            <div className=" h-15 w-70">
              <h1 className=" flex justify-center items-center max-lg:w-70 h-15 min-[200px]:text-[.9rem] min-lg:text-[1.2rem] min-xl:text-xl text-center font-bold italic">
                {item.name}
              </h1>
            </div>
            {/* <h1>{item.name}</h1> */}
            <img
              src={item.image}
              className=" max-lg: max-xl:px-9 min-[200px]:w-70 min-[768px]:w-[23rem] "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
