import React, {useState} from "react";
import axios from "axios";

function AddSalaryDetails(){

    const [employeeID, setEmployeeID] = useState("");
    const [employeeName, setEmployeeName] = useState("");
    const [position, setPosition] = useState("");
    const [attendance, setAttendance] = useState("");
    const [calculateBy, setCalculateBy] = useState("");
    const [salary, setSalary] = useState("");


    function sendData(e){
        
        e.preventDefault();
        
        const newSalaryDetails ={
            employeeID,
            employeeName,
            position,
            attendance,
            calculateBy,
            salary
            // contractID,
            // position,
            // employeeID,
            // employeeName,
            // contactNo
        }

        axios.post("http://localhost:8000/salary/save", newSalaryDetails).then(()=>{
            alert("New Salary Added.");
            window.location.href = '/salary/list';
            
        }).catch((err)=>{
            alert(err);
        })

    }


    return(
        <div className="container">
            <div className="hero">
               <nav className="prmenu">
                    <ul className="">
                        <li><a href="/">Home</a></li>                    
                        <li><a href="/salary/add">Add salary</a></li>
                        <li><a href="/salary/list">List of Salary Details</a></li>
                    </ul>
               </nav>       
            </div>
            
            <u><h2 className="h-tag">Add Salary Details</h2></u>
            <div className="input-form">
            <form className="forms" onSubmit={sendData}>
                <div className="form-group">
                    <label for="ID">Employee ID :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="ID" placeholder="Enter Contract ID" onChange={(e) =>{

                        setEmployeeID(e.target.value);

                    }}></input>
                </div>
              
                <div className="form-group">
                    <label for="description">Employee Name :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="position" placeholder="Enter Position" onChange={(e) =>{

                        setEmployeeName(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="employeeId">Position:</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="employeeId" placeholder="Enter Employee ID" onChange={(e) =>{

                        setPosition(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="employeeName">Attendance:</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="Attendance" placeholder="Enter Employee Name" onChange={(e) =>{

                        setAttendance(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="calculateby">Calculate By:</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="calculateBy" placeholder="Enter Employee Name" onChange={(e) =>{

                        setCalculateBy(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="contactNo">Salary:</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="salary" placeholder="Enter Contact Number" onChange={(e) =>{

                        setSalary(e.target.value);

                    }}></input>
                </div>
                <button type="submit" className="btn-Search">Submit</button>
            </form>

            </div>
            
        </div>
    )
}
export default AddSalaryDetails;
