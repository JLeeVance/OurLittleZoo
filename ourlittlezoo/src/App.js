import { useState , useEffect, Suspense } from "react";
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







  // function randomEvents(eventsArr) {
      
  //   let randomEvent1 = Math.floor(Math.random() * eventsArr.length) + 1;
  //     let randomEvent2 = Math.floor(Math.random() * eventsArr.length) + 1;
  //     while (randomEvent1 == randomEvent2) {
  //       return (randomEvent2 = Math.floor(Math.random() * eventsArr.length));
  //     }
  //     let randomEvent3 = Math.floor(Math.random() * eventsArr.length) + 1;
  //     while (randomEvent1 == randomEvent3 || randomEvent2 == randomEvent3) {
  //       return (randomEvent3 = Math.floor(Math.random() * eventsArr.length));
  //     }
  //     console.log(randomEvent1 , randomEvent2 , randomEvent3)
  //   setEvents(eventsArr.filter(event => event.id == randomEvent1 || event.id == randomEvent2 || event.id == randomEvent3))
  // }


  return (
    <div className="background">
      <div className="ui container grid , background" >
        <div style={{maxHeight:200}} className="sixteen wide column , contentContainer"><Header   /></div>
        <Routes>
          <Route path="/"         element={<Home events={showEvents} animals={animals}/>} />
          <Route path="/animals" element={<Animal  animals={animals}/>}  />
          <Route path="/animals/:id" element={<AnimalInfo  />}/>
          <Route path="/events"    element={<Suspense fallback={<div>loading</div>}>
                                                <Events events={showEvents}/>
                                            </Suspense>}  />
            
            
          <Route path="/about"     element={<About     />}   />
          <Route path="/map"       element={<Map       />}   />
        </Routes>
      </div>
    </div>
  );
}

export default App;
