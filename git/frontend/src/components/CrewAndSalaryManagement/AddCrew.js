import React, {useEffect, useState} from "react";
import axios from "axios";
import swal from 'sweetalert';
import { Container, Navbar } from 'react-bootstrap';

import Form from 'react-bootstrap/Form'

function AddCrew(){

    const [contractID, setContractID] = useState("");
    const [position, setPosition] = useState("");
    const [employeeID, setEmployeeID] = useState("");
    const [employeeName, setEmployeeName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [contract, setContract] = useState([]);
    const [errors, setErrors] = useState({});
    const [intent, setIntent] = useState(1);
   

      

useEffect(() => {

     axios.get("http://localhost:8000/crew/getconractall").then(res =>{
                 console.log("aaaaa",res);
        if(res.data.success){
            setContract(
                res.data
            );

           
        }
        console.log("22222",contract);

    

 } )
},[])

    //     data && data.status===200 ? setContract(data.data.existingcontract) : console.log(data.data.existingcontract)
    // console.log("data====>>>",data);
    //       console.log("contract===>",contract);


 

    function sendData(e){
        
        e.preventDefault();
        const isValid = formValidation();
        const newMachinery ={
            contractID,
            position,
            employeeID,
            employeeName,
            contactNo
        }
if(isValid){
        axios.post("http://localhost:8000/crew/save", newMachinery).then(()=>{
            // alert("New Crew Added.");
            swal({
                title: "Done!",
                text: "Saved Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/crew/list"));
            });
            // window.location.href = '/crew/list';
            
        }).catch((err)=>{
            alert(err);
            
        })
    }
    }
    const handleChange = e => {
        console.log(e);
      }
      function demofill(){
            setEmployeeID("Emp0200")
            setEmployeeName("Balasooriya")
            setPosition("Engineer")
            setContactNo("0777079833")

      }
    function formValidation () {
        const con_id = contractID;
        // const position = position;
        const employee_ID = employeeID;
        const employee_Name= employeeName;
        const contact_No = contactNo;
        
        let isValid = true;
        let errors = {};

        // if(!con_id.includes("CON")){
        //     errors.con_idCON = "Contract id should start with CON."
        //     isValid = false;
        // }
        
        if(contact_No.trim().length < 10){
            errors.con_desLength = "Description should contain at leasts 10 characters."
            isValid = false;
        }
        var letters = /^[A-Za-z]+$/;
        if(employeeName.length<1){
            
            errors.con_desLength = "Employee Name should not be empty"
            isValid = false;
        }else if (!employeeName.match(letters)){
            errors.con_desLength = "Employee Name should String"
            isValid = false;
        }

        setErrors(errors);
        console.log(errors);
        if(isValid==false){
        swal({
            text:errors.con_idCON? errors.con_idCON :errors.con_desLength?"" +" \n "+ errors.con_desLength:"", 
            
          });
        }
        return isValid;
    }

    return(
        <div className="container">
            <div className="hero">
               <nav className="prmenu">
                    <ul className="">
                        <li><a href="/">Home</a></li>                    
                        <li><a href="/crew/add">Add Crew</a></li>
                        <li><a href="/crew/list">List of Crew</a></li>
                    </ul>
               </nav>       
            </div>
            
            <u><h2 className="h-tag">Add Crew Details</h2></u>
            <div className="input-form">
            <form className="forms" onSubmit={sendData}>
                {/* <div className="form-group">
                    <label for="ID">Contract ID :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="ID" placeholder="Enter Contract ID" onChange={(e) =>{

                        setContractID(e.target.value);

                    }}></input>
                </div> */}
                
                <div className="form-group">
                <label for="ID">Contract ID :</label>&nbsp;<br></br>
                        <Form.Select className="inputcell" aria-label="Default select example"
                        onChange={e=>{setContractID(e.target.value)}}
                        >
                        <option>Open this select menu</option>
                        {(contract.existingcontract ||[]).map(user => (
                                               <option value={user.contractID} >{user.contractID}</option>
                                        ))}

                        </Form.Select>

                    </div>
                <div className="form-group">
                    <label for="description">Position :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="position" value={position} placeholder="Enter Position" onChange={(e) =>{

                        setPosition(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="employeeId">Employee ID:</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="employeeId" value={employeeID} placeholder="Enter Employee ID" onChange={(e) =>{

                        setEmployeeID(e.target.value);

                    }}></input>
                </div>
                    
                    
                <div className="form-group">
                    <label for="employeeName">Employee Name:</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="employeeName" value={employeeName} placeholder="Enter Employee Name" onChange={(e) =>{

                        setEmployeeName(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="contactNo">Contact Number :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="contactNo" value={contactNo}placeholder="Enter Contact Number" onChange={(e) =>{

                        setContactNo(e.target.value);

                    }}></input>
                </div>
                <button type="submit" className="btn-Search">Submit</button>
               
            </form>
            <button onClick={()=>{demofill()}} className="btn-Search">DEMO</button>
            </div>
            
        </div>
    )
}
export default AddCrew;
