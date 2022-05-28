import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function AddEmployee() {

    const navigate = useNavigate();

    const [FirstName, setfirstName] = useState('');
    const [LastName, setlastName] = useState('');
    const [DoB, setdateOfBirth] = useState('');
    const [NIC, setNIC] = useState('');
    const [address1, setaddress] = useState('');
    const [contactNo1, setcontactNo] = useState('');
    const [Department, setdepartment] = useState('');
    const [Designation, setdesignation] = useState('');
    const [password, setpassword] = useState('');

    function addEmployee(e) {
        e.preventDefault();

        const NewEmployee = {
            FirstName,
            LastName,
            DoB,
            NIC,
            address1,
            contactNo1,
            Department,
            Designation,
            password
        }

        console.log(NewEmployee);
        axios.post('/add_employee', NewEmployee)
        .then(() => {
            alert("Employee Added");
            navigate('/dashboad')
        }).catch((err) => {
            alert(err);
        })

    }

    return (
        <div>
            <div>
                <section id="home-2">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5">
                                <h1 className="display-4 fw-bolder mb-4 text-center text-white">Register New Employee</h1>
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
                                <h1 className="display-4 text-center fw-bolder ">Register New Employee</h1>
                                <p className="lead text-center">Enter Employee Details To Register To The System</p>
                            </div>
                            <div className="col-md-6 p-5">
                                <h1 className="display-6 fw-bolder mb-5">ADD NEW EMPLOYEE</h1>
                                    <form  onSubmit={addEmployee}>
                                        <div class="mb-3">
                                            <label htmlFor="exampleInputEmail1" class="form-label">First Name</label>
                                            <input type="text" class="form-control" id="firstName" aria-describedby="emailHelp" name='FirstName' onChange={(e) => {setfirstName(e.target.value)}} required  />
                                        </div>
                                        <div class="mb-3">
                                            <label htmlFor="exampleInputEmail1" class="form-label">Last Name</label>
                                            <input type="text" class="form-control" id="lastName" aria-describedby="emailHelp" name='LastName' onChange={(e) => {setlastName(e.target.value)}} required  />
                                        </div>
                                        <div class="mb-3">
                                            <label htmlFor="exampleInputEmail1" class="form-label">Date of Birth</label>
                                            <input type="text" class="form-control" id="dateOfBirth" aria-describedby="emailHelp" name='DoB' onChange={(e) => {setdateOfBirth(e.target.value)}} required  />
                                        </div>
                                        <div class="mb-3">
                                            <label htmlFor="exampleInputEmail1" class="form-label">NIC Number</label>
                                            <input type="text" class="form-control" id="nicNumber" aria-describedby="emailHelp" name='NIC' onChange={(e) => {setNIC(e.target.value)}} required  />
                                        </div>
                                        <div class="mb-3">
                                            <label htmlFor="exampleInputEmail1" class="form-label">Address</label>
                                            <input type="text" class="form-control" id="address" aria-describedby="emailHelp" name='address1' onChange={(e) => {setaddress(e.target.value)}} required  />
                                        </div>
                                        <div class="mb-3">
                                            <label htmlFor="exampleInputEmail1" class="form-label">Contact No.</label>
                                            <input type="text" class="form-control" id="contactNo" aria-describedby="emailHelp" name='contactNo1' onChange={(e) => {setcontactNo(e.target.value)}} required  />
                                        </div>
                                        <div class="mb-3">
                                            <label htmlFor="exampleInputEmail1" class="form-label">Department</label>
                                            <input type="text" class="form-control" id="department" aria-describedby="emailHelp" name='Department' onChange={(e) => {setdepartment(e.target.value)}} required  />
                                        </div>
                                        <div class="mb-3">
                                            <label htmlFor="exampleInputEmail1" class="form-label">Designation</label>
                                            <input type="text" class="form-control" id="designation" aria-describedby="emailHelp" name='Designation' onChange={(e) => {setdesignation(e.target.value)}} required  />
                                        </div>
                                        <div class="mb-3">
                                            <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={(e) => {setpassword(e.target.value)}} required  />
                                        </div>
                                        <div id="emailHelp" class="form-text mb-3">We'll never share your login details with anyone else.</div>
                                        <button type="submit" class="btn btn-primary">Add New Employee</button>
                                    </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
