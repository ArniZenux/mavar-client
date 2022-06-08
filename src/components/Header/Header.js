import { NavLink } from 'react-router-dom';

import HH from './Header.module.scss';

export function Header() {
  return (
    <div className={HH.header__wrapper}>
      <header className={HH.header__header}>
        <h4>Mávar - túlkaþjónusta</h4>
        <ul>
          <li><NavLink to="/tulkur">Túlkur</NavLink></li>
          <li><NavLink to="/verkefni">Verkefni</NavLink></li>
        </ul>
      </header>
    </div>
  )
}