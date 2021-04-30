import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../store/actions/categoryAction';
import Category from '../components/Category/Category';
import Layout from '../components/Layout/Layout';

const Categories = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);
    return (
        <Layout>
            <Category />
        </Layout>
    );
};

export default Categories;
