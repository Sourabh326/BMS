import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

const  App = () => {
  return (
    <div className="App">

<div className="container-contact100">
		<div className="wrap-contact100">
			<form className="contact100-form validate-form">
				<span className="contact100-form-title">
					Admin Login
				</span>

				<div className="wrap-input100 validate-input" data-validate="Name is required">
					<span className="label-input100">Username</span>
					<input className="input100" type="text" name="name" placeholder="Enter your username" />
					<span className="focus-input100"></span>
				</div>

				<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<span className="label-input100">Password</span>
					<input className="input100" type="text" name="email" placeholder="Enter your password" />
					<span className="focus-input100"></span>
				</div>

			<div className="container-contact100-form-btn">
					<div className="wrap-contact100-form-btn">
						<div className="contact100-form-bgbtn"></div>
						<Link to="/dashboard">
						<button className="contact100-form-btn">
							<span>
								Login
								<i className="fas fa-arrow-right m-l-7" aria-hidden="true"></i>
							</span>
						</button>
						</Link>
					</div>
				</div>
			</form>
			<div className="container-contact100-form-btn">
					<div className="wrap-contact100-form-btn">
						<div className="contact100-form-bgbtn"></div>
						<Link to="/register">
						<button className="contact100-form-btn">
							<span>
								Create A New Account
								<i className="fas fa-arrow-right m-l-7" aria-hidden="true"></i>
							</span>
						</button>
						</Link>
					</div>
				</div>
		</div>
	</div>
    </div>
  );
}

export default App;
