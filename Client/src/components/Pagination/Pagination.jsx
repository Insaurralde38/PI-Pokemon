import React from "react";
import styles from './Pagination.module.css';

const Pagination = ({ pokemonsPerPage, pokemons, pagination, handleNext, handlePrevious }) => {
    
  const numOfPages = [];
  const amountOfPages = Math.ceil(pokemons / pokemonsPerPage);
  for (let i = 1; i <= amountOfPages; i++) {
    numOfPages.push(i);
  }

  return (
    <div className={styles.paginationCont}>
      <div className={styles.buttonsContainer}>
        <div><button className={styles.prevButton} onClick={handlePrevious}>Previous</button></div>
        {numOfPages?.map((page) => (
          <button
            className={styles.pageNum}
            id={page}
            key={page}
            onClick={() => pagination(page)}
          >
            {page}
          </button>
        ))}
        <div><button className={styles.nextButton} onClick={handleNext}>Next</button></div>
      </div>
    </div>
  );
};

export default Pagination;