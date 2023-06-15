import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound";
import Detail from "./Pages/Detail/Detail";
import List from "./Pages/List/List";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/credentials" element={<List/>} />
      <Route path="/credentials/detail/:id" element={<Detail/>} />
    </Routes>
  );
}

export default App;
