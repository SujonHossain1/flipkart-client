import Sidebar from '../components/Sidebar';

const AdminHome = () => {
    return (
        <div className="row">
            <Sidebar />
            <div className="col-md-10">
                <h2>Hello Admin</h2>
            </div>
        </div>
    );
};

export default AdminHome;
