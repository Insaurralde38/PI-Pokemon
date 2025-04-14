import React from 'react';
import { Link } from "react-router-dom";
import typeColor from './TypeColor';
import typeLogo from './TypeLogo';
import styles from './Card.module.css';

const Card = ({ id, name, image, types }) => {
  const styleCard = {
    background: `radial-gradient(circle at 50% 0%, ${typeColor[types[0]]} 36%, #ffffff 36%)`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.card} style={styleCard}>
        <p className={styles.id}><span># </span>{id}</p>
        <Link to={`/details/${id}`}>
          <img className={styles.cardImg} src={image} alt={name} />
        </Link>
        <h2 className={styles.pokeName}>{name}</h2>
        <div className={styles.types}>
          {types?.map((type) => {
            const cardLogo = typeLogo[type];
            return (
              <span key={type + id}>
                <img className={styles.type} src={cardLogo} alt={type} />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;