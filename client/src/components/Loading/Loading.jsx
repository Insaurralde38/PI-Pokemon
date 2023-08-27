import React from "react";
import loading from '../../assets/loading.gif'
import './Loading.css';

function Loading() {
  return (
    <div className="loading-cont">
        <img  className="loading" src={loading} alt="loading..."/>
    </div>
  );
}

export default Loading;