import React from 'react';
import product from '../../../images/product-1.jpg';
const TestCart = (props) => {
    const { cart } = props;

    /* const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0); */

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

    return (
        <>
            <section class="shopping-cart">

                <h1 class="heading">your <span>products </span> {totalQuantity}</h1>

                <div class="box-container">

                    <div class="box">
                        <i class="fas fa-times"></i>
                        <img src={product} alt="" />
                        <div class="content">
                            <h3>headphone</h3>
                            <form action="">
                                <span>quantity : </span>
                                <input type="number" name="" value="1" id="" />
                            </form>
                            <div class="price">$249.99 <span>$399.99</span></div>
                        </div>
                    </div>


                </div>

                <div class="cart-total">
                    <h3> Total : <span>$ {total.toFixed(2)}</span> </h3>
                    <h3> Shipping : <span>$ {shipping}</span> </h3>
                    <h3> Tax : <span>$ {tax.toFixed(2)}</span> </h3>
                    <h3> Grand Total : <span> $ {grandTotal.toFixed(2)} </span> </h3>
                    <a href="#/" class="btn">proceed to checkout</a>
                </div>

            </section>
        </>
    );
};

export default TestCart;