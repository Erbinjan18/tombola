import { Link } from 'react-router-dom';
import React from 'react';
import Image from '../../assets/img/navbarlogo.png';


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container">
                    <Link className="navbar-brand" to="#">
                        <img src={Image} alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className='bx bx-menu'></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/rafflelist">My Raffle List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;