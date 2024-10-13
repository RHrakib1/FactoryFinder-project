import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Home2 = ({ shareData}) => {
    const {  id,estate_title, description, image, area, location, price, status, facilities } = shareData
    return (
        <div className=" p-6 rounded-md shadow-md dark:bg-gray-100 dark:text-gray-900">
            <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold tracking-wide">{estate_title}</h2>
            </div>
            <p className="dark:text-gray-800">{description}</p>
            <div className='flex justify-between items-center mt-3'>
                <div>
                    <p>{area}<span> Form {location}</span></p>
                    <ul>
                        {
                            facilities.map((copyfacilities, idx) => <li className='flex' key={idx}>{copyfacilities}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <p className='text-xl'><span className='font-semibold'>Status:</span>{status}</p>
                    <p>{price}</p>
                </div>
            </div>
            <Link to={`/anothercomponent/${id}`}><button className='btn btn-primary'>View Details</button></Link>
        </div>
    );
};

export default Home2;
Home2.propTypes = {
    shareData:PropTypes.object.isRequired

}