import TT from './TextField.module.scss';
//import { NavLink } from 'react-router-dom';

export function TfupdateTulkur() {
  return (
    <div className={TT.tulkur__wrapper}>
      
      <p className={TT.tulkur__p}> Uppfæra túlk  </p>
      
      <form method="post" action="/addprojects">

      <div class="field<%= locals.isInvalid('KT', errors) ?  ' field--invalid' : '' %>">
        <label for="KT">Kennitala</label>
        <input type="text" class="form-control" name="KT" placeholder="Kennitala" />
      </div>  
        
      <div class="field<%= locals.isInvalid('nafn', errors) ?  ' field--invalid' : '' %>">
        <label for="nafn">Nafn</label>
        <input type="text" class="form-control" name="nafn" placeholder="Nafn" />
      </div>
          
      <div class="field<%= locals.isInvalid('simanumer', errors) ?  ' field--invalid' : '' %>">
        <label for="simanumer">Símanúmer</label>
        <input type="text" class="form-control" name="simanumer" placeholder="Símanúmer" />
      </div>

      <div class="field<%= locals.isInvalid('email', errors) ?  ' field--invalid' : '' %>">
        <label for="email">Netfang</label>
        <input type="email" class="form-control" name="email" placeholder="Tölvupósur" />
      </div>

      <br/>
      
      <button class="btn btn-sm btn-success">Uppfæra</button>

      </form>

    </div>
  )
}