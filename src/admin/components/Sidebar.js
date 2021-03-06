import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="col-md-2">
            <div className="admin__sidebar">
                <ul className="admin__sidebar__links">
                    <li className="admin__sidebar__link">
                        <Link exact="true" to="/admin/dashboard/">
                            Home
                        </Link>
                    </li>
                    <li className="admin__sidebar__link">
                        <Link exact="true" to="/admin/dashboard/category">
                            Category
                        </Link>
                    </li>
                    <li className="admin__sidebar__link">
                        <Link exact="true" to="/admin/dashboard/products">
                            Products
                        </Link>
                    </li>
                    <li className="admin__sidebar__link">
                        <Link exact="true" to="/admin/dashboard/orders">
                            Orders
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
