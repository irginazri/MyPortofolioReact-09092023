import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

const Navbar = () => {
  let links = [
    { name: "Home", link: "header" },
    { name: "About", link: "about" },
    { name: "Skill", link: "skill" },
    { name: "Contact", link: "contact" },
  ];

  let [isOpen, setisOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-[1] ">
      <div className="md:px-10 py-4 md:py-2 px-7 md:flex justify-between items-center bg-white">
      
      {/* LOGO */}
        <div className="flex w-[90px] md:w-[150px] items-center gap-2 ">
        <img
          src="/irgilogo.png" 
        />
        </div>

          <div
            onClick={() => setisOpen(!isOpen)}
            className="w-7 h-7 absolute right-8 top-5 cursor-pointer md:hidden"
          >
            {isOpen ? <XMarkIcon className="hover:bg-orange-500 rounded-full"/> : <Bars3Icon lassName="hover:bg-orange-500 rounded-full"/>}
          </div>

      {/* NAV LINK HERE */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
          ${
            isOpen ? "top-12" : "top-[-490px]"
          }`}
        >
          {
          links.map(link => <li key={link.name} className=" font-semibold text-xl my-7 md:my-0 md:ml-8 hover:text-orange-700 cursor-pointer">
              <Link 
              to={link.link}
              activeClass="active"
              smooth={true}
              spy={true}
              >{link.name}</Link>
            </li>)
          }
        </ul>
      
      </div>
    </div>
  );
};

export default Navbar;
 