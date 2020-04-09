
import React from 'react';
import '../footer/Footer.css';

/* IMG imports from assets */
import linkedIn from '../../assets/linkedin.png';
import github from '../../assets/github.png';


const Footer = () => {
    return (
        <footer className="Footer">

             <div class="container-fluid">
                <div class="row no-gutters">

                    <div class="col-sm-3 col-md-6 col-xl-6">
                        <div className="linkContainer">
                            <a href="https://www.linkedin.com/in/jesper-truedsson-812806142/"><img src={linkedIn} className="img-fluid" class="linkImg" alt="..." /></a>
                            <a href="https://github.com/Jespert88"><img src={github} className="img-fluid" class="linkImg" alt="..." /></a>
                        </div>
                    </div>

                    <div class="col-sm-3 col-md-3 col-xl-6">
                        <p className="footerText">Created by Jesper T</p>
                    </div>

                </div>
            </div>

        </footer>
    );
}
export default Footer;

