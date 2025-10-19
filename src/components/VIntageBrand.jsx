const Brands = [
  {
    id: "1",
    image: "/assets/brand/ONEILL-LOGO.jpeg",
    name: "CARHATT DETROIT",
  },
  {
    id: "2",
    image: "/assets/brand/BILLABONG-LOGO.jpeg",
    name: "VINTAGE 00S CARHATT HOODIE",
  },
  {
    id: "3",
    image: "/assets/brand/CARHARTT.webp",
    name: "CARHATT DETROIT",
  },
  {
    id: "4",
    image: "/assets/brand/HURLEY-LOGO.jpeg",
    name: "VINTAGE CARHATT 00S ACTIVE JACKET",
  },
  {
    id: "5",
    image: "/assets/brand/OAKLEY-LOGO.jpeg",
    name: "VINTAGE CARHATT DOUBLEKNEE PANTS",
  },
  {
    id: "6",
    image: "/assets/brand/UMBRO-LOGO.jpeg",
    name: "MODERN BOOTLEG TEES",
  },
];

const VIntageBrand = () => {
  return (
    <div className=" h-50 mt-10 max-[600px]:mt-5">
      <div className=" flex justify-center min-lg:text-[2rem] min-xl:text-4xl text-center font-bold text-shadow-2xs text-shadow-gray-800 italic min-sm:text-[2rem]">
        <h1>POPULAR BRAND</h1>
      </div>
      <div className="h-fit flex  mt-10 ">
        {Brands.map((item, index) => (
          <div key={index} className="w-full">
            <img
              src={item.image}
              className="min-[200px]:h-7 min-sm:h-11 min-md:h-14 min-xl:h-20 w-fit mx-auto"
            />
          </div>
        ))}
      </div>
      {/* <div className="h-[100px] border-2 flex justify-center items-center"></div> */}
    </div>
  );
};

export default VIntageBrand;
