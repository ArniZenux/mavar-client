import TT from './Troject.module.scss';
import { NavLink } from 'react-router-dom';

export function Tproject() {
  return (
    <div className={TT.tulkur__wrapper}>
      <p className={TT.Tulkur__p}> Verkefnalisti túlka </p>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Nafn</th>
            <th>Sími</th>
            <th>Netfang</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        
          <tr>
            <td>Hjördis Anna Haraldardóttir</td>
            <td>8542548</td>
            <td>hah@shh.is</td>
            <td><NavLink exact activeClassName='is-active' to={`/tulkurskoda`}> Skoða </NavLink></td>
          </tr>
        </tbody>
      </table>
      
    </div>
  )
}