import axios from 'axios';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
class SalaryDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            salaris:[]
            
        };

    }

    componentDidMount(){
        this.retrieveSalaries();
        

    }
   
    retrieveSalaries(){
        axios.get("http://localhost:8000/salary/getall").then(res =>{
            if(res.data.success){
                this.setState({
                    salaris:res.data.existingSalaries
                });
                console.log(res.data.existingSalaries.employeeID);
                console.log(this.state.salaris);
            }
        });
    }
    Deletebtn(objid){
        console.log(objid);
        axios.delete("http://localhost:8000/salary/delete/"+objid).then(res =>{
            if(res.data.success){
                // this.setState({
                //     crews:res.data.existingcrews
                // });
                this.retrieveSalaries();
                window.location.reload(true);
                console.log(this.state.salaris);
            }
        });
    }
     refreshPage() {
        window.location.reload(false);
        
      }
     
    render() {
        return (
            <div className="container">
                <div className="hero">
                    <nav className="prmenu">
                        <ul className="">
                            <li><a href="/">Home</a></li>                    
                            <li><a href="/Salary/add">Add Salary Details</a></li>
                            <li><a href="/Salary/list">List of Salary Details</a></li>
                        </ul>
                    </nav>       
                </div>
                <u><h2 className="h-tag">Salary List</h2></u>
                {/* <button onClick={()=>this.redirect()}>Click to reload!</button> */}
                <table className='table'>
                    <thead>
                        <tr>
                           
                       
                            <th scope='col'>#</th>
                            <th scope='col'>employeeID</th>
                            <th scope='col'>employeeName</th>
                            <th scope='col'>position</th>
                            <th scope='col'>attendance</th>
                            <th scope='col'>calculateBy</th>
                            <th scope='col'>Daily/Monthly Payment</th>
                            <th scope='col'>Monthly Salary</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.salaris.map((salaris,index) =>(
                            <tr>
                                <th scope='row'>{index+1}</th>
                                <td>{salaris.employeeID}</td>
                                <td>{salaris.employeeName}</td>
                                <td>{salaris.position}</td>
                                <td>{salaris.attendance}</td>
                                <td>{salaris.calculateBy}</td>
                                <td>{salaris.salary}</td>
                                <td>{salaris.salary*salaris.attendance}</td>
                                <td>{salaris.contactNo}</td>
                                <td>
                                    <Link to={{ 
                                    pathname: "/salary/edit/"+salaris._id, 
                                    param1: "Par1" 
                                    }}  className='btn btn-warning' >
                                        
                                        <i className='fas fa-edit'></i>&nbsp; Edit
                                    </Link>
                                    {/* <Link to="crew/edit">Create Idea</Link> */}
                                    &nbsp;
                                    <button className='btn btn-danger' href="#" onClick={()=>{this.Deletebtn(salaris._id);this.refreshPage();}}>
                                        <i className='far fa-trash-alt'></i>&nbsp; Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody> 
                </table>
 
            </div>
        );
    }
}

export default SalaryDetails;
