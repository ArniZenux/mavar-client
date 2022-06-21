import TT from './Tulkur.module.scss';
import { NavLink } from 'react-router-dom';

export function TulkurEvent() {
  return (
    <div className={TT.tulkur__wrapper}>
      <p className={TT.tulkur__p}> Táknmálstúlkur  </p>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Nafn</th>
            <th>Sími</th>
            <th>Netfang</th>
            <th><NavLink exact activeClassName='is-active' to={`/tulkurnew`}> Bæta nýr túlk </NavLink></th>
          </tr>
        </thead>
        <tbody>
        
          <tr>
            <td>Hjördis Anna Haraldardóttir</td>
            <td>8542548</td>
            <td>hah@shh.is</td>
            <td><NavLink exact activeClassName='is-active' to={`/tulkurupdate`}> Uppfæra </NavLink></td>
          </tr>
        </tbody>
      </table>
      
    </div>
  )
}