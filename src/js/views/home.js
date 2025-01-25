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
	
}
const inputsNames = {
	username: "", 
	email: "", 
	phone:"", 
	address:"" 
};

const [inputs, setInputs] = useState (inputsNames)


function changeInputs(e) {
	console.log("name:", e.target.name);
	console.log("value", e.target.value);
	setInputs({...inputs, [e.target.name]:e.target.value});
	
}


	return(
		<form className="container-fluid px-5" onSubmit={handlesubmit}>
			<h1 className="text-center">Add a new contact</h1>
			<div className="mb-3">
				<label htmlFor="text" className="form-label fw-bolder">Full Name</label>
				<input type="text" value={inputs.username} onChange={changeInputs} name="username" className="form-control fw-bolder" id="exampleInput1" placeholder="Full Name"/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label fw-bolder">Email</label>
				<input type="email" value={inputs.email} onChange={changeInputs} name="email" className="form-control fw-bolder" id="exampleInput2" aria-describedby="emailHelp" placeholder="Enter email"/>
			</div>
			<div className="mb-3">
				<label htmlFor="text" className="form-label fw-bolder">Phone</label>
				<input type="text" value={inputs.phone} onChange={changeInputs} name="phone" className="form-control fw-bolder" id="exampleInput3" placeholder="Enter phone"/>
			</div>
			<div className="mb-3">
				<label htmlFor="text" className="form-label fw-bolder">Address</label>
				<input type="text" value={inputs.address} onChange={changeInputs} name="address" className="form-control fw-bolder" id="exampleInput4" placeholder="Enter address"/>
			</div>

			<button type="submit" className="btn btn-primary w-100 fw-bolder">save</button>
		</form>
	);
}