import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Cart.css';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import { removeFromDb } from '../../utilities/fakeDb';


const Cart = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    let totalQuantity = 0;

    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    return (
        <>
            <Header/>
            <section class="shopping-cart">


                <h1 class="heading">your <span>products {totalQuantity}</span></h1>


                <div class="box-container">

                    {
                        cart.map(product => (
                            <div
                                class="box"
                                key={product.key}
                            >
                                <i onClick={() => handleRemove(product.key)} class="fas fa-times"></i>
                                <img src={product.img} alt="" />
                                <div class="content">
                                    <h3>{product.name}</h3>
                                    <form action="">
                                        <span>quantity : </span>
                                        <input type="number" name="" value={product.quantity} id="" />
                                    </form>
                                    <div class="price">$ {product.price} <span>$399.99</span></div>
                                </div>
                            </div>
                        ))
                    }




                </div>

                <div class="cart-total">
                    <h3> Total : <span>$ {total.toFixed(2)}</span> </h3>
                    <h3> Shipping : <span>$ {shipping}</span> </h3>
                    <h3> Tax : <span>$ {tax.toFixed(2)}</span> </h3>
                    <h3> Grand Total : <span> $ {grandTotal.toFixed(2)} </span> </h3>
                    <a href="#/" class="btn">proceed to checkout</a>
                </div>

            </section>
            <Footer />
        </>
    );
};

export default Cart;