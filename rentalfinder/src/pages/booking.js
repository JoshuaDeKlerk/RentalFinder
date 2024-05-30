import React from "react";
import "../css/booking.css";
import Carousel from 'react-bootstrap/Carousel';
import car from '../assets/images/car.svg';
import car1 from '../assets/images/car1.svg';
import car2 from '../assets/images/car2.svg';
import carLogo from '../assets/images/carlogo.svg';
import star from "../assets/images/star.svg";
import heart from "../assets/images/heart.svg";
import separator from '../assets/images/separator.svg';
import Button from 'react-bootstrap/Button';
import fuel from '../assets/images/fuel.svg'
import speed from '../assets/images/speed.svg'
import seat from '../assets/images/seat.svg'
import engine from '../assets/images/engine.svg'
import manual from '../assets/images/manual.svg'
import aircon from '../assets/images/aircon.svg'


function Booking() {
    return (
      <div>
        <div className="header">
            <img className="icon-left" src={star} alt="Star icon" />
            <div className="car-logo">
                <img src={carLogo} alt="Car logo" />
            </div>
            <img className="icon-right" src={heart} alt="Heart icon" />
        </div>
        <div className="container"> 
            <div className="details-text">
                <p>Audi R8</p>
                <h4>2018</h4>
            </div>
            <div className="booking">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="car"
                            src={car} 
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="car"
                            src={car1}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="car"
                            src={car2}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <Button className="book-btn" variant="primary" size="lg" active>
              Book Now
            </Button>
        </div>
        
        <div className="car-box">
            <div className="car-details-text">
                <h2>Car Details</h2>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                    <h3>Specifications</h3>
                      <div className="specifications-box">
                      <div className="row">
                        <div className="col-4">
                          <div className="specifications-details-box">
                          <img src={fuel} alt="fuel" />
                          <div className="specifications-text">
                          <h4>Petrol</h4>
                          </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="specifications-details-box">
                          <img src={seat} alt="seat" />
                          <div className="specifications-text">
                          <h4>Two Seaters</h4>
                          </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="specifications-details-box">
                          <img src={speed} alt="speed" />
                          <div className="specifications-text">
                              <h4>Top Speed</h4>
                              <h6>320 km/h</h6>
                          </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="specifications-details-box">
                          <img src={engine} alt="engine" />
                          <div className="specifications-text">
                          <h4>5.2-liter V-10</h4>
                          </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="specifications-details-box">
                          <img src={manual} alt="manual" />
                          <div className="specifications-text">
                          <h4>manual</h4>
                          </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="specifications-details-box">
                          <img src={aircon} alt="aircon" />
                          <div className="specifications-text">
                              <h4>Aircon</h4>
                          </div>
                          </div>
                        </div>
                      </div>
                        </div>
                    </div>
                    <div className="col-6">
                    <h3>Reviews</h3>
                      <div className="reviews-box">
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Booking;
