import React, {useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory} from 'react-router-dom';
import TT from './TextField.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function TulkurSkipta( { id } ) {
  const [idverkefni, setIdVerkefni] = useState(null);
  const [nafn, setNafn] = useState('')
  const [tulkur, setTulkur] = useState('');
  const [picktulkur, setPickTulkur] = useState([]);
  const onTulkurChange = e => setTulkur(e.target.value);
  const { register, handleSubmit, formState: {errors} } = useForm(); 

  let history = useHistory();
  let success = true; 
  
  useEffect( () => {
    setIdVerkefni(localStorage.getItem('idverkefni'));
    setNafn(localStorage.getItem('nafn'));
    
    async function fetchData(){
      let json; 

      try {
        const result = await fetch(apiUrl + `/tulkur/byname`); 
      
        if(!result.ok){
          throw new Error('Ekki ok');
        }
        json = await result.json();
      }
      catch(e){
        console.warn('unable to fetch data', e); 
        return; 
      }
      setPickTulkur(json); 
     }
   
    fetchData(); 
  }, []);

  const onSubmit = async (e) => {
    const data = { idverkefni, tulkur }
    const requestOptions = {
      method: 'PUT',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    
    success = await fetch(apiUrl + '/project/updatevinna/' + idverkefni, requestOptions);
    
    if(success){
      history.push('/updateverkefni');
    }
    else{
      console.log("Ekki virkur");
    }
  }

  return (
    <div className={TT.tulkur__wrapper}>
      
      <p className={TT.tulkur__p}> Skipta um túlk  </p>

     <form onSubmit={handleSubmit(onSubmit)}>

      <div className={TT.tulkur__box}>
        <label htmlFor="formGroupExampleInput">Nafn túlks</label>
        <input 
           {...register("nafn", {
            required: true,
            minLength: 3,
            value: nafn.replace,
          })}
            type="text" 
            name="nafn"
            value={nafn}
            className="form-control" 
            onChange={e => setNafn(e.target.value)}  
            placeholder="Túlkur" 
          />
      </div>  
      { errors?.nafn?.type === "required" && ( <p>Má ekki tómur strengur</p> )}
      { errors?.nafn?.type === "minLength" && ( <p>Lágmarksorð er 3</p> )}

      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Táknmálstúlkur</label>
        <select className="form-control" 
          value={tulkur} 
          name="tulkur" 
          onChange={onTulkurChange}>
            {picktulkur.map((data, i) => { 
              return (
                <option key={i} name="tulkur"> { data.nafn } </option>
              )}
            )}
        </select>
      </div>

      <br/>

      <button className="btn btn-sm btn-success">Skipta</button>
     </form>
    </div>
  )
}