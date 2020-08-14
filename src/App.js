import React from 'react';
import './App.css';
import SearchAppBar from './components/Header';
import EmployeeTable from './components/Table';


//class component to access input 
function App() {
  return (
    <div>
      <SearchAppBar />
      <EmployeeTable />
    </div >
  );
}


export default App;
