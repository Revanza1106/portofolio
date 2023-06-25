import React from "react";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/insta.png";
import git from "../assets/git.jpg"


const Portofolio = () => {
  return (
    <div name="Portofolio" className="bg-[#0a192f] text-center ">
    {/* Conteiner */}
    <div className="max-w-[680px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div>
        <p className="text-4xl text-white font-bold inline border-b-4 border-[#7cc5d9]">Portofolio</p>
        <p className="py-4 text-white">Check out of some my projects on my Instagram or Github</p>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-2 text-center py-8 gap-4 ">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#7cc5d9]  duration-500">
            <a href="https://instagram.com/mrf_dev?igshid=OGQ5ZDc2ODk2ZA=="> <img src={logo} alt="HTML Icon" className="w-21 item-center max-auto p-3"/></a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#7cc5d9]  duration-500">
            <a href="https://github.com/Revanza1106">
            <img src={git} alt="HTML Icon" className="w-21 item-center max-auto p-3" />
            </a>
          </div>
          </div>
</div>
</div>
  );
};

export default Portofolio;
