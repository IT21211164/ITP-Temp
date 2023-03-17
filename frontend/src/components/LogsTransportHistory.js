import React, {useState, useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import "./details.css";
import "./header.css";
import search_icon from '../images/search_icon.png'


function LogsTransportHistory(){

    const navigate = useNavigate();  

    const[transportations,setTransportations] = useState([]);

    const[search,setSearch] = useState("");

    
    //fetch records
    function getTransportations(){
        axios.get("http://localhost:8070/transportation").then((res)=>{
        setTransportations(res.data);
        }).catch((err)=>{
            alert(err);
        })
    }

    useEffect(()=>{
        getTransportations();
    }, [])



    //delete record by id
    function deleteTransportation(id){
            axios.delete(`http://localhost:8070/transportation/delete/${id}`)
            .then((result)=>{
                getTransportations();
            })
             .catch(()=>{
                 alert("Error ane");
            });
        }
  

   

    return (
        <div class="home-section">
        <div class="top">
        <Link id="add_btn"  to="/addTransportation" className="btn btn-dark">New Transportation</Link>

        <Link id="report_btn"  to="/report" class="btn btn-dark">Report</Link>


        
        <form id="search" 
         onChange={(e) => setSearch(e.target.value)}>

            <input style={{fontFamily: "Arial,FontAwesome", fontWeight: '400'}} class="form-control me-2" type="search" placeholder=" search" aria-label="Search"/>
         
        </form>
        
         
        </div>

        <div class="details">
        <h3><b>Vehicle details</b></h3>
            <table class="table">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Vehicle Number</th>
                    <th>Purchase Order Number</th>
                    <th>Number of Kilometers</th>
                    <th>Fuel Consumption (liters)</th>
                    <th>Transported Timber Volume</th>
                    
                </tr>
                </thead>

                <tbody>
                {transportations.filter((post)=> {
                    return search === ''
                    ? post
                    : post.vehicleNo.toLowerCase().includes(search) || post.vehicleNo.toUpperCase().includes(search) || post.vehicleNo.includes(search) ||
                    post.vehicleType.toLowerCase().includes(search) || post.vehicleType.toUpperCase().includes(search) || post.vehicleType.includes(search)||
                    post.driverID.toLowerCase().includes(search) || post.driverID.toUpperCase().includes(search) || post.driverID.includes(search)/*||
                    post.driverNIC.toLowerCase().includes(search) || post.driverNIC.toUpperCase().includes(search) || post.driverNIC.includes(search)||
                    post.drivingLicenseNo.toLowerCase().includes(search) || post.drivingLicenseNo.toUpperCase().includes(search) || post.drivingLicenseNo.includes(search)||
                    post.driverContactNo.toLowerCase().includes(search) || post.driverContactNo.toUpperCase().includes(search) || post.driverContactNo.includes(search)||
                    post.route.toLowerCase().includes(search) || post.route.toUpperCase().includes(search) || post.route.includes(search)*/;
                 
                })
                
                                
                
                .map((post) => (
                <tr key={post._id}>
                    <td>{post.date}</td>
                    <td>{post.vehicleNo}</td>
                    <td>{post.purchaseOrderNo}</td>
                    <td>{post.noOfKms}</td>
                    <td>{post.fuelConsumption}</td>
                    <td>{post.timberVolume}</td>
                    

                    <td><button onClick={()=>{
                        navigate("/update",
                        {
                            state: {
                                id: `${post._id}`,
                                vehicleNo: `${post.vehicleNo}`,
                                vehicleType: `${post.vehicleType}`,
                                driverID: `${post.driverID}`
                                
                            }
                        });
                    }}class="btn btn-warning" style={{fontSize:"14px"}}>Update</button></td>

                    <td><button onClick={()=>{
                        const confirmBox = window.confirm(
                            "Do you really want to delete"
                        )
                        if(confirmBox === true){
                            deleteTransportation(post._id);
                        }
                    }} class="btn btn-danger"  style={{fontSize:"14px"}}>Delete</button></td>

                </tr>            
                ))}

                </tbody>
            </table>
            </div>
        </div>
      
    )
} 

 export default LogsTransportHistory;
