import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Register = () => {
    return (
        <>
            <Header />
            <section class="register">

                <form >
                    <h3>Register now</h3>
                    <input type="text" name="" placeholder="enter your name" id="" class="box" />
                    <input type="email" name="" placeholder="enter your email" id="" class="box" />
                    <input type="password" name="" placeholder="enter your password" id="" class="box" />
                    <input type="password" name="" placeholder="re-enter your password" id="" class="box" />
                    <input type="submit" value="register now" class="btn" />
                    <Link to="/login">Already Have An Account? <i class="far fa-hand-pointer"></i></Link>
                    <button class="btn link">Google</button>
                    <button class="btn link">Github</button>
                </form>

            </section>
            <Footer />
        </>
    );
};

export default Register;