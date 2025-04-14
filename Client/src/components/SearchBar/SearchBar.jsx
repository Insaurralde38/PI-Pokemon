import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from '../../redux/actions.js';
import styles from './SearchBar.module.css';

function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    if (!input.trim()) {
      return alert("Insert a valid name");
    }
    event.preventDefault();
    dispatch(getPokemonByName(input.trim()));
    setInput('');
  }

  return (
    <main>
      <div className={styles.srchWrpr}>
        <input type="checkbox" className={styles.checkbox} />
        <div className={styles.srchSbCnt}>
          <input
            type="text"
            name="text_bar"
            className={styles.sechTxtInpt}
            placeholder="Search Pokémon..."
            onChange={handleChange}
            value={input}
          />
          <button className={styles.srchBtn} onClick={handleSubmit}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </main>
  );
}

export default SearchBar;