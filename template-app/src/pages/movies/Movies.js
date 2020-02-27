
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movies.css';

/* Components */
import Card from '../../components/card/Card';

/* You create functions like this above the functional component. */

/* function getMovies() {
  const axios = require('axios');

  // Make a request for a user with a given ID
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
} */

/* Movie page */
const Movies = () => {
  const movieArray = [];

  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      const data = response.data;
      movieArray.push(data);
      /* console.log(movieArray); */
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  return (
    <div className="Movies">
      <h1>Movies</h1>
      <div className="cardGrid">
        <Card>
          {movieArray.map((item, i) => {
            return <li key={i}>{item}</li>
          })}
        </Card>
      </div>
    </div>
  );

}
export default Movies;
