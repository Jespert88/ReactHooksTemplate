
import React from 'react';
import './Movies.css';

 /* Components */
import Card from '../../components/card/Card';

function Movies() {
  return (
    <div className="Movies">
     <h1>Movies</h1>
      <div className="cardGrid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
export default Movies;
