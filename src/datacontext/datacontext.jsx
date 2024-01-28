import { createContext,useState,useEffect } from "react";
import Json from '/src/data/data.json'
import { data } from "autoprefixer";
import { json } from "react-router-dom";

const DataContext = createContext({})

export const DataProvider =({children})=>{
  const [NavIndicator, setNavIndicator] = useState("home");
  const [DestIndicator, setDestIndicator] = useState(Json.destinations[0].name)
  const [CrewIndicator, setCrewIndicator] = useState(Json.crew[0].id)
  const [TechIndicator, setTechIndicator] = useState(Json.technology[0].id)
    const [Tech, setTech] = useState({
        id: 1,
        name: "Launch vehicle",
        images: {
          portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
          landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
        },
        description:
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      });
      const handleTechClick = (id) => {
        const filtArr =  (Json.technology).filter((data) => (id === data.id));
        const Data = filtArr[0]
        const dataObj = {
          id: Data.id,
          name: Data.name,
          images: {
            portrait: Data.images.portrait,
            landscape: Data.images.landscape,
          },
          description: Data.description
          
        };
        setTech(dataObj)
        setTechIndicator(id)
      };
    const [Crew, setCrew] = useState({
        id: 1,
        name: "Douglas Hurley",
        images: {
          png: "./assets/crew/image-douglas-hurley.png",
          webp: "./assets/crew/image-douglas-hurley.webp",
        },
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      });
    
      const handleCrewClick = (id) => {
        const filtArr =  (Json.crew).filter((data) => (id === data.id));
        const Data = filtArr[0]
        const dataObj = {
          id: Data.id,
          name: Data.name,
          images: {
            png: Data.images.png,
            webp: Data.images.webp,
          },
          role: Data.role,
          bio: Data.bio
        };
        setCrew(dataObj)
        setCrewIndicator(id)
      };
      const [Destination, setDestination] = useState(
        {
          id: 1,
          name: "Moon",
          images: {
            png: "./assets/destination/image-moon.png",
            webp: "./assets/destination/image-moon.webp",
          },
          description:
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          distance: "384,400 km",
          travel: "3 days",
        }
      
      );
      const handleDestClick = (id,name) => {
        const filtArr = (Json.destinations).filter((data) => (id === data.id));
        const Data = filtArr[0]
        const dataObj = {
          id: Data.id,
          name: Data.name,
          images: {
            png: Data.images.png,
            webp: Data.images.webp,
          },
          description: Data.description,
          distance: Data.distance,
          travel: Data.travel,
        };
        setDestIndicator(name)
        setDestination(dataObj)
      };
    return(
        <DataContext.Provider value={{
                   DestIndicator,setDestIndicator, Tech,setTech,setCrew,setDestination,Destination,Crew,CrewIndicator
                   ,TechIndicator,  handleCrewClick,handleDestClick,handleTechClick,Json,NavIndicator, setNavIndicator
        }}>{children}</DataContext.Provider>
    )
}

export default DataContext