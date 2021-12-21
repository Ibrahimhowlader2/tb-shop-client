import React from 'react';
import './Arrivals.css';
import arrival_1 from '../../../images/arrival-1.jpg';
import arrival_1_hover from '../../../images/arrival-1-hover.jpg';

const Arrivals = () => {
    return (
        <>
            <section class="arrivals">

                <h1 class="heading"> new <span>arrivals</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <div class="image">
                            <img src={arrival_1} class="main-img" alt="" />
                            <img src={arrival_1_hover} class="hover-img" alt="" />
                        </div>
                        <div class="content">
                            <h3>HD television</h3>
                            <div class="price"> $249.99 <span>$399.99</span> </div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div> 
                    <div class="box">
                        <div class="image">
                            <img src={arrival_1} class="main-img" alt="" />
                            <img src={arrival_1_hover} class="hover-img" alt="" />
                        </div>
                        <div class="content">
                            <h3>HD television</h3>
                            <div class="price"> $249.99 <span>$399.99</span> </div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div> 
                    <div class="box">
                        <div class="image">
                            <img src={arrival_1} class="main-img" alt="" />
                            <img src={arrival_1_hover} class="hover-img" alt="" />
                        </div>
                        <div class="content">
                            <h3>HD television</h3>
                            <div class="price"> $249.99 <span>$399.99</span> </div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div> 
                    <div class="box">
                        <div class="image">
                            <img src={arrival_1} class="main-img" alt="" />
                            <img src={arrival_1_hover} class="hover-img" alt="" />
                        </div>
                        <div class="content">
                            <h3>HD television</h3>
                            <div class="price"> $249.99 <span>$399.99</span> </div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div> 

                </div>

            </section>
        </>
    );
};

export default Arrivals;