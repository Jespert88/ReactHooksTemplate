
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movies.css';

/* Components */
import Card from '../../components/card/Card';


/* Movie page */
const Movies = () => {

  /* 
  How to define states in react hooks. 
  With a state(jsonData) and a method for updating the state(setData) 
  */
  const [jsonData, setData] = useState([]);
  /* https://api.themoviedb.org/3/movie/550?api_key=API_KEY_HERE */
  /* Url for showing Posters "https://image.tmdb.org/t/p/w500/" + array.poster_path */
  function getMovies() {
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=API_KEY_HERE&language=en-US&page=1')
      .then(function (response) {
      
        console.log(response.data.results)

        /* If i do this i get all data but it loops endlessly? why? */
        /* const data = response.data.results;
        setData(data); */

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    getMovies()
  }); 
 
  /* Traversy Media code */
  /* const [todos, setTodos] = useState([
    {
      text: 'hej1'
    },
    {
      text: 'hej2'
    },
    {
      text: 'hej2'
    }
  ]); */


  return (
    <div className="Movies">
      <h1 className="moviePageTitle">Top 20 Movies</h1>
      <div className="cardGrid">
        {/* Traversy Media code */}
        {/* { 
          todos.map((todo, index) => (
          <Card key={index} index={index} todo={todo} /> ))
          } */}
        {
          jsonData.map((movie, index) => (
            <Card key={index} index={index} movie={movie} />))
        }
      </div>
    </div>
  );

}
export default Movies;
