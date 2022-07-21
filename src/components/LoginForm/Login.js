import React, { useEffect, useState  } from 'react';
import { useForm } from 'react-hook-form';
import LL from './Login.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
    
  const { register, handleSubmit, formState: {errors} } = useForm(); 
  
  const onUsernameChange = e => setUserName(e.target.value); 
  const onPasswordChange = e => setPassWord(e.target.value); 

  const onSubmit = async (e) => {
        
    /*const requestOptions = {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    success = await fetch(apiUrl + '/tulkur/adduser', requestOptions);
    
    if(success){
      history.push('/tulkur');
    }
    else{
      console.log("Virkar ekki");
    }*/
  }
 
  return (
    <div className={LL.login__wrapper}>
      <p className={LL.login__p}> Innskráning </p>

    <form onSubmit={handleSubmit(onSubmit)}>
      
      <div className={LL.login__box}>
        <label htmlFor="notandi">Notandi</label>
        <input 
          {...register("username", {
            required: true,
            minLength: 3,
          })}
          type="text" 
          name="username"
          value={username}
          className="form-control" 
          onChange={onUsernameChange} 
           
          placeholder="Notandi"
        />
        { errors?.username?.type === "required" && ( <p>Strengur er tómur</p> )}
        { errors?.username?.type === "minLength" && ( <p>Lágmarksorð er 3</p> )}
      
      </div>

      <div className={LL.login__box}>
        <label htmlFor="password">Lyklaorð</label>
        <input 
          {...register("password", {
            required: true,
            minLength: 3,
          })}
          type="password" 
          name="password"
          value={password}
          className="form-control" 
          onChange={onPasswordChange} 
           
          placeholder="Lyklaorð"
        />
        { errors?.password?.type === "required" && ( <p>Strengur er tómur</p> )}
        { errors?.password?.type === "minLength" && ( <p>Lágmarksorð er 3</p> )}
      
      </div>

    <button className='btn btn-sm btn-success'> Innskrá </button>
    
    </form>
    
    </div>
  )
}
