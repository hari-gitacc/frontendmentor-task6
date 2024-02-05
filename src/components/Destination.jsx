// import { data } from "autoprefixer";
// import React, { useState } from "react";
import { useContext, useState } from "react";
import DataContext from "../datacontext/datacontext";
import Json from '/src/data/data.json'

// import bg from '/src/assets/destination/background-destination-desktop.jpg'

const Destination = () => {
  const {Destination,handleDestClick,DestIndicator} = useContext(DataContext)
 
  return (
    <main className="text-white items-center tablet:pb-0 pb-12 tablet:h-[140vh] tablet:pt-[5rem] pt-[2rem] justify-start tablet:grid tablet:grid-cols-main">
      <section className="tablet:w-[450px] laptop:pl-[4rem] tablet:flex-col flex-col  tablet:h-[110vh] fontdesign flex tablet:items-start items-center tracking-widest ">
        <h1 className="uppercase  mb-[3rem]  tablet:text-[2rem]">
          <span className="mr-3">01</span>pick your destination
        </h1>
        <img
          className="tablet:w-[430px] z-[0] w-[180px] animate-[spin_190s_linear_infinite]"
          src={Destination.images.webp}
          alt=""
        />
      </section>
      <section className="flex  tablet:items-start items-center flex-col  w-[100%]">
   
       <ul className="flex tablet:text-[1.2rem] tablet:mt-[0rem] laptop:mt-[0rem] mt-6 tablet:w-[300px] w-[200px] cursor-pointer justify-between fontdesign">
          {(Json.destinations).map((data) => (
            <li style={DestIndicator===data.name?{ borderBottom: '2px solid #ffff',}:null}
              key={data.id}
              id={data.name}
              onClick={() => handleDestClick(data.id,data.name)}
            >
              {data.name}
            </li>
          ))}
        </ul>
        <div className="w-[100%] tablet:h-[70vh] ">
          <h1 className="tablet:text-[6rem] text-[2rem] tablet:text-left mt-4 tablet:mt-0 text-center  tracking-widest uppercase font-secondary">{Destination.name}</h1>
          <p className="font-para tablet:mt-0 tablet:h-[100%] h-[170px] mt-[.5rem]  tracking-[1px] mobile-M:text-center  mobile-M:w-[100%] px-6 laptop:w-[75%] tabet:w-[560px] tablet:text-left tablet:ml-0 ml-7 mobile-M:ml-0 text-center w-[270px] tablet:leading-[2rem]">{Destination.description}</p>
          <div className="h-[1px] tablet:mt-[2rem] my-[2rem] tablet:w-[100%] w-[100%] bg-slate-600"></div>
          <div className="flex flex-col tablet:flex-row tablet:text-start text-center tablet:items-start items-center tablet:space-y-0 space-y-2 tablet:space-x-[5.6rem]">
            <div>
              <h1  className="font-primary tracking-widest text-[1.2rem]">AVG.DISTANCE</h1>
              <h1 className="font-secondary text-[1.1rem] pt-[.2rem]">{Destination.distance}</h1>
            </div>
            <div>
              <h1 className="font-primary tracking-widest text-[1.2rem]">EST.TRAVEL TIME</h1>
              <h1 className="font-secondary text-[1.1rem] pt-[.2rem]">{Destination.travel}</h1>
            </div>
          </div>
        </div>
       
      </section>
    </main>
  );
};

export default Destination;
