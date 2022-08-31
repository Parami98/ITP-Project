import React,  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
// import Modal from 'react-modal';

const Editc =()=> {
    // const params = useParams();
   
    const [contractID, setContractID] = useState("");
    const [position, setPosition] = useState("");
    const [employeeID, setEmployeeID] = useState("");
    const [employeeName, setEmployeeName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [inti, setInti] = useState(0);
    // const [crew, setCrew] = useState([]);


let { id } = useParams();

useEffect(()=>{
    console.log("useEffect -call");
  if (inti==0){
         console.log("useEffect-condition");
        
        axios.get('http://localhost:8000/Crew/get/'+ id)
        .then(function (response) {
          // handle success
          setInti(2); 
          console.log(response);
          

        //   setCrew(response.data.crew);
          setContractID(response.data.crew.contractID);
          setPosition(response.data.crew.position);
          setEmployeeID(response.data.crew.employeeID);
          setEmployeeName(response.data.crew.employeeName);
          setContactNo(response.data.crew.contactNo);

          console.log("crew details"+ contactNo + employeeName +employeeID);
          
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
                contractID:contractID,
                position:position,
                employeeID:employeeID,
                employeeName:employeeName,
                contactNo:contactNo
            }
        
            console.log(data)

            axios.put(`http://localhost:8000/crew/update/`+id, data)
            .then((res) =>{
                if(res.data.success){
                    alert("Crew Updated Successfully");
                   
                    window.location.href = '/crew/list';
                      
                      setContractID("");
                        setPosition("");
                        setEmployeeID("");
                        setEmployeeName("");
                        setContactNo("");
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
                        <li><a href="/crew/add">Add Crew</a></li>
                        <li><a href="/crew/list">List of Crew</a></li>
                    </ul>
               </nav>       
            </div>
            
            
            <u><h2 className="h-tag">Edit Crew Details</h2></u>
            <div className="input-form">
            <form className="forms" onSubmit={sendData}>
                <div className="form-group">
                    <label for="ID">Contract ID :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="ID" value={contractID} onChange={(e) =>{

                        setContractID(e.target.value);

                    }}></input>
                </div>
                
                <div className="form-group">
                    <label for="description">Position :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="position" value={position} onChange={(e) =>{

                        setPosition(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="employeeId">Employee ID:</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="employeeId" value={employeeID} onChange={(e) =>{

                        setEmployeeID(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="employeeName">Employee Name:</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="employeeName" value={employeeName} onChange={(e) =>{

                        setEmployeeName(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="contactNo">Contact Number :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="contactNo" value={contactNo} onChange={(e) =>{

                        setContactNo(e.target.value);

                    }}></input>
                </div>
                <button type="submit" className="btn-Search" onClick={()=>sendData()}>Update</button>
            </form>

            </div>
    </div>;
};
export default Editc;
