
import React from 'react';
import '../card/Card.css';

const Card = ({movie}) => {
    return (
        <div className="card">
            <img src="https://loremflickr.com/320/240" className="img-fluid" />
            <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">{movie.email}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
export default Card;

