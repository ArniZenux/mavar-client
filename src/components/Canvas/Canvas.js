import React, { useEffect, useState  } from 'react';
import CanvasJSReact from '../../lib/canvasjs.react';
import CC from './Canvas.module.scss';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const apiUrl = process.env.REACT_APP_API_URL;

export function StadaVerkefni() {
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [APIData, setData] = useState([]);

  let buinn = false; 

  let dataPoints = [];
  let counter_atvinnumal = 0;
  let counter_skolamal = 0;  
  let counter_doctor = 0;  
  let counter_almennt = 0; 
  
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2", 
    title:  {
      text: "Vettvangur"
    },
    data: [{
      type: "pie", 
      indexLabel: "{label}: {y}%",
      startAngle: -90,
      dataPoints: dataPoints  
    }]
  }

  useEffect(() => {
    async function fetchData(){
      setLoading(true); 
      setError(null); 

      let json; 
     
      try {
        const result = await fetch(apiUrl + `/project/byTulkur`); 
        
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
      <div className={CC.home__wrapper}>
          <p className={CC.home__p}> Staða vettvangsverkefna </p>
        <p className={CC.home__p}> Nær ekki samband í þjónustu - Eitthvað klikkar! </p>
      </div>
    )
  }

  if(loading){
    return (
      <div className={CC.home__wrapper}>
        <p className={CC.home__p}> Staða vettvangsverkefna </p>
        <p className={CC.home__p}> Sæki gögn... </p>
      </div>
    )
  }

  if(APIData.length !== 0){
    APIData.map((id) => {
      if(id.vettvangur === 'Atvinnumál') {
        counter_atvinnumal++;
      }
      else if (id.vettvangur === 'Skólamál') {
        counter_skolamal++;
      }
      else if (id.vettvangur === 'Almennt') {
        counter_almennt++;
      }
      else if(id.vettvangur === 'Læknamál') {
        counter_doctor++;
      }
    })

    buinn = true; 
  }

  if(buinn){
    dataPoints.push({ y: counter_atvinnumal, label: 'Atvinnumál' })
    dataPoints.push({ y: counter_skolamal, label: 'Skólamál' })
    dataPoints.push({ y: counter_almennt, label: 'Almennt' })
    dataPoints.push({ y: counter_doctor, label: 'Læknamál' })
  }
  
  return(
    <div className={CC.home__wrapper}>
      <p className={CC.home__p}> Staða vettvangsverkefna </p>
        <CanvasJSChart options = { options } />
    </div>
   );
}
