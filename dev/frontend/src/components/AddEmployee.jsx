import React from 'react'

export default function AddEmployee() {
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
                                    <form >
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">First Name</label>
                                            <input type="text" class="form-control" id="firstName" aria-describedby="emailHelp" name='firstName' required  />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                            <input type="text" class="form-control" id="lastName" aria-describedby="emailHelp" name='lastName' required  />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Date of Birth</label>
                                            <input type="text" class="form-control" id="dateOfBirth" aria-describedby="emailHelp" name='dateOfBirth' required  />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">NIC Number</label>
                                            <input type="text" class="form-control" id="nicNumber" aria-describedby="emailHelp" name='NIC' required  />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Address</label>
                                            <input type="text" class="form-control" id="address" aria-describedby="emailHelp" name='address' required  />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Contact No.</label>
                                            <input type="text" class="form-control" id="contactNo" aria-describedby="emailHelp" name='contactNo' required  />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Department</label>
                                            <input type="text" class="form-control" id="department" aria-describedby="emailHelp" name='department' required  />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Designation</label>
                                            <input type="text" class="form-control" id="designation" aria-describedby="emailHelp" name='designation' required  />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" name='password' required  />
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
