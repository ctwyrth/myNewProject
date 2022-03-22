import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';

export default props => {
   const [ people, setPeople ] = useState([]);

   useEffect(() => {
      axios.get('http://localhost:8000/api/person')
         .then(res => setPeopole(res.data))
         .catch(err => console.log(err));
   }, []);

   const removeFromDom = personId => {
      setPeopole(people.filter(person => person._id != personId))
   }

   return(
      <div>
         {people.map((person, idx) => {
            return <p key={idx}><Link to={'/' + person._id}>{person.lastName}, {person.firstName}</Link> | <Link to={'/' + person._id + '/edit'}>Edit</Link>
            <DeleteButton personId={person._id} successCallback={() => removeFromDom(person._id)} /></p>
         })}
      </div>
   );
}