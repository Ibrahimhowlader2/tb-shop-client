import React from 'react';
import './NextBanner.css';
import banner_1 from '../../../images/banner-1.jpg';
import banner_2 from '../../../images/banner-2.jpg';
import banner_3 from '../../../images/banner-3.jpg';

const NextBanner = () => {
    return (
        <>
            <section class="banner">

                <div class="box-container">

                    <a href="#/" class="box">
                        <img src={banner_1} alt=""/>
                            <div class="content">
                                <span>special offer</span>
                                <h3>upto 50% off</h3>
                            </div>
                    </a>

                    <a href="#/" class="box">
                        <img src={banner_2} alt=""/>
                            <div class="content">
                                <span>special offer</span>
                                <h3>upto 50% off</h3>
                            </div>
                    </a>

                    <a href="#/" class="box">
                        <img src={banner_3} alt=""/>
                            <div class="content">
                                <span>special offer</span>
                                <h3>upto 50% off</h3>
                            </div>
                    </a>

                </div>

            </section>
        </>
    );
};

export default NextBanner;