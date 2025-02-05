import {styles} from '../styles';


import {fadeIn,textVariant} from '../utils/motion';
import {motion} from 'framer-motion';

import { Tilt } from 'react-tilt';

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const  All=[
  { id: 1, name: "IoT Home Automation", description: "A system to control home appliances via IoT." ,img:"cycle1.jpg"},
  { id: 2, name: "Smart Traffic Light", description: `An embedded system for adaptive traffic light control. This is my portfolio website. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Dolore nulla officia ad ullamco sint et
      ut est officia in adipisicing proident non. Ullamco aute id excepteur
      non. Quis cillum ullamco fugiat irure ipsum nulla quis sunt commodo
      sint enim. Labore consectetur ea quis id officia dolor elit magna
      sit.` ,img:"cycle2.jpg"},
  { id: 3, name: "Personal Portfolio", description: "A portfolio website to showcase my skills and projects." ,img:"cycle3.jpg"},
  { id: 4, name: "Blog Platform", description: "A website for writing and sharing blog posts." ,img:"cycle1.jpg"},
  { id: 5, name: "Weather App", description: "An app to display current weather data using a public API." ,img:"cycle3.jpg"},
  
];

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slide({ proj_cards}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full w-2xl h-2xl">
      <Swiper
        effect="coverflow"
        centeredSlides={true}
        loop={false}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: -50,
          depth: 250,
          modifier: 1.5,
          slideShadows: false,
        }}
        allowTouchMove={false}
        navigation
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="relative"
      >
        {proj_cards.cards.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="sm:w-[500px] w-[300px] rounded-lg bg-black  shadow-lg z-0">
              <img
                src={item.img}
                alt="Project"
                className="w-full rounded-lg border border-white cursor-pointer sm:h-[400px] h-[300px]"
              />
              <div className="flex items-center justify-center h-[75px] w-full text-gray-400 text-3xl font-semibold font-bebas">
                {item.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}





const Category = ({theme}) => {
  return (
    <div className=' h-screen w-full flex flex-row justify-end items-center z-100 third-section relative'>
            <Tilt className={`md:w-[45%] w-[95%] md:h-[calc(100vh-5rem)] h-auto md:m-10 bg-transparent border  rounded-2xl flex flex-col items-center justify-start p-3 relative ${theme?'border-black':'border-white'}`}>

              <div className={`${styles.heroSubText} z-100 w-[250px] h-auto bg-yellow-500 absolute top-0 right-0 rounded-tr-2xl text-center text-black`}>Durable parts</div>
                

                {/* <Slide proj_cards={{cards:All}}  /> */}

                 <img src="https://bike-demo-threejs.vercel.app/images/drivetrain.jpeg" className='w-[90%] sm:h-[70%] h-[50%] rounded-2xl m-5'/>
                          <h5 className={`${styles.sectionHeadText} w-[90%] text-start`}>
                                Chainring
                          </h5>
                         <p className={`${styles.sectionSubText} sm:w-[90%] w-[100%]`}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam id fugit at, animi repellat tempore ex natus ad impedit inventore quae illo reiciendis deserunt laboriosam? Perferendis eveniet incidunt asperiores!
                         </p>


            </Tilt>
      

        </div>
  )
}

export default Category;


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