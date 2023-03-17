import React, {useState, useEffect} from "react";
import {Link, useLocation,useNavigate} from 'react-router-dom';
import axios from "axios";

import "./details.css";



function UpdateVehicle(){

    const { state } = useLocation();

   
        const [vehicleNo, setVehicleNo] = useState(`${state.vehicleNo}`);
        const [vehicleType, setVehicleType] = useState(`${state.vehicleType}`);
        const [driverID, setDriverID] = useState(`${state.driverID}`);
        const [driverName, setDriverName] = useState(`${state.driverName}`);
        const [driverContactNo, setDriverContactNo] = useState(`${state.driverContactNo}`);
        const [drivingLicenseNo, setDriverLicenseNumber] = useState(`${state.drivingLicenseNo}`);


        function updateData(e){
            e.preventDefault();

            const newVehicle = {
                vehicleNo,
                vehicleType,
                driverName,
                driverID,
                driverContactNo,
                drivingLicenseNo,
            }

            axios.put(`http://localhost:8070/vehicle/update/${state.id}`, newVehicle).then(()=>{
                alert("Vehicle updated");
            }).catch((err)=>{
                alert(err);
            })

        }




        return (
            <div>
                <h1>Add Transport Service</h1>
                <form class="container" onSubmit={updateData}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Vehicle Number</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={vehicleNo}
                    onChange={(e)=>{
                        setVehicleNo(e.target.value);
                    }} />
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Vehicle Type</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" value={vehicleType}
                    onChange={(e)=>{
                        setVehicleType(e.target.value);
                    }} />
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Driver's NIC</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" value={driverID}
                    onChange={(e)=>{
                        setDriverID(e.target.value);
                    }}/>
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Driver's License Number</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" value={drivingLicenseNo}
                    onChange={(e)=>{
                        setDriverLicenseNumber(e.target.value);
                    }}/>
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Driver's Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={driverName}
                    onChange={(e)=>{
                        setDriverName(e.target.value);
                    }} />
                </div>

               
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Driver's Contact Number</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={driverContactNo}
                    onChange={(e)=>{
                        setDriverContactNo(e.target.value);
                    }}/>
                </div>

                


                <button type="submit" class="btn btn-primary" >Update</button>
                </form>
            </div>
        )

}

export default UpdateVehicle;