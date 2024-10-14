
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className='mt-10'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;