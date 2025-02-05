import React from 'react'
import {styles} from '../styles';


import {fadeIn,textVariant} from '../utils/motion';
import {motion} from 'framer-motion';

import {SectionWrapper} from '../hoc';

const Home = () => {
  return (
    <div className=' h-screen w-full flex flex-row justify-between items-end z-100 '>
        
        <motion.div variants={textVariant()} className='flex flex-col m-10 '>
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
             
        </div>

        </div>
  )
}

export default SectionWrapper(Home,'home');