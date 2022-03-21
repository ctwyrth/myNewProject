import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

export default props => {
   const [ people, setPeople ] = useState([]);
   const [ loaded, setLoaded ] = useState(false);

   useEffect(() => {
      axios.get('http://localhost:8000/api/people')
         .then(response => { setPeople(response.data); setLoaded(true); })
         .catch(err => console.log(err));
   }, []);

   return (
      <>
         <PersonForm />
         <hr />
         { loaded && <PersonList people={people} />}
      </>
   )
}