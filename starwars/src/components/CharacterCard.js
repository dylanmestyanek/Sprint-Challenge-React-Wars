import React, { useState, useEffect } from "react";
import axios from "axios";

const CharacterCard = ({ 
    key,
    name,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor,
    birthYear,
    gender,
    homeworld
 }) => {

    const [planet, setPlanet] = useState('');

    useEffect(() => {
        axios.get(homeworld)
            .then(respo => setPlanet(respo.data.name))
            .catch(err => console.log('Woopsies', err));
    }, []);

    return (
        <div id={key}>
            <p>{name}</p>
            <p>{height}</p>
            <p>{mass}</p>
            <p>{hairColor}</p>
            <p>{skinColor}</p>
            <p>{eyeColor}</p>
            <p>{birthYear}</p>
            <p>{gender}</p>
            <p>{planet}</p>
        </div>
    );
};

export default CharacterCard;