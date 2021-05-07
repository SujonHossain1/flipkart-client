/* eslint-disable import/prefer-default-export */

import admin from '../../helpers/adminInstance';

export const addProduct = (product) => async () => {
    const res = await admin.post('/api/products/add-product-images', product);
    console.log(res);
};
