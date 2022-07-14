import { useParams } from "react-router-dom";
import { TfupdateVerkefni } from '../components/Textfield/TextField_verkefniupdate';

export function VerkefniUpdatepage(){
  let { id } = useParams();

  return(
    <TfupdateVerkefni id={id} />
  )
}
