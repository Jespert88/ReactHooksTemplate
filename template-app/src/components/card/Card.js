
import React, { useState } from 'react';
import '../card/Card.css';


const Card = ({ movie }) => {

    const [showText, setShowText] = useState(false);

   

    let poster = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    //let testPoster = "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"

    return (
        <div className="card" type="button" onClick={() => setShowText(!showText)}>
            {/* <img src="https://loremflickr.com/320/240" className="img-fluid" /> */}
            <img src={poster} className="img-fluid" id="posterImg" alt="..." />
            <div className="textBody">
                {showText &&
                    <p className="card-text">
                        {movie.overview}
                    </p>
                }
            </div>
        </div>
    );
}
export default Card;

