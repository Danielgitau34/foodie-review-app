import { Route, BrowserRouter, Routes } from "react-router-dom";
import Restaurant from "./Restaurant/Restaurant";
import Restaurants from "./Restaurants/Restaurants";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Restaurants />}></Route>
        <Route path="/restaurants/:id" element={<Restaurant />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
