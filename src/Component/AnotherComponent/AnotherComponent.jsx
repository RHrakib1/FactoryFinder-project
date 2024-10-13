import { NavLink, useLoaderData, useParams } from 'react-router-dom';

const AnotherComponent = () => {
    const { id } = useParams()
    const data = useLoaderData()
    const singledata = data.find(item => item.id === id)
    console.log(singledata, id);
    const { image, estate_title, description } = singledata

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <img src={image} alt="" />
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">
                        {description}
                    </p>
                    <h1 className='text-4xl'>{estate_title}</h1>
                </div>
            </div>
        </div>
    );
};

export default AnotherComponent;