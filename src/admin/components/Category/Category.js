/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */

import { useState } from 'react';
import CheckboxTree from 'react-checkbox-tree';
import { BiChevronRight } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory } from '../../../store/actions/categoryAction';
import createCategoryList from '../../helpers/createCategoryList';
import './Category.css';

const Category = () => {
    const { categories, loading } = useSelector((state) => state.category);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [category, setCategory] = useState({
        name: '',
        parentId: '',
        slug: '',
    });
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
        const form = new FormData();
        form.append('image', image);
        Object.keys(category).forEach((key) => {
            form.append(key, category[key]);
        });
        dispatch(createCategory(form));

        setCategory({});
        event.target.reset();
    };

    const renderCategories = (getCategories = []) => {
        const myCategories = [];

        getCategories.forEach((category) => {
            myCategories.push({
                label: category.name,
                value: category._id,
                children: category?.children?.length > 0 && renderCategories(category.children),
            });
        });
        return myCategories;
    };

    const AllCategories = createCategoryList(categories);

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
                                    {AllCategories.map((option) => (
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

            {loading ? (
                <p>Loading...</p>
            ) : (
                <CheckboxTree
                    nodes={renderCategories(categories)}
                    checked={checked}
                    expanded={expanded}
                    onCheck={(checked) => setChecked(checked)}
                    onExpand={(expanded) => setExpanded(expanded)}
                    icons={{
                        expandClose: <BiChevronRight />,
                        expandOpen: <FiChevronDown />,
                        expandAll: <FiChevronDown />,
                        collapseAll: <BiChevronRight />,
                    }}
                />
            )}
        </div>
    );
};

export default Category;
