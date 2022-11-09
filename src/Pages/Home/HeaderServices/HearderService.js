import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const HearderService = ({service}) => {
    const{photoUrl , _id}=service
    return (
        <div className=' bg-zinc-400 relative'>
            <div className="w-full h-[430px]">
                <PhotoProvider>
                    <PhotoView src={photoUrl}>
                    <img src={photoUrl} alt="" className='w-full h-full'/>
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className=" absolute w-full top-3/4">
                <div className="flex justify-between w-10/12 mx-10 my-4">
                    <button className='btn btn-info'><Link to={`/services/${_id}`}>view Post</Link></button>
                    <button className='btn btn-info'><Link>Review</Link></button>
                </div>
            </div>
        </div>
    );
};

export default HearderService;