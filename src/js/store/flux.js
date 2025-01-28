const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				console.log("loadSomeData");
				
				fetch("https://playground.4geeks.com/contact/agendas/flavia1/contacts")
				.then((response) => response.json())
				.then((data) => setStore({ demo: data.contacts }));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
