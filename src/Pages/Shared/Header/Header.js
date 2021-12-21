import React, { useState } from 'react';
import './Header.css';
import user_img from '../../../images/user-img.png';
import { Link } from 'react-router-dom';
import useCart from '../../../hooks/useCart';
import useProducts from '../../../hooks/useProducts';



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    
     const [products] = useProducts();
    const [cart] = useCart(products);


    return (
        <>
            <header class="header">

                <a href="/" class="logo"> <i class="fas fa-store"></i> TbShop </a>

                <form class={`search-form ${isSearchOpen ? 'active' : ''}`}>
                    <input
                        type="search"
                        id="search-box"
                        placeholder="search here..."
                    />
                    <label for="search-box" class="fas fa-search"></label>
                </form>

                <div class="icons">
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} id="menu-btn" class="fas fa-bars"></div>
                    <div onClick={() => setIsSearchOpen(!isSearchOpen)} id="search-btn" class="fas fa-search"></div>
                    <Link to="/login" class="fas fa-user"> </Link>
                    <a href="#/" class="fas fa-heart"> </a>
                    <Link to="/cart" class="fas fa-shopping-cart"> <span className="cart_count"> {cart.length} </span> </Link>
                </div>

            </header>
            {/* Side Bar */}
            <div class={`side-bar ${isMenuOpen ? 'active' : ''}`}>

                <div onClick={() => setIsMenuOpen(!isMenuOpen)} id="close-side-bar" class="fas fa-times"></div>

                <div class="user">
                    <img src={user_img} alt="" />
                    <h3>Ibrahim Howlader</h3>
                    <a href="#/">log out</a>
                </div>

                <nav class="navbar">
                    <ul>
                        <li >
                            <Link to="/"> <i class="fas fa-angle-right"></i> home </Link>
                        </li>
                        <li >
                            <Link to="/about"> <i class="fas fa-angle-right"></i> about </Link>
                        </li>
                        <li>
                            <Link to="/products"> <i class="fas fa-angle-right"></i> products </Link>
                        </li>
                        <li>
                            <a href="contact.html"> <i class="fas fa-angle-right"></i> contact </a>
                        </li>
                        <li>
                            <Link to="/login"> <i class="fas fa-angle-right"></i> login </Link>
                        </li>
                        <li>
                            <Link to="/register"> <i class="fas fa-angle-right"></i> register </Link>
                        </li>
                        <li>
                            <Link to="/cart"> <i class="fas fa-angle-right"></i> cart </Link>
                        </li>
                    </ul>
                </nav>

            </div>

        </>
    );
};

export default Header;