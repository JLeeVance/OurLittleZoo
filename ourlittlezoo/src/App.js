import { useState , useEffect } from "react"
import './App.css';

function App() {

  const [ animals , setAnimals ] = useState([]);

  useEffect(() => {
  fetch("http://localhost:3000/animals")
  .then(r => r.json())
  .then(setAnimals)} , [] )

  const animalsToTest = animals.map((animalObj) => <img src={animalObj.animalUrl}  />)

  return (
    <div>
      {animalsToTest}
    </div>
  );
}

export default App;
