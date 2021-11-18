import React from 'react'
import {Link} from 'react-router-dom';
import Wave from '../assets/img/wave1.png';
import Navbar from './home-components/Navbar';


function BuyRaffle() {

    return (
        <div>
            <section id="nav-bar">
                <Navbar />
            </section>
            <div className="buy-raffle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card card-blog">
                                <div className="card-image">
                                    <img className="img" alt="" src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" />
                                    <div className="ripple-cont"></div>
                                </div>
                                <div className="table">
                                    <h4 className="card-caption">
                                        <Link to="#">Raffle 1</Link>
                                    </h4>
                                    <br />
                                    <p className="card-description">
                                        <br />
                                        Prize: Mouse
                                    </p>
                                    <p className="card-description">
                                        <br />
                                        Ticket Price: 500php
                                    </p>
                                    <div className="ftr text-center">
                                        <Link to="/login" className="btn btn-primary btn-sm">Buy Ticket</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-blog">
                                <div className="card-image">
                                    <img className="img" alt="" src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" />
                                    <div className="ripple-cont"></div>
                                </div>
                                <div className="table">
                                    <h4 className="card-caption">
                                        <Link to="#">Raffle 2</Link>
                                    </h4>
                                    <br />
                                    <p className="card-description">
                                        <br />
                                        Prize: Mouse
                                    </p>
                                    <p className="card-description">
                                        <br />
                                        Ticket Price: 500php
                                    </p>
                                    <div className="ftr text-center">
                                        <Link to="/login" className="btn btn-primary btn-sm">Buy Ticket</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-blog">
                                <div className="card-image">
                                    <img className="img" alt="" src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" />
                                    <div className="ripple-cont"></div>
                                </div>
                                <div className="table">
                                    <h4 className="card-caption">
                                        <Link to="#">Raffle 3</Link>
                                    </h4>
                                    <br />
                                    <p className="card-description">
                                        <br />
                                        Prize: Mouse
                                    </p>
                                    <p className="card-description">
                                        <br />
                                        Ticket Price: 500php
                                    </p>
                                    <div className="ftr text-center">
                                        <Link to="#" className="btn btn-primary btn-sm">Buy Ticket</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Wave} alt="" className="buttom-img" />
            </div>
        </div>
    );

}

export default BuyRaffle

