import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light shadow">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/services">Service</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <a class="navbar-brand fw-bolder fs-4 mx-auto" href="#">EMS</a>
                    
                        <NavLink to="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill">
                            <i className="fa fa-sign-in me-2"></i>Login</NavLink>
                        <NavLink to="/dashboad" className="btn btn-outline-primary ms-auto px-4 rounded-pill">
                            <i className="fa fa-sign-out me-2"></i>DashBoard</NavLink>
                        <NavLink to="/addemployee" className="btn btn-outline-primary ms-auto px-4 rounded-pill">
                            <i className="fa fa-sign-in me-2"></i>Add Employee</NavLink>
                        <NavLink to="/editdata" className="btn btn-outline-primary ms-auto px-4 rounded-pill">
                            <i className="fa fa-sign-in me-2"></i>Edit Data</NavLink>
                        <NavLink to="/logout" className="btn btn-outline-primary ms-auto px-4 rounded-pill">
                            <i className="fa fa-sign-out me-2"></i>Logout</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
}
