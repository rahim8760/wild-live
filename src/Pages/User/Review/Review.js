import React, { useContext, useEffect, useState } from 'react';
import AuthProvider from '../../../Context/AuthProvider/AuthProvider';

const Review = () => {
    const {user}=useContext(AuthProvider)
    const[myReview, setMyReview]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/user_reviews/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyReview(data))
    },[])
    return (
        <div>
            {myReview.length}
        </div>
    );
};

export default Review;