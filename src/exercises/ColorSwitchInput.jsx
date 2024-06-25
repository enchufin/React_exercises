import {useState} from 'react';
import PropTypes from 'prop-types';
/* Componente ColorButton */
function ColorButton({ cambioColor, validacion }){
return(
    <button onClick={(e) => { 
        e.stopPropagation(); 
        if (validacion()) {
          cambioColor(); 
        } else {
          alert('El color ingresado no es válido.');
        }
      }}>
        Cambio de color
      </button>
);}
/*  fin de componente  */


/* Manejadores */

/* Validación de props  para eliminar el error del linter */ 
ColorButton.propTypes = {
    cambioColor: PropTypes.func.isRequired,
    validacion: PropTypes.func.isRequired,
  };

function handleCambioColor(color){
    let sectionStyle = document.getElementById('colorContainerInput').style;
    sectionStyle.backgroundColor = color;
}

/* Función para validar si un color es válido en CSS */
function esColorCSSValido(color) {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
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

            <input type="text" placeholder="write a color" /* onChange={handleStateColor */ onChange={e=>setColor(e.target.value)} />
       
            <ColorButton cambioColor={()=> handleCambioColor(color)} validacion={()=>esColorCSSValido(color)}/>
            <p>
                <strong> Clicks fuera del boton </strong>
            </p>
        </div>
    </>
    
  )
}
