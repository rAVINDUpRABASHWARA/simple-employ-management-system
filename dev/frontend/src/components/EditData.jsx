import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import EditEmployeeData from '../Screens/EditEmployeeData';
import AddDepartment from '../Screens/AddDepartment';

export default function EditData() {

    const [employees, setmployee] = useState([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [DopenPopup, DsetOpenPopup] = useState(false);
    const [recordinfo, setRecordInfo] = useState([]);

    const getEmployeeData = async () => {
        try {
            const data = await axios.get('/employees');
            setmployee(data.data)
        } catch (error) {
            console.log(error);
        }
    };

    const getOneEmployeeData = async (id) => {
        try {
            const data = await axios.get('/one_employee/' + id);
            console.log(data);
            setRecordInfo(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getEmployeeData();
    }, []);


    const openDPopup = () => {
        DsetOpenPopup(true)
    }

    const openInPopup = id => {
        console.log(id);
        setOpenPopup(true);
        getOneEmployeeData(id);
    }
    return (
        <div>
            <div>
                <section id="home-2">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5">
                                <h1 className="display-4 fw-bolder mb-4 text-center text-white">Edit Data</h1>
                                <p className="lead text-center fs-4 mb-6 text-white">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iure ab odio molestiae numquam ea autem placeat exercitationem. Dolorum architecto rerum aliquid molestiae natus quaerat corporis omnis eligendi repudiandae et.
                                </p>
                                <div className="button d-flex justify-content-center mb-5">
                                <button className="btn btn-light me-4 rounded-pill px-4 py-2">
                                    Edit Employee Data</button>
                                <button onClick={() => openDPopup()} className="btn btn-outline-light me-4 rounded-pill px-4 py-2">
                                    Add Department</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="body">
                    <div className="table">
                        <table class="table fs-5 shadow mb-5" >
                            <thead>
                                <tr>
                                <th scope="col">Employee ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Contact No</th>
                                <th scope="col">Department</th>
                                <th scope="col">Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee) => (
                                    <tr onClick={() => openInPopup(employee._id)}>
                                    <td>{employee._id}</td>
                                    <td>{employee.FirstName}</td>
                                    <td>{employee.LastName}</td>
                                    <td>{employee.address1}</td>
                                    <td>{employee.contactNo1}</td>
                                    <td>{employee.Department}</td>
                                    <td>{employee.Designation}</td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
            <EditEmployeeData
                openPopup = {openPopup}
                setOpenPopup = {setOpenPopup}
            >
                <div className="md-5">
                    <form>
                        <div class="mb-0">
                            <label for="exampleInputEmail1" class="form-label">Employee ID :</label>
                            <input type="text" class="form-control" id="example_id" value={recordinfo._id} disabled/>
                        </div>
                        <div class="mb-0">
                            <label for="exampleInputPassword1" class="form-label">First Name :</label>
                            <input type="text" class="form-control" id="exampleFirstName" value={recordinfo.FirstName} />
                        </div>
                        <div class="mb-0">
                            <label for="exampleInputEmail1" class="form-label">Last Name :</label>
                            <input type="text" class="form-control" id="exampleLastName" value={recordinfo.LastName} />
                        </div>
                        <div class="mb-0">
                            <label for="exampleInputPassword1" class="form-label">Date of Birth :</label>
                            <input type="text" class="form-control" id="exampleDoB" value={recordinfo.DoB} />
                        </div>
                        <div class="mb-0">
                            <label for="exampleInputEmail1" class="form-label">NIC Number :</label>
                            <input type="text" class="form-control" id="exampleNIC" value={recordinfo.NIC} />
                        </div>
                        <div class="mb-0">
                            <label for="exampleInputPassword1" class="form-label">Address 1 :</label>
                            <input type="text" class="form-control" id="exampleAddress1" value={recordinfo.address1} />
                        </div>
                        <div class="mb-0">
                            <label for="exampleInputEmail1" class="form-label">Address 2 :</label>
                            <input type="text" class="form-control" id="exampleAddress2" value={recordinfo.address2} />
                        </div>
                        <div class="mb-0">
                            <label for="exampleInputPassword1" class="form-label">Address 3 :</label>
                            <input type="text" class="form-control" id="exampleAddress3" value={recordinfo.address3} />
                        </div>
                        <div class="mb-0">
                            <label for="exampleInputEmail1" class="form-label">Contact Number 1 :</label>
                            <input type="text" class="form-control" id="exampleContactNo1" value={recordinfo.contactNo1} />
                        </div>
                        <div class="mb-0">
                            <label for="exampleInputPassword1" class="form-label">Contact Number 2 :</label>
                            <input type="text" class="form-control" id="exampleContactNo2" value={recordinfo.contactNo2} />
                        </div>
                        <div class="mb-0">
                            <label for="exampleInputEmail1" class="form-label">Contact Number 3 :</label>
                            <input type="text" class="form-control" id="exampleContactNo3" value={recordinfo.contactNo3} />
                        </div>
                        <div class="mb-0">
                            <label for="exampleInputPassword1" class="form-label">Department :</label>
                            <input type="text" class="form-control" id="exampleDepartment" value={recordinfo.Department} />
                        </div>
                        <div class="mb-0">
                            <label for="exampleInputPassword1" class="form-label">Designation :</label>
                            <input type="text" class="form-control" id="exampleDesignation" value={recordinfo.Designation} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Registered Date :</label>
                            <input type="text" class="form-control" id="exampleRegisteredDate" value={recordinfo.RegisteredDate} />
                        </div>
                        <div>
                            <Stack direction='row' spacing={50}>
                                <Button type="submit" class="btn btn-primary" onClick={() => {setOpenPopup(false)}}>Update</Button>
                                <Button type="submit" class="btn btn-primary" style={{backgroundColor: '#ff0000',borderColor: '#ff0000'}} onClick={() => {setOpenPopup(false)}}>Delete</Button>
                            </Stack>
                        </div>
                    </form>
                </div>  
            </EditEmployeeData>
            <AddDepartment
                DopenPopup = {DopenPopup}
                DsetOpenPopup = {DsetOpenPopup}
            >
                <div className="md-5">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Department :</label>
                            <input type="text" class="form-control" id="exampleDepartment" value={recordinfo.Department} />
                        </div>
                        <div>
                            <Stack direction='row' spacing={50}>
                                <Button type="submit" class="btn btn-primary" style={{backgroundColor: '#097969',borderColor: '#097969'}} onClick={() => {setOpenPopup(false)}}><i className="fa fa-plus me-2"></i>Add </Button>
                                <Button type="submit" class="btn btn-primary" onClick={() => {setOpenPopup(false)}}>Close</Button>
                            </Stack>
                        </div>
                    </form>
                </div>
            </AddDepartment>
        </div>
    )
}
