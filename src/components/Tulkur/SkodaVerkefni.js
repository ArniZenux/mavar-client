import TT from './Tulkur.module.scss';

export function TulkurSkoda() {
  return (
    <div className={TT.tulkur__wrapper}>
      <p className={TT.tulkur__p}> Skoða verkefnalisti túlka  </p>

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
            <td>Hjördis Anna Haraldardóttir</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  )
}