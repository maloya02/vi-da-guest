import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import Pic1 from "../../Images/2.jpg";
import Pic2 from "../../Images/3.jpg";
import Pic3 from "../../Images/4.jpg";
import React from 'react';
import "./CarouselStyle.css"

const HCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel className='h-carousel'>
        
        <Carousel.Item className='d-flex justify-content-center align-items-center h-100'>
          <img
            className="d-block w-100"
            src={Pic2}
            alt="First slide"
          />
          <Carousel.Caption className='d-flex flex-column justify-content-center align-items-center h-100'>
            <div className="text-center caption-content">
              <h1>First slide label</h1>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic1}
            alt="Second slide"
          />

          <Carousel.Caption className='d-flex justify-content-center align-items-center h-100'>
            <div className="text-canter caption-content">
              <h1>Second slide label</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic3}
            alt="Third slide"
          />

          <Carousel.Caption className='d-flex justify-content-center align-items-center h-100'>
            <div className="text-canter caption-content">
              <h1>Third slide label</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HCarousel;
