//import { func } from 'prop-types';
import React, {Redirect, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TT from './TextField.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function TfupdateTulkur() {
  const [id, setId] = useState(null); 
  const [firstname, setFirstName] = useState('');
  const [phonenr, setPhoneNr] = useState('');
  const [email, setEmail] = useState('');
  
  const { register, handleSubmit, formState: {errors} } = useForm(); 
  
  useEffect( () => {
    setId(localStorage.getItem('id'));
    setFirstName(localStorage.getItem('firstname'));
    setPhoneNr(localStorage.getItem('phonenr'));
    setEmail(localStorage.getItem('email'));
    
  }, []);

  const onSubmit = e => {
    console.log(id); 
    console.log(firstname); 
    console.log(phonenr); 
    console.log(email); 
       
    const data =  {id, firstname, phonenr, email};
    console.log(data); 

    /*try{

    }
    catch(e){

    }*/

    const requestOptions = {
      method: 'PUT',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(data)
    };

    //console.log(apiUrl + '/tulkur/updateuser/' + id);
    fetch(apiUrl + '/tulkur/updateuser/' + id, requestOptions);
    
    //<Redirect to='/' />
   
  }
   
  return (
    <div className={TT.tulkur__wrapper}>
      
      <p className={TT.tulkur__p}> Uppfæra túlk  </p>
      
      <form onSubmit={handleSubmit(onSubmit)}>
          
      <div className={TT.tulkur__box}>
        <label htmlFor="nafn">Nafn</label>
        <input 
          {...register("firstname", {
            required: true,
            minLength: 3,
            value: firstname.replace,
          })}
          type="text" 
          name="firstname"
          value={firstname}
          className="form-control" 
          onChange={e => setFirstName(e.target.value)}  
          placeholder="Nafn" 
        />
        { errors?.firstname?.type === "required" && ( <p>Má ekki tómur strengur</p> )}
        { errors?.firstname?.type === "minLength" && ( <p>Lágmarksorð er 3</p> )}
      </div>

      <div className={TT.tulkur__box}>
        <label htmlFor="simanumer">Símanúmer</label>
        <input 
           {...register("phonenr", {
              required: true,
              minLength: 7,
              pattern: /^[0-9]+$/i,
              value: phonenr.replace
            })}
            type="text" 
            className="form-control" 
            value={phonenr}
            name='phonenr'
            onChange={(e) => setPhoneNr(e.target.value)} 
            placeholder="Símanúmer" 
          />
          { errors?.phonenr?.type === "required" && ( <p>Má ekki tómur strengur</p> )}
          { errors?.phonenr?.type === "minLength" && ( <p>Lágmarksorð er 7</p> )}
          { errors?.phonenr?.type === "pattern" && ( <p>Tölurótið</p> )}   
      </div>

      <div className={TT.tulkur__box}>
        <label htmlFor="email">Netfang</label>
        <input 
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/i,
            value: email.replace
          })}
          className="form-control" 
          value={email}
          name='email'
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Tölvupósur"
        /> 
        { errors?.email?.type === "required" && ( <p>Má ekki tómur strengur</p> )}
        { errors?.email?.type === "pattern" && ( <p>email strengur</p> )}   
      </div>  

  
      <br/>
      
      <button className="btn btn-sm btn-success">Uppfæra</button>

      </form>

    </div>
  )
}