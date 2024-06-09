import React, { useState } from 'react';

export default function ListaDeBotones() {

  /* partiendo de una lista inicial en una constante 
  he pasado a un useState para poder setearla y darle
  funcionalidad al boton de borrar (filtrando la lista)
  */
  const [miLista, setMiLista] = useState([
    {id: 0, texto: 'react.dev', url:'https://react.dev/learn/responding-to-events'},
    {id: 1, texto: 'albertprofe', url:'https://albertprofe.dev/'},
    {id: 2, texto: 'Full Stack Open', url:'https://fullstackopen.com/es/'}
  ]);

  /* funcion para manejar el click de los dos botones
  si la url es false o null  se entiende que es un botón para borrar de la lista. 

  Por el contrario al tener url entiende que es el boton de navegación
  y abre el contenido en newWindow. 
  */
  function handleClick(url, id){
    if (!url) {
      setMiLista(miLista.filter(btn => btn.id !== id));
    } else {
      window.open(url, 'newWindow');
    }
  }

  /* Componente Boton al que se le pasa por props el texto, 
  la url y el id. encontramos el trigger para el handleClick
  */
  function Boton({texto, url, id}){
    return (
      <button onClick={()=>handleClick(url, id)} >
        {texto}
      </button>
    );
  }

  return (
    <>
      <h1>Lista De Botones</h1>
      <ul className="listaNavegador">
        {miLista.map(btn => (
          <li key={btn.id}>
            <Boton texto={btn.texto} url={btn.url} />
            <Boton texto="X"  url="" id={btn.id} />
          </li>
        ))}
      </ul>
    </>
  );
}
