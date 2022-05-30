import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import PWDValidatorMessage from '../Screens/PWDValidatorMessage';
import Navbardhasboard from './Navbardashboard';

export default function AddEmployee() {

//useNavigate from react to redirect 
    const navigate = useNavigate();

//use useStae to get Add employee data
    const [FirstName, setfirstName] = useState('');
    const [LastName, setlastName] = useState('');
    const [DoB, setdateOfBirth] = useState('');
    const [NIC, setNIC] = useState('');
    const [address1, setaddress] = useState('');
    const [rDepartment, setrdepartment] = useState('');
    const [rDesignation, setrdesignation] = useState('');
    const [contactNo1, setcontactNo] = useState('');
    const [password, setpassword] = useState('');
    
//create 2 const to get the departments and designations from database
    const [Department, setdepartment] = useState([]);
    const [Designation, setdesignation] = useState([]);

//creae 2 const form pasword validation
    const [pwdRequisite, setPWDRequisite] = useState(false);
    const [check, setCheck] = useState({
        capsLetterCheck: false,
        numberCheck: false,
        pwdLengthCheck: false,
        specialCharCheck: false,
    });

//requesting department data in database from backend
    useEffect( () => {

        const getDepartment = async () => {
            const res= await axios.get('/depatanddesig/view_departments');
            console.log(res.data);
            setdepartment(await res.data);
        }
        getDepartment();

    }, []);

//requesting designaiton data in database from backend
    useEffect( () => {
        const getDesignation = async () => {
            const res= await axios.get('/depatanddesig/view_designations');
            console.log(res.data);
            setdesignation(await res.data);
        }
        getDesignation();
    }, []);

//department input handler
    const handleDepartment = (e) => {
        const getDepartment = e.target.value;
        setrdepartment(getDepartment);
        console.log(getDepartment);
    }

//designation input handler
    const handleDesignation = (e) => {
        const getDesignation = e.target.value;
        setrdesignation(getDesignation);
        console.log(getDesignation);
    }

//Regex password validator
    const handleOnFocus = () => {
        setPWDRequisite(true);
    }
    const handleOnBlur = () => {
        setPWDRequisite(false)
    }
    const handleOnKeyUp = (e) => {
        const {value} = e.target;
        const capsLetterCheck = /[A-Z]/.test(value); //check for the capital letters in the password
        const numberCheck = /[0-9]/.test(value); //check for the numbers in the password
        const pwdLengthCheck = value.length >= 8; //check for the password length
        const specialCharCheck = /[!@#$%^&*]/.test(value); //check for the special charaters in the password
    
    setCheck({
        capsLetterCheck,
        numberCheck,
        pwdLengthCheck,
        specialCharCheck,
        })
    }

//Employee Adding function
    function addEmployee(e) {
        e.preventDefault();

        const NewEmployee = {
            FirstName,
            LastName,
            DoB,
            NIC,
            address1,
            contactNo1,
            password,
            rDepartment,
            rDesignation,
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
            <Navbardhasboard/>
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
                                {/* Add employee form */}
                                    <form  onSubmit={addEmployee}>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                                            <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp" name='FirstName' onChange={(e) => {setfirstName(e.target.value)}} required  />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                                            <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp" name='LastName' onChange={(e) => {setlastName(e.target.value)}} required  />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Date of Birth</label>
                                            <input type="date" className="form-control" id="dateOfBirth" aria-describedby="emailHelp" name='DoB' onChange={(e) => {setdateOfBirth(e.target.value)}} required  />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">NIC Number</label>
                                            <input type="text" className="form-control" id="nicNumber" aria-describedby="emailHelp" name='NIC' onChange={(e) => {setNIC(e.target.value)}} required  pattern='[0-9]' maxLength="12"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="address" aria-describedby="emailHelp" name='address1' onChange={(e) => {setaddress(e.target.value)}} required  />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Contact No.</label>
                                            <input type="text" className="form-control" id="contactNo" aria-describedby="emailHelp" name='contactNo1' onChange={(e) => {setcontactNo(e.target.value)}} required  pattern='[0-9]' maxLength='10'/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Department{rDepartment}</label>
                                            {/* Use Select field for Departments and for the options data is getting from database which is pre-stored  */}
                                            <select name='department' className='form-control' id='department' onChange={(e) => {handleDepartment(e)}}>
                                                <option>--Select Department--</option>
                                                {
                                                    Department.map( (departmentget) =>( 
                                                        <option key={departmentget._id}>{departmentget.department}</option>
                                                    )
                                                )}
                                                
                                            </select>
                                            {/* Before use Select field, normal input fieldis used to test the Add Employee Function */}

                                            {/* <input type="text" className="form-control" id="department" aria-describedby="emailHelp" name='Department' onChange={(e) => {setdepartment(e.target.value)}} required  /> */}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Designation{rDesignation}</label>
                                            {/* Use Select field for Designations and for the options data is getting from database which is pre-stored  */}
                                            <select name='designation' className='form-control' id='designation' onChange={(e) => {handleDesignation(e)}}>
                                                <option>--Select designation--</option>
                                                {
                                                    Designation.map((designationget) => (
                                                        <option key={designationget._id} >{designationget.designation}</option>
                                                    )
                                                )}
                                            </select>
                                            {/* Before use Select field, normal input fieldis used to test the Add Employee Function */}

                                            {/* <input type="text" className="form-control" id="designation" aria-describedby="emailHelp" name='Designation' onChange={(e) => {setdesignation(e.target.value)}} required  /> */}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={(e) => {setpassword(e.target.value)}} onFocus = {handleOnFocus} onBlur = {handleOnBlur} onKeyUp = {handleOnKeyUp} required  minLength='8'/>
                                        </div>

                                        {/* Show the Password Validator Messages */}
                                        
                                        {pwdRequisite?<PWDValidatorMessage 
                                            capsLetterFlag = {check.capsLetterCheck?"valid" : "invalid"}
                                            numberFlag = {check.numberCheck?"valid":"invalid"}
                                            pwdLengthFlag = {check.pwdLengthCheck?"valid" : "invalid"}
                                            specialCharFlag = {check.specialCharCheck?"valid" : "invalid"}
                                        /> : null}
                                        
                                        <div id="emailHelp" className="form-text mb-3">We'll never share your login details with anyone else.</div>
                                        <button type="submit" className="btn btn-primary">Add New Employee</button>
                                    </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
