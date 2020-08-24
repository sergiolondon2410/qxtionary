import React from "react";
import Nav from "./components/Nav"

function Home() {
    return (
        <div className="h-64 bg-blue-600">
            <Nav />
            <h3 className="text-2xl font-bold">Nombre de la Evaluación</h3>
            <progress id="progress" value="60" max="100"> 60% </progress>
            <label for="progress">5/8</label>
            <p>Texto de la pregunta?</p>
            <ol>
                <li>Opcion 1 []</li>
                <li>Opcion 2 []</li>
                <li>Opcion 3 []</li>
                <li>Todas las anteriores []</li>
            </ol>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-y px-4 rounded">SIGUIENTE</button>
        </div>
    ); 
}

export default Home;