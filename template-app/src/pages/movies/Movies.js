
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movies.css';

/* Components */
import Card from '../../components/card/Card';

/* 
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
*/

/* Movie page */
const Movies = () => {

  /* 
  How to define states in react hooks. 
  With a state(jsonData) and a method for updating the state(setData) 
  */
  /* const [jsonData, setData] = useState([]); */
 
  // Similar to componentDidMount and componentDidUpdate:
  /* useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      // handle success
      jsonData.push(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      console.log(jsonData[0])
    });
  }); */


  /* Traversy Media code */
  const [todos, setTodos] = useState([
    {
      text: 'hej1'
    },
    {
      text: 'hej2'
    },
    {
      text: 'hej2'
    }
  ]);


  return (
    <div className="Movies">
      <h1>Movies</h1>
      <div className="cardGrid">
        { 
          todos.map((todo, index) => (
          <Card key={index} index={index} todo={todo} /> ))
        }

            {/* {jsonData.map((movie, index) => (
            <Card key={index} index={index} movie={movie} /> ))} */}
      </div>
    </div>
  );

}
export default Movies;
