import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const [full_name, setFull_name] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");

	const { store, actions } = useContext(Context);

	const handlerSubmit = e => {
		e.preventDefault(); //Evita que la página se recargue y se borren los estados.
		actions.addContacto(full_name, email, address, phone);
		setFull_name("");
		setEmail("");
		setAddress("");
		setPhone("");
	};

	console.log(phone);
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				{/* <form onSubmit={e => handlerSubmit(e)}> */}
				<form onSubmit={handlerSubmit}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							value={full_name}
							className="form-control"
							placeholder="Full Name"
							onChange={e => setFull_name(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							value={email}
							className="form-control"
							placeholder="Enter email"
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							value={phone}
							className="form-control"
							placeholder="Enter phone"
							onChange={e => setPhone(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							value={address}
							className="form-control"
							placeholder="Enter address"
							onChange={e => setAddress(e.target.value)}
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						Save
					</button>

					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
