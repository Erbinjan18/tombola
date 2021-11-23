import React from 'react'
import { Link } from 'react-router-dom';
import Wave from '../assets/img/wave1.png';
import Navbar from './home-components/Navbar';

function ViewPrize() {
    return (
        <div>
            <section id="nav-bar">
                <Navbar />
            </section>
            <div className="buy-raffle">
                <div className="container">
                <h2 className="title-style">Laptops</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card card-blog">
                                <div className="card-image">
                                    <img className="img" alt="" src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" />
                                    <div className="ripple-cont"></div>
                                </div>
                                <div className="table">
                                    <h4 className="card-caption">
                                        <Link to="/prizedetail">Lenovo</Link>
                                    </h4>
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

export default ViewPrize
