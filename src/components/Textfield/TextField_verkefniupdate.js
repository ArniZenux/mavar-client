import TT from './TextField.module.scss';
//import { NavLink } from 'react-router-dom';

export function TfupdateVerkefni() {
  return (
    <div className={TT.tulkur__wrapper}>
      
      <p className={TT.tulkur__p}> Uppfæra verkefni  </p>

      <form method="post" action="/addprojects">

        <div class="field<%= locals.isInvalid('heiti', errors) ?  ' field--invalid' : '' %>">
          <label for="formGroupExampleInput">Heiti</label>
          <input type="text" class="form-control" name="heiti" placeholder="Heiti verkefna" />
        </div>  
        
        <div class="field<%= locals.isInvalid('stadur', errors) ?  ' field--invalid' : '' %>">
          <label for="formGroupExampleInput">Staður</label>
          <input type="text" class="form-control" name="stadur" placeholder="Staður" />
        </div>
          
        <div class="field<%= locals.isInvalid('dagur', errors) ?  ' field--invalid' : '' %>">
          <label for="formGroupExampleInput">Dagur</label>
          <input type="text" class="form-control" name="dagur" placeholder="Dagur" />
        </div>

        <div class="field<%= locals.isInvalid('timi_byrja', errors) ?  ' field--invalid' : '' %>">
          <label for="formGroupExampleInput">Byrja</label>
          <input type="text" class="form-control" name="timi_byrja" placeholder="Byrja" />
        </div>
        
        <div class="field<%= locals.isInvalid('timi_endir', errors) ?  ' field--invalid' : '' %>">
          <label for="formGroupExampleInput">Endir</label>
          <input type="text" class="form-control" name="timi_endir" placeholder="Endir" />
        </div>

        <div class="field<%= locals.isInvalid('vettvangur', errors) ?  ' field--invalid' : '' %>">
          <label for="formGroupExampleInput">Vettvangur</label>
          <input type="text" class="form-control" name="vettvangur" placeholder="Vettvangur" />
        </div>
      
        <div class="form-group">
          <label for="exampleFormControlSelect1">Táknmálstúlkur</label>
          <select class="form-control" id="nafn" name="nafn">
            <option name="nafn">Árni</option>
          </select>
        </div>
      
        <br/>

        <button class="btn btn-sm btn-success">Uppfæra</button>

      </form>

    </div>
  )
}
