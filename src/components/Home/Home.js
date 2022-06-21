import HH from './Home.module.scss';

export function Home() {

  

  return (
    <div className={HH.home__wrapper}>
      <p className={HH.home__p}> Verkefnalisti táknmálstúlka </p>
      <table class="table table-hover">
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
        
          <tr>
            <td>Viðtal í Marel</td>
            <td>Garðabær</td>
            <td>16 júni</td>
            <td>09:00</td>
            <td>10:00</td>
            <td>Atvinnumál</td>
            <td>Rósa Ýr Hjartardóttir</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}