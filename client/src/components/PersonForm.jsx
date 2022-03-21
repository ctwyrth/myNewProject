import axios from 'axios';
import React, { useState } from 'react'

export default props => {
   const [ firstName, setFirstName ] = useState("");
   const [ lastName, setLastName ] = useState("");

   const handleOnSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8000/api/people', {
         firstName,
         lastName
      })
      .then(res => console.log("Response: ", res))
      .catch(err => console.log("Error: ", err));
   }

   return(
      <form onSubmit={handleOnSubmit}>
         <p>
            <label>First Name:</label>
            <input type="text" name="firstName" onChange={e => setFirstName(e.target.value)} />
         </p>
         <p>
            <label>Last Name:</label>
            <input type="text" name="lastName" onChange={e => setLastName(e.target.value)} />
         </p>
         <input type="submit" value="Submit" />
      </form>
   )
}