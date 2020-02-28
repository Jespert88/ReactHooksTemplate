
import React from 'react';
import '../home/Home.css';

function Home() {
  return (

    <div class="container-fluid">
      <div class="row no-gutters">
        <div class="col-sm-12 col-md-1 col-xl-3"></div>
        <div class="col-sm-12 col-md-10 col-xl-6">
          <div className="containerForImgWallpaper">
            <div className="Home">
              <h1 className="HomeTitle">Welcome</h1>
              <p className="HomeSubText">
                This is my template app that i created in order for learning how React Hooks works.
                As i become a better programmer i will update this to fix beginner mistakes and make it more advance.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-1 col-xl-3"></div>
      </div>
    </div>


  );
}
export default Home;
