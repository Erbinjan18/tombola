import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {

    return (
        <div>
            <div className="bgcolor">
                <h2 className="title-style">Dashboard</h2>
            </div>
            <div className="overview-boxes">
                <div className="box raffle"> 
                    <div className="right-side">
                        <div className="box-topic">Total no. of Raffles</div>
                        <div className="number">10</div>
                        <hr className="sidebar-divider" />
                        <div className="indicator">
                            <Link to="/admin/raffle" className="link-style">
                                <i className='bx bx-up-arrow-alt'></i>
                                <span className="text">view details</span>
                            </Link>
                        </div>
                    </div>
                    <i className='bx bxs-coupon icon'></i>
                </div>
                <div className="box participant">
                    <div className="right-side">
                        <div className="box-topic">Total no. of Participants</div>
                        <div className="number">150</div>
                        <hr className="sidebar-divider" />
                        <div className="indicator">
                            <Link to="/admin/participant" className="link-style">
                                <i className='bx bx-up-arrow-alt'></i>
                                <span className="text">view details</span>
                            </Link>
                        </div>
                    </div>
                    <i className='bx bxs-group icon two' ></i>
                </div>
                <div className="box prize">
                    <div className="right-side">
                        <div className="box-topic">Total no. of Prizes </div>
                        <div className="number">6</div>
                        <hr className="sidebar-divider" />
                        <div className="indicator">
                            <Link to="/admin/prize" className="link-style">
                                <i className='bx bx-up-arrow-alt'></i>
                                <span className="text">view details</span>
                            </Link>
                        </div>
                    </div>
                    <i className='bx bxs-gift icon three' ></i>
                </div>
                <div className="box winner">
                    <div className="right-side">
                        <div className="box-topic">Total no. of Winners</div>
                        <div className="number">4</div>
                        <hr className="sidebar-divider" />
                        <div className="indicator">
                            <Link to="#" className="link-style">
                                <i className='bx bx-up-arrow-alt'></i>
                                <span className="text">view details</span>
                            </Link>
                        </div>
                    </div>
                    <i className='bx bx-trophy icon four' ></i>
                </div>
            </div>
            <div className="sales-boxes">
                    <div className="recent-sales box">
                        <div className="title">List of Participants</div>
                        <div className="sales-details">
                            <ul className="details">
                                <li className="topic">ID</li>
                                <li><Link to="#">1</Link></li>
                                <li><Link to="#">2</Link></li>
                                <li><Link to="#">3</Link></li>
                                <li><Link to="#">4</Link></li>
                                <li><Link to="#">5</Link></li>
                                <li><Link to="#">6</Link></li>
                            </ul>
                            <ul className="details">
                                <li className="topic">Full Name</li>
                                <li><Link to="#">Alex Doe</Link></li>
                                <li><Link to="#">David Mart</Link></li>
                                <li><Link to="#">Roe Parter</Link></li>
                                <li><Link to="#">Diana Penty</Link></li>
                                <li><Link to="#">Martin Paw</Link></li>
                                <li><Link to="#">Doe Alex</Link></li>
                            </ul>
                            <ul className="details">
                                <li className="topic">Email</li>
                                <li><Link to="#">test@email.com</Link></li>
                                <li><Link to="#">test@email.com</Link></li>
                                <li><Link to="#">test@email.com</Link></li>
                                <li><Link to="#">test@email.com</Link></li>
                                <li><Link to="#">test@email.com</Link></li>
                                <li><Link to="#">test@email.com</Link></li>
                            </ul>
                            <ul className="details">
                                <li className="topic">Address</li>
                                <li><Link to="#">CDO</Link></li>
                                <li><Link to="#">CDO</Link></li>
                                <li><Link to="#">CDO</Link></li>
                                <li><Link to="#">CDO</Link></li>
                                <li><Link to="#">CDO</Link></li>
                                <li><Link to="#">CDO</Link></li>
                            </ul>
                        </div>
                        <div className="button">
                            <Link to="/admin/participant">view details</Link>
                        </div>
                    </div>
                </div>
        </div>
    )

}
export default Dashboard;