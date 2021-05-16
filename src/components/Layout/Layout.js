import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import MenuHeader from '../Shared/MenuHeader/MenuHeader';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <MenuHeader />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
