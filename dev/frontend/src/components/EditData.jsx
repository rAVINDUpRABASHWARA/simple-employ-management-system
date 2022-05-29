import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import EditEmployeeData from '../Screens/EditEmployeeData';
import AddDepartment from '../Screens/AddDepartment';
import Navbardhasboard from './Navbardashboard';

export default function EditData() {

    const [employees, setmployee] = useState([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [DopenPopup, DsetOpenPopup] = useState(false);
    const [recordinfo, setRecordInfo] = useState([]);

    const [editFormData, setEditFormData] = useState({
        _id: '',
        FirstName: '',
        LastName: '',
        DoB: '',
        NIC: '',
        address1: '',
        address2: '',
        address3: '',
        contactNo1: '',
        contactNo2: '',
        contactNo3: '',
        Department: '',
        Designation: '',
        RegisteredDate: '',
    })

    const handleEditFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormData = { ...editFormData }; 
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }

    const updateEmployee = (data) => {

        axios.put(`/update_employee/${data._id}`, data)
        .then(() => {
            alert("The Employee is updated.");
        }).catch((error) => {
            alert(error);
        })
        setOpenPopup(false)
    }

    const deleteEmployee = (id) => {
        axios.delete(`/delete_employee/${id}`)
        .then(() => {
            alert("This record is deleted");
        }).catch((error) => {
            console.log(error);
            alert("This record cannot delete");
        })
        setOpenPopup(false);
    }

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

    const openInPopup = (data) => {
        console.log(data._id);
        setOpenPopup(true);
        getOneEmployeeData(data._id);

        const formValues = {
            _id: data._id,
            FirstName: data.FirstName,
            LastName: data.LastName,
            DoB: data.DoB,
            NIC: data.NIC,
            address1: data.address1,
            address2: data.address2,
            address3: data.address3,
            contactNo1: data.contactNo1,
            contactNo2: data.contactNo2,
            contactNo3: data.contactNo3,
            Department: data.Department,
            Designation: data.Designation,
            RegisteredDate: data.RegisteredDate,
        }

        setEditFormData(formValues);

    }
    return (
        <div>
            <Navbardhasboard/>
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
                                    <i className="fa fa-edit me-2"></i>Edit Employee Data</button>
                                <button onClick={() => openDPopup()} className="btn btn-outline-light me-4 rounded-pill px-4 py-2">
                                    <i className="fa fa-plus me-2"></i>Add Department</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="body">
                    <div className="table">
                        <table className="table fs-5 shadow mb-5" >
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
                                    <tr onClick={() => openInPopup(employee)}>
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
                        <div className="mb-0">
                            <label for="exampleInputEmail1" className="form-label">Employee ID :</label>
                            <input type="text" className="form-control" id="example_id" name='_id' value={editFormData._id} disabled/>
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputPassword1" className="form-label">First Name :</label>
                            <input name='FirstName' type="text" className="form-control" id="exampleFirstName" onChange={handleEditFormChange} value={editFormData.FirstName} />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputEmail1" className="form-label">Last Name :</label>
                            <input name='LastName' type="text" className="form-control" id="exampleLastName" onChange={handleEditFormChange} value={editFormData.LastName} />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputPassword1" className="form-label">Date of Birth :</label>
                            <input name='DoB' type="text" className="form-control" id="exampleDoB" onChange={handleEditFormChange} value={editFormData.DoB} />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputEmail1" className="form-label">NIC Number :</label>
                            <input name='NIC' type="text" className="form-control" id="exampleNIC" onChange={handleEditFormChange} value={editFormData.NIC} />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputPassword1" className="form-label">Address 1 :</label>
                            <input name='address1' type="text" className="form-control" id="exampleAddress1" onChange={handleEditFormChange} value={editFormData.address1} />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputEmail1" className="form-label">Address 2 :</label>
                            <input name='address2' type="text" className="form-control" id="exampleAddress2" onChange={handleEditFormChange} value={editFormData.address2} />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputPassword1" className="form-label">Address 3 :</label>
                            <input name='address3' type="text" className="form-control" id="exampleAddress3" onChange={handleEditFormChange} value={editFormData.address3} />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputEmail1" className="form-label">Contact Number 1 :</label>
                            <input name='contactNo1' type="text" className="form-control" id="exampleContactNo1" onChange={handleEditFormChange} value={editFormData.contactNo1} />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputPassword1" className="form-label">Contact Number 2 :</label>
                            <input name='contactNo2' type="text" className="form-control" id="exampleContactNo2" onChange={handleEditFormChange} value={editFormData.contactNo2} />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputEmail1" className="form-label">Contact Number 3 :</label>
                            <input name='contactNo3' type="text" className="form-control" id="exampleContactNo3" onChange={handleEditFormChange} value={editFormData.contactNo3} />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputPassword1" className="form-label">Department :</label>
                            <input name='Department' type="text" className="form-control" id="exampleDepartment" onChange={handleEditFormChange} value={editFormData.Department} />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputPassword1" className="form-label">Designation :</label>
                            <input name='Designation' type="text" className="form-control" id="exampleDesignation" onChange={handleEditFormChange}  value={editFormData.Designation} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Registered Date :</label>
                            <input name='RegisteredDate' type="text" className="form-control" id="exampleRegisteredDate" value={editFormData.RegisteredDate} disabled/>
                        </div>
                        <div>
                            <Stack direction='row' spacing={50}>
                                <Button type="submit" class="btn btn-primary" onClick={() => {updateEmployee(editFormData)}}>Update</Button>
                                <Button type="submit" class="btn btn-primary" style={{backgroundColor: '#ff0000',borderColor: '#ff0000'}} onClick={() => {deleteEmployee(recordinfo._id)}}>Delete</Button>
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
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Department :</label>
                            <input type="text" className="form-control" id="exampleDepartment" value={recordinfo.Department} />
                        </div>
                        <div>
                            <Stack direction='row' spacing={50}>
                                <Button type="submit" className="btn btn-primary" style={{backgroundColor: '#097969',borderColor: '#097969'}} onClick={() => {setOpenPopup(false)}}><i className="fa fa-plus me-2"></i>Add </Button>
                                <Button type="submit" className="btn btn-primary" onClick={() => {setOpenPopup(false)}}>Close</Button>
                            </Stack>
                        </div>
                    </form>
                </div>
            </AddDepartment>
        </div>
    )
}
