
import React from 'react';
import '../footer/Footer.css';

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="imgFooterContainer">
                <img src="../moviedbLogo.png" className="img-fluid" id="footerImg" />
            </div>
            <div className="footerTextContainer">
                <p className="footerText">Created by Jesper T</p>
            </div>
        </footer>
    );
}
export default Footer;
