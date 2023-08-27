import { SearchBar } from '../index';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/pokeapiLogo.png';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <div className='nav-bar'>
        <span className='logo'><img src={logo} alt='logo' /></span>
        <div className='menu'>
          <ul className='nav-links'>
            <li><NavLink to='/home' >Home</NavLink></li>
            <li><NavLink to='/create' >Create a Pokémon</NavLink></li>
            {/* <li><NavLink to="/about">About</NavLink></li> */}
            <div><SearchBar /></div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;