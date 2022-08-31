import React,  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
// import Modal from 'react-modal';

const EditSalary =()=> {
    // const params = useParams();
   
    const [employeeID, setEmployeeID] = useState("");
    const [employeeName, setEmployeeName] = useState("");
    const [position, setPosition] = useState("");
    const [attendance, setAttendance] = useState("");
    const [calculateBy, setCalculateBy] = useState("");
    const [salary, setSalary] = useState("");
    const [inti, setInti] = useState(0);
    // const [crew, setCrew] = useState([]);


let { id } = useParams();

useEffect(()=>{
    console.log("useEffect -call");
  if (inti==0){
         console.log("useEffect-condition");
        
        axios.get('http://localhost:8000/Salary/get/'+ id)
        .then(function (response) {
          // handle success
          setInti(2); 
          console.log(response);
          

        //   setCrew(response.data.crew);
         
          setPosition(response.data.salary.position);
          setEmployeeID(response.data.salary.employeeID);
          setEmployeeName(response.data.salary.employeeName);
          setAttendance(response.data.salary.attendance);
          setSalary(response.data.salary.salary);
          setCalculateBy(response.data.salary.calculateBy);



          console.log("salary details" + employeeName +employeeID);
          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });  
        setInti(1);        
    }  
});
const sendData=()=>{
    console.log("send data");
    
    const data ={
                attendance:attendance,
                position:position,
                employeeID:employeeID,
                salary:salary,
                employeeName:employeeName,
                calculateBy:calculateBy
            }
        
            console.log(data)

            axios.put(`http://localhost:8000/salary/update/`+id, data)
            .then((res) =>{
                if(res.data.success){
                    alert("salary details Updated Successfully");
                   
                    window.location.href = '/salary/list';
                      
                      
    //                 )
    
    //             }
    //         })
        }});
    }


    return <div>
        <div className="hero">
               <nav className="prmenu">
                    <ul className="">
                        <li><a href="/">Home</a></li>                    
                        <li><a href="/salary/add">Add Salary</a></li>
                        <li><a href="/salary/list">List of Salary</a></li>
                    </ul>
               </nav>       
            </div>
            
            
            <u><h2 className="h-tag">Edit Salary Details</h2></u>
            <div className="input-form">
            <form className="forms" onSubmit={sendData}>
               
                <div className="form-group">
                    <label for="description">Employee Name :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="position" placeholder="Enter Position" value={employeeName} onChange={(e) =>{

                        setEmployeeName(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="employeeId">Position:</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="employeeId" placeholder="Enter Employee ID" value={position} onChange={(e) =>{

                        setPosition(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="employeeName">Attendance:</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="Attendance" placeholder="Enter Employee Name" value={attendance} onChange={(e) =>{

                        setAttendance(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="calculateby">Calculate By:</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="calculateBy" placeholder="Enter Employee Name" value={calculateBy} onChange={(e) =>{

                        setCalculateBy(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="contactNo">Salary:</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="salary" placeholder="Enter Contact Number" value={salary} onChange={(e) =>{

                        setSalary(e.target.value);

                    }}></input>
                </div>
              
                <button type="submit" className="btn-Search" >Update</button>
            </form>

            </div>
    </div>;
};
export default EditSalary;
