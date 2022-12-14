import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import SingleReview from './SingleReview';

const MyReview = () => {
    useTitle('My Reviews')
    const {user}=useContext(AuthContext)
    const[myReviews, setMyReviews]=useState([])
    useEffect(()=>{
        fetch(`https://assignment-server-11-taupe.vercel.app/user_reviews/${user.email}`)
        .then(res=>res.json())
        .then(data=>setMyReviews(data))
    },[user?.email])
    
    const handleDelete = id=>{
        const agree =window.confirm('you want to delete')
        if(agree){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then (data=>{
                if(data.deletedCount > 0){
                  const remaining = myReviews.filter(r => r._id !== id);
                  setMyReviews(remaining);
                    toast.success('delete successfully')
                }
            })
        }
      }

    return (
        <div>
            <h1 className='text-center text-3xl font-semibold my-10 '>welcome {user.displayName} </h1>
            <h1 className='text-center text-2xl font-semibold my-10 '>Update or Delete your reviews</h1>
            <div>
                <div className="overflow-x-auto">

                {
                    myReviews.length===0?<><h1 className='text-center text-orange-700 text-2xl my-6'>No Review Found</h1></>:
                    <>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Service Name</th>
                                <th>Service image</th>
                                <th>User Name</th>
                                <th>user Image</th>
                                <th>Review</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                myReviews.map(review=><SingleReview key={review._id} handleDelete={handleDelete} review={review}></SingleReview>)
                            }
                        </tbody>
                    </table>
                    </> 
                }
                    
                    
                </div>
            </div>
        </div>
    );
};

export default MyReview;