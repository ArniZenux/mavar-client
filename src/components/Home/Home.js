import React, { useEffect, useState  } from 'react';
import HH from './Home.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function Home() {
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [APIData, setData] = useState([]);

  useEffect(() => {
    /*axios.get(apiUrl + `/tulkur`)
      .then((response) => {
        setData(response.data);
      });
    */

      async function fetchData(){
      setLoading(true); 
      setError(null); 

      let json; 

      try {
        const result = await fetch(apiUrl + `/project/byTulkur`); 
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
      <div className={HH.home__wrapper}>
          <p className={HH.home__p}> Verkefnalisti táknmálstúlka  </p>
        <p className={HH.home__p}> Nær ekki samband í þjónustu - Eitthvað klikkar! </p>
      </div>
    )
  }

  if(loading){
    return (
    <div className={HH.home__wrapper}>
        <p className={HH.home__p}> Verkefnalisti táknmálstúlka  </p>
        <p className={HH.home__p}> sæki gögn.... </p>
    </div>
    )
  }

  if( APIData.length === 0){
    return (
    <div className={HH.home__wrapper}>
        <p className={HH.home__p}> Verkefnalisti táknmálstúlka  </p>
        <p className={HH.home__p}> Vantar lista - data er null </p>
    </div>
    )
  }
      
  return(
    <div className={HH.home__wrapper}>
      <p className={HH.home__p}> Verkefnalisti táknmálstúlka </p>
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
          </tr>
        </thead>
        <tbody>
        
        { APIData.map((data, i ) => { 
           return (
              <tr key={i}>
                <td> { data.heiti } </td>
                <td> { data.stadur} </td>
                <td> { data.dagur } </td>
                <td> { data.byrja_timi } </td>
                <td> { data.endir_timi } </td>
                <td> { data.vettvangur } </td>
                <td> { data.nafn } </td>
              </tr>
              )
            })
         }

        </tbody>
      </table>
    </div>
  )
}
