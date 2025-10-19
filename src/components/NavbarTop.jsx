import Logo from "/public/assets/main/LOGO2.svg";
import {
  Bars4Icon,
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

const NavbarTop = () => {
  return (
    <>
      <div className="flex justify-between items-center shadow-lg sticky top-0 z-999 bg-white">
        <div className="navbar-extra p-2 text-xl m-4 flex justify-center items-center gap-3">
          <a href="#" id="menu-bar">
            <Bars4Icon className="max-xs:size-4.5 min-[543px]:size-5.5 text-black-300 min-md:hidden" />
          </a>
          <a href="#" id="search">
            <MagnifyingGlassIcon className="max-xs:size-4.5 min-[543px]:size-5.5 text-black-300 " />
          </a>
        </div>
        <img
          src={Logo}
          className="pt-5 min-lg:w-70 min-lg:h-25 xs:w-40 xs:h-15"
        />
        <div className="navbar-extra text-xl m-4 flex justify-center items-center gap-3">
          <a href="#" id="userarea">
            <UserIcon className="max-xs:size-4.5 min-[543px]:size-5.5 text-black-300 " />
          </a>
          <a href="#" id="shopping-bag">
            <ShoppingBagIcon className="max-xs:size-4.5 min-[543px]:size-5.5   text-black-300 " />
          </a>
        </div>
      </div>
      <div className="max-[800px]:hidden  p-1 border-t-1 border-gray-300 shadow-lg shadow-gray-300 sticky max-md:top-16 top-24 z-999 bg-white">
        <div className="flex justify-center items-center gap-9 text-lg text-black uppercase ">
          <a
            href="#home"
            className=" hover:bg-black hover:text-white rounded-xl px-2 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="Shop ALL"
            className=" hover:bg-black hover:text-white rounded-xl px-2 transition-all duration-300"
          >
            Shop All
          </a>
          <a
            href="Brands"
            className=" hover:bg-black hover:text-white rounded-xl px-2 transition-all duration-300"
          >
            Brands
          </a>
          <a
            href="about"
            className=" hover:bg-black hover:text-white rounded-xl px-2 transition-all duration-300"
          >
            About Us
          </a>
          <a
            href="contact"
            className=" hover:bg-black hover:text-white rounded-xl px-2 transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default NavbarTop;
