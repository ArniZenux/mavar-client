import TT from './TextField.module.scss';
//import { NavLink } from 'react-router-dom';

export function TfupdateTulkur() {
  return (
    <div className={TT.tulkur__wrapper}>
      
      <p className={TT.tulkur__p}> Uppfæra túlk  </p>
      
      <form method="post" action="/addprojects">

      <div>
        <label htmlFor="nafn">Nafn</label>
        <input type="text" className="form-control" name="nafn" placeholder="Nafn" />
      </div>
          
      <div>
        <label htmlFor="simanumer">Símanúmer</label>
        <input type="text" className="form-control" name="simanumer" placeholder="Símanúmer" />
      </div>

      <div>
        <label htmlFor="email">Netfang</label>
        <input type="email" className="form-control" name="email" placeholder="Tölvupósur" />
      </div>

      <br/>
      
      <button className="btn btn-sm btn-success">Uppfæra</button>

      </form>

    </div>
  )
}