
import React ,{useState} from 'react';
import '../card/Card.css';


const Card = ({movie}) => {

    const [showText, setShowText] = useState(false);

    let poster = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    //let testPoster = "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"

    return (
        <div className="card">
            {/* <img src="https://loremflickr.com/320/240" className="img-fluid" /> */}
            <img src={poster} className="img-fluid" id="posterImg" alt="..." />
            
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                
                {/* This is for toggle the overview text for each movie */}
                {showText && 
                    <p className="card-text">{movie.overview}</p>
                }

                <div className="btnContainer">
                    <button className="infoBtn" onClick={() => setShowText(!showText)}>More info</button>
                </div>
            </div>
        </div>
    );
}
export default Card;

