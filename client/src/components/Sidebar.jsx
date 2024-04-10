import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ setShow, userData }) => {
  return (
    <div
      className="sidebar absolute w-1/2 md:w-[35%] h-screen z-[4] right-[0%] top-0 bg-white"
      data-aos="fade-left"
    >
      <i
        onClick={() => setShow(false)}
        className="fa-solid fa-xmark text-3xl absolute top-5 right-10 cursor-pointer"
      ></i>

      <ul className="flex flex-col justify-center py-10 mt-5">
        <li className="mb-2 flex flex-col items-start justify-center px-3 gap-2">
          <div className="search-input flex items-center h-8 rounded-lg overflow-hidden">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-4 text-sm text-gray-500 px-2 h-full bg-[#F2F5F4]"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-24 h-full bg-[#F2F5F4]"
            />
            <div className="h-8 w-8 ms-2 rounded-full overflow-hidden">
              <img
                src={userData?.user?.image}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
          </div>

          <button className="bg-pink-500 h-8 px-4 text-sm rounded-lg text-white">
            Upload
          </button>
        </li>
        <li className="mb-2">
          <a
            href="#inspiration"
            className="block py-3 px-6 rounded-lg text-md sm:text-xl font-bold hover:bg-gray-200 transition-all"
          >
            Inspiration
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#fIndWork"
            className="block py-3 px-6 rounded-lg text-md sm:text-xl font-bold hover:bg-gray-200 transition-all"
          >
            FInd Work
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#learnDesign"
            className="block py-3 px-6 rounded-lg text-md sm:text-xl font-bold hover:bg-gray-200 transition-all"
          >
            Learn Design
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#goPro"
            className="block py-3 px-6 rounded-lg text-md sm:text-xl font-bold hover:bg-gray-200 transition-all"
          >
            Go Pro
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#hireDesigners"
            className="block py-3 px-6 rounded-lg text-md sm:text-xl font-bold hover:bg-gray-200 transition-all"
          >
            Hire Designers
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
