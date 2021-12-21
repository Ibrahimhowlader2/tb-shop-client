import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { ProductContext } from '../../context/products';
// import { CartContext } from '../../context/cart';


const Product = () => {

    const { id } = (useParams());
    const navigate = useNavigate();

    const { products} = useContext(ProductContext);

    const product = products.find(item => item.key === parseInt(id));
    /* if(products.length === 0) {
        return <Loading/>;
    }else{
        const { name } = product;
    } */

    
   
    return (
        <div>
            {/* <h2>{name}</h2> */}
        </div>
    );
};

export default Product;