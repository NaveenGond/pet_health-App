// src/components/PetList.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Fetch pets from the backend when the component mounts
    axios.get('http://localhost:5000/api/pets')
      .then(response => setPets(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Pet List</h1>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>{pet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
