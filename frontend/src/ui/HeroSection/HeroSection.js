import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../images/logo.png"; // Replace with your logo
import "./Herosection.css"
import Carousel from "./Carousel";

const HeroSection = ({ title, subtitle, buttonText, images }) => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Section */}
          <Col md={6} className="text-center text-md-start">
            <img src={logo} alt="Athleticon Logo" className="mb-3" />
            <h1>{title}</h1>
            <p>{subtitle}</p> 
            {/* <button className="btn btn-primary">{buttonText}</button> */}
          </Col>

          {/* Right Section */}
          <Col md={6}>
            <Carousel images={images} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

