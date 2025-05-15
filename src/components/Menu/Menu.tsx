import { NavLink } from 'react-router-dom';
import './Menu.css';

export const Menu = () => {
  return (
    <nav className="menu">
      <NavLink 
        to="/" 
        className={({ isActive }) => `menu__item ${isActive ? 'menu__item-active' : ''}`}
      >
        Гоночное такси
      </NavLink>
      <NavLink 
        to="/drift" 
        className={({ isActive }) => `menu__item ${isActive ? 'menu__item-active' : ''}`}
      >
        Дрифт-такси
      </NavLink>
      <NavLink 
        to="/timeattack" 
        className={({ isActive }) => `menu__item ${isActive ? 'menu__item-active' : ''}`}
      >
        Гонка ​​​​​​Time Attack
      </NavLink>
      <NavLink 
        to="/forza" 
        className={({ isActive }) => `menu__item ${isActive ? 'menu__item-active' : ''}`}
      >
        Forza Karting Sochi
      </NavLink>
    </nav>
  );
}