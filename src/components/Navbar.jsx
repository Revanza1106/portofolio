import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../assets/react.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} style={{ width: "50px" }} />
      </div>

      <ul className="hidden md:flex">
        <li >
        <Link to="home" className="hover:text-[#7cc5d9]"  smooth={true}  duration={500} >
          Home
        </Link>
        </li>
        <li>
        <Link to="About" className="hover:text-[#7cc5d9]"  smooth={true}  duration={500} >
          About
        </Link>
        </li>
        <li>
        <Link className="hover:text-[#7cc5d9]"  to="Skills"  smooth={true} duration={500}>
          Skills
        </Link>
        </li>
        <li>
        <Link className="hover:text-[#7cc5d9]"   to="Portofolio"  smooth={true} duration={500} >
          Portofolio
        </Link>
        </li>
       
      </ul>

      {/* Humbergar menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center  "
        }
      >
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} className="hover:text-[#7cc5d9]" to="home"  smooth={true}  duration={500} >
          Home
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} className="hover:text-[#7cc5d9]"  to="About"  smooth={true}  duration={500} >
          About
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} className="hover:text-[#7cc5d9]"  to="Skills"  smooth={true}  duration={500} >
          Skills
        </Link>
        </li>
        <li className="py-6 text-4xl" >
        <Link to="Portofolio" className="hover:text-[#7cc5d9]" onClick={handleClick}   smooth={true}  duration={500} >
          Portofolio
        </Link>
        </li>
      </ul>

      {/* Social Icon */}
      <div className=" hidden lg:flex flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-red-400">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://instagram.com/revnzaz1106?igshid=MzNlNGNkZWQ4Mg=="
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-dark">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Revanza1106"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-green-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
