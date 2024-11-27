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
import image4 from "./images/4.jpeg";
import image5 from "./images/5.jpeg";
import image6 from "./images/6.jpeg";
import Routinecards from "./ui/Routinecard/Routinecards";
import ImageGallery from "./ui/SlideShow/ImageGallery";


const photos = [image4, image5, image6];

const images = [
    { src: image1, alt: "Image 1" },
    { src: image2, alt: "Image 2" },
    { src: image3, alt: "Image 3" },
  ];

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
      images={photos}
    />
    <Routinecards />
    <ImageGallery images={images} />

    
    </ThemeProvider>
    
  );
}

export default App;
