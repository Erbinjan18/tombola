import React from "react";
import { Link } from 'react-router-dom';

function Participant() {

    return (
        <div>
            <div className="bgcolor participant">
                <h2 className="title-style">Participant</h2>
            </div>
            <div className="main-content-inner">
                <div className="container-fluid">
                    <div className="row">
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
                                <li><Link to="#">7</Link></li>
                                <li><Link to="#">8</Link></li>
                                <li><Link to="#">9</Link></li>
                            </ul>
                            <ul className="details">
                                <li className="topic">Full Name</li>
                                <li><Link to="#">Alex Doe</Link></li>
                                <li><Link to="#">David Mart</Link></li>
                                <li><Link to="#">Roe Parter</Link></li>
                                <li><Link to="#">Diana Penty</Link></li>
                                <li><Link to="#">Martin Paw</Link></li>
                                <li><Link to="#">Doe Alex</Link></li>
                                <li><Link to="#">Aiana Lexa</Link></li>
                                <li><Link to="#">Rexel Mags</Link></li>
                                <li><Link to="#">Tiana Loths</Link></li>
                            </ul>
                            <ul className="details">
                                <li className="topic">Email</li>
                                <li><Link to="#">test@email.com</Link></li>
                                <li><Link to="#">test@email.com</Link></li>
                                <li><Link to="#">test@email.com</Link></li>
                                <li><Link to="#">test@email.com</Link></li>
                                <li><Link to="#">test@email.com</Link></li>
                                <li><Link to="#">test@email.com</Link></li>
                                <li><Link to="#">test@email.com</Link></li>
                                <li><Link to="#">test@email.com</Link></li>
                                <li><Link to="#">test@email.com</Link></li>
                            </ul>
                            <ul className="details">
                                <li className="topic">Action</li>
                                <li><Link to="#">info | edit | delete</Link></li>
                                <li><Link to="#">info | edit | delete</Link></li>
                                <li><Link to="#">info | edit | delete</Link></li>
                                <li><Link to="#">info | edit | delete</Link></li>
                                <li><Link to="#">info | edit | delete</Link></li>
                                <li><Link to="#">info | edit | delete</Link></li>
                                <li><Link to="#">info | edit | delete</Link></li>
                                <li><Link to="#">info | edit | delete</Link></li>
                                <li><Link to="#">info | edit | delete</Link></li>
                            </ul>
                        </div>
                        <div className="button">
                            <Link to="#">See All</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

            export default Participant;