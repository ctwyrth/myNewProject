import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import PersonForm from '../components/PersonForm';
import DeleteButton from '../components/DeleteButton';


export default props => {
   const { id } = useParams();
   const navigate = useNavigate();
   const [ person, setPerson ] = useState();
   const [ loaded, setLoaded ] = useState(false);

   useEffect(() => {
      axios.get('http://localhost:8000/api/person' + id)
         .then(res => {
            setPerson(res.data);
            setLoaded(true);
         })
   }, []);

   const updatePerson = person => {
      axios.put('http://localhost:8000/api/person/' + id, person)
         .then(res => console.log(res))
         .catch(err => console.log(err));
   }

   return(
      <>
         <h1>Update a Person</h1>
         { loaded && (
            <>
               <PersonForm onSubmitProp={updatePerson} initialFirstName={person.firstName} initialLastName={person.lastName} />
               <DeleteButton personId={person._id} successCallback={() => navigate('/')} />
            </>
         )}
      </>
   )
}
