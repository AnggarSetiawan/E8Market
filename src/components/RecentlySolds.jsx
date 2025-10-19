import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, textShadow: "3px 3px 8px black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, textShadow: "3px 3px 8px black" }}
      onClick={onClick}
    />
  );
}

const Solds = [
  {
    id: "1",
    image: "/assets/sold/CARHAT-DETROIT.svg",
    name: "CARHATT DETROIT",
  },
  {
    id: "2",
    image: "/assets/sold/CARHAT-BLUE.svg",
    name: "VINTAGE 00S CARHATT HOODIE",
  },
  {
    id: "3",
    image: "/assets/sold/CARHAT-PANTS2.svg",
    name: "CARHATT DETROIT",
  },
  {
    id: "4",
    image: "/assets/sold/GREEN-CARHAT.svg",
    name: "VINTAGE CARHATT 00S - ACTIVE JACKET",
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

const RecentlySold = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1924,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     initialSlide: 2,
      //   },
      // },
      // {
      //   breakpoint: 700,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  return (
    <div className=" h-full pt-10 px-auto">
      <div className="w-screen  flex justify-center items-center">
        <h1 className="min-lg:text-[2rem] min-xl:text-4xl text-center font-bold text-shadow-2xs text-shadow-gray-800 italic">
          RECENTLY SOLD THIS WEEK
        </h1>
      </div>
      <div className=" mt-0 m-10">
        <Slider {...settings}>
          {Solds.map((item, index) => (
            <div key={index} className="flex! ">
              <div className="flex flex-col justify-center items-center gap-4">
                <p className=" flex justify-center items-center w-full h-11 min-lg:text-[1.1rem] min-xl:text-xl text-center  font-bold italic">
                  {item.name}
                </p>
                <img
                  src={item.image}
                  className="bg-auto rounded-2xl shadow-md shadow-slate-900"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecentlySold;
