import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HearderService from './HearderService';

const HeaderServices = () => {
    const [serviceData, setserviceData]=useState([]);

    console.log(serviceData)
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setserviceData(data))
    },[])
    return (
        <>
            <div className='my-16'>
                <h1 className='text-white text-5xl text-center font-semibold'>Come Get Involved With Us</h1>
                <h1 className='text-white text-2xl text-center font-semibold'> Here are some New and updated photos from our Innovations  </h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 mt-5 sm:grid-cols-1 gap-5'>
                {
                    serviceData.map(service=><HearderService key={service._id} service={service}></HearderService> )
                }
            </div>
            <div className='m-auto text-center mt-12'>
                <button className='btn btn-info'><Link to={'/service'} >View All Service</Link></button>
            </div> 
    </>
    );
};

export default HeaderServices;