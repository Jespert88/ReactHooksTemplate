
import React, { useState } from 'react';
import Star from '../../assets/star.png';
import '../card/Card.css';


const Card = ({ movie }) => {

    const [showText, setShowText] = useState(false);
    let poster = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    let backSidePoster = "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path;

    return (
        <div className="card" type="button" onClick={() => setShowText(!showText)}>
            <div className="rateContainer">
                <img src={Star} className="img-fluid" id="ratingStarImg" alt="..." />
                {movie.vote_average}
            </div>
            <img src={poster} className="img-fluid" id="posterImg" alt='...' />

            {showText &&
                <div className="modalShadow">
                    <div className="modalBody">
                        <div className="backSidePosterContainer">
                            <img src={backSidePoster} className="img-fluid" id="posterImg" alt='...' />
                        </div>
                        <h2 className="card-title">{movie.title}</h2>
                        <p className="card-text">{movie.overview}</p>
                        <p className="card-text">{movie.release_date}</p><br></br>

                        <p className="closeModal">Click to close</p>
                    </div>
                </div>
            }
        </div>
    );
}
export default Card;

