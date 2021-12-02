import React from "react";
import '../assets/css/loginstyle.css';
import '../assets/js/Main';
import { Link } from 'react-router-dom';
import Image from '../assets/img/wave.png';
import Image2 from '../assets/img/gift.svg';
import Image3 from '../assets/img/tomgif2.gif';

function Login() {
    return (
        <div>
            {/* <svg viewBox="0 0 50 50">
                <circle className="ring" cx="25" cy="25" r="20"></circle>
                <circle className="ball" cx="25" cy="5" r="3.5"></circle>
            </svg> */}
            <img className="wave" src={Image} alt="" />
            <div className="logcontainer">
                <div className="imggift">
                    <img src={Image2} alt="" />
                </div>
                <div className="login-content">
                    <form action="" className="login-form">
                        <img src={Image3} alt="" />
                        <div className="input-div one">
                            <div className="i">
                                <i className="bx bx-user-circle"></i>
                            </div>
                            <div className="div">
                                <input type="text" className="input" placeholder="Username"/>
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="bx bx-lock"></i>
                            </div>
                            <div className="div">
                                <input type="password" className="input" placeholder="Password"/>
                            </div>
                        </div>
                        <br />
                        <Link to="/admin/dashboard" className="btn btnstyle">Login</Link>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Login;