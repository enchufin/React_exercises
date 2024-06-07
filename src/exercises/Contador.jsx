import { useState } from "react";


export default function Contador(){

    const[cuenta, setCuenta]=useState(0);

    function incremento(value){
        //parseamos para que no sume como string 
        setCuenta(cuenta + parseInt(value));
    }

    return(
        <>
        <h1>Contador</h1>
        <button value="1" onClick={(e)=>incremento(e.target.value)} > + 1 </button>
        <button value="3" onClick={(e)=>incremento(e.target.value)} > + 3 </button>

        <h2>Cuenta: {cuenta}</h2>
        </>


    );

}