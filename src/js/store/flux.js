const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactos: [],
			nombre: ""
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()

			addName: name => {
				setStore({ nombre: name });
			},

			getContactos: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Dcardigo", {
					method: "GET"
				})
					.then(response => response.json())
					.then(data => setStore({ contactos: data }))
					.catch(error => console.log(error));
			},

			addContacto: (full_name, email, phone, address) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						agenda_slug: "Dcardigo",
						address: address,
						phone: phone
					})
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},

			delContacto: id => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE"
				})
					.then(response => {
						console.log(response.ok);

						if (response.ok === true) {
							getActions().getContactos();
						}
						return response.json();
					})
					.then(data => console.log(data))
					.catch(error => console.log(error));
			}

			// upDate: (full_name, email, phone, address) => {
			// 	fetch("https://assets.breatheco.de/apis/fake/contact/", {
			// 		method: "POST",
			// 		headers: {
			// 			"Content-Type": "application/json"
			// 		},
			// 		body: JSON.stringify({
			// 			full_name: full_name,
			// 			email: email,
			// 			agenda_slug: "Dcardigo",
			// 			address: address,
			// 			phone: phone
			// 		})
			// 	})
			// 		.then(response => response.json())
			// 		.then(data => console.log(data))
			// 		.catch(error => console.log(error));
			// }
		}
	};
};

export default getState;
