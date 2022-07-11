import TT from './TextField.module.scss';
//import { NavLink } from 'react-router-dom';

export function TfupdateVerkefni( { id } ) {
  return (
    <div className={TT.tulkur__wrapper}>
      
      <p className={TT.tulkur__p}> Uppfæra verkefni  </p>

      <form method="post" action="/addprojects">

        <div>
          <label htmlFor="formGroupExampleInput">Heiti</label>
          <input type="text" className="form-control" name="heiti" placeholder="Heiti verkefna" />
        </div>  
        
        <div>
          <label htmlFor="formGroupExampleInput">Staður</label>
          <input type="text" className="form-control" name="stadur" placeholder="Staður" />
        </div>
          
        <div>
          <label htmlFor="formGroupExampleInput">Dagur</label>
          <input type="text" className="form-control" name="dagur" placeholder="Dagur" />
        </div>

        <div>
          <label htmlFor="formGroupExampleInput">Byrja</label>
          <input type="text" className="form-control" name="timi_byrja" placeholder="Byrja" />
        </div>
        
        <div>
          <label htmlFor="formGroupExampleInput">Endir</label>
          <input type="text" className="form-control" name="timi_endir" placeholder="Endir" />
        </div>

        <div>
          <label htmlFor="formGroupExampleInput">Vettvangur</label>
          <input type="text" className="form-control" name="vettvangur" placeholder="Vettvangur" />
        </div>
      
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Táknmálstúlkur</label>
          <select className="form-control" id="nafn" name="nafn">
            <option name="nafn">Árni</option>
          </select>
        </div>
      
        <br/>

        <button className="btn btn-sm btn-success">Uppfæra</button>

      </form>

    </div>
  )
}
