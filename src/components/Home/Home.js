import axios from 'axios';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/api/products');
            console.log(data);
        })();
    }, []);
    return (
        <div className="container bg-light rounded p-5 mt-4 ">
            <div className="row">
                <div className="col">
                    <div>
                        <h2>Welcome to My Website</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam ex
                            blanditiis quo officia maxime recusandae libero impedit non fugit vitae
                            natus, itaque, facilis ut, tenetur perferendis sed laudantium in fugiat?{' '}
                        </p>
                        <button className="btn btn-primary" type="button">
                            Join
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
