
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import arrow from '../../assets/up-arrow.png';
import '../backToTop/BackToTopBtn.css';

const BackToTopBtn = () => {

  const [isVisible, setVisbillity] = useState(false);

  function toTop() {
    window.scrollTo(0, 0);

    if (window.pageYOffset > 300) {
      setVisbillity(true);
    } else {
      setVisbillity(false);
    }
  }

  return (
    <div className="btnContainer">
      <button className="toTopBtn" onClick={() => toTop()}>
        <img src={arrow} className="img-fluid" alt="..." />
      </button>
    </div>
  );
}
export default withRouter(BackToTopBtn);
