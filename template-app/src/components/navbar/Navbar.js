
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../navbar/Navbar.css';
import axios from 'axios';

const Navbar = ({ movie }) => {

    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
        console.log(searchValue);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        /* Prevent the page from reloading */
        e.preventDefault();

        /* Post the values */
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=92bc743bbc32dc90030e2036637f8276&language=en-US&query=' + searchValue + '&page=1&include_adult=false')
            .then(function (response) {
                let data = response.data.results;
                console.log(data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

        /* Clear the search input */
        resetInputField();
    }

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
                <form className="form-inline my-2 my-lg-0">
                    {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}

                    <input
                        value={searchValue}
                        onChange={handleSearchInputChanges}
                        type="text"
                        placeholder="Search for movies here"
                        className="form-control mr-sm-2"
                    />
                    <input
                        onClick={callSearchFunction}
                        type="submit"
                        value="Search"
                        className="btn btn-info my-2 my-sm-0"
                        to="/"
                    />
                </form>

            </div>
        </nav>
    );
}
export default Navbar;

