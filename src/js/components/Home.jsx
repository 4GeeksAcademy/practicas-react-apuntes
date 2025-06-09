import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg"

//create your first component
const Home = () => {


	const [name, setName] = useState("")
	const [lastName, setLastName] = useState("")
	const [phone, setPhone] = useState("")
	const [lista, setLista] = useState([]);


	const handlelAdd = (event) => {
		event.preventDefault();

		let newContact = {
			name: name,
			lastName: lastName,
			phone: phone
		}


		setLista(prev => [...prev, newContact]);

	}

	return (
		<div>
			<div className="contain">
				{

					lista.map(lista => {
						return (

							<div className="contain-post">
								<img className="photo" src={rigoImage} alt="" />

								<div className="coment">
									<p>Nombre:{lista.name} </p>
									<p>Apellidos:{lista.lastName}</p>
									<p>Teléfono:{lista.phone}</p>
								</div>
							</div>
						)
					})

				}

			</div>
			<div className="content-form">
				<form onSubmit={(e) => handlelAdd(e)}>
					<label

						htmlFor="name"> Name

					</label>
					<input
						type="text"
						id="name"

						placeholder="Name"
						onChange={(e) => setName(e.target.value)} />
					<label htmlFor="lastName">last name
						<input
						type="text"
						id="lastName"

						placeholder="Name"
						onChange={(e) => setLastName(e.target.value)} />
							
					</label>
					
				</form>
			</div>
		</div>

	);
}


export default Home;