import React, { useContext, useState } from "react";
import DataContext from "../datacontext/datacontext";
import Json from '/src/data/data.json'




const Crew = () => {
    const {CrewIndicator,Crew,handleCrewClick} = useContext(DataContext)
  return (
    <main className="tablet:grid flex text-white  laptop-l:ml-[6rem] tablet:pt-[5rem] pt-[3rem] flex-col-reverse  grid-cols-main">
      <section className="tablet:pb-12 laptop-l:pb-0">
    <div className="tablet:h-[440px] ">
    <div className="text-[1.8rem]  tablet:flex hidden fontdesign  tablet:justify-start justify-center tracking-widest">
          <span>02</span>
          <h1 className="ml-4 ">meet your crew</h1>
        </div>
        <div className="tablet:pt-[7rem] tablet:text-left text-center pt-[2rem]">
          <h3 className="font-secondary text-gray-400 text-[1rem] tablet:text-[1.8rem] uppercase">
            {Crew.role}
          </h3>
          <h1 className="font-secondary text-[1.5rem] tablet:text-[2.9rem] uppercase">
            {Crew.name}
          </h1>
          <p className="font-para h-[250px] mt-[1rem] tablet:pb-0 pb-[4rem] tablet:tracking-[.1rem] tablet:w-[560px] tablet:mx-0 mx-2 leading-[2rem]">
            {Crew.bio}
          </p>
        </div>
    </div>
        <ul className="tablet:flex hidden space-x-4 mt-[5rem] ">
          {(Json.crew).map((data) => (
            <li
            style={CrewIndicator===data.id?{opacity:'1'}:{opacity:'.4'}}
              key={data.id}
              id={data.name}
              onClick={() => handleCrewClick(data.id)}
            >
              <div className="h-[25px] cursor-pointer w-[25px] rounded-full bg-white "></div>
            </li>
          ))}

  
        </ul>
      </section>
      <section className="overflow-hidden tablet:block flex justify-center items-center flex-col">
        <div className="h-[300px] tablet:h-[100%] tablet:w-[100%] flex justify-center items-center tablet:items-end w-[240px] ">
        <img  src={Crew.images.png} className="tablet:w-[380px] laptop-l:w-[100%]  w-[200px]" alt={Crew.name} />
        </div>
        <ul className="tablet:hidden flex space-x-4 mt-[2rem] ">
          {(Json.crew).map((data) => (
            <li
              key={data.id}
              style={CrewIndicator===data.id?{opacity:'1'}:{opacity:'.4'}}
              id={data.name}
              onClick={() => handleCrewClick(data.id)}
            >
              <div className="h-[14px] cursor-pointer w-[14px] rounded-full bg-white"></div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Crew;
