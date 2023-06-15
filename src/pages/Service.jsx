import React from 'react';
import ServiceCards from '../components/hcomponent/ServiceCards';
import Pools from "../components/hcomponent/Pools"
import Rooms from '../components/hcomponent/Rooms';
import Restaurant from '../components/hcomponent/Restaurant';


function Service() {
  return (
    <>
      <ServiceCards />
      < Pools />
      <br />
      <Restaurant/>
      <br />
      <Rooms/>
      <br />
    </>


  );
}

export default Service;
