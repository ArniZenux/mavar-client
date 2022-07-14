import { useParams } from "react-router-dom";
import { TulkurSkipta } from '../components/Textfield/TextField_skipta';

export function ChangeTulkur(){
  let { id } = useParams();
  return(
    <TulkurSkipta id={id} />
  )
}
