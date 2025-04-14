import React from "react";
import styles from './FilterBar.module.css';

function FilterBar({ handleSortByName, handleSortByAttack, handleSortByDefense, handleSortBySpeed, handleFilterByType, handleFilterCreated, handleReset, types }) {
  return (
    <div className={styles.filtOrderCont}>
      <div className={styles.filters}>
        <select className={styles.filterButt} id='order' onChange={handleSortByName}>
          <option value="order">Select Order</option>
          <option value="A-Z">A - Z</option>
          <option value="Z-A">Z - A</option>
        </select>
        <select className={styles.filterButt} id='attack' onChange={handleSortByAttack}>
          <option value="attack">Sort by ATTACK</option>
          <option value="max">MAX</option>
          <option value="min">MIN</option>
        </select>
        <select className={styles.filterButt} id='defense' onChange={handleSortByDefense}>
          <option value="defense">Sort by DEFENSE</option>
          <option value="max">MAX</option>
          <option value="min">MIN</option>
        </select>
        <select className={styles.filterButt} id='speed' onChange={handleSortBySpeed}>
          <option value="speed">Sort by SPEED</option>
          <option value="max">MAX</option>
          <option value="min">MIN</option>
        </select>
      </div>
      <div className={styles.order}>
        <select className={styles.orderButt} id='types' onChange={handleFilterByType}>
          <option value="type">Select Type</option>
          <option value="All">All Types</option>
          {types.map((type) => (
            <option key={type.id} value={type.name}>{type.name}</option>
          ))}
        </select>
        <select className={styles.orderButt} id='created' onChange={handleFilterCreated}>
          <option value="All">All</option>
          <option value="not-created">Original</option>
          <option value="created">Custom</option>
        </select>
      </div>
      <div className={styles.reset}>
        <button type='submit' className={styles.resetButton} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default FilterBar;