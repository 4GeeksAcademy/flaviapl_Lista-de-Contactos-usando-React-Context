import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
<form className="container-fluid px-5">
	<h1 className="text-center">Add a new contact</h1>
	<div className="mb-3">
		<label for="exampleInputPassword1" className="form-label fw-bolder">Full Name</label>
		<input type="password" className="form-control fw-bolder" id="exampleInputPassword1" placeholder="Full Name"/>
	</div>
	<div className="mb-3">
		<label for="exampleInputEmail1" className="form-label fw-bolder">Email</label>
		<input type="email" className="form-control fw-bolder" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
	</div>
	<div className="mb-3">
		<label for="exampleInputPassword1" className="form-label fw-bolder">Phone</label>
		<input type="password" className="form-control fw-bolder" id="exampleInputPassword1" placeholder="Enter phone"/>
	</div>
	<div className="mb-3">
		<label for="exampleInputPassword1" className="form-label fw-bolder">Address</label>
		<input type="password" className="form-control fw-bolder" id="exampleInputPassword1" placeholder="Enter adress"/>
	</div>

	<button type="submit" className="btn btn-primary w-100 fw-bolder">save</button>
</form>
);
