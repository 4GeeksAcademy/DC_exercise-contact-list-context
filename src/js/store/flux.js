const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactos: []
			// nombre: ""
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()

			getContactos: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Dcardigo", {
					method: "GET"
				})
					.then(response => response.json())
					.then(data => setStore({ contactos: data }))
					.catch(error => console.log(error));
			},

			addContacto: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify([
						{
							full_name: "lolo",
							email: "tytrh@gmail.com",
							agenda_slug: "Dcardigo",
							address: "47568 NW 34ST, 33434 FL, USA",
							phone: "7864445566"
						}
					])
				})
					.then(response => response.json())
					.then(data => setStore({ contactos: data }))
					.catch(error => console.log(error));
			}

			// addNombre: () => {
			// 	setStore({ nombre: "d" });
			// }
		}
	};
};

export default getState;
