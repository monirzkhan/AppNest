import { Download, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const AppCard = ({ app }) => {

    return (
        <Link to={`app/${app.id}`}>
        <div className='hover-3d '>
            <div className="card  w-96 shadow-xl ">
                <figure className=''>
                    <img className='rounded-t-4xl object-cover object-top p-4 h-96 size-full hover:scale-105 transition:all hover:-rotate-2  duration-500 shadow-2xl '
                        src={app.image}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-center">{app.title}</h2>
                    <div className="flex justify-between space-x-2 py-4">

                        <div className='flex justify-between item-center gap-2 bg-secondary text-lg font-extrabold text-white py-2  px-3 rounded-xl'>
                            <Download></Download> <p>
                                {new Intl.NumberFormat('en-US', {
                                    notation: 'compact',
                                }).format(app.downloads)}
                            </p>
                        </div>
                        <div className='flex justify-between item-center gap-2 bg-secondary text-lg font-extrabold text-white py-2  px-3 rounded-xl'>
                            <Star></Star> <p>{app.ratingAvg}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </Link>
        
    );
};

export default AppCard;