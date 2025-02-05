import { BrowserRouter } from "react-router-dom"
import { Hero, Navbar,Home,About,Bikes,Category} from "./components";

import { BikeCanvas } from './components/canvas';

import { useState } from "react";

const App=()=> {

     const [theme, setTheme] = useState(false);
   

  return (
    
     <>
     <div className={`relative z-0 ${theme?'bg-gray-200 text-black':'bg-[#2f2f2f] text-white'}`}>

            <Navbar setTheme={setTheme}/>
           
        <div className="h-screen w-full fixed top-0 z-0">
        <BikeCanvas />

        </div>
        <div className="z-100 relative">
        <Home/>
        <About theme={theme}/>
       <Category theme={theme}/>
       
        </div>
       
       

       

     </div>
     </>    
  )
};

export default App
