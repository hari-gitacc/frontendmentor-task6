import React from 'react'
// import spaceData from '/data/spaceData.json';
import Home from './Home';
import Destination from './Destination';
import Crew from './Crew';
import Technology from './Technology';
import { Route, Routes } from 'react-router-dom';




const Section = () => {
  return (
  <div className=''>
  <Routes>
    <Route path='/' element={ <Home />}/>
    <Route path='/Destination' element={ <Destination />}/>
    <Route path='/Crew' element={ <Crew />}/>
    <Route path='/Technology' element={ <Technology />}/>
  </Routes>
  </div>
    )
}

export default Section