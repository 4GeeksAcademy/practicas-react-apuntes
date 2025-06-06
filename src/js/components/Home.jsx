import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { use } from "react";

//create your first component
const Home = () => {

	const [forma, setForma] = useState("cuadrado")
	const [active, setActive] = useState(false)

	const elegirForma = (formaChange, active) => {


		setForma(formaChange);






	}
	// 	useEffect(()=>{
	// const interval = setInterval(() => {
	// 	if(forma ==="cuadrado"){
	// 		setForma("circulo")
	// 	}
	// }, 1000);
	// return () => clearInterval(interval);
	// 	},[active,forma])


	return (
		<div className="contain">
			<div className={`cuadrado ${forma == "cuadrado" ? "circulo" : " "}`} >
				<button onClick={() => elegirForma(!active)}></button>
			</div>


			<div className="circulo">

			</div>



		</div>
	);
};

export default Home;