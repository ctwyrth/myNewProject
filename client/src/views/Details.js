import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default props => {
   const [ person, setPerson ] = useState({});
   const { id } = useParams();

   useEffect(() => {
      axios.get('http://localhost:8000/api/person/' + id)
         .then(response => setPerson(response.data))
         .catch(err => response.json(err));
   }, []);

   return(
      <div>
         <p>First Name: {person.firstName}</p>
         <p>Last Name: {person.lastName}</p>
      </div>
   )
}
