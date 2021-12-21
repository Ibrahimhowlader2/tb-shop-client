import React from 'react';
import './ShopCategory.css';
import cat_1 from '../../../images/cat_img1.png';
const ShopCategory = () => {
    return (
        <>

            <section class="category">

                <h1 class="heading"> shop by <span>category</span> </h1>

                <div class="box-container">

                    <a href="#/" class="box">
                        <img src={cat_1} alt="" />
                        <h3>games</h3>
                    </a>
                    <a href="#/" class="box">
                        <img src={cat_1} alt="" />
                        <h3>games</h3>
                    </a>
                    <a href="#/" class="box">
                        <img src={cat_1} alt="" />
                        <h3>games</h3>
                    </a>
                    <a href="#/" class="box">
                        <img src={cat_1} alt="" />
                        <h3>games</h3>
                    </a>
                    <a href="#/" class="box">
                        <img src={cat_1} alt="" />
                        <h3>games</h3>
                    </a>
                    <a href="#/" class="box">
                        <img src={cat_1} alt="" />
                        <h3>games</h3>
                    </a>

                </div>

            </section>
        </>
    );
};

export default ShopCategory;