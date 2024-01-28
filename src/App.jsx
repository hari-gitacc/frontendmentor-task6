import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import homeBg from './assets/home/background-home-desktop.jpg';
import destBg from './assets/destination/background-destination-desktop.jpg';
import crewBg from './assets/crew/background-crew-desktop.jpg';
import techBg from './assets/technology/background-technology-desktop.jpg';
import { useState } from "react";

function App({NavIndicator,setNavIndicator}) {

  return (
    <div style={NavIndicator==="home"?{backgroundImage: `url(${homeBg})`}:NavIndicator==='dest'?{backgroundImage: `url(${destBg})`}:NavIndicator==='crew'?{backgroundImage: `url(${crewBg})`}:{backgroundImage: `url(${techBg})`}} className="tablet:pl-[4rem]  tablet:pt-[2rem] bg-cover  bg-center ">
      <Header NavIndicator={NavIndicator} setNavIndicator={setNavIndicator} />
      <Section NavIndicator={NavIndicator} />
    </div>
  );
}

export default App;
