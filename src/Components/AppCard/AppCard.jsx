import { Download, Star } from 'lucide-react';
import React from 'react';

const AppCard = ({ app }) => {

    return (
        <div className='hover-3d '>
            <div className="card  w-96 shadow-xl ">
                <figure className=''>
                    <img className='rounded-t-4xl object-cover p-4 h-96 w-full  shadow-2xl '
                        src={app.image}
                    />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{app.title}- {app.description}</h2>

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
    );
};

export default AppCard;