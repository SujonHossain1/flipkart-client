import './Product.css';

const Product = ({ product }) => {
    console.log(product);
    return (
        <div className="product">
            <div className="product__img">
                <img
                    src="https://rukminim1.flixcart.com/image/312/312/kn22m4w0/mobile/a/q/8/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmjw3xqg4yk.jpeg?q=70"
                    alt=""
                />
            </div>
            <div className="product__content">
                <div className="product__name">Samsung Galaxy S21</div>
                <div className="product__rating">
                    <span>4.5</span>
                    <span> (3333) </span>
                </div>
                <div className="product__price">500tk</div>
            </div>
        </div>
    );
};

export default Product;
