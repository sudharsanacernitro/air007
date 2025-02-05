import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import { BikeCanvas } from './canvas';

const Hero = () => {
  return (
    <section className=' w-full h-screen mx-auto flex justify-start items-start flex-col  '>

      <BikeCanvas />
      </section>
  )
}

export default Hero