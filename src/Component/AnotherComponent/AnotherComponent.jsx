import { NavLink, useLoaderData, useParams } from 'react-router-dom';

const AnotherComponent = () => {
    const { id } = useParams();
    const data = useLoaderData();

    // Check if data is an array and has items
    if (!Array.isArray(data) || data.length === 0) {
        return <div>Data is not found or in an incorrect format</div>;
    }

    // Find the single data by id
    const singledata = data.find(item => item.id.toString() === id);

    // If the data for given ID is not found
    if (!singledata) {
        return <div>Data for the given ID is not found</div>;
    }

    const { estate_title, segment_name, description = "No description available", image, area, location, price, status, facilities = [] } = singledata;

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
                    <img src={image} alt={estate_title} className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="">
                        <span className='flex items-center justify-around text-xs gap-5 font-semibold'>
                            {facilities.length ? facilities.join(', ') : "No facilities available"}
                        </span>
                    </div>
                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-3xl font-semibold dark:text-violet-600">{estate_title}</h3>
                    </a>
                    <p className="leading-snug dark:text-gray-600">{description}</p>
                    <div className='flex justify-between items-center gap-3'>
                        <div>
                            <h1 className='text-xl font-semibold text-yellow-900'>Area: {area}</h1>
                            <h1 className='text-xl font-semibold text-yellow-900'>Name: {segment_name}</h1>
                        </div>
                        <h1 className='text-xl font-semibold text-yellow-900'>Status: {status}</h1>
                    </div>
                    <NavLink to='/home'><button className='btn btn-primary mt-3'>Go Home</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default AnotherComponent;
