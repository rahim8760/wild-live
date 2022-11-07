import React from 'react';

import img1 from './../../../image/1.jpg';
import img2 from './../../../image/2.jpg';
import img3 from './../../../image/3.jpg';
import img4 from './../../../image/4.jpg';
import img5 from './../../../image/5.jpg';
import img6 from './../../../image/6.jpg';
import BannerItmes from './BannerItmes';
const BannerData=[
    {
        image:img1,
        prev:6,
        id:1,
        next:2,
        rating:4.1,
        location:'Amajon'
    },
    {
        image:img2,
        prev:1,
        id:2,
        next:3,
        rating:3.9,
        location:'Africa'
    },
    {
        image:img3,
        prev:2,
        id:3,
        next:4,
        rating:3.5,
        location:'Sundarban'
    },
    {
        image:img4,
        prev:3,
        id:4,
        next:5,
        rating:3.6,
        location:'Rain Forest'
    },
    {
        image:img5,
        prev:4,
        id:5,
        next:6,
        rating:4.8,
        location:'Bay of Bangole'
    },
    {
        image:img6,
        prev:5,
        id:6,
        next:1,
        rating:4.3,
        location:'Shahara'
    }
]
const Banner = () => {

    return (
        <div className="carousel w-full rounded-xl mt-12">
        {
            BannerData.map(slider=><BannerItmes
            key={slider.id} slider={slider}></BannerItmes>)  
        }
        
        </div>
    );
};

export default Banner;