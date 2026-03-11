import React, { useState } from 'react';
import './App.css';
import { BACKENDURL, callApi } from './lib';

const App = () => {
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");

  function saveData(){
    if(name.trim() === "")
    {
      alert("Enter Name");
      return;
    }
    if(dept.trim() === "")
    {
      alert("Enter Department");
      return;
    }
    let data = JSON.stringify({
      fname: name,
      dept: dept
    });
    callApi("POST", BACKENDURL + "faculty/save", data, saveResponse);
  }

  function saveResponse(data){
    alert(data);
  }

  return (
    <div className='app'>
      <div className='panel'>
        <h3>Faculty Details</h3>
        <legend>Faculty Name*</legend>
        <input type='text' placeholder='Enter Name' name='name' value={name} onChange={(e)=>setName(e.target.value)} /> 
        <legend>Department*</legend>
        <input type='text' placeholder='Enter Department' name='dept' value={dept} onChange={(e)=>setDept(e.target.value)} />
        <button onClick={()=>saveData()}>Save</button>
      </div>
    </div>
  );
}

export default App;
