
import './App.css';
import axios from "axios";
import Home from "./components/UserProfile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserProfile from "./components/UserProfile";

import Header from './components/Header';
import VehicleDetails from "./components/VehicleDetails";
import AddVehicle from "./components/AddVehicle";
import UpdateVehicle from "./components/UpdateVehicle";
import Report from "./components/Report";
import LogsTransportHistory from "./components/LogsTransportHistory";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./components/ProductDetails";

import  React, {useEffect, useState } from 'react';



import CustomerHeader from './components/CustomerHeader';


import {BrowserRouter, Router, Route, Routes, Navigate} from "react-router-dom";




function App() {

	const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL_2}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	
	const mail = "binodgayasri2001@gmail.com";


	const [loggedIn, setLoggedIn] = useState(false);

	const handleLogin = () => {
		// Perform login logic
		setLoggedIn(true);
	}
if(user){
if(user.email === mail){
	return (
		<div id="body">
		
		<BrowserRouter> 
	
			<Header user={user}/>
	
			<Routes>
	   
			<Route path="/updateVehicle" element={<UpdateVehicle/>}/>
			<Route path="/getVehicles" element={<VehicleDetails/>}/>
			<Route path="/addVehicle" element={<AddVehicle/>}/>
			<Route path="/addTransportation" element={<LogsTransportHistory/>}/>
			<Route path="/addProduct" element={<AddProduct/>}/>
			<Route path="/getProducts" element={<ProductDetails/>}/>
	
			<Route path="/report" element={<Report/>}/>

			<Route exact path="/userprofile" element={user ? <UserProfile user={user} /> : <Navigate to="/login" />}/>

			<Route exact path="/login" element={user ? <Navigate to="/" /> : <Login />}/>

			<Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />}/>

			</Routes>
		
		</BrowserRouter>
		</div>
	  );
}
else
{
	return (
		<div id="body">
		  
		<BrowserRouter> 
	
		<CustomerHeader />
			
			<Routes>
	
					<Route			
						exact
						path="/userprofile"
						element={user ? <UserProfile user={user} /> : <Navigate to="/login" />}
					/>
					<Route
						exact
						path="/login"
						element={user ? <Navigate to="/" /> : <Login />}
					/>
					<Route
						path="/signup"
						element={user ? <Navigate to="/" /> : <Signup />}
					/>

			</Routes>
					
		</BrowserRouter>
		</div>
	  );
}


}
else
{
	return (
		<div id="body">
		  
		<BrowserRouter> 
	
		<CustomerHeader/>
			
			<Routes>
	
					<Route			
						exact
						path="/userprofile"
						element={user ? <UserProfile user={user} /> : <Navigate to="/login" />}
					/>
					<Route
						exact
						path="/login"
						element={user ? <Navigate to="/" /> : <Login />}
					/>
					<Route
						path="/signup"
						element={user ? <Navigate to="/" /> : <Signup />}
					/>
	
			</Routes>	
			
		</BrowserRouter>
		</div>
	  );
}




}

export default App;
 