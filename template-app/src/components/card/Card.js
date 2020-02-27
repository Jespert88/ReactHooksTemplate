
import React, {useState} from 'react';
import '../card/Card.css';

const Card = props => {
    const [movieArray] = useState(props);
    console.log(movieArray, props);

    return (
        <div className="card">
            <img src="https://loremflickr.com/320/240" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{movieArray.name}</h5>
                <p className="card-text">{movieArray.email}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
export default Card;

