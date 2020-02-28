
import React from 'react';
import { Link } from "react-router-dom";
import '../navbar/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="Navbar">
            {/* <a className="navbar-brand" href="/">Brand here</a> */}
            <img src="../logo192.png" className="img-fluid" id="logoImg" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/movies" className="nav-link">Movies</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;

