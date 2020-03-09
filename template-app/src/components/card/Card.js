
import React, { useState } from 'react';
import Star from '../../assets/star.png';
import '../card/Card.css';


const Card = ({ movie }) => {

    const [showText, setShowText] = useState(false);

    let poster = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    //let testPoster = "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"

    return (
        <div className="card" type="button" onClick={() => setShowText(!showText)}>
            {/* <img src="https://loremflickr.com/320/240" className="img-fluid" /> */}
            <div className="rateContainer">
            <img src={Star} className="img-fluid" id="ratingStarImg" alt="..." />
                {movie.vote_average}
            </div>
            <img src={poster} className="img-fluid" id="posterImg" alt='...'/>
            <div className="textBody">
                {showText &&
                    <div className="card-text">
                        <h4 className="card-title">The plot</h4>
                        {movie.overview}<br></br><br></br>
                        {movie.release_date}
                    </div>
                }
            </div>
        </div>
    );
}
export default Card;

