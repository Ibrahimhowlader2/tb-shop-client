import React from 'react';
import './Footer.css';
import card_img from '../../../images/card_img.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <section class="quick-links">

                <a href="home.html" class="logo"> <i class="fas fa-store"></i> TbShop </a>

                <div class="links">
                    <Link to="/"> home </Link>
                    <Link to="/about"> about </Link>
                    <Link to="/products"> products </Link>
                    <a href="contact.html"> contact </a>
                    <Link to="/login"> login </Link>
                    <Link to="/register"> register </Link>
                    <Link to="/cart"> cart </Link>
                </div>

                <div class="share">
                    <a href="#/" class="fab fa-facebook-f"> </a>
                    <a href="#/" class="fab fa-twitter"> </a>
                    <a href="#/" class="fab fa-instagram"> </a>
                    <a href="#/" class="fab fa-linkedin"> </a>
                </div>

            </section>

            <section class="credit">

                <p> created by <span>Ibrahim Howlader</span> | all rights reserved! </p>

                <img src={card_img} alt=""/>

            </section>
        </>
    );
};

export default Footer;