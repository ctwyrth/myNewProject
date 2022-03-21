import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default props => {
   const { removeFromDom } = props;

   const deletePerson = (personId) => {
      axios.delete('http://localhost:8000/api/person/delete/' + personId)
         .then(res => { removeFromDom(personId) })
         .catch(err => console.log(err));
   }

   return(
      <div>
         {props.people.map((person, idx) => {
            return <p key={idx}><Link to={'/' + person._id}>{person.lastName}, {person.firstName}</Link> | <button onClick={(e) => {deletePerson(person._id)}}>Delete</button></p>
         })}
      </div>
   )
}