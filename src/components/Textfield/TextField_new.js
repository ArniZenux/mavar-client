import React, { useState  } from 'react';
//import { useForm } from 'react-hook-form';
import TT from './TextField.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

//https://dev.to/codebucks/form-validation-in-reactjs-by-building-reusable-custom-hook-1bg7
//https://react-hook-form.com/get-started#Applyvalidation

export function TfnewTulkur() {
  const [firstname, setFirstName] = useState('');
  const [phonenr, setPhoneNr] = useState('');
  const [email, setEmail] = useState('');
 
  const onFirstnameChange = e => setFirstName(e.target.value); 
  const onPhonenrChange = e => setPhoneNr(e.target.value); 
  const onEmailChange = e => setEmail(e.target.value);
  
  /*const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case 'firstname': 
        errors.firstname = 
          value.length < 5 ? 'Ekki 5, yfir en 5' : ''; 
        break;
      default:
        break; 
    }
    this.setState({errors, [name]: value});

    { errors.fullname.length > 0 && 
          <span className={TT.tulkur__p}> Nær ekki samband í þjónustu - Eitthvað klikkar! </span>
        }
  }*/

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstname); 
    console.log(phonenr); 
    console.log(email); 
        
    const data =  { firstname, phonenr, email};

    const requestOptions = {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch(apiUrl + '/tulkur/adduser', requestOptions);
  }
  
  return (
    <div className={TT.tulkur__wrapper}>
      <p className={TT.tulkur__p}> Skrá nýr túlk  </p>
      
      <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="nafn">Nafn</label>
        <input type="text" 
          className="form-control" 
          value={firstname}
          name='firstname'
          onChange={onFirstnameChange}  
          placeholder="Nafn"
        />
      </div>
          
      <div>
        <label htmlFor="simanumer">Símanúmer</label>
        <input type="text" 
          className="form-control" 
          value={phonenr}
          name='phonenr'
          onChange={onPhonenrChange} 
          placeholder="Símanúmer" 
        />
      </div>

      <div>
        <label htmlFor="email">Netfang</label>
        <input type="email" 
          className="form-control" 
          value={email}
          name='email'
          onChange={onEmailChange} 
          placeholder="Tölvupósur" 
        />
      </div>

      <br/>
      
      <button className='btn btn-sm btn-success'> Vista </button>

      </form>

    </div>
  )
}