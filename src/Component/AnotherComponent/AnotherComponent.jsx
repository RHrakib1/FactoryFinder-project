import { NavLink, useLoaderData, useParams } from 'react-router-dom';

const AnotherComponent = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const singledata = data.find(item => item.id.toString() === id);



    const { estate_title, description, image, area, location, price, status, facilities } = singledata;

    return (
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                    <a rel="noopener noreferrer" href="#" className="text-xl font-semibold text-yellow-900 mb-0 capitalize dark:text-gray-800"> Price: {price}</a>
                </div>
                <a className='text-xl font-semibold text-yellow-900'>{location}</a>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="flex items-center text-xs">
                        <span className='text-xl font-semibold'>{facilities}</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-3xl font-semibold dark:text-violet-600">{estate_title}</h3>
                    </a>
                    <p className="leading-snug dark:text-gray-600">{description}</p>
                    <div className='flex justify-between items-center gap-3'>
                        <h1 className='text-xl font-semibold text-yellow-900'>Area: {area}</h1>
                        <h1 className='text-xl font-semibold text-yellow-900'>Status: {status}</h1>
                    </div>
                    <NavLink to='/home'><button className='btn btn-primary'>Go Home</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default AnotherComponent;
