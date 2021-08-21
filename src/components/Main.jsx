import React, { Component } from "react";
// import { Link } from "react-router-dom";

import Banner from "./Banner";
import Footer from "./footer/footer";
import rice from "../img/rice.jpg";
import maize from "../img/maize.jpg";
import wheat from "../img/wheat.png"
import "../styles/main.css";

class Main extends Component {
  render() {
    return (
      <div className="main-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 animate">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={rice} className="d-block w-100" alt="" />
                  </div>
                  <div className="carousel-item ">
                    <img src={maize} className="d-block w-100" alt="" />
                  </div>
                  <div className="carousel-item ">
                    <img src={wheat} className="d-block w-100" alt="" />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-md-4 banner">
              <Banner
                title="FARMING FOR BETTER ECOMONIC GROWTH"
                subtitle="Proffessional guid for effecient crop production"
              ></Banner>
            </div>
          </div>
        </div>
        <hr />
        <div className="section-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
