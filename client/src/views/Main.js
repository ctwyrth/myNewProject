import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

export default () => {
   const [ people, setPeople ] = useState([]);
   const [ loaded, setLoaded ] = useState(false);

   useEffect(() => {
      axios.get('http://localhost:8000/api/people')
         .then(response => { setPeople(response.data); setLoaded(true); })
         .catch(err => console.log(err));
   }, []);

   const removeFromDom = personId => {
      setPeople(people.filter(person => person._id != personId));
   }

   const createPerson = person => {
      axios.post('http://localhost:8000/api/people', person)
         .then(res => {
            setPeople([...people, res.data]);
         })
   }

   return (
      <>
         <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName="" />
         <hr />
         { loaded && <PersonList people={people} removeFromDom={removeFromDom} />}
      </>
   )
}