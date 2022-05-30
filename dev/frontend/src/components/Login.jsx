import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Axios from 'axios';

export default function Login() {

    // login function

    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/dashboad';

    const [NIC, setNIC] = useState('');
    const [password, setPassword] = useState('');

//submit handler request backend to get the data from database 
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await Axios.post('/signin', {
                NIC,
                password,
            });
            navigate(redirect || '/dashboad') //if login is success the user will be redirected to the Dashboard
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div>
            <div>
                <section id="home-2">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5">
                                <h1 className="display-4 fw-bolder mb-4 text-center text-white">Login To the System</h1>
                                <p className="lead text-center fs-4 mb-5 text-white">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iure ab odio molestiae numquam ea autem placeat exercitationem. Dolorum architecto rerum aliquid molestiae natus quaerat corporis omnis eligendi repudiandae et.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="body">
                    <div className="container shadow my-5">
                        <div className="row">
                            <div className="col-md-5 d-flex flex-column align-item-center text-white justify-content-center form">
                                <h1 className="display-4 text-center fw-bolder ">Welcome Back</h1>
                                <p className="lead text-center">Enter Your Credentials To Login</p>
                            </div>
                            <div className="col-md-6 p-5">
                                <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
                                {/* Login Form */}
                                    <form onSubmit={submitHandler}>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">NIC Number</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='NIC' required onChange={(e) => setNIC(e.target.value)} />
                                            <div id="emailHelp" class="form-text">We'll never share your login details with anyone else.</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" name='password' required onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <div class="mb-3 form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
