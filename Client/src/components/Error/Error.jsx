import React from "react";
import error from '../../assets/noPokemons.png';
import styles from './Error.module.css';

function Error() {
  return (
    <div className={styles.errorCont}>
      <img className={styles.error} src={error} alt="error..." />
    </div>
  );
}

export default Error;