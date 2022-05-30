import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import AddEmployee from './components/AddEmployee';
import EditData from './components/EditData';

function App() {
  return (
    <>
    {/* use routes for every component */}

          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='/services' element={<Services/>} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/dashboad' element={<Dashboard/>} />
            <Route exact path='/addemployee' element={<AddEmployee/>} />
            <Route exact path='/editdata' element={<EditData/>} />
            <Route exact path='/logout' element={<Logout/>} />
          </Routes>
        <Footer/>
    </>
  );
}

export default App;
