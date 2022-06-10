
// se impora modulos de react / dependencias

import React from 'react';

//funcion del componente

let nombre = "jose baltazar";
let apellidos = "mt de la rosa"

// ejemplo de que va ser interpolar

//usuario pero mas freson por
let usuarios ={
    nombre:"jose",
    apellidos:"mtz de la rosa",
    web:"pruebas.com"
};
// JSON.stringify para usar los datos dle usuario

const Micomponente = () => { 

    //pasar dats a la vista del jsx 
    
    return(
        <div>
        
        <hr/>
        <h2> Componente creado primer componente  </h2>
        <p> ESTE ES UN COMPONENTE DE REPASO </p>

        <ul>
            <li>
                nombre : {nombre}
            </li>

            <li>
                apellidos : {apellidos}
            </li>
        </ul>

        <ul>
            <li>
                nombre : {(usuarios.nombre)}
            </li>


            <li>
                apellidos : {(usuarios.apellidos)}
            </li>

            <li>
                webtc : {(usuarios.web)}
            </li>


        </ul>

        <ul>
            <li>
                React
            </li>

            <li>
                Angular
            </li>

            <li>
                Vue
            </li>
        </ul>
        
        </div>

    );

};

//export 
export default Micomponente;