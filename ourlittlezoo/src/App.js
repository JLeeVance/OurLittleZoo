import { useState , useEffect } from "react";
import './App.css';

import Header from "./Components/Header";
import Home from "./Components/Home";
import Animal from "./Components/Animal";
import Events from "./Components/Events";
import About from "./Components/About";
import Map from "./Components/Map"


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
      
      // function getRandomNumber() {
        let randomEvent1 = Math.floor(Math.random() * eventsArr.length) + 1;
        let randomEvent2 = Math.floor(Math.random() * eventsArr.length) + 1;
        while (randomEvent1 === randomEvent2) {
          return (randomEvent2 = Math.floor(Math.random() * eventsArr.length));
        }
        let randomEvent3 = Math.floor(Math.random() * eventsArr.length) + 1;
        while (randomEvent1 === randomEvent3 || randomEvent2 === randomEvent3) {
          return (randomEvent3 = Math.floor(Math.random() * eventsArr.length));
        }
        // while (randomEvent2 === randomEvent3) {
        //   return (randomEvent3 = Math.floor(Math.random() * eventsArr.length));
        // }
        // return randomEvent1;
      // }
      
      setEvents(eventsArr.filter(event => event.id === randomEvent1 || event.id === randomEvent2 || event.id === randomEvent3))
      console.log(randomEvent1,randomEvent2,randomEvent3)
    }

  // const animalsToTest = animals.map((animalObj) => <img src={animalObj.animalUrl}  />)
console.log(events)
  return (
      <div>
      <Header   />
      <Routes>
          <Route path="/"  element={<Home     />} />
          <Route path="animals" element={<Animal   />}  />
          <Route path="events"  element={<Events events={events}/>}/>
          <Route path="about"   element={<About     />}   />
          <Route path="map"     element={<Map       />}   />
      </Routes>
      </div>
      
      
   
  );
}

export default App;
