
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movies.css';

/* Components */
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';
import BackToTopBtn from '../../components/backToTop/BackToTopBtn';

/* Movie page */
const Movies = () => {
  /* https://api.themoviedb.org/3/movie/550?api_key=API_KEY_HERE */
  /* Url for showing Posters "https://image.tmdb.org/t/p/w500/" + array.poster_path */
  /* 
  How to define states in react hooks. 
  With a state(jsonData) and a method for updating the state(setData) 
  */
  const [jsonData, setData] = useState([]);
  const [top20Movies, setTop20] = useState(false);

  const [nowPlayingData, setNowPlaying] = useState([]);
  const [playingMovie, setPlayMovie] = useState(false);




  /* Don't forget to copy past in your API key in the url! */
  function getMovies() {
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=API_KEY_HERE&language=en-US&page=1')
      .then(function (response) {
        let data = response.data.results;
        setData(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  function getNowPlaying() {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=API_KEY_HERE&language=en-US&page=1')
      .then(function (response) {
        let dataNowPlaying = response.data.results;
        console.log(dataNowPlaying)
        setNowPlaying(dataNowPlaying);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  /* 
  The useEffect method is similar to componentDidMount and componentDidUpdate.
  The [] at the end tells the useEffect method only run 1 time after the component
  is done rendering.
  */
  useEffect(() => {
    getMovies();
    getNowPlaying();
  }, []);

  return (
    <div className="Movies">

      <div className="btnsContainer"> 
        <button className="chooseBtns" onClick={() => setPlayMovie(!playingMovie)}> Now Playing </button>
        <button className="chooseBtns" onClick={() => setTop20(!top20Movies)} > Top 20 rated </button>
      </div>

      {/* Now Playing Movies */}
      <div>
        {
          playingMovie &&
          <div>
            <h1 className="moviePageTitle">Now Playing</h1>
            <p className="moviePageSubtext">Movies in cinema right now.</p>
            <div className="cardGrid">
              {
                nowPlayingData.map((movie, index) => (
                  <Card key={index} index={index} movie={movie} />))
              }
            </div>
          </div>
        }
      </div>

      {/* Top 20 Movies */}
      <div>
        {
          top20Movies &&
          <div>
            <h1 className="moviePageTitle">Top 20 Movies</h1>
            <p className="moviePageSubtext">Most rated movies on the movie database api.</p>
            <div className="cardGrid">
              {
                jsonData.map((movie, index) => (
                  <Card key={index} index={index} movie={movie} />))
              }
            </div>
          </div>
        }
      </div>





      <BackToTopBtn />
    </div>
  );

}
export default Movies;


