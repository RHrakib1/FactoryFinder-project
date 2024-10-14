
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Home2 from './Home2';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-5xl font-bold'>Our Projects</h1>
            <div className='grid lg:grid-cols-3 gap-3'>
                {
                    data.map((copydata, idx) => <Home2 key={idx} shareData={copydata}></Home2>)
                }
            </div>
        </div>
    );
};

export default Home;