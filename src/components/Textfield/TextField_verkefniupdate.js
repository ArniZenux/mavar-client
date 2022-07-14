import React, {Redirect, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TT from './TextField.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function TfupdateVerkefni( { id } ) {
  const [idverkefni, setIdVerkefni] = useState(null); 
  const [heiti, setHeiti] = useState('');
  const [stadur, setStadur] = useState('');
  const [dagur, setDagur] = useState('');
  const [byrja_timi, setByrjaTimi] = useState('');
  const [endir_timi, setEndirTimi] = useState('');
  const [vettvangur, setVettvangur] = useState('');
  
  const { register, handleSubmit, formState: {errors} } = useForm(); 
  
  useEffect( () => {
    setIdVerkefni(localStorage.getItem('idverkefni'));
    setHeiti(localStorage.getItem('heiti'));
    setStadur(localStorage.getItem('stadur'));
    setDagur(localStorage.getItem('dagur'));
    setByrjaTimi(localStorage.getItem('byrja_timi'));
    setEndirTimi(localStorage.getItem('endir_timi'));
    setVettvangur(localStorage.getItem('vettvangur'));
  }, []);

  const onSubmit = e => {
    console.log(idverkefni); 
    console.log(heiti); 
    console.log(stadur); 
    console.log(dagur); 
    console.log(byrja_timi);
    console.log(endir_timi);
    console.log(vettvangur);
       
    const data =  {idverkefni, 
                    heiti, 
                    stadur, 
                    dagur,
                    byrja_timi,
                    endir_timi,
                    vettvangur 
              };
    console.log(data); 

    /*try{
    }
    catch(e){
    }
    */
    const requestOptions = {
      method: 'PUT',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    //console.log(apiUrl + '/tulkur/updateuser/' + id);
    fetch(apiUrl + '/project/updateproject/' + id, requestOptions);
    //<Redirect to='/' />
  }
 
   return (
    <div className={TT.tulkur__wrapper}>
      
      <p className={TT.tulkur__p}> Uppfæra verkefni  </p>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label htmlFor="formGroupExampleInput">Heiti</label>
          <input 
            {...register("heiti", {
              required: true,
              minLength: 3,
              value: heiti.replace,
            })}
              type="text" 
              name="heiti"
              value={heiti}
              className="form-control" 
              onChange={e => setHeiti(e.target.value)}  
              placeholder="Heiti verkefna" 
          />
        </div>  
        
        <div>
          <label htmlFor="formGroupExampleInput">Staður</label>
          <input 
            {...register("stadur", {
              required: true,
              minLength: 3,
              value: stadur.replace,
            })}
              type="text"
              name="stadur"  
              value={stadur}  
              className="form-control" 
              onChange={e => setStadur(e.target.value)}  
              placeholder="Staður" />
        </div>
          
        <div>
          <label htmlFor="formGroupExampleInput">Dagur</label>
          <input 
            {...register("dagur", {
              required: true,
              minLength: 3,
              value: dagur.replace,
            })}
            type="text" 
            className="form-control" 
            value={dagur}
            onChange={e => setDagur(e.target.value)}  
            name="dagur" 
            placeholder="Dagur" />
        </div>

        <div>
          <label htmlFor="formGroupExampleInput">Byrja</label>
          <input 
            {...register("byrja_timi", {
              required: true,
              minLength: 3,
              value: byrja_timi.replace,
            })}
            type="text" 
            className="form-control" 
            value={byrja_timi}
            onChange={e => setByrjaTimi(e.target.value)}  
            name="byrja_timi" 
            placeholder="Byrja" />
        </div>
        
        <div>
          <label htmlFor="formGroupExampleInput">Endir</label>
          <input 
            {...register("endir_timi", {
              required: true,
              minLength: 3,
              value: endir_timi.replace,
            })}
            type="text" 
            className="form-control" 
            name="endir_timi"
            value={endir_timi} 
            onChange={e => setEndirTimi(e.target.value)}  
            placeholder="Endir" />
        </div>

        <div>
          <label htmlFor="formGroupExampleInput">Vettvangur</label>
          <select 
            className="form-control" 
            name="vettvangur" 
            value={vettvangur} 
            onChange={e => setVettvangur(e.target.value)}>
              <option name="vettvangur"> Atvinnumál </option>
              <option name="vettvangur"> Skólamál </option>
              <option name="vettvangur"> Læknamál </option>
              <option name="vettvangur"> Almennt </option>
          </select>
        </div>

        <br/>

        <button className="btn btn-sm btn-success">Uppfæra</button>

      </form>

    </div>
  )
}
