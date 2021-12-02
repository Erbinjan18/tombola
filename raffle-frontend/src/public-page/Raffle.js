import React from 'react'
import { Link } from 'react-router-dom';
import Wave from '../assets/img/wave1.png';
import Navbar from './home-components/Navbar';

function Raffle() {
    return (
        <div>
            <section id="nav-bar">
                <Navbar />
            </section>
            <div className="buy-raffle">
                <div className="container">
                    <h2 className="title-style">Raffles</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card card-blog">
                                <div className="card-image">
                                    <img className="img" alt="" src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" />
                                    <div className="ripple-cont"></div>
                                </div>
                                <div className="table">
                                    <h4 className="card-caption">
                                        <Link to="#">Raffle Name</Link>
                                        <p className="subtitle">test description</p>
                                    </h4>
                                    <br />
                                    <p className="card-description">
                                        <br />
                                        Ticket Price: 500php
                                    </p>
                                    <p className="card-description">
                                        <br />
                                        Date to start: 2021-11-26 08:58:00
                                    </p>
                                    <div className="ftr text-center">
                                        <Link to="/raffle-draw" className="btn btn-primary btn-sm">Enter Raffle</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Wave} alt="" className="buttom-img" />
            </div>

        </div>
    )
}

export default Raffle
