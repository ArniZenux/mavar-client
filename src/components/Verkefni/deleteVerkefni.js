import VV from './Verkefni.module.scss';
import { NavLink } from 'react-router-dom';

export function VerkefniDeleteEvent() {
  return (
    <div className={VV.verkefni__wrapper}>
      <p className={VV.verkefni__p}> Eyða verkefni </p>

      <table class="table table-hover">
        <thead>
          <tr>
            <th>Heiti</th>
            <th>Staður</th>
            <th>Dagur</th>
            <th>Byrja</th>
            <th>Endir</th>
            <th>Vettvangur</th>
            <th>Túlkur</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Viðtal í Marel</td>
            <td>Garðabær</td>
            <td>16 júni</td>
            <td>09:00</td>
            <td>10:00</td>
            <td>Atvinnumál</td>
            <td>Rósa Ýr Hjartardóttir</td>
            <td><NavLink exact activeClassName='is-active' to={`/`}> Eyða </NavLink></td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}