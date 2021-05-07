/* eslint-disable no-unused-vars */
import * as Types from '../constants';

const init = {
    categories: [],
    category: {},
    loading: false,
    error: '',
    message: '',
};

const buildNewCategories = (parentId, categories, cat) => {
    const myCategories = [];

    if (parentId) {
        categories.forEach((category) => {
            if (category._id === parentId) {
                myCategories.push({
                    ...category,
                    children:
                        category.children && category.children.length > 0
                            ? buildNewCategories(parentId, [...category.children, cat], category)
                            : [],
                });
            } else {
                myCategories.push({
                    ...category,
                    children:
                        category.children && category.children.length > 0
                            ? buildNewCategories(parentId, [...category.children], category)
                            : [],
                });
            }
        });
    } else {
        return [...categories, cat];
    }

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
            const { category } = action.payload;
            const categories = buildNewCategories(category.parentId, state.categories, category);
            console.log(categories);
            return {
                ...state,
                categories,
                category,
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
