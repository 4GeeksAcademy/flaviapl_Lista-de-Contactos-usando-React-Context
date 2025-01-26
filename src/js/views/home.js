import React, { useState } from "react";
import "../../styles/home.css";

export const Home = () => {
// const [inputName, setInputName] = useState("")
// const [inputEmail, setInputEmail] = useState("")
// const [inputPhone, setInputPhone] = useState("")
// const [inputAddress, setInputAddress] = useState("")

const handlesubmit = (e) => {
	e.preventDefault();                                     //stop refresh pagina
	console.log("form enviado:", inputs);
	
};
const inputsNames = {
	username: "", 
	email: "", 
	phone:"", 
	address:"" 
};

const [inputs, setInputs] = useState (inputsNames);


function changeInputs(e) {
	console.log("name:", e.target.name);
	console.log("value", e.target.value);
	setInputs({...inputs, [e.target.name]:e.target.value});
	
}


	return(
		<form className="container-fluid px-5" onSubmit={handlesubmit}>
			<h1 className="text-center">Add a new contact</h1>
			<div className="mb-3">
				<label htmlFor="text" className="form-label">Full Name</label>
				<input type="text" value={inputs.username} onChange={changeInputs} name="username" className="form-control" id="exampleInput1" placeholder="Full Name"/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">Email</label>
				<input type="email" value={inputs.email} onChange={changeInputs} name="email" className="form-control" id="exampleInput2" aria-describedby="emailHelp" placeholder="Enter email"/>
			</div>
			<div className="mb-3">
				<label htmlFor="text" className="form-label">Phone</label>
				<input type="text" value={inputs.phone} onChange={changeInputs} name="phone" className="form-control" id="exampleInput3" placeholder="Enter phone"/>
			</div>
			<div className="mb-3">
				<label htmlFor="text" className="form-label">Address</label>
				<input type="text" value={inputs.address} onChange={changeInputs} name="address" className="form-control" id="exampleInput4" placeholder="Enter address"/>
			</div>

			<button type="submit" className="btn btn-primary w-100">save</button>
		</form>
	);
};