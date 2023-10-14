import React, { useEffect, useState } from 'react';
import SetPerson from '../SetPerson/SetPerson';
import { useLoaderData } from 'react-router-dom';

const DataPerson = () => {
    // const [persons, setPersons] = useState({});

    // useEffect(() => {
    //     // Make an API request to fetch data for the specific ID
    //     fetch(`http://localhost:5000/userinfo/${id}`)
    //       .then((response) => response.json())
    //       .then((persons) => setPersons(persons))
    //       .catch((error) => console.error(error));
    //   }, []);
    const persons = useLoaderData();

    
      if (!persons) {
        return <p>Loading...</p>;
      }

    return (
        <div>
          {
           persons.map(person => <SetPerson
           key={person.id}
           person={person}
           ></SetPerson>) 
          }  
        </div>
    );
};

export default DataPerson;