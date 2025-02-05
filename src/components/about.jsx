import React from 'react'
import {styles} from '../styles';
import { Tilt } from 'react-tilt';


import {fadeIn,textVariant} from '../utils/motion';
import {motion} from 'framer-motion';

import {SectionWrapper} from '../hoc';

const About = ({theme}) => {
  return (
    <div className=' h-screen w-full flex flex-row justify-start items-end z-100 second-section relative'>
            <Tilt className={`md:w-[40%] w-[95%] md:h-[calc(100vh-5rem)] h-auto md:m-10 bg-transparent  rounded-2xl flex flex-col items-center justify-start p-3 relative border ${theme?'border-black':'border-white'}`}>

              <div className={`${styles.heroSubText} w-[200px] h-auto bg-yellow-500 absolute top-0 right-0 rounded-tr-2xl text-center `}>New Model</div>


          <img src="https://bike-demo-threejs.vercel.app/images/cockpit.jpeg" className='w-[90%] sm:h-[70%] h-[50%] rounded-2xl m-5 '/>
          <h5 className={`${styles.sectionHeadText} w-[90%] text-start`}>
                AIR-007
          </h5>
         <p className={`${styles.sectionSubText} sm:w-[90%] w-[100%]`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam id fugit at, animi repellat tempore ex natus ad impedit inventore quae illo reiciendis deserunt laboriosam? Perferendis eveniet incidunt asperiores!
         </p>



        </Tilt>

        </div>
  )
}

export default About;


  /* <motion.div variants={textVariant()} className='flex flex-col m-10 '>
              <p className={`${styles.heroHeadText}`}>
                AIR - 007
              </p>
              <p className={`${styles.sectionSubText}`} >
                Pure speed | build to win
             </p>
        </motion.div>

         
        <div className='flex flex-col m-10 '>
              <p className={`${styles.sectionSubText}`}>
               Limited Edition
              </p>
             
        </div> */