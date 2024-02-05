import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../datacontext/datacontext'
import data from '/src/data/data.json'

const Home = () => {
  const {setNavIndicator} = useContext(DataContext)
  return (
    <section className='text-white flex-col  tablet:flex-row items-center flex tablet:h-[100vh] h-[85vh]'>
        <div className='tablet:w-[700px] tablet:space-y-5   tracking-widest  tablet:ml-[8rem]'>
        <h3 className='uppercase tablet:text-[1.3rem] tablet:mt-0 mt-[2rem] tablet:text-left text-center font-primary'>so,you want to travel to</h3>
        <h1 className='tablet:text-[6rem]  text-[3.5rem]  tablet:text-left text-center tracking-widest uppercase   font-secondary'>space</h1>
        <p className='font-primary text-center tablet:text-left mobile-M:mx-6 tablet:mx-0'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className='flex justify-center items-center w-[100%]'>
      <div className='flex tablet:items-center  justify-center hover:bg-white tablet:hover:w-[350px]  hover:h-[200px] hover:w-[200px] transition-all duration-300 ease-in-out font-light tablet:hover:h-[350px] rounded-full hover:bg-opacity-20'>
      <Link onClick={()=>setNavIndicator('dest')} to='/destination'>
      <button className='font-secondary tablet:mt-[0rem] mt-[5rem] text-[1.2rem] tablet:text-[2.3rem] rounded-full h-[120px] w-[120px] tablet:h-[230px]  tablet:w-[230px] text-black uppercase bg-white'>explore</button>

      </Link>
      </div>
        </div>
    </section>
    )
}

export default Home