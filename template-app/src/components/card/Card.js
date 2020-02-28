
import React from 'react';
import '../card/Card.css';

const Card = ({movie}) => {

    let poster = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    //let testPoster = "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"

    return (
        <div className="card">
            {/* <img src="https://loremflickr.com/320/240" className="img-fluid" /> */}
            <img src={poster} className="img-fluid" />
            
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <p className="card-text">{/* {movie.email} */}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
export default Card;

