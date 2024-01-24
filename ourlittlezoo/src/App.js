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
  const [ events, setEvents ] = useState([]);

  useEffect(() => {
  fetch("http://localhost:3000/animals")
  .then(r => r.json())
  .then(setAnimals)} , [] )


  useEffect(() => {
  fetch("http://localhost:3000/events")
    .then(r => r.json())
    .then(eventsArr => eventsArr.length > 0 && randomEvents(eventsArr)) }, [] )

    function randomEvents(eventsArr) {
      
        let randomEvent1 = Math.floor(Math.random() * eventsArr.length);
        let randomEvent2 = Math.floor(Math.random() * eventsArr.length);
        while (randomEvent1 === randomEvent2) {
          return (randomEvent2 = Math.floor(Math.random() * eventsArr.length));
        }
        let randomEvent3 = Math.floor(Math.random() * eventsArr.length);
        while (randomEvent1 === randomEvent3 || randomEvent2 === randomEvent3) {
          return (randomEvent3 = Math.floor(Math.random() * eventsArr.length));
        }
      
      setEvents(eventsArr.filter(event => event.id === randomEvent1 || event.id === randomEvent2 || event.id === randomEvent3))
      console.log(randomEvent1,randomEvent2,randomEvent3)
    }

    // console.log(events);
  return (
      <div className="App" >
      <Header   />
      <Routes>
          <Route path="/"         element={<Home events={events} animals={animals}/>} />
          <Route path="/animals" element={<Animal  animals={animals}/>}  />
          <Route path="/animals/:id" element={<AnimalInfo  />}/>
          <Route path="/events"    element={events.length >= 3 ? <Events events={events}/> : <div>loading</div>}   />
          <Route path="/about"     element={<About     />}   />
          <Route path="/map"       element={<Map       />}   />
      </Routes>
      </div>
      
      
   
  );
}

export default App;
