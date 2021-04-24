import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/admin/dashboard" style={{ textDecoration: 'none' }}>
                    <Navbar.Brand>Admin-Dashboard</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink exact to="/admin/dashboard/login" className="nav-link">
                            Login
                        </NavLink>
                        <NavLink exact to="/admin/dashboard/sign-up" className="nav-link">
                            Sign Up
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
