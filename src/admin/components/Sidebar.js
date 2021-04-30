import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="col-md-2">
            <div className="admin__sidebar">
                <ul className="admin__sidebar__links">
                    <li className="admin__sidebar__link">
                        <Link exact to="/admin/dashboard/login">
                            Login
                        </Link>
                    </li>
                    <li className="admin__sidebar__link">
                        <Link exact to="/admin/dashboard/sign-up">
                            SignUp
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
