// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Heros = [
  {
    id: "1",
    image: "/assets/main/CH.webp",
    link: "LINK BRAND",
  },
  {
    id: "2",
    image: "/assets/main/SW.webp",
    link: "LINK BRAND",
  },
  {
    id: "3",
    image: "/assets/main/BB.webp",
    link: "LINK BRAND",
  },
  {
    id: "4",
    image: "/assets/main/QS.webp",
    link: "LINK BRAND",
  },
];

export default function HeroSec() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Heros.map((item, index) => (
          <SwiperSlide key={index} className="mt-5  mb-8">
            <div className="absolute min-xl:ml-5 min-xl:mt-80 min-lg:mt-70 min-sm:mt-55 min-[200px]:mt-25">
              <button
                className="btn w-fit flex justify-center cursor-pointer   bg-gray-100 text-black  hover:bg-black hover:text-white
                transition-all duration-400 max-sm:text-xs in-xl:text-5xlshadow-2xlmax-sm:text-xs min-md:text-2xl in-xl:text-5xl font-semibold border-2 p-2 rounded-2xl shadow-2xl "
              >
                <a href={item.link}>SHOPNOW</a>
              </button>
            </div>
            <div>
              <img
                src={item.image}
                className="  bg-auto shadow-b-md shadow-slate-900 min-xl:h-[670px] min-xl:w-full min-xl:mx-auto shadow-lg "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
