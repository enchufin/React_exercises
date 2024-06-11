/* Componente ColorButton */
function ColorButton({ cambioColor }){
return(
    <button onClick=
    {e=>{e.stopPropagation(); 
         cambioColor();}
    }> Cambio de color </button>
);}
/*  fin de componente  */

function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
}

/* Manejadores */
function handleCambioColor(){
    let sectionStyle = document.getElementById('colorContainer').style;
    sectionStyle.backgroundColor = getRandomLightColor();
}

export default function ColorSwitchApp() {
  return (
    <>
     <div >
        <h1>Cambio de Color Random</h1>
       
            <ColorButton cambioColor={handleCambioColor}/>
            <p>
                <strong> Clicks fuera del boton </strong>
            </p>

        </div>
    </>
    
  )
}
