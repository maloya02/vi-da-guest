import React from 'react';
import HCarousel from "../components/hcomponent/Carousel";
import StaticDatePickerLandscape from '../components/hcomponent/StaticDatePickerLandscape';
import ServiceCards from '../components/hcomponent/ServiceCards';
import Pools from '../components/hcomponent/Pools';



const Home = () => {
  return (
    <div className='home'>
      <HCarousel />
      <br />
      <StaticDatePickerLandscape/>
      <br />
      <ServiceCards />
      <br />
      < Pools />
      <br />
    </div>
  );
};

export default Home;