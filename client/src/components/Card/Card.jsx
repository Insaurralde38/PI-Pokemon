import React from 'react';
import { Link } from "react-router-dom";
import typeColor from './TypeColor';
import typeLogo from './TypeLogo';
import './Card.css';

const Card = ({ id, name, image, types }) => {
  
  const styleCard = {
    background: `radial-gradient(circle at 50% 0%, ${typeColor[types[0]]} 36%, #ffffff 36%)`,
  };

  return (
    <div id="card" style={styleCard}>
        <p className="id"><span># </span>{id}</p>
        <Link to={`/details/${id}`}>
          <img className='card-img' src={image} alt={name} />
        </Link>
        <h2 className="poke-name">{name}</h2>
        <div className="types">
          { types?.map((type) => {
            const cardLogo = typeLogo[type];
            return <span id="icon" key={type + id}><img className="type" src={cardLogo} alt="" /></span>
            })}
        </div>
      </div>
  );
};

export default Card;
