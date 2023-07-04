const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactos: [],
			nombre: "",
			email: "",
			tlf: "",
			dir: ""

			// color: "No hay color"
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			añadirNombre: () => {
				setStore({nombre: "FF"});
			},
			añadirEmail: () => {
				setStore({ email: "Rojo" });
			},
			añadirTlf: () => {
				setStore({ tlf: "Rojo" });
			},
			añadirDir: () => {
				setStore({ dir: "Rojo" });
			}
			añadirContacto: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/Dcardigo", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify([
						{
							full_name: "Dave Bradley",
							email: "dave@gmail.com",
							agenda_slug: "Dcardigo",
							address: "47568 NW 34ST, 33434 FL, USA",
							phone: "7864445566"
						}
					])
				})
					.then((response) => response.json())
					.then((data) => console.log(data))
					.catch((error) => console.log(error));
			}
			// cambiarColor: () => {
			// 	setStore({ color: "Rojo" });
			// }
		}
	};
};

export default getState;
