import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound";
import Detail from "./Pages/Detail/Detail";
import List from "./Pages/List/List";
import {Box} from "@chakra-ui/react";
import Upsert from "./Pages/Upsert/Upsert";

function App() {
  return (
    <Box padding='2'>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/credentials" element={<List/>} />
        <Route path="/credentials/detail/:id" element={<Detail/>} />
        <Route path="/credentials/upsert" element={<Upsert/>} />
        <Route path="/credentials/upsert/:id" element={<Upsert/>} />
      </Routes>
    </Box>
  );
}

export default App;
