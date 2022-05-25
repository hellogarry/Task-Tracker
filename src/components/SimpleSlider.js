import React, { Component } from "react"
import Slider from "react-slick"
import logo from './assets/1.jpeg'
import logo1 from './assets/2.jpeg'
import logo2 from './assets/3.jpeg'

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="sliderContainer" style={{margin: "10px"}}>
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div>
              <img src={logo} alt={"logo"}/> 
            </div>
            <div>
              <img src={logo1} alt={"logo"}/> 
            </div>
            <div>
              <img src={logo2} alt={"logo"}/> 
            </div>
            
          </Slider>
        </div>
      );
    }
  }