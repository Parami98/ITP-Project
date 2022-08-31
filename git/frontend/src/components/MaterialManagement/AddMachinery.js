import React, {useState} from "react";
import axios from "axios";

function AddMachinery(){

    const [machineryId, setMachineryId] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [purchasedDate, setPurchasedDate] = useState("");
    const [imageUrl, setImageUrl] = useState("");


    function sendData(e){
        
        e.preventDefault();
        
        const newMachinery ={
            machineryId,
            description,
            quantity,
            purchasedDate,
            imageUrl
        }

        axios.post("http://localhost:8000/machinery/save", newMachinery).then(()=>{
            alert("New Machinery Added.");
            
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
                        <li><a href="/add">Add Machinery</a></li>
                        <li><a href="/machinery">List of machineries</a></li>
                    </ul>
               </nav>       
            </div>
            
            <u><h2 className="h-tag">Add Machinery Details</h2></u>
            <div className="input-form">
            <form className="forms" onSubmit={sendData}>
                <div className="form-group">
                    <label for="ID">Machinery ID :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="ID" placeholder="Enter Machinery ID" onChange={(e) =>{

                        setMachineryId(e.target.value);

                    }}></input>
                </div>
                
                <div className="form-group">
                    <label for="description">Description :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="description" placeholder="Enter Description" onChange={(e) =>{

                        setDescription(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="Quantity">Machinery's Quantity :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="Quantity" placeholder="Enter Quantity" onChange={(e) =>{

                        setQuantity(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="date">Date of Purchased :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="date" placeholder="Enter Date of Purchased Item" onChange={(e) =>{

                        setPurchasedDate(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="imageUrl">Machinery Image Url :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="imageUrl" placeholder="Enter Machinery's Picture Url" onChange={(e) =>{

                        setImageUrl(e.target.value);

                    }}></input>
                </div>
                <button type="submit" className="btn-Search">Submit</button>
            </form>

            </div>
            
        </div>
    )
}
export default AddMachinery;
