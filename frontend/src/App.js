import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import './App.css';
import { ThemeProvider } from "styled-components";
import NavBar from './ui/NavBar';
import Homepage from './ui/Homepage';
import StatsCard from './ui/statscard/statscard';
import HeroSection from './ui/HeroSection/HeroSection';

import image1 from "./images/1.jpeg";
import image2 from "./images/2.jpeg";
import image3 from "./images/3.jpeg";
// import fourthImage from "./images/4.png";



// const images = [
//   { src: runnerImage, alt: "Runner in motion" },
//   { src: secondImage, alt: "Second image description" },
//   { src: thirdImage, alt: "Third image description" },
//   { src: fourthImage, alt: "Fourth image description" },
// ];


const images = [image1, image2, image3];

const theme = {
  colors: {
    primary: "#FF5722",
    secondary: "#F5F5F5",
    textDark: "#000000",
    textLight: "#FFFFFF",
    
  },
};
function App() {
   return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div className="homepage">
      <Homepage />
      <StatsCard />
      </div>
      <HeroSection
      title="Move to Maintain your Health"
      subtitle="Energize your lifestyle, embrace movement for a healthier you. Get motivated, stay active, and reap the benefits of a vibrant, well-nurtured body."
      buttonText="Get Started"
      images={images}
    />
    
    
    </ThemeProvider>
    
  );
}

export default App;
