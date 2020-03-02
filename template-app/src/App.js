
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

/* Pages */
import Home from '../src/pages/home/Home';
import Movies from '../src/pages/movies/Movies';

 /* Components */
import Navbar from '../src/components/navbar/Navbar';
/* import BackToTop from '../src/components/backToTop/BackToTopBtn'; */


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <BackToTop /> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  /* return (
    <div className="App">
     <Home />
     <People />
    </div>
  ); */
}
export default App;
