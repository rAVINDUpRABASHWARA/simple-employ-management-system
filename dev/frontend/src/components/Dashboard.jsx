import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EmployeeInfo from '../Screens/EmployeeInfo';
import Navbardhasboard from './Navbardashboard';

export default function Dashboard(props) {

//use array useStates to get the data
    const [employees, setmployee] = useState([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [recordinfo, setRecordInfo] = useState([]);

//requesting all employee data in database from backend
    const getEmployeeData = async () => {
        try {
            const data = await axios.get('/employees');
            setmployee(data.data)
        } catch (error) {
            console.log(error);
        }
    };

//requesting one specific employee data in database from backend
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


//pass the fetch data to the popup dialog box to view
    const openInPopup = id => {
        console.log(id);
        setOpenPopup(true);
        getOneEmployeeData(id);
    }

    return (
        <div>
            <Navbardhasboard/>
            <div>
                <section id="home-2">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5">
                                <h1 className="display-4 fw-bolder mb-4 text-center text-white">DashBoard</h1>
                                <p className="lead text-center fs-4 mb-5 text-white">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iure ab odio molestiae numquam ea autem placeat exercitationem. Dolorum architecto rerum aliquid molestiae natus quaerat corporis omnis eligendi repudiandae et.
                                </p>
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
                                {/* Store the fetched data in the table rows */}

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

            {/* Popup Dialog box for more employee Info */}

            <EmployeeInfo
                openPopup = {openPopup}
                setOpenPopup = {setOpenPopup}
            >
                {/* The More info popup form */}

                <div className="md-5">
                    <form>
                        <div className="mb-0">
                            <label for="exampleInputEmail1" className="form-label">Employee ID :</label>
                            <input type="text" className="form-control" id="example_id" value={recordinfo._id} disabled/>
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputPassword1" className="form-label">First Name :</label>
                            <input type="text" className="form-control" id="exampleFirstName" value={recordinfo.FirstName} disabled />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputEmail1" className="form-label">Last Name :</label>
                            <input type="text" className="form-control" id="exampleLastName" value={recordinfo.LastName} disabled />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputPassword1" className="form-label">Date of Birth :</label>
                            <input type="text" className="form-control" id="exampleDoB" value={recordinfo.DoB} disabled />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputEmail1" className="form-label">NIC Number :</label>
                            <input type="text" className="form-control" id="exampleNIC" value={recordinfo.NIC} disabled />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputPassword1" className="form-label">Home Address :</label>
                            <input type="text" className="form-control" id="exampleAddress1" value={recordinfo.address1} disabled />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputEmail1" className="form-label">Business Address :</label>
                            <input type="text" className="form-control" id="exampleAddress2" value={recordinfo.address2} disabled />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputPassword1" className="form-label">Shipping Address :</label>
                            <input type="text" className="form-control" id="exampleAddress3" value={recordinfo.address3} disabled />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputEmail1" className="form-label">Mobile Contact No :</label>
                            <input type="text" className="form-control" id="exampleContactNo1" value={recordinfo.contactNo1} disabled />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputPassword1" className="form-label">Business Contact No :</label>
                            <input type="text" className="form-control" id="exampleContactNo2" value={recordinfo.contactNo2} disabled />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputEmail1" className="form-label">Local Contact No :</label>
                            <input type="text" className="form-control" id="exampleContactNo3" value={recordinfo.contactNo3} disabled />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputPassword1" className="form-label">Department :</label>
                            <input type="text" className="form-control" id="exampleDepartment" value={recordinfo.Department} disabled />
                        </div>
                        <div className="mb-0">
                            <label for="exampleInputPassword1" className="form-label">Designation :</label>
                            <input type="text" className="form-control" id="exampleDesignation" value={recordinfo.Designation} disabled />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Registered Date :</label>
                            <input type="text" className="form-control" id="exampleRegisteredDate" value={recordinfo.RegisteredDate} disabled />
                        </div>
                    </form>
                </div>  
            </EmployeeInfo>
        </div>
        
    )
}
