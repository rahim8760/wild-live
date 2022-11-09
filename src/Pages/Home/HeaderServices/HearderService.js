import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const HearderService = ({service}) => {
    const{photoUrl}=service
    return (
        <div className='w-full h-[430px]'>
            <PhotoProvider>
                <PhotoView src={photoUrl}>

                <img src={photoUrl} alt="" className='w-full h-full'/>
                </PhotoView>
            </PhotoProvider>
        </div>
    );
};

export default HearderService;