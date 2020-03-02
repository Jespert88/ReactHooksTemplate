
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../home/Home.css';

/* Components */
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';

function Home() {

  const [jsonData, setData] = useState([]);


  function favoriteMovies() {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=92bc743bbc32dc90030e2036637f8276&language=en-US&query=Lord%20of%20the%20rings&page=1&include_adult=false')
      .then(function (response) {
        let data = response.data.results;
        console.log(data);
        let SplitData = response.data.results.slice(0, 3);
        console.log(SplitData)
        setData(SplitData);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  useEffect(() => {
    favoriteMovies();
  }, []);


  return (
    <div>
      <div className="container-fluid">
        <div className="row no-gutters">

          <div className="col-sm-12 col-md-1 col-xl-3"></div>

          <div className="col-sm-12 col-md-10 col-xl-6">
            <div className="containerForImgWallpaper">
              <div className="HomeBox">
                <h1 className="HomeTitle">Welcome</h1>
                <p className="HomeSubText">
                  This is my template app that i created in order for learning how React Hooks works.
                  As i become a better programmer i will update this to fix beginner mistakes and make it more advance.
                </p><br></br>

                <h1>Here are my favorite movies</h1>
                {
                  jsonData.map((movie, index) => (
                    <Card className="homeCardStyle" key={index} index={index} movie={movie} />
                  ))
                }

              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-1 col-xl-3"></div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
