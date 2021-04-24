import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="admin__sidebar">
            <div>
                <Link exact to="/admin/dashboard/login">
                    Login
                </Link>
            </div>
            <div>
                <Link exact to="/admin/dashboard/sign-up">
                    SignUp
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
