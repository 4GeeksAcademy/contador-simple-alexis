import React from "react";

const NumerosContador = ({number}) =>{
return(
  <div className="d-flex m-0 justify-content-center">

  <div className="bg-secondary mt-4 d-flex m-0 align-items-center justify-content-center" style={{borderRadius : "5px", width : "120px", height : "150px"}}>
   <h1 className="mx-auto" style={{fontSize : "100px"}}>{number}</h1>
   </div>
  </div>
 );
};

export default NumerosContador;