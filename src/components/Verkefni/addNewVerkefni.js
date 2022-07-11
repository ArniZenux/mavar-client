import React, { useEffect, useState  } from 'react';
import { useForm } from 'react-hook-form';

import VV from './Verkefni.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function VerkefniNewEvent() {
  const [nameproject, setNameProject] = useState('');
  const [place, setPlace] = useState('');
  const [day, setDay] = useState('');
  const [start, setStart] = useState('');
  const [last, setLast] = useState('');
  const [vettvangur, setVettvangur] = useState('');
  const [tulkur, setTulkur] = useState('');

  const [picktulkur, setPickTulkur] = useState([]);
 
  const onNameProjectChange = e => setNameProject(e.target.value); 
  const onPlaceChange = e => setPlace(e.target.value); 
  const onDayChange = e => setDay(e.target.value);
  const onStartChange = e => setStart(e.target.value); 
  const onLastChange = e => setLast(e.target.value);
  const onVettvangurChange = e => setVettvangur(e.target.value); 
  const onTulkurChange = e => setTulkur(e.target.value);

  const { register, handleSubmit, formState: {errors} } = useForm(); 
  
  const onSubmit = e => {
    const data =  { nameproject, place, day, start, last, vettvangur, tulkur };
    console.log(data); 
    
    const requestOptions = {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch(apiUrl + '/project/addproject', requestOptions);
  }
  
  useEffect(() => {
    async function fetchData(){

      let json; 

      try {
        const result = await fetch(apiUrl + `/tulkur/byname`); 
        console.log(result);
        
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

  return (
    <div className={VV.verkefni__wrapper}>
      
      <p className={VV.verkefni__p}> Bæta nýtt verkefni </p>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label htmlFor="formGroupExampleInput">Heiti</label>
          <input 
            {...register("nameproject", {
              required: true,
              minLength: 3,
            })}
            type="text" 
            name="nameproject"
            value={nameproject}
            className="form-control" 
            onChange={onNameProjectChange}  
            placeholder="Heiti verkefna"
          />
            { errors?.nameproject?.type === "required" && ( <p>Má ekki tómur strengur</p> )}
            { errors?.nameproject?.type === "minLength" && ( <p>Lágmarksorð er 7</p> )}
        </div>  

        <div>
          <label htmlFor="formGroupExampleInput">Staður</label>
          <input 
            {...register("place", {
              required: true,
              minLength: 3,
            })}
            type="text" 
            name="place"
            value={place}
            className="form-control" 
            onChange={onPlaceChange}
            placeholder="Staður" 
          />
            { errors?.place?.type === "required" && ( <p>Má ekki tómur strengur</p> )}
            { errors?.place?.type === "minLength" && ( <p>Lágmarksorð er 7</p> )}
        </div>
          
        <div>
          <label htmlFor="formGroupExampleInput">Dagur</label>
          <input 
            {...register("day", {
              required: true,
              minLength: 3,
            })}
            type="text" 
            name="day"
            value={day}
            className="form-control" 
            onChange={onDayChange}
            placeholder="Dagur" 
          />
            { errors?.day?.type === "required" && ( <p>Má ekki tómur strengur</p> )}
            { errors?.day?.type === "minLength" && ( <p>Lágmarksorð er 7</p> )}
        </div>

        <div>
          <label htmlFor="formGroupExampleInput">Byrja</label>
          <input 
            {...register("start", {
              required: true,
              maxLength: 5,
              minLength: 5,
            })}
            type="text" 
            name="start"
            value={start}
            className="form-control" 
            onChange={onStartChange}
            placeholder="Byrja" 
          />
            { errors?.start?.type === "required" && ( <p>Má ekki tómur strengur</p> )}
            { errors?.start?.type === "minLength" && ( <p>Lagmarksorð er 5</p> )}
            { errors?.start?.type === "maxLength" && ( <p>Hámarksorð er 5</p> )}
        </div>

        <div>
          <label htmlFor="formGroupExampleInput">Endir</label>
          <input 
            {...register("last", {
              required: true,
              maxLength: 5,
              minLength: 5,
            })}
            type="text" 
            name="last"
            value={last}
            className="form-control" 
            onChange={onLastChange}
            placeholder="Endir" 
          />
            { errors?.last?.type === "required" && ( <p>Má ekki tómur strengur</p> )}
            { errors?.last?.type === "minLength" && ( <p>Lágmarksorð er 5</p> )}
            { errors?.last?.type === "maxLength" && ( <p>Hámarksorð er 5</p> )}
        </div>

        <div>
          <label htmlFor="formGroupExampleInput">Vettvangur</label>
          <select className="form-control" 
            value={vettvangur} 
            name="vettvangur" 
            onChange={onVettvangurChange}>
              <option name="vettvangur"> Atvinnumál </option>
              <option name="vettvangur"> Skólamál </option>
              <option name="vettvangur"> Læknamál </option>
              <option name="vettvangur"> Almennt </option>
          </select>
        </div>

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
        
        <button className="btn btn-sm btn-success">Skrá</button>

        </form>
    </div>
  )
}