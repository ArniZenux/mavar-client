import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiChevronDown } from "react-icons/fi";
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
    <div className="container">
      <div className="row">
        <header className={HH.header__header}>
            <div className={HH.header__left}>
              <h4>Mávar - túlkaþjónusta</h4>
            </div>
            <div className={HH.header__right}>
                <ul className={boxClass.join(' ')}>
                  <li className="menu-item" >
                      <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Heima </NavLink> 
                  </li>
                  <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Túlkur <FiChevronDown /> </Link>
                      <ul className={boxClassSubMenu.join(' ')} > 
                        <li className={HH.header__font} ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/tulkur`}> Túlkur </NavLink> </li>
                        <li className={HH.header__font} ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/tulkurnew`}>Skrá nýr túlk </NavLink> </li>
                      </ul>
                  </li>
                  <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Verkefni <FiChevronDown /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} > 
  	                  <li className={HH.header__font} ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/tulkurproject`}> Verkefnalisti </NavLink> </li>
                      <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/verkefni`}> Bæta verkefni </NavLink> </li>
                      <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/updateverkefni`}> Breyta verkefni </NavLink> </li>
                      <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/deleteverkefni`}> Eyða verkefni </NavLink> </li>
                    </ul>
                  </li>
                </ul>
            </div>   
          </header>
        </div>
      </div>
  )
}