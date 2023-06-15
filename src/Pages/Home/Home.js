import {Link} from "react-router-dom";
import {Button} from "@chakra-ui/react";

const Home = () => {
  return (
    <Link to="/credentials">
      <Button variant='solid' colorScheme='blue'>
        Mulai
      </Button>
    </Link>
  );
};

export default Home;
