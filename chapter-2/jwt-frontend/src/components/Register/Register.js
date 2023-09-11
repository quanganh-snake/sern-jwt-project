import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import clsx from "clsx";
//Style
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import "./Register.scss";

export default function Register() {
	const navigate = useNavigate();

	//state
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const defaultValidInput = {
		isValidEmail: true,
		isValidPhone: true,
		isValidPassword: true,
		isValidConfirmPassword: true,
	};
	const [objCheckValid, setObjCheckValid] = useState(defaultValidInput);

	//event handlers
	const handleLogin = () => {
		navigate("/login");
	};

	const isValidInput = () => {
		setObjCheckValid(defaultValidInput);
		// Check if email is valid
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailRegex.test(email)) {
			setObjCheckValid({ ...defaultValidInput, isValidEmail: false });
			toast.error("Invalid email address");
			return false;
		}

		// Check if phone number is valid
		const phoneRegex = /^[0-9]{10,15}$/;
		if (!phoneRegex.test(phone)) {
			setObjCheckValid({ ...defaultValidInput, isValidPhone: false });
			toast.error("Invalid phone number");
			return false;
		}

		// Check if username is not empty
		if (username.trim() === "") {
			toast.error("Username cannot be empty");
			return false;
		}

		// Check if password is not empty
		if (password.trim() === "") {
			setObjCheckValid({ ...defaultValidInput, isValidPassword: false });
			toast.error("Password cannot be empty");
			return false;
		}

		// Check if password and confirmPassword are the same
		if (password !== confirmPassword) {
			setObjCheckValid({ ...defaultValidInput, isValidConfirmPassword: false });
			toast.error("Passwords do not match");
			return false;
		}

		return true;
	};

	const handleRegister = (e) => {
		e.preventDefault();
		if (!isValidInput()) {
			return;
		}

		// let dataRegister = {
		//   email,
		//   username,
		//   phone,
		//   password,
		// };

		// axios
		//   .post("http://localhost:8069/api/register", dataRegister)
		//   .then((res) => {
		//     if (res.data.status === "success") {
		//       toast.success("Registration successful!");
		//       navigate("/login");
		//     } else {
		//       toast.error(res.data.message);
		//     }
		//   })
		//   .catch((err) => {
		//     console.error(err);
		//     toast.error("Registration failed. Please try again.");
		//   });!isValidInput()) {
		//   return;
		// }

		let dataRegister = { email, username, phone, password };

		axios.post("http://localhost:8069/api/v1/register", dataRegister);
		console.log(dataRegister);
		toast.success("Chúc mừng bạn đã đăng ký tài khoản thành công!", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};

	useEffect(() => {
		axios.get("http://localhost:8069/api/v1/test-api").then((res) => {
			console.log(res);
		});
	}, []);

	return (
		<div className="register-box w-50 my-5 mx-auto py-5 px-5">
			<div className="container">
				<div className="row justify-content-center">
					<div className="register-right p-4 col-12 border rounded">
						<form className="container" onSubmit={handleRegister}>
							<div className="row">
								<div className="mb-3 col-6">
									<label htmlFor="email" className="form-label">
										Email address
									</label>
									<input
										type="email"
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
										placeholder="Email address..."
										className={clsx("form-control", objCheckValid.isValidEmail ? "" : "is-invalid")}
										id="email"
										aria-describedby="emailHelp"
									/>
								</div>
								<div className="mb-3 col-6">
									<label htmlFor="phone" className="form-label">
										Phone number
									</label>
									<input
										type="tel"
										value={phone}
										onChange={(e) => {
											setPhone(e.target.value);
										}}
										placeholder="Phone number..."
										className={clsx("form-control", objCheckValid.isValidPhone ? "" : "is-invalid")}
										id="phone"
									/>
								</div>
								<div className="mb-3 col-6">
									<label htmlFor="username" className="form-label">
										Username
									</label>
									<input
										type="text"
										value={username}
										onChange={(e) => {
											setUsername(e.target.value);
										}}
										placeholder="Username..."
										className="form-control"
										id="username"
									/>
								</div>
								<div className="mb-3 col-6">
									<label htmlFor="password" className="form-label">
										Password
									</label>
									<input
										type="password"
										value={password}
										onChange={(e) => {
											setPassword(e.target.value);
										}}
										placeholder="Password"
										className={clsx("form-control", objCheckValid.isValidPassword ? "" : "is-invalid")}
										id="password"
									/>
								</div>
								<div className="mb-3 col-6">
									<div className="container">
										<div className="row justify-content-center">
											<label htmlFor="re-password" className="form-label">
												Re-enter Password
											</label>
											<input
												type="password"
												value={confirmPassword}
												onChange={(e) => {
													setConfirmPassword(e.target.value);
												}}
												placeholder="Re-enter Password..."
												className={clsx("form-control", objCheckValid.isValidConfirmPassword ? "" : "is-invalid")}
												id="re-password"
											/>
										</div>
									</div>
								</div>
								<button type="submit" className="btn btn-primary mb-3">
									Register
								</button>
								<a href="#" className="text-center text-info htmlForgot-password mb-4">
									Forgot your password?
								</a>
								<hr />
								<button className="btn btn-success" onClick={handleLogin}>
									I have an account. Login
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
