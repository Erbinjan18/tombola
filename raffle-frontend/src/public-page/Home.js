import React from "react";
import Navbar from './home-components/Navbar';
import Banner from "./home-components/Banner";
import '../assets/css/public.css';
import '../assets/css/public.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Home() {

    return (
        <div>
            <section id="nav-bar">
                <Navbar/>
            </section>
            <section id="banner">
                <Banner/>
            </section>
        </div>
    )

}

export default Home;

