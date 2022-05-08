import { render } from "@testing-library/react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import './ControlledCarousel.css'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/female-hand-typing-keyboard-laptop_1150-15742.jpg?size=626&ext=jpg&uid=R62982774&ga=GA1.2.1043722416.1642986635"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>How to buy Installments????</h3>
            <p>You focus on our job holder and students client. And increase extra installments time for students....</p>
            <button className="bg-cyan-500 hover:bg-cyan-600 px-3 py-1 rounded text-white hover:text-gray-300 text-xl">Read More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-psd/high-view-desk-concept-with-laptop_23-2148300257.jpg?size=626&ext=jpg&uid=R62982774&ga=GA1.2.1043722416.1642986635"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Life time support</h3>
            <p>If your company go to agreement with our , then you provide life time support. Know details please click read more button....</p>
            <button className="bg-cyan-500 hover:bg-cyan-600 px-3 py-1 rounded text-white hover:text-gray-300 text-xl">Read More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg?size=626&ext=jpg&uid=R62982774&ga=GA1.2.1043722416.1642986635"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Why we are best????</h3>
            <p>
              We focus on our customer satisfaction and provide good quality products. If you know about our , please click the read more button....
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 px-3 py-1 rounded text-white hover:text-gray-300 text-xl">Read More</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarousel