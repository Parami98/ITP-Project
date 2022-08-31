import axios from 'axios';
import React, { Component } from 'react';

class Machinerydetails extends Component {

    constructor(props){
        super(props);

        this.state={
            machineries:[]
        };

    }

    componentDidMount(){
        this.retrieveMachineries();
    }
    
    retrieveMachineries(){
        axios.get("http://localhost:8000/machineries").then(res =>{
            if(res.data.success){
                this.setState({
                    machineries:res.data.existingMechineries
                });

                console.log(this.state.machineries);
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
                            <li><a href="/add">Add Machinery</a></li>
                            <li><a href="/machinery">List of machineries</a></li>
                        </ul>
                    </nav>       
                </div>
                <u><h2 className="h-tag">Machinery And Equipment</h2></u>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Machinery ID</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Purchased Date</th>
                            <th scope='col'>Image</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.machineries.map((machineries,index) =>(
                            <tr>
                                <th scope='row'>{index+1}</th>
                                <td>{machineries.machineryId}</td>
                                <td>{machineries.description}</td>
                                <td>{machineries.quantity}</td>
                                <td>{machineries.purchasedDate}</td>
                                <td>{machineries.imageUrl}</td>
                                <td>
                                    <a className='btn btn-warning' href={`/edit/${machineries._id}`}>
                                        <i className='fas fa-edit'></i>&nbsp; Edit
                                    </a>
                                    &nbsp;
                                    <a className='btn btn-danger' href="#">
                                        <i className='far fa-trash-alt'></i>&nbsp; Delete
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody> 
                </table>
 
            </div>
        );
    }
}

export default Machinerydetails;
