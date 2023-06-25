import React from "react";

import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap (1).png";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
  return (
    <div name="Skills" className="bg-[#0a192f] text-center py-11 pb-[200px] ">
      {/* Conteiner */}
      <div className="max-w-[680px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-white font-bold inline border-b-4 border-[#7cc5d9]">Skills</p>
          <p className="py-4 text-white">These are technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 gap-4 text-center py-8 ">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#7cc5d9]  duration-500 ">
            <img src={html} alt="HTML Icon" className="w-21 item-center max-auto p-3" />
            <p className="my-4 text-white">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#7cc5d9]  duration-500 ">
            <img src={css} alt="HTML Icon" className="w-21 item-center max-auto p-3" />
            <p className="my-4  text-white">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#7cc5d9]  duration-500 ">
            <img src={js} alt="HTML Icon" className="w-21 item-center max-auto p-3" />
            <p className="my-4  text-white">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#7cc5d9]  duration-500 ">
            <img src={node} alt="HTML Icon" className="w-21 item-center max-auto p-3" />
            <p className="my-4  text-white">node.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#7cc5d9]  duration-500 ">
            <img src={react} alt="HTML Icon" className="w-21 item-center max-auto p-3" />
            <p className="my-4  text-white">React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#7cc5d9]  duration-500 ">
            <img src={tailwind} alt="HTML Icon" className="w-21 item-center max-auto p-3" />
            <p className="my-4  text-white">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#7cc5d9]  duration-500 ">
            <img src={bootstrap} alt="HTML Icon" className="w-21 item-center max-auto p-3" />
            <p className="my-4  text-white">Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#7cc5d9]  duration-500 ">
            <FaGithub size={150} className="sm:items-center "/>
            <p className="my-4  text-white">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
