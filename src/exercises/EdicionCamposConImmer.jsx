import { useImmer } from 'use-immer'
//para instalar la dependencia use-immer : npm install immer use-immer


export default function EdicionCamposConImmer() {

      const [obras, updateObras] = useImmer({
            artista: "Perico de los Palotes",
            obra:{
                  titulo: "Blue Nana",
                  ciudad: "Hamburg", 
                  img: "https://i.imgur.com/Sd1AgUOm.jpg"
            }
      });

      function handleArtista(e) {
            updateObras(
                  /*se utiliza draft para realizar una mutación amigable 
                  que te permite recorrer todo el objeto literal sin tener que descomponer por cada nivel*/
                  draft =>{draft.artista = e.target.value}
            );           
      }
      function handleTitulo(e) {
            updateObras(
                  draft=>{draft.obra.titulo = e.target.value },
                  
            );           
      }
      function handleCiudad(e){
            updateObras(
                  draft=>{draft.obra.ciudad = e.target.value}
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
