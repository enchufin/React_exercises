import { useState } from 'react';
import { sculptureList } from '../assets/data';

export default function Gallery() {


    //estado del indice iniciado a 0
    const[index, setIndex] = useState(0);
    const[mostrarMas, setMostrarMas] = useState(false);
    const haySiguiente = index < sculptureList.length -1;

    //handle para el siguiente
    function handleClickSiguiente(){
        //si hay siguiente sumamos 1 sino volvemos al principio
        haySiguiente ? setIndex(index+1) : setIndex(0);
        setMostrarMas(false);
    }

    function handleMostrarMas(){
        //cambia el estado de mostrarMas en cada click
        setMostrarMas(!mostrarMas);
    }

    let escultura = sculptureList[index];
    return(
        <>
            <h1>Galería</h1>
            <button onClick={handleClickSiguiente}> Siguiente </button>
            <h2>{escultura.name}</h2>
            <sub>by {escultura.artist}</sub>
            <h3>({(index +1)} de {sculptureList.length})</h3>

            <button onClick={handleMostrarMas} className={mostrarMas ? 'menos':'mas'}>{ mostrarMas ? 'mostrar menos -':' mostrar más +' }</button>
            <br/>
            {mostrarMas && <p>{escultura.description}</p>}
            <img src={escultura.url} alt={escultura.alt} />
        </>
        
    
    );
 }