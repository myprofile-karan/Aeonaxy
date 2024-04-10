import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import LogoBlack from "../assets/logo-black.png";
import SideBar from "./Sidebar";

const Header = ({userData}) => {
  const [show, setShow] = useState(false);
  useState(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setShow(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className="w-full py-3 border-b-2 mb-5 border-gray-200 flex items-center justify-between gap-5 px-6 flex-wrap">
      <div className="start-div flex items-center justify-center">
        <div className="logo-image w-20 sm:w-28 h-10 sm:h-14">
          <img src={LogoBlack} className="w-full h-full" alt="" />
        </div>

        <nav className="hidden text-[#66656E] text-md font-semibold lg:flex list-none gap-5 ms-5">
          <li>
            <a href="">Inspiration</a>
          </li>
          <li>
            <a href="">Find Work</a>
          </li>
          <li>
            <a href="">Learn Design</a>
          </li>
          <li>
            <a href="">Go pro</a>
          </li>
          <li>
            <a href="">Hire Designers</a>
          </li>
        </nav>

        {show && <SideBar userData={userData} setShow={setShow} />}
      </div>

      <div className="sidebar-icon lg:hidden block">
        <FontAwesomeIcon
          onClick={() => setShow(true)}
          icon={faBars}
          className="text-3xl"
        />
      </div>

      <div className="end-div hidden lg:flex gap-3">
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
        </div>
        <div className="image h-8 w-8 rounded-full overflow-hidden">
          <img src={userData?.user?.image} className="h-full w-full object-cover" alt="" />
        </div>
        <button className="bg-pink-500 h-8 px-4 text-sm rounded-lg text-white">
          Upload
        </button>
      </div>
    </header>
  );
};

export default Header;
