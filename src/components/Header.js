import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt='logo' />
      </div>
      <nav className={styles.nav_bar}>
        <ul>
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>Place to stay</NavLink>
          </li>
          <li>
            <NavLink>NFTs</NavLink>
          </li>
          <li>
            <NavLink>Community</NavLink>
          </li>
        </ul>
      </nav>
      <button className={styles.btn}>Connect wallet</button>
    </div>
  );
};

export default Header;
