import Gallery from "../exercises/Gallery";
import Contador from "../exercises/Contador";
import EdicionCampos from "../exercises/EdicionCampos";
import EdicionCamposConImmer from "../exercises/EdicionCamposConImmer";
import ListaDeseos from '../exercises/ListaDeseos';
import ListaDeseosConImmer from '../exercises/ListaDeseosConImmer';

export default function AddingInteractivity(){
    return(
    <>   
        <Gallery />
        <Contador />
        <EdicionCampos />
        <EdicionCamposConImmer />
        <ListaDeseos/>
        <ListaDeseosConImmer />
    </>
    );
}