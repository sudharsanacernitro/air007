import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

import {styles} from '../styles';


import {logo} from '../assets';
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({setTheme}) => {

  const [isOn, setIsOn] = useState(false);

  return (
   <nav className={`${styles.paddingX} w-full flex justify-between py-5 fixed top-0 z-20 bg-transparent `}>

      <div className='w-full flex justify-between items-center  mx-auto'>
          <div className='flex items-center gap-2' onClick={()=>{
            setActive("");
            window.scroll(0,0);
          }}>

          <p className={`${styles.navbarTitle} text-[18px] font-bold cursor-pointer flex`}>Aro cycles
              
              </p>
          </div>

          <div className='flex w-[120px] justify-between '>

                <FaSun className="text-[25px]" />

                <div className={`w-[50px] h-[26px] rounded-xl border-2 border-solid relative flex items-center cursor-pointer  transition-all duration-900 
                      ${!isOn ? "bg-white" : "bg-[#2f2f2f]"}`}
                    onClick={() => {setIsOn(!isOn);
                      setTheme(!isOn);
                    }}
                  >
                    <div className={`w-5 h-5 ${!isOn?"bg-[#2f2f2f]":"bg-white"} rounded-full absolute transition-all duration-1000 ${!isOn ? "translate-x-[26px]" : "translate-x-1"}`}/>
                  </div>
                <FaMoon className="text-[25px]"/>
          </div>

      </div>
   </nav>
  )
}

export default Navbar