import React from 'react'
import { Link } from 'react-router-dom';
import Wave from '../assets/img/wave1.png';
import Navbar from './home-components/Navbar';

function PrizeDetail() {
    return (
        <div>
            <section id="nav-bar">
                <Navbar />
            </section>
            <div className="buy-raffle">
                <div className="container">
                <h2 className="title-style">Prize Detail</h2>
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
                                    <div className="ftr text-center">
                                        <Link to="/rafflelist" className="btn btn-primary btn-sm">Add to Raffle List</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="detail">
                                <div className="text-center">
                                    <button type="button" class="btn btn-success btn-lg btn-radius">Available</button>
                                </div>
                                <br/>
                                <button type="button" class="btn btn-secondary btn-sm btn-radius">
                                    <i className='bx bxs-coupon' ></i> &nbsp; &nbsp;
                                    <span className="text">Ticket Price:</span>
                                </button>
                                    <h4>100</h4>

                                <button type="button" class="btn btn-secondary btn-sm btn-radius">
                                <i className='bx bxs-group' ></i> &nbsp; &nbsp;
                                    <span className="text">Participants:</span>
                                </button>
                                    <h4>2</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Wave} alt="" className="buttom-img" />
            </div>
        </div>
    )
}

export default PrizeDetail
