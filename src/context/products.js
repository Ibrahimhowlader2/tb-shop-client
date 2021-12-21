import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [featured, setFeatured] = useState([]);
    // const url = "./product.json";
    const url2 = "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON";
    useEffect(() => {
        setLoading(true);
        axios.get(`${url2}`)
            .then(response => {
                setProducts(response.data)
                setLoading(false);
            });
    }, [])

    return (
        <ProductContext.Provider value={{ products, loading, featured }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;