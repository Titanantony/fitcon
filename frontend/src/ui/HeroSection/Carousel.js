import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import "./Carousel.css"


const Carousel = ({ images }) => {
  return (
    <BootstrapCarousel>
      {images.map((image, index) => (
        <BootstrapCarousel.Item key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="d-block w-100 carousel-img"
            style={{
              height: "400px", // Adjust height as needed
              objectFit: "cover", // Prevent distortion
            }}
          />
          <BootstrapCarousel.Caption>
            <p className="caption" id= "caption" >A Brighter Future Starts With The Healthy Life</p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
};

export default Carousel;
