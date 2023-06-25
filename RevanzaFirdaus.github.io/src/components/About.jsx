import React from "react";
import pic from "../assets/pp.jpeg";

 


const About = () => {
  return (
    <div name="About" className="w-full  h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[800px]  w-full  grid grid-cols-2 gap-8">
          <div className=" text-center sm:text-right pb-8 pl-4">
            <p className="text-4xl  font-bold inline border-b-4 border-[#7cc5d9]">
              About
            </p>
          </div>
          <div></div>
          {/* about texts */}
          <div className="max-w-[680px] mx-auto px-8 flex flex-col justify-center text-left left-0 h-full ">
          <p className="text-[#7cc5d9] ml-1">Hi,my name is</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6]">
              Revanza Firdaus
            </h1>
            <p className="text-[#8992b0] max-w ml-1">I'm a Front End Developer focused on building responsive web aplication.
        </p>
          </div>
          {/* about pic */}
          <div>
            <div className="max-w-[1000px] w-full ">
              <img src={pic} style={{ width: "70%" }} className="lg:w-[1000px]
              ]"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
