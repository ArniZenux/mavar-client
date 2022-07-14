import { useParams } from "react-router-dom";
import { TfupdateTulkur } from '../components/Textfield/TextField_update';

export function UpdateTulkur(){
  let { id } = useParams();

  return(
    <TfupdateTulkur id={id}/>
  )
}
