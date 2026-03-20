import { Download, Star } from 'lucide-react';
import React from 'react';

const AppCard = ({ app }) => {
    
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className='rounded-box object-cover h-96 w-full'
                        src={app.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{app.title}</h2>
                    
                    <div className="flex justify-between space-x-2 py-4">
                        
                            <div className='flex justify-between item-center gap-2'>
                                <Download></Download> <p>{app.downloads}</p>
                            </div>
                            <div className='flex justify-between item-center gap-2'>
                                <Star></Star> <p>{app.ratingAvg}</p>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;