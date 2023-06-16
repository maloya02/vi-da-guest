import React from 'react';
import HCarousel from "../components/hcomponent/Carousel";
import StaticDatePickerLandscape from '../components/hcomponent/StaticDatePickerLandscape';
import ServiceCards from '../components/hcomponent/ServiceCards';
import Pools from '../components/hcomponent/Pools';
import { motion } from "framer-motion"


const Home = () => {
  return (
    <motion.div className='home'
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.7 } }}

    >
      <HCarousel />
      <br />
      <StaticDatePickerLandscape />
      <br />
      <ServiceCards />
      <br />
      < Pools />
      <br />
    </motion.div>
  );
};

export default Home;