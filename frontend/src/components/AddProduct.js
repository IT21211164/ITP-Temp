import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import ImageInput from "./ImageInput";
import "./addproduct.css"



const AddProduct = () => {

	const navigate = useNavigate(); 

	const [data, setData] = useState({
		itemNo: "",
		timberType: "",
		image: "",
	});

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleInputState = (name, value) => {
		setData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const url = process.env.REACT_APP_API_URL
			const { data : res } = await axios.post(url, data);
			console.log(res);
			alert("Product added");
			navigate("/getProducts")
		} catch (error) {
			console.log(error)
		}
	};

	return (
		<div class="home-section">
            <h2 class="heading">Enter Product Details</h2>
			<form className="form"   onSubmit={handleSubmit} >
		
				
                <input
					type="text"
					className="input"
					placeholder="Item Number"
					name="itemNo"
					onChange={handleChange}
					value={data.itemNo}
				/>

			
				<input
					type="text"
					className="input"
					placeholder="Timber Type"
					name="timberType"
					onChange={handleChange}
					value={data.timberType}
				/>

				<ImageInput
					name="image"
					handleInputState={handleInputState}
					type="image"
					value={data.image}
					
				/>
				
				<button type="submit" className="submit_btn">
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddProduct;