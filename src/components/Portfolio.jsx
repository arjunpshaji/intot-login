import React from "react";

function Port(){
    return(
        <section id="protfolio" className="container-fluid portfolio">
        <h2>OUR PORTFOLIO</h2>
        <p className="card-section-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
        </p>
        <div className="row port-div1">
            <div className="col-lg-7 col-md-7">
              <img className="port-img1" src="images/portfolio-img-1.png"/>
            </div>
            <div className="col-lg-5 col-md-5">
              <img className="port-img2" src="images/portfolio-img-2.jpg"/>
            </div>
        </div>
        <div className="row port-div2">
          <div className="col-lg-4 col-md-4">
            <img className="port-img3" src="images/portfolio-img-3.png"/>
          </div>
          <div className="col-lg-8 col-md-8">
            <img className="port-img4" src="images/portfolio-img-4.png"/>
          </div>
      </div>
    </section>
    );
}

export default Port;