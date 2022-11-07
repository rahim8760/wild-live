import React from 'react';
import './bannerItems.css'
const BannerItmes = ({slider}) => {
    const {image, prev, id, next, rating, location}=slider
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='img_container'>
                    <img src={image} alt='' className="w-full h-fit " />
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-white font-bold text-6xl'>Location {location}</h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-2/4">
                    <p className='w-3/5 text-white'>Rating {rating}</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                <button className="btn btn-outline btn-warning mr-5">Veiw Details</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default BannerItmes;