import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

// Keyframes for fade-in and fade-out animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Styled Components
const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: auto;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;

    ${({ isVisible }) =>
      isVisible
        ? css`
            animation: ${fadeIn} 1s forwards;
          `
        : css`
            animation: ${fadeOut} 1s forwards;
          `}
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: 2px solid #0056b3;
  }
`;

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleNextImage = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsFadingOut(false);
    }, 1000); // Match the animation duration
  };

  return (
    <GalleryContainer>
      <ImageWrapper isVisible={!isFadingOut}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt || `Image ${index + 1}`}
            style={{ display: index === currentIndex ? "block" : "none" }}
          />
        ))}
      </ImageWrapper>
      <Button onClick={handleNextImage}>Next Image</Button>
    </GalleryContainer>
  );
};

export default ImageGallery;
