import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NumerosContador from "./NumerosContador";
//create your first component
const Home = ({counter,minutos,decimales,horas,minutosSegundaCifra}) => {
	return (
		<div className="d-flex m-0 justify-content-center text-center">
		 <NumerosContador number={horas} />
		 <NumerosContador number={":"} />
		 <NumerosContador number={minutosSegundaCifra} />
		 <NumerosContador number={minutos} />
         <NumerosContador number={":"} />
         <NumerosContador number={decimales} />
		 <NumerosContador number={counter} />   
		</div>
	);
};

export default Home;