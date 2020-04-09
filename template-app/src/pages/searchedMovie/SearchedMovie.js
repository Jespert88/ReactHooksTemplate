
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchedMovie.css';

/* Components */
import Card from '../../components/card/Card';
import BackToTopBtn from '../../components/backToTop/BackToTopBtn';

/* Movie page */
const SearchedMovie = () => {

    const [inputValue, setInputValue] = useState("");
    const [searchMovie, setSearchMovie] = useState([]);


    const handleSearchInputChanges = (e) => {
        setInputValue(e.target.value);
    }

    const resetInputField = () => {
        setInputValue("");
    }

    const callSearchFunction = (e) => {
        /* Prevent the page from reloading */
        e.preventDefault();

        /* Post the values */
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=92bc743bbc32dc90030e2036637f8276&language=en-US&query=' + inputValue + '&page=1&include_adult=false')
            .then(function (response) {
                let SplitData = response.data.results.slice(0, 10);
                setSearchMovie(SplitData);
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


    useEffect(() => {

    }, []);

    return (
        <div className="Movies">

            <div className="formContainer">
                <form>
                    <input
                        value={inputValue}
                        onChange={handleSearchInputChanges}
                        type="text"
                        placeholder="Search for movies"
                        className="inutField"
                    />
                    <input
                        onClick={callSearchFunction}
                        type="submit"
                        value="Search"
                        className="searchBtn"
                        to="/movies"
                    />
                </form>
            </div><br></br>


            <div className="container-fluid">
                <div className="row no-gutters">

                    <div className="col-sm-12 col-md-1 col-xl-3"></div>
                    <div className="col-sm-12 col-md-10 col-xl-6">
                        <div className="movieCardContainer">
                            {
                                searchMovie.map((movie, index) => (
                                    <Card key={index} index={index} movie={movie} className="searchMovieCard" />))
                            }
                        </div>
                        <BackToTopBtn />
                    </div>
                    <div className="col-sm-12 col-md-1 col-xl-3"></div>
                </div>
            </div>


        </div>
    );

}
export default SearchedMovie;


