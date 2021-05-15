/* eslint-disable prettier/prettier */

import { useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ModalComponent from '../Modal/Modal';

const ProductTable = () => {
    const { products, loading } = useSelector((state) => state.product);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [productDetails, setProductDetails] = useState({});
    const productDetailsModal = (product) => {
        console.log(product)
        setShow(true);
        setProductDetails(product);
    }
    return (
        <div className="pt-4">
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {loading
                        ? 'Loading...'
                        : products.map((product) => (
                            <tr key={product._id} onClick={() => productDetailsModal(product)}  >
                                <td>1</td>
                                <td> {product.name} </td>
                                <td> {product.price} </td>
                                <td> {product.quantity} </td>
                                <td>  {product.category?.name} </td>
                            </tr>
                        ))}
                </tbody>
            </Table>

            <ModalComponent
                show={show}
                handleClose={handleClose}
                handleShow={productDetailsModal}
                title="Product Details"
                size="lg"
            >
                <Row>
                    <Col md="6">
                        <label className="key">Name: </label>
                        <p className="value "> {productDetails.name} </p>
                    </Col>
                    <Col md="6">
                        <label className="key">Price: </label>
                        <p className="value "> {productDetails.price} </p>
                    </Col>
                    <Col md="6">
                        <label className="key">Quantity: </label>
                        <p className="value "> {productDetails.quantity} </p>
                    </Col>
                    <Col md="6">
                        <label className="key">Category: </label>
                        <p className="value "> {productDetails.category?.name} </p>
                    </Col>
                    <Col md="12">
                        <label className="key">Description: </label>
                        <p className="value "> {productDetails.description} </p>
                    </Col>
                    <Col >
                        <label className="key">Product Image: </label>
                        <div className="productImageContainer">
                            {productDetails?.images?.map(image => (
                                <div className="productImage">
                                    <img width="100px" height="100px" src={`http://localhost:4000/public/${image}`} alt="" />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </ModalComponent>

        </div >
    );
};

export default ProductTable;
