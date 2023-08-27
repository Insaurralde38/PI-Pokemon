import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
// import pokeRain from './pokeRain'

function LandingPage() {
  return (
    <div>
    <Link exact to="/home">
        <div className="btn-bg Pokemon">
        <div className="btn-group">
          <div className="btn ball">
            <button className="pokebutton">
              <div className="pokemon-ball"></div><a>Pokémon<span data-letters="Go!"></span><span data-letters="Go!"></span></a>
            </button>
          </div>
        </div>
      </div>
      <div/>
  </Link>
  </div>
  );
}

export default LandingPage;