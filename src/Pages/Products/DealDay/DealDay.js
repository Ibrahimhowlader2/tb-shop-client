import React from 'react';
import './DealDay.css';

import product_banner_1 from '../../../images/product-banner-1.jpg';
import product_banner_2 from '../../../images/product-banner-2.jpg';

const DealDay = () => {
    return (
        <>
            <section class="product-banner">

                <h1 class="heading"> <span>deal</span> of the day </h1>

                <div class="box-container">

                    <div class="box">
                        <img src={product_banner_1} alt=""/>
                            <div class="content">
                                <span>special offer</span>
                                <h3>upto 50% off</h3>
                                <a href="#/" class="btn">shop now</a>
                            </div>
                    </div>

                    <div class="box">
                        <img src={product_banner_2} alt=""/>
                            <div class="content">
                                <span>special offer</span>
                                <h3>upto 50% off</h3>
                                <a href="#/" class="btn">shop now</a>
                            </div>
                    </div>

                </div>

            </section>
        </>
    );
};

export default DealDay;