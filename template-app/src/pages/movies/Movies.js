
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movies.css';

/* Components */
import Card from '../../components/card/Card';
import BackToTopBtn from '../../components/backToTop/BackToTopBtn';

/* Movie page */
const Movies = () => {
  /* 
  How to define states in react hooks. 
  With a state(jsonData) and a method for updating the state(setData) 
  */
  const [jsonData, setData] = useState([]);
  const [top20Visible, setTop20] = useState(false);

  const [nowPlayingData, setNowPlaying] = useState([]);
  const [nowPlayingVisible, setNowPlayVisible] = useState(false);

  const [upcomingData, setUpcomingData] = useState([]);
  const [upcomingVisible, setUpcoming] = useState(false);


  /* Don't forget to copy past in your API key in the url! */
  function getMovies() {
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=92bc743bbc32dc90030e2036637f8276&language=en-US&page=1')
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
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=92bc743bbc32dc90030e2036637f8276&language=en-US&page=1')
      .then(function (response) {
        let dataNowPlaying = response.data.results;
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

  function upComingMovies() {
    axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=92bc743bbc32dc90030e2036637f8276&language=en-US&page=1')
      .then(function (response) {
        let upcomingData = response.data.results;
        setUpcomingData(upcomingData);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }


  function toggleNowPlaying() {
    setNowPlayVisible(!nowPlayingVisible);
    setUpcoming(false);
    setTop20(false)
  }

  function toggleUpComing() {
    setNowPlayVisible(false);
    setUpcoming(!upcomingVisible);
    setTop20(false)
  }

  function toggleTop20() {
    setNowPlayVisible(false);
    setUpcoming(false);
    setTop20(!top20Visible);
  }




  /* 
  The useEffect method is similar to componentDidMount and componentDidUpdate.
  The [] at the end tells the useEffect method only run 1 time after the component
  is done rendering.
  */
  useEffect(() => {
    getMovies();
    getNowPlaying();
    upComingMovies();
  }, []);


  return (
    <div className="Movies">

      <div className="btnsContainer">
        <button className="chooseBtns" onClick={() => toggleNowPlaying()}> Now Playing </button>
        <button className="chooseBtns" onClick={() => toggleUpComing()}> Up coming </button>
        <button className="chooseBtns" onClick={() => toggleTop20()} > Top 20 rated </button>
      </div>



      {/* Now Playing Movies */}
      <div>
        {
          nowPlayingVisible &&
          <div>
            <h1 className="moviePageTitle">Now Playing</h1>
            <div className="cardGrid">
              {
                nowPlayingData.map((movie, index) => (
                  <Card key={index} index={index} movie={movie} />))
              }
            </div>
          </div>
        }
      </div>

      {/* Upcoming Movies */}
      <div>
        {
          upcomingVisible &&
          <div>
            <h1 className="moviePageTitle">Up coming</h1>
            <div className="cardGrid">
              {
                upcomingData.map((movie, index) => (
                  <Card key={index} index={index} movie={movie} />))
              }
            </div>
          </div>
        }
      </div>

      {/* Top 20 Movies */}
      <div>
        {
          top20Visible &&
          <div>
            <h1 className="moviePageTitle">Top 20 rated movies</h1>
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


