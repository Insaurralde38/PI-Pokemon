import React from "react";
import './FilterBar.css';

function FilterBar({ handleSortByName, handleSortByAttack, handleSortByDefense, handleSortBySpeed, handleFilterByType, handleFilterCreated, handleReset, types }) {

  return (
    <div className='filt-order-cont'>
        <div className='filters'>
            <select className='filter-butt' id='order' onChange={(event) => handleSortByName(event)}>
                <option value="order">Select Order</option>
                <option value="A-Z">A - Z</option>
                <option value="Z-A">Z - A</option>
            </select>
            <select className='filter-butt' id='attack' onChange={(event) => handleSortByAttack(event)}>
                <option value="attack">Sort by ATTACK</option>
                <option value="max">MAX</option>
                <option value="min">MIN</option>
            </select>
            <select className='filter-butt' id='defense' onChange={(event) => handleSortByDefense(event)}>
                <option value="defense">Sort by DEFENSE</option>
                <option value="max">MAX</option>
                <option value="min">MIN</option>
            </select>
            <select className='filter-butt' id='speed' onChange={(event) => handleSortBySpeed(event)}>
                <option value="speed">Sort by SPEED</option>
                <option value="max">MAX</option>
                <option value="min">MIN</option>
            </select>
        </div>
        <div className='order'>
            <select className='order-butt' id='types' onChange={(event) => handleFilterByType(event)}>
                <option value="type">Select Type</option>
                <option value="All">All Types</option>
                    {types.map((type) => <option key={type.id} value={type.name}>{type.name}</option> )}
            </select>
            <select className='order-butt' id='created' onChange={(event) => handleFilterCreated(event)}>
                <option value="All">All</option>
                <option value="not-created">Original</option>
                <option value="created">Custom</option>
            </select>
        </div>
        <div className='reset'>
            <button type='submit' className='reset-button' onClick={(event) => handleReset(event)}>Reset</button>
        </div>
    </div>
  );
}

export default FilterBar;