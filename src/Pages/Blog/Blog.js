import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
    return (
        <div className="hero  min-h-screen bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900">
            <p className='text-white'>This is Blog page</p>
        </div>
    );
};

export default Blog;