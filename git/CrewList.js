import axios from 'axios';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
class CrewList extends Component {

    constructor(props){
        super(props);

        this.state={
            crews:[],click:false,post:[],currentPost:"",contractlist:[]
        };

    }

    allPost = async () => {
        const res = await axios.get(`/salary?post=${this.state.currentPost}`);
        if (res && Array.isArray(res.data) ) {
            this.setState({post:res.data});
        } 
    }

    exportPDF = () => {
        const unit = "pt";//size masuring unit
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Project Crew Details";
        const headers = [["id", "Position","emp id", "Emp Name","contact No"]];
    
        const data = this.state.crews.map(crews=> [crews.contractID,crews.position,crews.employeeID ,crews.employeeName,crews.contactNo]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
    }

    componentDidMount(){
        this.retrieveCrews();
        this.contarctList();
    }
    
    retrieveCrews(){
        axios.get("http://localhost:8000/Crew/getall").then(res =>{
            if(res.data.success){
                this.setState({
                    crews:res.data.existingcrews
                });

                console.log(this.state.crews);
            }
        });
    }
    contarctList(){
        axios.get("http://localhost:8000/crew/getconid").then(res =>{
            if(res.data.success){
                this.setState({
                    contractlist:res.data.list
                });
                console.log("getdata====>",res.data);
                console.log("a====>",this.state.contractlist);
            }
        });
    }
    Deletebtn(objid){
        console.log(objid);
        axios.delete("http://localhost:8000/Crew/delete/"+objid).then(res =>{
            if(res.data.success){
                this.setState({
                    crews:res.data.existingcrews
                });
                this.retrieveCrews();
                window.location.reload(true);
                console.log(this.state.crews);
            }
        });
    }

    refreshPage() {
    window.location.reload(false);
    
    }
    filterData(crews,searchKey){
   
        const result = crews.filter((crew)=>
            crew.employeeName.toLowerCase().includes(searchKey)||
            crew.employeeID.toLowerCase().includes(searchKey)||
            crew.contractID.toLowerCase().includes(searchKey)


        );
        this.setState({crews:result});         
    }
    handleSearchArea =(e)=>{
        const searchKey = e.target.value;
        axios.get("http://localhost:8000/Crew/getall").then( res=>{
            if(res.data.success){
                
                this.filterData(res.data.existingcrews,searchKey);
                

              
            }
        });
    }
    filter =(conid)=>{
        // const searchKey = e.target.value;
        axios.get("http://localhost:8000/Crew/getall").then( res=>{
            if(res.data.success){
                
                this.filterData(res.data.existingcrews,conid);
                

              
            }
        });
    }
    render() {
        return (
            <div className="container">
                <div className="hero">
                    <nav className="prmenu">
                        <ul className="">
                            <li><a href="/">Home</a></li>                    
                            <li><a href="/crew/add">Add Crew</a></li>
                            <li><a href="/crew/list">List of Crews</a></li>
                        </ul>
                    </nav>       
                </div>
                <u><h2 className="h-tag">Crew List</h2></u>
                <button className='btn btn-success' onClick={()=>{this.filter('')}}>All Members</button>
                {this.state.contractlist.map((clist,index) =>(
                    <button  onClick={()=>{this.filter(clist.toLowerCase())}}>{clist}</button>
                ))}


                {/* genarate report button */}

               
                {/* search */}
                <div>
                    <form >
                        <label></label>
                        <input type="search" className="inputcell"placeholder="Search"
                        onChange={this.handleSearchArea}/>
                    </form>
                    
                    {/* <button onClick={()=>{this.setState({click:true})}}>search</button>
                        {this.state.click && this.state.post.map((post) => (
                            <h1>{post.post}</h1>
                        ))} */}
                </div>
                {/* <button onClick={()=>this.redirect()}>Click to reload!</button> */}
               
            
               
                <table className='table'>
                    <thead>
                        <tr>
                       
                            <th scope='col'>#</th>
                            <th scope='col'>contractID</th>
                            <th scope='col'>position</th>
                            <th scope='col'>employeeID</th>
                            <th scope='col'>employeeName</th>
                            <th scope='col'>contactNo</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.crews.map((crews,index) =>(
                            <tr>
                                <th scope='row'>{index+1}</th>
                                <td>{crews.contractID}</td>
                                <td>{crews.position}</td>
                                <td>{crews.employeeID}</td>
                                <td>{crews.employeeName}</td>
                                <td>{crews.contactNo}</td>
                                <td>
                                    <Link to={{ 
                                    pathname: "/crew/edit/"+crews._id, 
                                    param1: "Par1" 
                                    }}  className='btn btn-warning' >
                                        
                                        <i className='fas fa-edit'></i>&nbsp; Edit
                                    </Link>
                                    {/* <Link to="crew/edit">Create Idea</Link> */}
                                    &nbsp;
                                    <button className='btn btn-danger' href="#" onClick={()=>{this.Deletebtn(crews._id);this.refreshPage();}}>
                                        <i className='far fa-trash-alt'></i>&nbsp; Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody> 
                </table>
                <div class="container">
                <div className='row'>
                    
                    <div class="col align-self-end">
                        <button className='btn btn-success' onClick={() => this.exportPDF()}>Generate Report</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CrewList;
