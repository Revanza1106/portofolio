import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Navbar from "./Navbar";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] ">
      {/* Conteiner */}
      
      <div className="max-w-[700px] mx-auto px-8 flex flex-col justify-center text-left left-0 h-full">
        <p className="text-[#7cc5d9] ml-1">Hi,my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Revanza Firdaus
          </h1>
        <h2 className="text-4xl sm:text-7xL font-bold text-[#8992b0] ml-1">
          I'm a Frontend Developer
          </h2>
        <p className="text-[#8992b0] py-1 max-w ml-1">I'm a Front End Developer focused on building responsive web aplication.
        </p>

        <div className="">
          <button className="text-white group border-2 px-6 py-3 my-2 ml-1 flex items-center hover:bg-[#7cc5d9] hover:border-[#7cc5d9]">View More 
          <span className="group-hover:rotate-90 duration-200">
          <HiArrowNarrowRight className="ml-3"/>
          </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
