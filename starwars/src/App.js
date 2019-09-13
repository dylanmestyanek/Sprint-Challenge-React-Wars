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
        people.map((person, index) => 
          <CharacterCard 
            key={index}
            name={person.name}
            height={person.height}
            mass={person.mass} 
            hairColor={person.hair_color}
            skinColor={person.skin_color}
            eyeColor={person.eye_color}
            birthYear={person.birth_year}
            gender={person.gender}  
            homeworld={person.homeworld}
          />)
      }
    </div>
  );
}

export default App;
