import { useEffect } from 'react';

const Products = () => {
    useEffect(() => {
        document.title = 'Products';
    }, []);

    return (
        <div>
            <h3>Product Details</h3>
        </div>
    );
};

export default Products;
