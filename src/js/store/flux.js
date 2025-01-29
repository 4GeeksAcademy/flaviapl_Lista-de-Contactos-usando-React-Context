import { Link } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			inputs: {
				username: "",
				phone: "",
				email: "",
				address: ""
			}
		},

		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },


			setInputs: (newInputs) => {
                setStore({ inputs: newInputs }); // Aggiorna lo stato degli inputs
            },

			sendForm: (inputs) => {
				console.log("addContact");
				
				const requestOption = {
					method: "POST",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify(
						{
							"name": inputs.username,
							"phone": inputs.phone,
							"email": inputs.email,
							"address": inputs.address
						  })
				};
				fetch("https://playground.4geeks.com/contact/agendas/flavia1/contacts", requestOption)
				.then(response => response.json())
				.then((data) => {
				fetch("https://playground.4geeks.com/contact/agendas/flavia1/contacts")
				.then((response) => response.json())
				.then((data) => setStore({ demo: data.contacts }));	
				});
			},



			loadSomeData: () => {
				console.log("loadSomeData");
				
				fetch("https://playground.4geeks.com/contact/agendas/flavia1/contacts")
				.then((response) => response.json())
				.then((data) => setStore({ demo: data.contacts }));
			},



			deleteItem: (id) => {
				console.log("deleteItm", id);
				const requestOption =
				{
					method: 'DELETE',
					headers: { 'Content-Type': 'application/json'}
				};
				fetch("https://playground.4geeks.com/contact/agendas/flavia1/contacts/" + id, requestOption)
				.then((response) => response.text())
				.then((data) => {
				// console.log(data);
				fetch("https://playground.4geeks.com/contact/agendas/flavia1/contacts")
				.then((response) => response.json())
				.then((data) => setStore({ demo: data.contacts }));
				});
			},



			modifyContact: (id, inputs) => {
				console.log("modifyCont", id);
				const requestOptions = {
					method: "PUT",
					headers: { 'Content-Type': 'application/json'},
					body: JSON.stringify(						{
						"name": inputs.username,
						"phone": inputs.phone,
						"email": inputs.email,
						"address": inputs.address
					  })
				  };
				  
				  fetch("https://playground.4geeks.com/contact/agendas/flavia1/contacts/" +id, requestOptions)
					.then((response) => response.json())
					.then((data) => {
					console.log(data);
					fetch("https://playground.4geeks.com/contact/agendas/flavia1/contacts")
					.then((response) => response.json())
					.then((data) => setStore({ demo: data.contacts }));
				});
			},






				// console.log("deleteItm", indexToDelete);
				// const store = getStore();
				// setStore({demo: store.demo.filter((item, index) => index != indexToDelete)});
			// }

			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
