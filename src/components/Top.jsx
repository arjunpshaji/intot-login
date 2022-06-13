import React from "react";
import Nav from "./Nav";


function Top(){

    return (<div>

    <section id="title" className="container-fluid top-container">
      <Nav />

      <div id="carouselExampleIndicators" class="carousel slide carousel-slider" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" type="button" data-slide-to="0" className="active">01</li>
          <li data-target="#carouselExampleIndicators" type="button" data-slide-to="1">02</li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="title-text col-md-3 offset-md-2">
                <div className="slider_detail">
                  <h1 className="heading">
                    <span className="inno">INNOVATIVE </span>
                    <span>
                      SOLUTIONS
                    </span>
                  </h1>
                  <p className="title-para">
                    We find the best solutions for you, we redesign your home and work places.
                    Discover why over 5,100 home owners trust initiative
                  </p>
                  <div>
                    <button type="button" className="btn btn-group btn-outline-light btn-lg readmore">&nbsp;&nbsp;&nbsp;Read More&nbsp;&nbsp;&nbsp;</button>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="slider_img-box">
                  <img className="top-img " src="images/slider-img.png" alt="sliderimg"/>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="title-text col-md-3 offset-md-2">
                <div className="slider_detail">
                  <h1 className="heading">
                    <span className="inno">INNOVATIVE </span>
                    <span>SOLUTIONS</span>
                  </h1>
                  <p className="title-para">
                    We find the best solutions fot you, we redesign your home and work places.
                    Discover why over 5,100 home owners trust initiative
                  </p>
                  <div>
                    <button type="button" className="btn btn-group btn-outline-light btn-lg readmore">&nbsp;&nbsp;&nbsp;Read More&nbsp;&nbsp;&nbsp;</button>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="slider_img-box">
                  <img className="top-img " src="images/slider-img.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-btn">
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          </a>
        </div>
      </div>
    </section>
    </div>
    );

    
}

export default Top;