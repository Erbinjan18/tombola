import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import '../assets/css/style.css';

import routes from '../routes/routes';



const MasterLayout = () => {

    return (
        <div>
            <Sidebar />
            <section className="home-section">
                <Navbar />
                <div className="home-content">
                        <Switch>
                            {routes.map((route, idx) => {
                                return (
                                    route.component && (
                                        <Route 
                                            key = {idx}
                                            path = {route.path}
                                            exact = {route.exact}
                                            name = {route.name}
                                            render = {(props) =>(
                                                <route.component {...props} />
                                            )}
                                        />
                                    )
                                )
                            })}
                            <Redirect from = "/admin" to="/admin/dashboard" />
                        </Switch>

                </div>
            </section>
        </div>
    );
}

export default MasterLayout;