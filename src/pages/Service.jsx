import React from 'react';
import ServiceCards from '../components/hcomponent/ServiceCards';
import Pools from "../components/hcomponent/Pools"
import Rooms from '../components/hcomponent/Rooms';
import Restaurant from '../components/hcomponent/Restaurant';
import { motion } from "framer-motion"


function Service() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ServiceCards />
      < Pools />
      <br />
      <Restaurant />
      <br />
      <Rooms />
      <br />
    </motion.div>


  );
}

export default Service;
