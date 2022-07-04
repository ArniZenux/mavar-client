import TT from './TextField.module.scss';

export function TulkurSkipta() {
  return (
    <div className={TT.tulkur__wrapper}>
      
      <p className={TT.tulkur__p}> Skipta um túlk  </p>

      <form method="post" action="/addprojects">

      <div>
        <label htmlFor="formGroupExampleInput">Heiti</label>
        <input type="text" className="form-control" name="heiti" placeholder="Heiti verkefna" />
      </div>  

      <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Táknmálstúlkur</label>
          <select className="form-control" id="nafn" name="nafn">
            <option name="nafn">Árni</option>
          </select>
      </div>

      <br/>

      <button className="btn btn-sm btn-success">Skipta</button>

      </form>

    </div>
  )
}