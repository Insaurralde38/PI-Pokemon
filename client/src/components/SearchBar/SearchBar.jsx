import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from '../../redux/actions.js'
import './SearchBar.css';

function SearchBar() {

  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    if (!input.trim()){
      return alert ("Insert a valid name");
    }
    event.preventDefault();
    dispatch(getPokemonByName(input.trim()));
    setInput('');
  }

  return (
    <main>
      <div className="srch_wrpr">
        <input type="checkbox" name="" className="checkbox" />
        <div className="srch_sb_cnt">
          <input
            type="text"
            name="text_bar"
            id=""
            className="sech_txt_inpt"
            placeholder="Search Pokémon..."
            onChange={handleChange}
            value={input}
          />
          <button className="srch_btn" onClick={handleSubmit}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </main>
  );
}

export default SearchBar;