/* eslint-disable prettier/prettier */

import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ModalComponent from '../Modal/Modal';

const ProductTable = () => {
    const { products, loading } = useSelector((state) => state.product);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="pt-4">
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Picture</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {loading
                        ? 'Loading...'
                        : products.map((product) => (
                            <tr key={product._id} onClick={handleShow} >
                                <td>1</td>
                                <td> {product.name} </td>
                                <td> {product.price} </td>
                                <td> {product.quantity} </td>
                                <td>
                                    <img
                                        src={`http://localhost:4000/public/${product.images[0]}`}
                                        className="img-fluid"
                                        width="100px"
                                        alt=""
                                    />
                                </td>
                                <td> -- </td>
                            </tr>
                        ))}
                </tbody>
            </Table>

            <ModalComponent
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
            />

        </div>
    );
};

export default ProductTable;
