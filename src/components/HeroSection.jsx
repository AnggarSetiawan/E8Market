import Slider from "react-slick";

const Heros = [
  {
    id: "1",
    image: "/assets/main/CH.webp",
    title: "",
  },
  {
    id: "2",
    image: "/assets/main/SW.webp",
    title: "",
  },
  {
    id: "3",
    image: "/assets/main/BB.webp",
    title: "",
  },
  {
    id: "4",
    image: "/assets/main/QS.webp",
    title: "",
  },
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };
  return (
    <div className="mb-15">
      <Slider {...settings} className="mb-30 max-md:mb-10">
        {Heros.map((hero) => {
          return (
            <>
              <div className="border-2 absolute max-sm:pt-32 max-sm:pl-7 min-sm:pt-65 min-sm:pl-20 min-md:pt-80 min-md:pl-40 min-xl:pt-115 min-xl:pl-70 ">
                <button
                  className="btn w-fit flex justify-center cursor-pointer   bg-gray-100 text-black  hover:bg-black hover:text-white
                transition-all duration-400 max-sm:text-xs in-xl:text-5xlshadow-2xlmax-sm:text-xs min-md:text-2xl in-xl:text-5xl font-semibold border-2 p-2 rounded-2xl shadow-2xl "
                >
                  SHOPNOW
                </button>
              </div>
              <img
                src={hero.image}
                className="min-xl:px-30 min-md:px-20  bg-auto rounded-lg  shadow-b-md shadow-slate-900 min-xl:h-[640px] min-xl:w-full min-xl:mx-auto"
              />
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default HeroSection;
