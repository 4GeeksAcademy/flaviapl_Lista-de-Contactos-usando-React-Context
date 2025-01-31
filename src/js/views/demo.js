import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import ContactCard from "../component/ContactCard";

export const Demo = () => {
	const { store, actions } = useContext(Context);


	return (
		<div className="container-fluid">
			<div className="addContactButton mb-3 d-flex justify-content-end">
				<Link to="/demo">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
			<ul className="list-group m-4">
				{store.demo.map((item, index) => {                //loop sull'array store.demo e genera un elemento <li> per ogni elemento dell'array
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between" 
							style={{ background: "white" }}>
							
							<ContactCard item={item}/>

						</li>
					);
				})}
			</ul>
		</div>
	);
};
