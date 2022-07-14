import { useParams } from "react-router-dom";
import { TulkurSkoda } from '../components/Tulkur/SkodaVerkefni';

export function SkodaVerkTulkur(){
  let { id } = useParams();

  return(
    <TulkurSkoda id={id} />
   )
}
