import React, { useState } from 'react';

const listaInicial = [
      { id: 0, titulo: 'Buceo el Fiji', hecho: false },
      { id: 1, titulo: 'Buceo en el Pacífico', hecho: true },
      { id: 2, titulo: 'Pecio San Eduardo', hecho: false },
];

export default function ListaDeseos() {

      const [deseos, setDeseos] = useState(listaInicial);

      function handleCheck(deseoId, estadoCheck){
            /* handle a mi manera. El nuevo estado del deseo 
            lo incorporamos a deseoRevisado para setearDeseos 
            con el nuevo estado o devolviendo el anterior 
            si no coinciden las id*/
            const deseoRevisado = deseos.map(deseo => {
                  if(deseo.id === deseoId){
                        return { ...deseo, hecho: estadoCheck };
                  } else {
                        return deseo;
                  }
            });
            setDeseos(deseoRevisado);
      }


  return (
    <>
          <h1>Lista de Deseos</h1>
          <ul>
            {deseos.map(deseo =>(
                  <li key={deseo.id}>
                       <input 
                        type="checkbox" 
                        checked={deseo.hecho}
                        onChange={ e => {handleCheck(
                              deseo.id, e.target.checked
                        )}}
                        /> {deseo.titulo}
                  </li>
            ))}
          </ul>
    </>
  )
}
