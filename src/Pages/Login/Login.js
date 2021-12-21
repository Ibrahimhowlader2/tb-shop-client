import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Login.css';

const Login = () => {
    return (
        <>
            <Header />
            <section class="login">

                <form >
                    <h3>login now</h3>
                    <input type="email" name="" placeholder="enter your email" id="" class="box" />
                    <input type="password" name="" placeholder="enter your password" id="" class="box" />
                    <div class="remember">
                        <input type="checkbox" name="" id="remember-me" />
                        <label for="remember-me"> remember me </label>
                    </div>
                    <input type="submit" value="login now" class="btn" />
                    <Link to="/register">don't have an account? <i class="far fa-hand-pointer"></i></Link>
                    <button class="btn link">Google</button>
                    <button class="btn link">Github</button>
                </form>

            </section>
            <Footer />
        </>
    );
};

export default Login;