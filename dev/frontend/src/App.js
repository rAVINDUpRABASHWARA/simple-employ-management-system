import './App.css';
import React from 'react';
import AddEmployeeScreen from './Screens/AddEmployeeScreen';

function App() {
  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <main>
        <AddEmployeeScreen/>
      </main>
    </div>
  );
}

export default App;
