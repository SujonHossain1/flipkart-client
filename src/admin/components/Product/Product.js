/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../store/actions/admin.productAction';
import createCategoryList from '../../helpers/createCategoryList';
import './Product.css';
import ProductTable from './ProductTable';

const Category = () => {
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();
    const [productPictures, setProductPictures] = useState([]);
    const { categories } = useSelector((state) => state.category);
    const { message, error, loading } = useSelector((state) => state.product);

    const AllCategories = createCategoryList(categories);

    const inputHandler = (event) => {
        const { name, value } = event.target;
        setProduct((product) => ({
            ...product,
            [name]: value,
        }));
    };

    const handleProductPictures = (event) => {
        setProductPictures([...productPictures, event.target.files[0]]);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const form = new FormData();

        productPictures.forEach((picture) => {
            form.append('images', picture);
        });
        Object.keys(product).forEach((key) => {
            form.append(key, product[key]);
        });

        dispatch(addProduct(form));
    };

    return (
        <div>
            <div className="col-md-7">
                <div className="d-flex justify-content-between pt-3">
                    <div className="h4">Products</div>
                    <button className="submit__btn" type="button" onClick={() => setShow(true)}>
                        Add Product
                    </button>
                </div>
            </div>
            {error && <p style={{ color: 'red' }}>{error} </p>}
            {message && <p style={{ color: 'green' }}>{message} </p>}
            {show && (
                <div className="col-md-7 py-3">
                    <form onSubmit={submitHandler}>
                        <div className="input__group">
                            <label htmlFor=""> Product Name* </label>
                            <input
                                type="text"
                                name="name"
                                id=""
                                placeholder="Product Name"
                                onChange={inputHandler}
                                defaultValue={product.name}
                            />
                        </div>
                        <div className="input__group">
                            <label htmlFor=""> Quantity </label>
                            <input
                                type="text"
                                name="quantity"
                                id=""
                                placeholder=" quantity"
                                onChange={inputHandler}
                                defaultValue={product.quantity}
                            />
                        </div>
                        <div className="input__group">
                            <label htmlFor=""> Price * </label>
                            <input
                                type="text"
                                name="price"
                                id=""
                                placeholder="Price"
                                onChange={inputHandler}
                                defaultValue={product.price}
                            />
                        </div>

                        <div className="input__group">
                            <label htmlFor="">Product Category</label>
                            <div className="input__select__group">
                                <select
                                    name="category"
                                    id=""
                                    className="input__select"
                                    onChange={inputHandler}
                                    defaultValue={product.category}
                                >
                                    <option>Select Category</option>
                                    {AllCategories.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="input__group">
                            <label htmlFor=""> description * </label>
                            <input
                                type="text"
                                name="description"
                                id=""
                                placeholder="Description"
                                onChange={inputHandler}
                                defaultValue={product.description}
                            />
                        </div>
                        <div className="input__group">
                            {productPictures.length > 0 &&
                                productPictures.map((file, index) => (
                                    <div key={file.name}> {file.name} </div>
                                ))}
                            <label htmlFor="">Product Image * </label>
                            <input
                                type="file"
                                id=""
                                name="productPicture"
                                onChange={handleProductPictures}
                            />
                        </div>
                        <div className="input__group">
                            <label htmlFor="">Slug *</label>
                            <input
                                type="text"
                                name="slug"
                                id=""
                                placeholder="Slug"
                                onChange={inputHandler}
                                defaultValue={product.slug}
                            />
                        </div>

                        <div className="input__group">
                            <button
                                type="button"
                                className="cancel__btn"
                                onClick={() => setShow(false)}
                            >
                                Cancel
                            </button>
                            <button type="submit" className="submit__btn">
                                {loading ? 'Loading...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            )}
            <ProductTable />
        </div>
    );
};

export default Category;
