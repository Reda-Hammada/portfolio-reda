import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToggle } from "../../hooks/useToggle/useToggle";
import { ReusableList } from "../List/ReusableList";

const Navbar = () => {
  const [isAnimationVisible, toggle] = useToggle();
  const isToggleFunction = typeof toggle === "function";

  // Handler for the FontAwesomeIcon onClick event
  const handleIconClick = () => {
    if (isToggleFunction) {
      toggle(); // Call the toggle function
    }
  };

  return (
    <header className="w-full fixed bg-white z-10 font-[900] shadow-sm ">
      <nav className="w-[100%] pb-4 flex justify-between text-[#2d2e32]">
        <div className="ml-12 mt-6">
          <a href="#home">
            <h1 className="text-xl">
              {"< Reda.dev /> "}
            </h1>
          </a>
        </div>
        <div className="">
          {/*navbar list for large screens  */}
          <ul className="lg:flex min-[320px]:hidden   mr-12 mt-6 justify-between">
            <a href="#home">
              <ReusableList
                className="mr-7 cursor-pointer hover:text-[#147efb]"
                text="Home"
              />
            </a>
            <a href="#skills-section">
              <ReusableList
                className="mr-7 cursor-pointer hover:text-[#147efb]"
                text="Skills"
              />
            </a>
            <a href="#projects-section">
              <ReusableList
                className="mr-7 cursor-pointer hover:text-[#147efb]"
                text="Projects"
              />
            </a>
            <a href="#about-section">
              <ReusableList
                className="mr-7 cursor-pointer hover:text-[#147efb]"
                text="About"
              />
            </a>
            <a href="#contact-section">
              <ReusableList
                className="mr-7 cursor-pointer hover:text-[#147efb]"
                text="Contact"
              />
            </a>
          </ul>
          {/* Navbar burger */}
          <FontAwesomeIcon
            className="font-[900] cursor-pointer hover:text-[#147efb] lg:hidden mr-12 mt-6 text-2xl"
            onClick={handleIconClick}
            icon={faBars}
            size="lg"
          />
        </div>
        {/*Navbar for mobile and tablet */}
        <motion.div
          className="bg-white absolute h-screen lg:hidden max-[800px]:block  w-screen bottom-0 top-0 left-0 "
          animate={{ x: isAnimationVisible ? 0 : 2000 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <div
            onClick={handleIconClick}
            className="font-extrabold	 w-[100%] ml-[85%] text-[30px] rounded hover:text-[#147efb] cursor-pointer font-poppins mr-12 mt-5 mb-12"
          >
            X
          </div>
          <ul className=" flex-col text-center w-[100%] text-2xl mt-28 mr-12 mt-6 justify-center">
            <a onClick={handleIconClick} href="#home">
              <ReusableList
                className="mr-7 mb-6 cursor-pointer hover:text-[#147efb]"
                text="Home"
              />
            </a>
            <a onClick={handleIconClick} href="#skills-section">
              <ReusableList
                className="mr-7 mb-6 cursor-pointer hover:text-[#147efb]"
                text="Skills"
              />
            </a>
            <a onClick={handleIconClick} href="#projects-section">
              <ReusableList
                className="mr-7 mb-6 cursor-pointer hover:text-[#147efb]"
                text="Projects"
              />
            </a>
            <a onClick={handleIconClick} href="#about-section">
              <ReusableList
                className="mr-7  mb-6 cursor-pointer hover:text-[#147efb]"
                text="About"
              />
            </a>
            <a onClick={handleIconClick} href="#contact-section">
              <ReusableList
                className="mr-7  mb-6 cursor-pointer hover:text-[#147efb]"
                text="Contact"
              />
            </a>
          </ul>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;
