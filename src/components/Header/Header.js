import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
//import App from '../../App';
//import '../../utils/CSS/dropDown.css';
import HH from './Header.module.scss';

export function Header() {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false); 

  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  
  if(isMenu) {
    boxClass.push('menuq2');
  }
  else {
    boxClass.push('');
  }
  
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  
  if(isMenuSubMenu) {
      boxClassSubMenu.push('sub__menus__Active');
  }
  else {
      boxClassSubMenu.push('');
  } 

  return (
    <header className={HH.header__header}>
    <div className="container">
        <div className="row">
            <div className="header__middle__logo">
                  <h3>Mávar - túlkaþjónusta</h3>
            </div>
            <div className="header__middle__menus">
                <nav className="main-nav " >
                <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Heima </NavLink> 
                    </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Túlkur <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/tulkur`}> Túlkalisti </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Verkefnalisti </NavLink> </li>
                        </ul>
                    </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Verkefni <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Bæta nýtt verkefni </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/verkefni`}> Verkefnalisti </NavLink> </li>
                        </ul>
                    </li>
                </ul>
                </nav>     
            </div>   
        </div>
      </div>
    </header>
    /*
    
      <ul className={boxClass.join(' ')}>
            <li><NavLink to={`/`}> Heima </NavLink> </li>
            <li onClick={toggleSubmenu}><Link to="#"> Túlkur </Link> 
              <ul className={boxClassSubMenu.join(' ')}> 
                <li><NavLink to={`/tulkur`}> Túlkur lista </NavLink></li>
              </ul>
            </li>

    <div className={HH.header__wrapper}>
      <header className={HH.header__header}>
        <h4>Mávar - túlkaþjónusta</h4>
        <ul className={HH.header__ul}>
          <li className={HH.header__li}>
              <NavLink to="/">Heima</NavLink>
          </li>
          <li className={HH.header__li}>
            <div class="dropdown">
              <button class="dropbtn">Túlkur</button>
                <div class="dropdown-content">
                    <NavLink class="link" to="/tulkur">Túlkur </NavLink>
                    <NavLink class="link" to="/verkefni">Verkefni </NavLink>
                    <NavLink class="link" to="#">Link 3</NavLink>
                </div>
            </div>
          </li>
          <li className={HH.header__li}><NavLink to="/verkefni">Verkefni</NavLink></li>
        </ul>
      </header>
    </div>*/

  )
  /*
   <NavLink className={HH.header__a} to="/tulkur">Túlkur</NavLink>
                      <NavLink className={HH.header__a} to="/verkefni">Link 2</NavLink>
                      <NavLink className={HH.header__a} to="#">Link 3</NavLink>
                    */
}