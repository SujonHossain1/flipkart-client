/* eslint-disable no-unused-vars */
import * as Types from '../constants';

const init = {
    categories: [],
    category: {},
    loading: false,
    error: '',
    message: '',
};

const buildNewCategories = (id, categories, cat) => {
    const myCategories = [];
    const { _id, name, parentId, slug, image, children } = cat;
    const createCategory = { _id, name, parentId, slug, image, children };

    console.log(id, categories, cat);

    categories.forEach((category) => {
        if (category.parentId && category.parentId === id) {
            myCategories.push({
                ...category,
                children:
                    category.children && category.children.length > 0
                        ? buildNewCategories(id, [...category.children, createCategory], category)
                        : [],
            });
        } else {
            myCategories.push({
                ...category,
                children:
                    category.children && category.children.length > 0
                        ? buildNewCategories(id, [...category.children], category)
                        : [],
            });
        }
    });

    return myCategories;
};

const categoryReducer = (state = init, action) => {
    switch (action.type) {
        case Types.GET_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case Types.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload.categories,
                loading: false,
                error: '',
            };
        case Types.GET_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };

        /** **** Create Category ******* */
        case Types.CREATE_CATEGORY_REQUEST:
            return {
                ...state,
                lading: true,
            };

        case Types.CREATE_CATEGORY_SUCCESS: {
            const categories = buildNewCategories(
                action.payload.category._id,
                state.categories,
                action.payload.category
            );
            console.log(categories);
            return {
                ...state,
                categories,
                category: action.payload.category,
                message: action.payload.message,
                error: '',
            };
        }

        case Types.CREATE_CATEGORY_FAILURE:
            return {
                ...state,
                message: '',
                error: action.payload?.error || 'Something went wrong!',
                loading: false,
            };
        default:
            return state;
    }
};

export default categoryReducer;
