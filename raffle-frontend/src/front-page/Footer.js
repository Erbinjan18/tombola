import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {

    return (
        <footer>
            <div className="footer-area">
                <p>© Copyright 2018. All right reserved. Template by <Link to="https://colorlib.com/wp/">Colorlib</Link>.</p>
            </div>
        </footer>
    );
}

export default Footer;