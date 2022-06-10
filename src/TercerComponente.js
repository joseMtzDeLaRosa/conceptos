import React from "react";
import PropTypes from "prop-types";



export const TercerComponente = ({nombre,appel,ficha}) => {
 

  return (
    <div>
        <h1> elementos de comunciacion de los props </h1> 
        <ul>
          <li> {nombre} </li>
          <li> {appel}</li>
          <h1> los props :S</h1>
          <li> {ficha.altura} </li>
          <li> {ficha.grupo} </li>
          <li> {ficha.estado} </li>
          <li> {ficha.alergia} </li>
        </ul>
    </div>
  );
};

//ejeplo de los proptypes jejeje
TercerComponente.propTypes = {
  nombre:PropTypes.string.isRequired, 
  appel: PropTypes.string,
  ficha: PropTypes.object
}

// si no llegan cambio a los props se pueden utilizar por defecto parametros 
TercerComponente.defaultProps = {
  nombre: "jose",
  appel: "martinez",
 
}