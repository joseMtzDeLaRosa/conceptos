import React from "react";

function SegundoComponente() {
  //array de libros
    const libros = ["ASIMIL ","HARRY POTTER","JUEGOS DEL HAMBRE","REACT"];

  //const libros = [];

  return (
    <div className="segundo-componente">
      <h1> listado de libros </h1>
      <p>
          segundo componente
      </p>

      {libros.length >= 1 ? 
      
      (  <ul>
          {/* ejempl de como imprimir un array de usando un foreach */}
          {libros.map((libros, indice) => {
            return <li key={indice}> {libros} </li>;
          })}
          {/* usar el may y recordar usar la key unica el else es lllos :  */}
        </ul>) 
        
        : ( <p> no hay libros</p> )
        }
    </div>
  );
}

export default SegundoComponente;
