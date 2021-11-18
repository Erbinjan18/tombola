import React from "react";
import '../assets/css/loginstyle.css';
import '../assets/js/Main';
import { Link } from 'react-router-dom';
import Image from '../assets/img/wave.png';
import Image2 from '../assets/img/signup.svg';

function Register() {
    return (
        <div>
            <img className="wave" src={Image} alt="" />
            <div className="logcontainer">
                <div className="imggift">
                    <img src={Image2} alt="" />
                </div>
                <div className="login-content">
                    <form action="" className="login-form">
                        <h2 className="title">Sign Up</h2>
                        <div className="row">
                            <div className="col">
                                <div className="input-div one">
                                    <div className="i">
                                        <i className="bx bx-user-circle"></i>
                                    </div>
                                    <div className="div">
                                        <input type="Firstname" className="input" placeholder="Firstname" />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-div one">
                                    <div className="i">
                                        <i className="bx bx-user-circle"></i>
                                    </div>
                                    <div className="div">
                                        <input type="lastname" className="input" placeholder="Lastname" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i class='bx bx-envelope'></i>
                            </div>
                            <div className="div">
                                <input type="email" className="input" placeholder="Email" />
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i class='bx bx-home-alt'></i>
                            </div>
                            <div className="div">
                                <input type="address" className="input" placeholder="Complete Address" />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="bx bx-lock"></i>
                            </div>
                            <div className="div">
                                <input type="password" className="input" placeholder="Password" />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="bx bx-lock"></i>
                            </div>
                            <div className="div">
                                <input type="confirm" className="input" placeholder="Confirm Password" />
                            </div>
                        </div>
                        <br />
                        <Link to="#" className="btn btnstyle">Signup</Link>
                        <Link to="/login">I am already a member</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
