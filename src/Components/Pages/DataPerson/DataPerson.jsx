import React, { useEffect, useState } from 'react';
import SetPerson from '../SetPerson/SetPerson';
import { useLoaderData } from 'react-router-dom';

const DataPerson = () => {
  
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