import { Table } from 'react-bootstrap';

const ProductTable = () => {
    return (
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ProductTable;
