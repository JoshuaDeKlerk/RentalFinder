import React from "react";
import "../css/booking.css";
import Carousel from 'react-bootstrap/Carousel';
import car from '../assets/images/car.svg';
import carLogo from '../assets/images/carlogo.svg';
import star from "../assets/images/star.svg";
import heart from "../assets/images/heart.svg";
import separator from '../assets/images/separator.svg';
import Button from 'react-bootstrap/Button';
import fuel from '../assets/images/fuel.svg'
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
                            src={car}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="car"
                            src={car}
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
                          <img src={fuel} alt="Car logo" />
                          <div className="specifications-text">
                          <h4>Petrol</h4>
                          </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="specifications-details-box">
                          <img src={carLogo} alt="Car logo" />
                          <div className="specifications-text">
                          <h4>petrol</h4>
                          </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="specifications-details-box">
                          <img src={carLogo} alt="Car logo" />
                          <div className="specifications-text">
                              <h4>petrol</h4>
                          </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="specifications-details-box">
                          <img src={carLogo} alt="Car logo" />
                          <div className="specifications-text">
                          <h4>Petrol</h4>
                          </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="specifications-details-box">
                          <img src={carLogo} alt="Car logo" />
                          <div className="specifications-text">
                          <h4>petrol</h4>
                          </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="specifications-details-box">
                          <img src={carLogo} alt="Car logo" />
                          <div className="specifications-text">
                              <h4>petrol</h4>
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
