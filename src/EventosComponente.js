import React from "react";

export const EventosComponente = () => {
  const hasDadoClick = (e, nombre) => {
    alert("yeeei le diste click" + nombre);
  };

  function hasDadoDobleclick() {
    alert("yeeei le diste doble click");
  }

  const hasEntrado = (e,accion) => {
      alert(`has entrado a la ${accion}`);
  }

  const hasSalido = (e,accion) => {
    alert(`has entrado a la ${accion}`);
  }


  const estasDentro = e => {
    alert ("estas dentro  compis");
 }

  const estasFuera = e => {
    alert ("estas fuera del input");
  }


  return (
    <div>
      <h1> eventos en React </h1>
      
      <p>
        {/** evento click */}
        <button onClick={(e) => hasDadoClick(e, " jose ")}>Dame click </button>
      </p>

      <p>
        {/** evento doble  click */}
        <button onDoubleClick={hasDadoDobleclick}>Dame doble click </button>
      </p>
      
      <div id="caja" 
      onMouseEnter={e => hasEntrado(e,"entrado")}  
      onMouseLeave={e => hasSalido(e,"Salido")}
      >
   
        {/* Evento or mouse enter  on muse leave */}
        pasa por encim 
      </div>


      <p>
        {/* evento focus y blur */}
      <input type="text" 
      onFocus = { estasDentro } 
      onBlur = { estasFuera}
      placeholder="introduce tu nombre"
      
      /> 
      
      </p>

    </div>
  );
};
