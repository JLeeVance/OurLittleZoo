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
    .then(eventsArr =>  setEvents(eventsArr)) }, [] )

    // eventsArr.length > 0 &&
    function getRandom(arr, n) {
      var result = new Array(n),
          len = arr.length,
          taken = new Array(len);
      if (n > len)
          throw new RangeError("getRandom: more elements taken than available");
      while (n--) {
          var x = Math.floor(Math.random() * len);
          result[n] = arr[x in taken ? taken[x] : x];
          taken[x] = --len in taken ? taken[len] : len;
      }
      return result
    };

  let showEvents = [];
  if (events.length){
    showEvents = getRandom(events, 3)
  }


  return (
    <div className="background" style={{paddingBottom: "50%"}}>
      <div className="ui container grid , background" >
        <div style={{maxHeight:150}} className="sixteen wide column , contentContainer"><Header   /></div>
        <Routes>
          <Route path="/"         element={<Home events={showEvents} animals={animals}/>} />
          <Route path="/animals" element={<Animal  animals={animals}/>}  />
          <Route path="/animals/:id" element={<AnimalInfo  />}/>
          <Route path="/events"    element={<Events events={showEvents}/>}/>
          <Route path="/about"     element={<About     />}   />
          <Route path="/map"       element={<Map       />}   />
        </Routes>
      </div>
    </div>
  );
}

export default App;
