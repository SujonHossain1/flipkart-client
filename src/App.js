import jwtDecode from 'jwt-decode';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Routes from './Routes';

function App() {
    const token = localStorage.getItem('user-auth-token');

    if (token) {
        const result = jwtDecode(token);
        console.log('token result: ', result);
    }
    return (
        <Router>
            <Header />
            <Routes />
        </Router>
    );
}

export default App;
