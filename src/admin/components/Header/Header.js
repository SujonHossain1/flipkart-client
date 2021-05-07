import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { adminSignOut } from '../../../store/actions/AdminAuthAction';

const Header = () => {
    const { authenticate } = useSelector((state) => state.adminAuth);
    const dispatch = useDispatch();

    const signOutHandler = () => {
        dispatch(adminSignOut());
    };

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            className="sticky-top"
            variant="dark"
            style={{ zIndex: '2' }}
        >
            <Container>
                <Link to="/admin/dashboard" style={{ textDecoration: 'none' }}>
                    <Navbar.Brand>Admin Dashboard</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {authenticate ? (
                            <button
                                type="button"
                                className="btn btn-danger btn-sm "
                                onClick={signOutHandler}
                            >
                                Sign Out
                            </button>
                        ) : (
                            <>
                                <NavLink exact to="/admin/dashboard/login" className="nav-link">
                                    Login
                                </NavLink>
                                <NavLink exact to="/admin/dashboard/sign-up" className="nav-link">
                                    Sign Up
                                </NavLink>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
