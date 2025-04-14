import { SearchBar } from '../index';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/pokeapiLogo.png';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav>
      <div className={styles.navBar}>
        <span className={styles.logo}><img src={logo} alt="logo" /></span>
        <div className="menu">
          <ul className={styles.navLinks}>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/create'>Create a Pokémon</NavLink></li>
            {/* <li><NavLink to="/about">About</NavLink></li> */}
            <div><SearchBar /></div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;