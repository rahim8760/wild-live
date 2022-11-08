import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return ( <
        div>
            <div className='text-center my-20'>
                <button className='btn btn-info'><Link to={'/addservice'}>Add Service</Link></button>
            </div>
        </div>
    );
};

export default Services;