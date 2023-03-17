import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./login.css";
import "./header.css";
import google from '../images/google.png';

function Login() {
	const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL_2}/auth/google/callback`,
			"_self"
		);
	};
	return (
		<div class="home-section">

				<h1 className="head"></h1>
				<div className= "form_contain ">
					
					<div className= "login">
						<h2 className= "from_heading">User Log in</h2>
						<input type="text" className= "input" placeholder="Email" />
						<input type="text" className= "input" placeholder="Password" />
						<button className= "btn">Log In</button>
						<p className= "text">or</p>

						<button className= "google_btn" onClick={googleAuth}>
							<img src={google} alt="google icon" />
							<span>Sing in with Google</span>
						</button>

						<p className= "text">
							New Here ? <Link to="/signup">Sing Up</Link>
						</p>
					</div>
				</div>

		</div>
	);
}

export default Login;