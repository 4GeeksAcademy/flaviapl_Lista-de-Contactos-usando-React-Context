import { Link } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [],
      inputs: {
        name: "",
        phone: "",
        email: "",
        address: "",
      },
    },

    actions: {
      // Use getActions to call a function within a fuction
      // exampleFunction: () => {
      // 	getActions().changeColor(0, "green");
      // },

      setInputs: (newInputs) => {
        setStore({ inputs: newInputs });                                        // Actualiza estado de los inputs
      },

      sendForm: (inputs) => {
        const store = getStore();
        console.log("addContact");

        const requestOption = {
          method: store.selectedId ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: inputs.name,
            phone: inputs.phone,
            email: inputs.email,
            address: inputs.address,
          }),
        };

        const url = store.selectedId
        ? `https://playground.4geeks.com/contact/agendas/flavia1/contacts/`+store.selectedId
        : `https://playground.4geeks.com/contact/agendas/flavia1/contacts`;


        fetch(url, requestOption)
          .then((response) => response.json())
          .then((data) => {
            fetch(
              "https://playground.4geeks.com/contact/agendas/flavia1/contacts"
            )
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
        const requestOption = {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        };
        fetch(
          "https://playground.4geeks.com/contact/agendas/flavia1/contacts/" +
            id,
          requestOption
        )
          .then((response) => response.text())
          .then((data) => {
            // console.log(data);
            fetch(
              "https://playground.4geeks.com/contact/agendas/flavia1/contacts"
            )
              .then((response) => response.json())
              .then((data) => setStore({ demo: data.contacts }));
          });
      },

      modifyContact: (id, inputs) => {
        console.log("modifyCont", id);
        fetch("https://playground.4geeks.com/contact/agendas/flavia1/contacts/")                         
          .then((response) => response.json())
          .then((data) => {
            const contact = data.contacts.find((contact) => contact.id === id);                  //find devuelve un solo elemento ya que no se puede con id en la API

            if (contact) {
              setStore(
                {                                                                              //cogo el id del elemento seleccionado y le asigno los detalles del contacto en cuestión
                  inputs: {
                    name: contact.name,
                    phone: contact.phone,
                    email: contact.email,
                    address: contact.address,
                  },
                  selectedId: id,
                }
              );
              console.log("datos cargados en el form", contact);
            }
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
    },
  };
};

export default getState;
