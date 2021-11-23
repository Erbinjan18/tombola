import React from 'react'
import { Link } from 'react-router-dom';
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
                <h2 className="title-style">Prize Categories</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card card-blog">
                                <div className="card-image">
                                    <img className="img" alt="" src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" />
                                    <div className="ripple-cont"></div>
                                </div>
                                <div className="table">
                                    <h4 className="card-caption">
                                        <Link to="#">Gadgets</Link>
                                    </h4>
                                    <div className="ftr text-center">
                                        <Link to="/viewprize" className="btn btn-primary btn-sm">View</Link>
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
                                        <Link to="#">Mobile Phones</Link>
                                    </h4>
                                    <div className="ftr text-center">
                                        <Link to="/viewprize" className="btn btn-primary btn-sm">View</Link>
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
                                        <Link to="#">Laptops</Link>
                                    </h4>
                                    <div className="ftr text-center">
                                        <Link to="/viewprize" className="btn btn-primary btn-sm">View</Link>
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

