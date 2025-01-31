import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
// const [inputName, setInputName] = useState("")
// const [inputEmail, setInputEmail] = useState("")
// const [inputPhone, setInputPhone] = useState("")
// const [inputAddress, setInputAddress] = useState("")

const { store, actions } = useContext(Context);

const handlesubmit = (e) => {
	e.preventDefault();                                     //stop refresh pagina
	console.log("form enviado:", store.inputs);
	console.log(actions);

	actions.sendForm(store.inputs);

	actions.setInputs({                                            
		name: "",
		phone: "",
		email: "",
		address: ""
	});
};


// const inputsNames = {
// 	name: "", 
// 	email: "", 
// 	phone:"", 
// 	address:"" 
// };

// const [inputs, setInputs] = useState (inputsNames);

const inputs = store.inputs || { name: "", phone: "", email: "", address: "" };

function changeInputs(e) {
	// console.log("name:", e.target.name);
	// console.log("value", e.target.value);
	actions.setInputs({...store.inputs, [e.target.name]:e.target.value});
}


	return(
		<>
			<form className="container-fluid px-5 pt-5" onSubmit={handlesubmit}>
				<h1 className="text-center">Add a new contact</h1>
				<div className="mb-3">
					<label htmlFor="text" className="form-label">Full Name</label>
					<input type="text" value={store.inputs.name} onChange={changeInputs} name="name" className="form-control" id="exampleInput1" placeholder="Full Name"/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Email</label>
					<input type="email" value={store.inputs.email} onChange={changeInputs} name="email" className="form-control" id="exampleInput2" aria-describedby="emailHelp" placeholder="Enter email"/>
				</div>
				<div className="mb-3">
					<label htmlFor="text" className="form-label">Phone</label>
					<input type="text" value={store.inputs.phone} onChange={changeInputs} name="phone" className="form-control" id="exampleInput3" placeholder="Enter phone"/>
				</div>
				<div className="mb-3">
					<label htmlFor="text" className="form-label">Address</label>
					<input type="text" value={store.inputs.address} onChange={changeInputs} name="address" className="form-control" id="exampleInput4" placeholder="Enter address"/>
				</div>

				<button type="submit" className="btn btn-primary w-100">save</button>
			</form>
			<div className="ml-auto">
				<Link to="/" style={{ textDecoration: "none" }}>
					<div className="getBack ps-5">or get back to contacts</div>
				</Link>
			</div>
		</>
	);
};