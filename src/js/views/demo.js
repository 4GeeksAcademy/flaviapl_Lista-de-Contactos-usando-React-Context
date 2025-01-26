import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

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
								<img src="https://img.freepik.com/fotos-premium/mejores-gafas-hombre-mejores-lentes_759095-27098.jpg" className= "rounded-circle" alt="Descrizione immagine" width="300" />
							{/* <Link to={"/single/" + index}> */}
							<div className="userInfo">
								<div className="fs-1">{item.name}</div>
								<div className="fs-3 text-secondary"><i className="fa-solid fa-location-dot"></i> {item.address}</div>
								<div className="fs-3 text-secondary"><i className="fa-solid fa-phone"></i> {item.phone}</div>
								<div className="fs-3 text-secondary"><i className="fa-solid fa-envelope"></i> {item.email}</div>
							</div>
							{/* </Link> */}
							<div className="mt-4">
								<span className="pencil" onClick={() => actions.changeColor(index, "orange")}>
								<i className="fa-solid fa-pencil"></i>
								</span>
								<span className="trush" onClick={() => actions.changeColor(index, "orange")}>
								<i className="fa-solid fa-trash"></i>
								</span>
							</div>

						</li>
					);
				})}
			</ul>
			<br />  
			<Link to="/">               
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
