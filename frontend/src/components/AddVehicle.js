import React, { useState } from "react";
import axios from "axios";
import "./details.css"
import "./header.css"
import {useNavigate} from 'react-router-dom';


function AddVehicle(){

    const navigate = useNavigate();  

    const [vehicleNo, setVehicleNo] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [fuelConsumptionRate, setFuelConsumptionRate] = useState("");
    const [driverID, setDriverID] = useState("");
    const [drivingLicenseNo, setDrivingLicenseNo] = useState("");

    function sendData(e){
        e.preventDefault();

        const newVehicle = {
            vehicleNo,
            vehicleType,
            fuelConsumptionRate,
            driverID,
            drivingLicenseNo,
        }


        axios.post("http://localhost:8070/vehicle/add", newVehicle).then(()=>{
            alert("vehicle added");
            navigate("/getVehicles")

        }).catch((err)=>{
            alert(err);
        })

    }
   

    return (
        
            <div class="home-section">
                <h2 class="heading">Enter Vehicle Details</h2>
                <form class="vehicleform" onSubmit={sendData}>
                <div class="mb-3">
                    <label class="form-label">Vehicle Number</label>
                    <input type="text" className="vehicleInput"
                    onChange={(e)=>{
                        setVehicleNo(e.target.value);
                    }} />
                </div>

                <div class="mb-3">
                    <label >Vehicle Type</label>
                    <input type="text" className="vehicleInput"
                    onChange={(e)=>{
                        setVehicleType(e.target.value);
                    }} />
                </div>

                <div class="mb-3">
                    <label  class="form-label">Fuel Consumption Rate (Permissible lowest value)</label>
                    <input type="text" className="vehicleInput"
                    onChange={(e)=>{
                        setFuelConsumptionRate(e.target.value);
                    }} />
                </div>

                <div class="mb-3">
                    <label  class="form-label">Driver ID</label>
                    <input type="text" className="vehicleInput"
                    onChange={(e)=>{
                        setDriverID(e.target.value);
                    }} />
                </div>

                <div class="mb-3">
                    <label class="form-label">Driving Licence No</label>
                    <input type="text" className="vehicleInput"
                    onChange={(e)=>{
                        setDrivingLicenseNo(e.target.value);
                    }}/>
                </div>

        

                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
       
    )
} 

 export default AddVehicle;
