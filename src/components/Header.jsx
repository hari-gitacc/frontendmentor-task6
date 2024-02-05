import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '/assets/shared/logo.svg'
import burger from '/src/assets/shared/icon-hamburger.svg'
import DataContext from '../datacontext/datacontext'


const Header = () => {
  const [Burger, setBurger] = useState(false)
  const {setNavIndicator,NavIndicator} = useContext(DataContext)
  const handleBurgerClick =()=>{
    setBurger(!Burger)
  }
  const borderBottomStyle = {
    borderBottom: '2px solid #000',
    padding: '10px',
  };
  return (
    <div className=''>    
    <nav className='text-white tablet:px-0 px-[1rem] tablet:h-[100%]  h-[15vh] text-[1.2rem] font-primary capitalize flex justify-between '>
      <img src={logo} className='tablet:mt-[1rem]  z-20 hidden tablet:block w-[50px] h-[50px]' alt="" />
     <div className='tablet:hidden z-20 h-[20vh] items-center flex justify-between w-[100%]'>
     <img src={logo} className='tablet:mt-[1rem] cursor-pointer w-[50px] h-[50px] z-20' alt="" />
  
   
  <img src={burger} onClick={handleBurgerClick} className='w-[25px] ursor-pointer tablet:hidden h-[25px]' alt="" />
     </div>
    
    <div className="">
    <div className="laptop:w-[750px]  hidden tablet:flex
         items-center  backdrop-blur-3xl bg-gray-300 bg-opacity-[2px]">
          <ul className='uppercase tablet:flex-row tablet:h-[15vh] flex-col tracking-wider flex
         items-center justify-between ml-[6rem] font-light  w-[550px]'>
            <li onClick={()=>setNavIndicator('home')} style={NavIndicator==='home'?{ borderBottom: '2px solid #ffff',}:null} ><Link to='/'><span className='mr-3' >00</span>home</Link></li>
            <li style={NavIndicator==='dest'?{ borderBottom: '2px solid #ffff',}:null}   onClick={()=>setNavIndicator('dest')}><Link to='/destination'><span className='mr-3'>01</span>destination</Link></li>
            <li style={NavIndicator==='crew'?{ borderBottom: '2px solid #ffff',}:null}   onClick={()=>setNavIndicator('crew')}><Link to='/crew'><span className='mr-3'>02</span>crew</Link></li>
            <li style={NavIndicator==='tech'?{ borderBottom: '2px solid #ffff',}:null}   onClick={()=>setNavIndicator('tech')}><Link to='/technology'><span className='mr-3'>03</span>technology</Link></li>
          
        </ul>
      </div>
      
    </div>
 
    </nav>
    <div style={Burger===false?{position:'fixed',
right:'-28rem',transition: 'right 0.3s ease-in-out' }:{position:'absolute',
right:'0rem',transition: 'right 0.3s ease-in-out' }} className='tablet:hidden font-primary top-0 h-[100vh]  absolute pl-0 ml-0  flex w-[60%]'>
            <ul className='transition-all duration-300 z-10 flex flex-col pl-8 pt-[6rem] text-white  justify-around w-[100%] backdrop-blur-3xl '>
            <li className='text-[1.1rem] uppercase'  onClick={handleBurgerClick}><Link to='/'><span className='mr-3'>00</span>home</Link></li>
            <li className='text-[1.1rem] uppercase'  onClick={handleBurgerClick}><Link to='/destination'><span className='mr-3'>01</span>destination</Link></li>
            <li className='text-[1.1rem] uppercase'  onClick={handleBurgerClick}><Link to='/crew'><span className='mr-3'>02</span>crew</Link></li>
            <li  className='text-[1.1rem] uppercase' onClick={handleBurgerClick}><Link to='/technology'><span className='mr-3'>03</span>technology</Link></li>
            </ul>
      </div>
    </div>

  )
}

export default Header