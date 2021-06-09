import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './MenuHeader.css';

const MenuHeader = () => {
    const { categories } = useSelector((state) => state.category);

    const renderCategories = (getCategories = []) => {
        const myCategories = [];

        getCategories.forEach((category) => {
            myCategories.push(
                <li key={category._id}>
                    {category.parentId ? (
                        <Link to={`/products/${category.slug}`}> {category.name}</Link>
                    ) : (
                        <span> {category.name}</span>
                    )}

                    {category.children ? (
                        <ul key={category._id}>{renderCategories(category.children)}</ul>
                    ) : null}
                </li>
            );
        });
        return myCategories;
    };

    return (
        <div className="menuHeader">
            <ul>{categories.length > 0 ? renderCategories(categories) : null}</ul>
        </div>
    );
};

export default MenuHeader;
