/* eslint-disable react/no-array-index-key */
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Product from '../../components/Product/Product';
import { getProductsBySlug } from '../../store/actions/productAction';
import './Products.css';

const Products = () => {
    const { categorySlug } = useParams();
    const dispatch = useDispatch();
    const { products, productByPrice } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProductsBySlug(categorySlug));
    }, [categorySlug, dispatch]);

    console.log(Object.keys(productByPrice).map((item) => productByPrice[item]));

    return (
        <div>
            <Helmet>
                <title>Online Shopping Bangladesh</title>
            </Helmet>
            <div className="product__container">
                <div className="product__header">
                    <div className="">Samsung Mobile Under 5k </div>
                    <button type="button">view all</button>
                </div>
                <div className="productsContainer">
                    {products.map((product) => (
                        <Product product={product} key={product._id} />
                    ))}
                </div>
            </div>

            {Object.keys(productByPrice).map(
                (filterPrice) =>
                    productByPrice[filterPrice].length > 0 && (
                        <div className="product__container" key={filterPrice}>
                            <div className="product__header">
                                <div className="">
                                    Samsung Mobile Under {filterPrice.split('under')[1]}
                                </div>
                                <button type="button">view all</button>
                            </div>
                            <div className="productsContainer">
                                {productByPrice[filterPrice]?.map((product) => (
                                    <Product product={product} key={product._id} />
                                ))}
                            </div>
                        </div>
                    )
            )}
        </div>
    );
};

export default Products;
