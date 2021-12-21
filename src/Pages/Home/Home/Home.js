import React from 'react';
import './Home.css';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import NextBanner from '../NextBanner/NextBanner';
import Arrivals from '../Arrivals/Arrivals';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <NextBanner/>
            <Arrivals/>
            <Footer/>
        </div>
    );
};

export default Home;