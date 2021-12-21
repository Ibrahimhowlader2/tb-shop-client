import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakeDb"



const useCart = products => {
    const [cart, setCart] = useState([])

    let totalQuantity = 0;

    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    useEffect(() => {

        if (products.length ) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart);
        }
    }, [products])
    return [cart, setCart,totalQuantity]
}

export default useCart;