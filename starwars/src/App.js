import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import CharacterCard from "./components/CharacterCard";


const App = () => {
  const [people, setPeople] = useState([]);
  
  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
      .then(respo => setPeople(respo.data.results))
      .catch(err => console.log('Come on silly boy', err));
  }, []);

  return (
    <div className="App">
      {
        people.map(person => <CharacterCard />)
      }
    </div>
  );
}

export default App;
