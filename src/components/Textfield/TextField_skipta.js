import TT from './TextField.module.scss';

export function TulkurSkipta() {
  return (
    <div className={TT.tulkur__wrapper}>
      
      <p className={TT.tulkur__p}> Skipta um túlk  </p>

      <form method="post" action="/addprojects">

      <div class="field<%= locals.isInvalid('heiti', errors) ?  ' field--invalid' : '' %>">
        <label for="formGroupExampleInput">Heiti</label>
        <input type="text" class="form-control" name="heiti" placeholder="Heiti verkefna" />
      </div>  

      <div class="form-group">
          <label for="exampleFormControlSelect1">Táknmálstúlkur</label>
          <select class="form-control" id="nafn" name="nafn">
            <option name="nafn">Árni</option>
          </select>
      </div>

      <br/>

      <button class="btn btn-sm btn-success">Skipta</button>

      </form>

    </div>
  )
}