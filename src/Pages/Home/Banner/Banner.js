import React from 'react';
import './Banner.css';
import home_img_1 from '../../../images/home-img-1.jpg';
import home_img_2 from '../../../images/home-img-2.jpg';
import home_img_3 from '../../../images/home-img-3.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

const Banner = () => {
    SwiperCore.use([Autoplay, Pagination, Navigation]);
    return (
        <>
            <section className="home">
                <div class="swiper home-slider">
                    <div class="swiper-wrapper">
                        <Swiper
                            spaceBetween={20}
                            freeMode={true}
                            grabCursor={true}
                            autoplay={{
                                "delay": 7500,
                                "disableOnInteraction": false
                            }}
                            /* pagination={{
                                "clickable": true
                            }} */
                            navigation={true}
                            className="mySwiper">

                            <SwiperSlide>
                                <div class="swiper-slide slide">
                                    <div class="image">
                                        <img src={home_img_1} alt="" />
                                    </div>
                                    <div class="content">
                                        <span>upto 50% off</span>
                                        <h3>smartphones</h3>
                                        <a href="#/" class="btn">shop now</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="swiper-slide slide">
                                    <div class="image">
                                        <img src={home_img_1} alt="" />
                                    </div>
                                    <div class="content">
                                        <span>upto 50% off</span>
                                        <h3>smartphones</h3>
                                        <a href="#/" class="btn">shop now</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="swiper-slide slide">
                                    <div class="image">
                                        <img src={home_img_1} alt="" />
                                    </div>
                                    <div class="content">
                                        <span>upto 50% off</span>
                                        <h3>smartphones</h3>
                                        <a href="#/" class="btn">shop now</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;