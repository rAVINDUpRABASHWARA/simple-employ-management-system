import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
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

function App() {
  return (
    <>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='/services' element={<Services/>} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/dashboad' element={<Dashboard/>} />
            <Route exact path='/addemployee' element={<AddEmployee/>} />
            <Route exact path='/logout' element={<Logout/>} />
          </Routes>
        <Footer/>
    </>
  );
}

export default App;
