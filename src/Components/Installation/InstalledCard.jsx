import { Download, Star } from 'lucide-react';
import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AppContext } from '../Root/Root';

import { ToastContainer, toast } from 'react-toastify';


const InstalledCard = ({ card }) => {
    const { id, title, image, size, ratingAvg, downloads } = card;
    const [installed, setInstalled] = useContext(AppContext);

    
    
    const uninstalledApp = () => {
        const filterApps = installed.filter(data => data.id !== id);
        toast.error(`${title} app uninstalled`)
        setInstalled(filterApps);
        localStorage.removeItem('apps')

    }
    return (
        <div className='border-2 border-accent  shadow-lg rounded-box my-4 px-4 flex items-center justify-between'>
            <div className='flex space-x-4 py-4 items-center justify-around '>
                <div><img src={image} className='lg:h-20 h-16 rounded-box shadow-sm' /></div>
                <div>
                    <h1 className='lg:font-bold font-semibold lg:text-2xl md:text-lg text-xs'>{title}</h1>
                    <div className='flex justify-around items-center py-2'>
                        <div className='flex space-x-1 items-center text-primary md:text-lg lg:text-lg text-xs lg:font-bold'><Download></Download><p>{new Intl.NumberFormat('en-US', {
                            notation: 'compact',
                        }).format(downloads)}</p></div>
                        <div className='flex space-x-1 items-center text-primary  md:text-lg lg:text-lg text-xs lg:font-bold'><Star></Star><p>{ratingAvg}</p></div>
                        <div className='lg:font-bold text-primary text-xs md:text-lg lg:text-lg'><p>{size}MB</p></div>


                    </div>
                </div>

            </div>
            <div>
                <Link onClick={() => uninstalledApp(id)} className='btn btn-accent md:btn-lg btn-xs lg:btn-lg text-white'>Uninstalled</Link>
            </div>

        </div>
    );
};

export default InstalledCard;