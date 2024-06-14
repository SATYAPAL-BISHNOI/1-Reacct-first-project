import React from 'react';
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Services = () => {
  return (
    <div className='services'>
        <Carousel
         infiniteLoop 
         showThumbs = {false}
         showArrows = {false}
         interval={2000}
         autoPlay
         showStatus={false}
         >
            <div>
                <img src={img1} alt="TECHkILL" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={img2} alt="TECHkILL" />
                <p className='legend'>Pear-to-Peer Support</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services

