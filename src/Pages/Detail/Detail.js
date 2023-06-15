import {useParams} from "react-router-dom";

const Detail = () => {
  const {id} = useParams();

  return (
    <h1>Detail Component {id}</h1>
  );
};

export default Detail;
