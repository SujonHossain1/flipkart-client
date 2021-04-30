/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory } from '../../../store/actions/categoryAction';
import './Category.css';

const Category = () => {
    const { categories, loading } = useSelector((state) => state.category);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState({});
    const [image, setImage] = useState(null);

    const inputHandler = (event) => {
        const { name, value } = event.target;
        setCategory((category) => ({
            ...category,
            [name]: value,
        }));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(category, image);
        const form = new FormData();

        form.append('image', image);
        Object.keys(category).forEach((key) => {
            form.append(key, category[key]);
        });

        console.log(form);
        dispatch(createCategory(form));
    };

    const renderCategories = (getCategories) => {
        const myCategories = [];

        getCategories.forEach((category) => {
            myCategories.push(
                <li key={category._id}>
                    {category.name}
                    {category.children ? (
                        <ul key={category._id}>{renderCategories(category.children)}</ul>
                    ) : null}
                </li>
            );
        });
        return myCategories;
    };

    const createCategoryList = (getCategories, options = []) => {
        getCategories.forEach((category) => {
            options.push({ value: category._id, name: category.name });
            if (category.children) {
                createCategoryList(category.children, options);
            }
        });

        return options;
    };

    return (
        <div>
            <div className="col-md-7">
                <div className="d-flex justify-content-between pt-3">
                    <div className="h4">Categories</div>
                    <button className="submit__btn" type="button" onClick={() => setShow(true)}>
                        Add Category
                    </button>
                </div>
            </div>
            {show && (
                // <AddCategory
                //     setShow={setShow}
                //     categoriesList={createCategoryList(categories)}
                //     inputHandler={inputHandler}
                //     submitHandler={submitHandler}
                //     category={category}
                // />

                <div className="col-md-7 py-3">
                    <form onSubmit={submitHandler}>
                        <div className="input__group">
                            <label htmlFor=""> Category Name* </label>
                            <input
                                type="text"
                                name="name"
                                id=""
                                placeholder="Category Name"
                                onChange={inputHandler}
                                defaultValue={category.name}
                            />
                        </div>

                        <div className="input__group">
                            <label htmlFor="">Parent Category</label>
                            <div className="input__select__group">
                                <select
                                    name="parentId"
                                    id=""
                                    className="input__select"
                                    onChange={inputHandler}
                                    defaultValue={category.parentId}
                                >
                                    <option>Select Category</option>
                                    {createCategoryList(categories).map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="input__group">
                            <label htmlFor="">Category Image* </label>
                            <input
                                type="file"
                                name="image"
                                id=""
                                onChange={(event) => setImage(event.target.files[0])}
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
                                defaultValue={category.slug}
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
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {loading ? <p>Loading...</p> : renderCategories(categories)}
        </div>
    );
};

export default Category;