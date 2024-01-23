import { useState , useEffect } from "react";
import './App.css';

import Header from "./Components/Header";
import Home from "./Components/Home";
import Animal from "./Components/Animal";
import Events from "./Components/Events";
import About from "./Components/About";
import Map from "./Components/Map"
import AnimalInfo from "./Components/AnimalChildren/AnimalInfo"


import { Routes, Route } from "react-router-dom";

function App() {

  const [ animals , setAnimals ] = useState([]);

  useEffect(() => {
  fetch("http://localhost:3000/animals")
  .then(r => r.json())
  .then(setAnimals)} , [] )

  return (
      <div className="App" >
      <Header   />
      <Routes>
          <Route path="/"         element={<Home     />} />
          <Route path="/animals" element={<Animal  animals={animals}/>}  />
          <Route path="/animals/:id" element={<AnimalInfo  />}/>
          <Route path="/events"    element={<Events    />}   />
          <Route path="/about"     element={<About     />}   />
          <Route path="/map"       element={<Map       />}   />
      </Routes>
      </div>
      
      
   
  );
}

export default App;
