import React, { useContext } from 'react';
import Loading from '../../../components/Loading';
import { ProductContext } from '../../../context/products';
// import Footer from '../../Shared/Footer/Footer';
// import Header from '../../Shared/Header/Header';
// import DealDay from '../DealDay/DealDay';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
// import ShopCategory from '../ShopCategory/ShopCategory';

const Products = () => {

    // console.log(React.useContext(ProductContext))
    const { loading, products } = (useContext(ProductContext));
    console.log(products)

    if(loading) {
        return <Loading/>
    }

    return (
        <>
            <FeaturedProducts
                products={products}
            />
            {/* <Header />
            <ShopCategory />
            <DealDay />
            <Footer /> */}
        </>
    );
};

export default Products;