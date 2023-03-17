import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import "./header.css";
import google from '../images/google.png';

function Signup() {
	const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL_2}/auth/google/callback`,
			"_self"
		);
	};
	return (
		<div class="home-section">
				<h1 className= "head"></h1>
				<div className= "form_container">
					
					<div className= "signup">
						<h2 className= "from_heading">Sign up</h2>
						<input type="text" className= "input" placeholder="Username" />
						<input type="text" className= "input" placeholder="Email" />
						<input
							type="password"
							className= "input"
							placeholder="Password"
						/>
						<button className= "btn">Sign Up</button>
						<p className= "text">or</p>
						<button className= "google_btn" onClick={googleAuth}>
							<img src={google} alt="google icon" />
							<span>Sing up with Google</span>
						</button>
						<p className= "text">
							Already Have Account ? <Link to="/login">Log In</Link>
						</p>
					</div>
				</div>

		</div>
	);
}

export default Signup;