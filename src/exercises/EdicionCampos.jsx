import { useState } from "react";


export default function EdicionCampos() {

      const [obras, setObras] = useState({
            artista: "Perico de los Palotes",
            obra:{
                  titulo: "Blue Nana",
                  ciudad: "Hamburg", 
                  img: "https://i.imgur.com/Sd1AgUOm.jpg"
            }
      });

      function handleArtista(e) {
            setObras(
                  {...obras,
                  artista: e.target.value}
            );           
      }
      function handleTitulo(e) {
            setObras(
                  { ...obras,
                  obra:{
                  //hay que desplegarlo desde el principio
                  ...obras.obra, 
                  titulo: e.target.value },
                  }
            );           
      }
      function handleCiudad(e){
            setObras(
                  {...obras, obra: {...obras.obra, ciudad: e.target.value}}
            );
      }


  return (
    <>
          <h1>Edicion de Campos</h1>
          <ul className="listaNavegador">
          <li><input value={obras.artista} onChange={handleArtista} /></li>
          <li><input value={obras.obra.titulo} onChange={handleTitulo} /></li>
          <li><input value={obras.obra.ciudad} onChange={handleCiudad} /></li>
          </ul>
      
          <ul className="listaNavegador enLinea">
            <li><h3>{obras.artista}</h3></li>
            <li><h4>{obras.obra.titulo}</h4></li>
            <li>{obras.obra.ciudad}</li>
            <li><img src={obras.obra.img} /></li>
          </ul>
    </>
  )
}
