import React from 'react';
import {useImmer} from 'use-immer'

const listaInicial = [
      { id: 0, titulo: 'Buceo el Fiji', hecho: false },
      { id: 1, titulo: 'Buceo en el Pacífico', hecho: true },
      { id: 2, titulo: 'Pecio San Eduardo', hecho: false },
];

export default function ListaDeseos() {

      const [deseos, updateDeseos] = useImmer(listaInicial);

      function handleCheck(deseoId, estadoCheck){
            /* con updateDeseos guardamos dentro de draft 
            una nueva constante (salvando la inmutabilidad)
            comparando con find temporalmente los ID  */
           updateDeseos(
            draft =>{
                  const deseoRevisado = draft.find(
                        a => a.id === deseoId
                  );
            /* y a esa nueva constante le asignamos el valor del nuevo estado 
            antes de salir del draft */
                  deseoRevisado.hecho = estadoCheck;
            }
           );
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
