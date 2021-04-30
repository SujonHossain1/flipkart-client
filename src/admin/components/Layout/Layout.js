import Sidebar from '../Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">{children}</div>
        </div>
    );
};

export default Layout;
