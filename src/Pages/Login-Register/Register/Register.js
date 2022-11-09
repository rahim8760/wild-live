import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');
    
    const { createUser,setUser, emailUser, setEmailUser } = useContext(AuthContext);
    


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(emailUser)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))



        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
                setError('');
                form.reset();
                toast.success('Please verify your email address.')
            })
            .catch(err => {
                setError('User All Ready Exist');
            });
    }

    const handleInputBlur=event=>{
        const FieldName=event.target.name;
        const FieldValue=event.target.value;
        console.log(FieldName, FieldValue);
        const newUser={...emailUser};
        newUser[FieldName]=FieldValue;
        setEmailUser(newUser);
    }
    
    return (
        <div className="hero  min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-orange-200">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-5xl text-white font-bold">Register Here</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input onBlur={handleInputBlur} type="name" placeholder="name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleInputBlur} type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">photo Url</span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name='photoUrl' placeholder="PhotoUrl" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onBlur={handleInputBlur} type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <Link to={'/login'} className="label-text-alt link link-hover">Have A Account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                        <p>{error}</p>
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;