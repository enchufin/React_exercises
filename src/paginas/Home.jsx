import { Link } from "react-router-dom";
export default function Home() {
    return (
    <>
            <h1>Esto es la Home</h1>

        <nav>
            <ul className="listaNavegador">
                <li  ><Link to="ejercicios" > Ejercicios </Link>  </li>
            </ul>
            
        </nav>
    </>
    );
}