import React from "react";
import error from '../../assets/noPokemons.png'
import './Error.css';

function Error() {
  return (
    <div className="error-cont">
        <img  className="error" src={error} alt="error..."/>
    </div>
  );
}

export default Error;