
import React, {useState} from 'react';
import '../card/Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src="https://loremflickr.com/320/240" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.email}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
export default Card;

