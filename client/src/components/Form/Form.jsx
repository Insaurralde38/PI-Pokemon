import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createPokemon, getTypes } from '../../redux/actions.js';
import typeLogo from '../Card/TypeLogo';
import validation from './Validation.js';
import './Form.css';

function Form() {
  const dispatch = useDispatch();
  const types = useSelector(state => state.types);
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const [form, setForm] = useState({
    name: "",
    // image: null,
    hp: 1,
    attack: 1,
    defense: 1,
    speed: 1,
    height: 1,
    weight: 1,
    types: [],
    custom: true,
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleDelete = (type) => {
    setForm({
      ...form,
      types: form.types.filter((types) => types !== type)
    });
  };

  const handleSelect = (event) => {
    const selected = event.target.value;
    if (form.types.length >= 2) return alert("Cannot choose more than two types");
    if (!form.types.includes(selected)) {
      setForm({
        ...form,
        types: [...form.types, selected]
      });
    }
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
    setError(validation({
      ...form,
      [event.target.name]: event.target.value
    }));
  };

  // const handleFileChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   if (selectedFile) {
  //     console.log("Selected file:", selectedFile.name);
  //   }  
  //   setForm({
  //     ...form,
  //     image: selectedFile
  //   });
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(validation(form));
    if (Object.keys(error).length > 0) {
      return alert("Make sure to complete all the fields");
    }
    if (!form.types.length) {
      form.types = ['normal'];
    }
    dispatch(createPokemon(form));
    alert("Pokemon created");
    navigate("/home");
  };

  return (
    <div className="create-section">
      <form className="form-cont" onSubmit={handleSubmit} encType="multipart/form-data">
        <h2 className="form-title">CREATE YOUR OWN POKEMON</h2>
        <label className="form-label" >Name:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} className="form-input"></input>
          {error.name && <span>{error.name}</span>}
        {/* <label>image: </label>
          <input type="file" name="image" onChange={handleFileChange} accept=".jpg, .png" /> */}
        <label className="form-label" >Hit Points: {form.hp}</label>
          <input type="range" min="1" max="255" name="hp" value={form.hp} onChange={handleChange}></input>
        <label className="form-label" >Attack: {form.attack}</label>
          <input type="range" min="1" max="190" name="attack" value={form.attack} onChange={handleChange}></input>
        <label className="form-label" >Defense: {form.defense}</label>
          <input type="range" min="1" max="250" name="defense" value={form.defense} onChange={handleChange}></input>
        <label className="form-label" >Speed: {form.speed}</label>
          <input type="range" min="1" max="200" name="speed" value={form.speed} onChange={handleChange}></input>
        <label className="form-label" >Height: {form.height / 10} Mts.</label>
          <input type="range" min="1" max="200" name="height" value={form.height} onChange={handleChange}></input>
        <label className="form-label" >Weight: {form.weight / 10} Kgs.</label>
          <input type="range" min="1" max="9999" name="weight" value={form.weight} onChange={handleChange}></input>
        <label className="form-label" >Types:</label>
          <select className="form-dropdown" name="type" onChange={handleSelect}>
            {types
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((type) => ( <option key={type.id} value={type.name}>{type.name}</option> ))}
          </select>
        <div className="selected">
          { form.types?.map((type) => {
            const cardLogo = typeLogo[type]
            return (
              <span key={type} className="delete-type-cont">
                <img className="form-type" src={cardLogo}  onClick={() => handleDelete(type)} alt="" />
              </span>
            )})}
        </div>
        <button type="submit" className="form-button">CREATE POKÉMON</button>
      </form>
    </div>
  );
}

export default Form;
