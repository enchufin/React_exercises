import {useState} from 'react';
/* Componente ColorButton */
function ColorButton({ cambioColor }){
return(
    <button onClick=
    {e=>{e.stopPropagation(); 
         cambioColor();}
    }> Cambio de color </button>
);}
/*  fin de componente  */


/* Manejadores */
function handleCambioColor(color){
    let sectionStyle = document.getElementById('colorContainerInput').style;
    sectionStyle.backgroundColor = color;
}


export default function ColorSwitchApp() {
    const [color, setColor] = useState('');

/*
    function handleStateColor(e){
        setColor(e.target.value);    
     } 
*/

  return (
    <>
     <div id='colorContainerInput'>
        <h1>Cambio de Color Random</h1>

            <input type="text" /* onChange={handleStateColor */ onChange={e=>setColor(e.target.value)} />
       
            <ColorButton cambioColor={()=> handleCambioColor(color)}/>
            <p>
                <strong> Clicks fuera del boton </strong>
            </p>
        </div>
    </>
    
  )
}
