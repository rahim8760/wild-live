import React from 'react';

const HearderService = ({service}) => {
    const{image}=service
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default HearderService;