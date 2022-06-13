import React from "react";

function Cards(){
    return(
    <div>
            <h2>WHY INITIATIVE COMPANY</h2>
            <p className="card-section-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
            <div className="row cardSection">
            <div className="col-lg-4 col-md-6 ">
                <div className="card card1 shadow-lg p-3 mb-5 bg-white rounded">
                    <img className="card-img-top1" src="images/card-img-1.png" alt="Card image cap"></img>
                    <div className="card-body">
                      <h5 className="card-title">10 YEARS EXPERIENCE</h5>
                      <p className="card-text">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                    </div>
                </div>
                <button type="button" class="btn btn-group btn-outline btn-resp1 cardbtn">&nbsp;&nbsp;&nbsp;Read More&nbsp;&nbsp;&nbsp;</button>
            </div>

            <div className="col-lg-4 col-md-6 ">
                <div className="card card2 shadow-lg p-3 mb-5 bg-white rounded">
                    <img className="card-img-top2" src="images/card-img-2.png" alt="Card image cap"></img>
                    <div className="card-body">
                      <h5 className="card-title">A PRO ARCHITECTS TEAM</h5>
                      <p className="card-text">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                    </div>
                </div>
                <button type="button" className="btn btn-group btn-outline btn-resp2 cardbtn">&nbsp;&nbsp;&nbsp;Read More&nbsp;&nbsp;&nbsp;</button>
            </div>

            <div className="col-lg-4 ">
                <div className="card card3 shadow-lg p-3 mb-5 bg-white rounded">
                    <img className="card-img-top3" src="images/card-img-3.png" alt="Card image cap"></img>
                    <div className="card-body">
                      <h5 className="card-title">1000+ HAPPY CUSTOMERS</h5>
                      <p className="card-text">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                    </div>
                </div>
                <button type="button" className="btn btn-group btn-outline btn-resp3 cardbtn">&nbsp;&nbsp;&nbsp;Read More&nbsp;&nbsp;&nbsp;</button>
            </div>

        </div>
        </div>
    );
}

export default Cards;