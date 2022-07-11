import React, { useEffect, useState  } from 'react';
import { NavLink, Link } from 'react-router-dom';
import VV from './Verkefni.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function VerkefniUpdateEvent() {
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [APIData, setData] = useState([]);

  useEffect(() => {
      async function fetchData(){
      setLoading(true); 
      setError(null); 

      let json; 

      try {
        const result = await fetch(apiUrl + `/project/byTulkur/`); 
        console.log(result);
        
        if(!result.ok){
          throw new Error('Ekki ok');
        }
        json = await result.json();
      }
      catch(e){
        console.warn('unable to fetch data', e); 
        setError('Gat ekki sótt efni í vefþjónustu - Bilað í þjónustuna.');
        return; 
      }
      finally{
        setLoading(false); 
      }
      setData(json); 
     }
   
    fetchData(); 
  }, []);

  if(error){
    return (
     <div className={VV.verkefni__wrapper}>
        <p className={VV.verkefni__p}> Breyta verkefni  </p>
        <p className={VV.verkefni__p}> Nær ekki samband í þjónustu - Eitthvað klikkar! </p>
     </div>
    )
  }

  if(loading){
    return (
     <div className={VV.verkefni__wrapper}>
        <p className={VV.verkefni__p}> Breyta verkefni  </p>
        <p className={VV.verkefni__p}> sæki gögn.... </p>
     </div>
    )
  }

  if( APIData.length === 0){
     return (
     <div className={VV.verkefni__wrapper}>
        <p className={VV.verkefni__p}> Breyta verkefni  </p>
        <p className={VV.verkefni__p}> Vantar lista - data er null </p>
     </div>
    )
  }

  return (
    <div className={VV.verkefni__wrapper}>
      
      <p className={VV.verkefni__p}> Breyta verkefni </p>
    
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Heiti</th>
            <th>Staður</th>
            <th>Dagur</th>
            <th>Byrja</th>
            <th>Endir</th>
            <th>Vettvangur</th>
            <th>Túlkur</th>
            <th>Breyta</th>
            <th>Skipta túlk</th>
          </tr>
        </thead>
        <tbody>
          { APIData.map((data, i) => { 
           return (
              <tr key={i}>
                <td> { data.heiti } </td>
                <td> { data.stadur} </td>
                <td> { data.dagur } </td>
                <td> { data.timi_byrja } </td>
                <td> { data.timi_endir } </td>
                <td> { data.vettvangur } </td>
                <td> { data.nafn } </td>
                <td><Link to={`/updatePageVerkefni/`  + data.id}> Uppfæra </Link></td> 
                <td><Link to={`/skiptaTulk/` + data.id}> Skipta </Link></td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}