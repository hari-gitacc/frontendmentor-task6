import React, { useContext, useState } from "react";
import DataContext from "../datacontext/datacontext";
import Json from '/src/data/data.json'

const Technology = () => {
  const {TechIndicator,Tech,handleTechClick} = useContext(DataContext)
  return (
    <main className="tablet:grid flex flex-col-reverse text-white laptop-l:ml-[4rem] pb-8 tablet:pb-0 tablet:ml-[1rem] pt-[3rem] grid-cols-main ">
      <section className="flex tablet:items-start items-center  tablet:flex-row flex-col  tablet:justify-center">
     
        <ul className="flex tablet:flex-col   tablet:justify-center tablet:mr-8 justify-around tablet:w-[100%] w-[240px]  items-center tablet:h-[100vh] ">
          {(Json.technology).map((data) => (
            <li
            
              className=""
              key={data.id}
              id={data.name}
              onClick={() => handleTechClick(data.id)}
            >
              <div style={TechIndicator===data.id?{background:'white',color:'black'}:{background:'transparent',color:'white'}} className="tablet:h-[70px] tablet:mt-0 mt-4 h-[45px] w-[45px] mb-[1rem]   flex tablet:w-[70px] items-center justify-center border-2 cursor-pointer  rounded-full">
                {data.id}
              </div>
            </li>
          ))}
        </ul>
        <div className="h-[440px] ">
          <div className="text-[1.8rem] tablet:flex  fontdesign hidden items-start  tracking-widest">
            <span>03</span>
            <h1 className="ml-4">space launch 101</h1>
          </div>
          <div className="tablet:pt-[3rem] pt-[1rem] flex flex-col justify-center tablet:items-start items-center tablet:h-[100%]">
            <h3 className="font-primary text-[1.2rem]tracking-[.2rem] tablet:text-[1rem] uppercase">
              the terminology...
            </h3>
            <h1 className="font-secondary text-[1.5rem] tablet:text-[2.9rem] uppercase">
              {Tech.name}
            </h1>
            <p className="font-para text-center tablet:text-left tablet:mx-0 mx-3  mt-[1rem] tracking-[.1rem]  laptop:w-[400px] laptop-l:w-[560px] leading-[2rem]">
              {Tech.description}
            </p>
          </div>
        </div>
      </section>
     
      <section className="tablet:pl-[4rem] laptop-l:pr-0 tablet:pr-7 laptop-l:mt-0 tablet:mt-[4rem] mt-4 tablet:block flex justify-center  overflow-hidden">
        <img src={Tech.images.portrait} className="mobile-M:w-[300px] tablet:w-[100%]" alt={Tech.name} />
      </section>
      <div className="text-[1.2rem]  tablet:hidden  fontdesign flex justify-center  tracking-widest">
            <span>03</span>
            <h1 className="ml-4">space launch 101</h1>
          </div>
    </main>
  );
};

export default Technology;
