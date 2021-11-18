import React from 'react';
// import { Link } from 'react-router-dom'
import {DropdownButton, Dropdown } from 'react-bootstrap';


const Navbar = () => {

    return (
        <div>
            <nav>
                <div className="sidebar-button">
                    <i className='bx bx-menu sidebarBtn'></i>
                </div>
                <div className="profile-details">
                    <img src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt=""/>
                    <span className ="admin_name">Admin</span>
                    <DropdownButton id="dropdown-item-button" title="">
                    <Dropdown.Item as="button" id="drop-hover">Logout</Dropdown.Item>
                    </DropdownButton>
                </div>
            </nav>
        </div>
        // <div>
        //     <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        //         <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        //             <li className="nav-item dropdown">
        //                 <Link className="nav-link dropdown-toggle" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                     <i className="fas fa-user fa-fw"></i>
        //                 </Link>
        //                 <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
        //                     <li><Link className="dropdown-item" to="#!">Settings</Link></li>
        //                     <li><Link className="dropdown-item" to="#!">Activity Log</Link></li>
        //                     <li><hr className="dropdown-divider" /></li>
        //                     <li><Link className="dropdown-item" to="#">Logout</Link></li>
        //                 </ul>
        //             </li>
        //         </ul>
        //     </nav>
        // </div>


        // <DropdownButton id="dropdown-item-button" title="Dropdown button">
        // <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
        // <Dropdown.Item as="button">Action</Dropdown.Item>
        // <Dropdown.Item as="button">Another action</Dropdown.Item>
        // <Dropdown.Item as="button">Something else</Dropdown.Item>
        // </DropdownButton>

    );
}

export default Navbar;