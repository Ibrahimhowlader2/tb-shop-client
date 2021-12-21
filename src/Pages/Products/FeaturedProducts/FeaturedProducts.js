import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../../utilities/fakeDb';
import './FeaturedProducts.css';

const FeaturedProducts = ({products}) => {
   

   
    const handleAddToCart = e => {
        
    }

    return (
        <>
            <section class="products">

                <h1 class="heading"> featured <span>products</span> </h1>
                <h2>{products.length}</h2>
                <div class="box-container">
                    {
                        products.map((product, index) => (

                            <div
                                key={product.key}
                                class="box">
                                <div class="image">
                                    <img src={product.img} class="main-img" alt="" />
                                    <img src={product.imgHover} class="hover-img" alt="" />
                                    <div class="icons">
                                        {/* <a href="#/" class="fas fa-shopping-cart"> </a> */}
                                        <button onClick={() => handleAddToCart(product)} ><i class="fas fa-shopping-cart"></i></button>
                                        <Link to={`/products/${product.key}`} class="fas fa-search-plus"> </Link>
                                        <a href="#/" class="fas fa-heart"> </a>
                                        <a href="#/" class="fas fa-share"> </a>
                                    </div>
                                </div>
                                <div class="content">
                                    <h3>{product.name}</h3>
                                    <div class="price">$ {product.price} <span>$399.99</span></div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </section>
        </>
    );
};

export default FeaturedProducts;