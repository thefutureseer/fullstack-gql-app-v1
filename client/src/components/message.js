import React from 'react';
import {GET_BOOKS} from '../graphql/Query'; 
import { DELETE_POST } from '../graphql/Mutations';
import {useQuery} from '@apollo/client';
<<<<<<< HEAD
import {useMutation} from '@apollo/client';

=======
import { useMutation } from '@apollo/client';
>>>>>>> 7151b31ba7e8aa3f4c2974aa26ac7ef12e1d40a4

import EditModal from './Modal';
// import Button from './Button';

export default function Message() {
  const [deleteMuta] = useMutation(DELETE_POST);

<<<<<<< HEAD
  const handleClick = (_id) => {  
=======
  const clickHandler = (_id) => {  
>>>>>>> 7151b31ba7e8aa3f4c2974aa26ac7ef12e1d40a4
    //  if (deleting) return;

    deleteMuta({
     variables: {_id},
     update(cache) {
       const normalizeId = cache.identify({_id, __type: 'Book'});
       //using evict to DELETE
       cache.evict({_id: normalizeId});
       cache.gc();
     }
   });
  }

  const {loading, error, data} = useQuery(GET_BOOKS);

  if (loading) return <p>....loading!</p>
  if (error) return <p>{error.message}</p>

  return (
    <div className="container box">
     <p> Begin special list here: </p>

     {
      data.getAllBooks.map(book=>(
       <div className='msg-div' key={book._id}>
         <h1 className='prom'>
           <EditModal className='prom-div' id={book._id}/>
<<<<<<< HEAD
           <Button onClick={(e)=>{e.preventDefault(); handleClick(book._id)}} buttonText="delete"/>
=======
           <button onClick={(e)=>{e.preventDefault(); clickHandler(book._id)}} className='prom-div delete-btn'>Delete</button>
           {/* <Button id={book._id} /> */}
>>>>>>> 7151b31ba7e8aa3f4c2974aa26ac7ef12e1d40a4
           <div className='prom-div'>
              <div>
                <p>prom</p>
                <span>{book.prom.toString()}</span>
              </div>
           </div>

           <div className='prom-div'>
            <div>
              <p>Author</p>
              <span>{book.author}</span>
            </div>
           </div>

           <div className='prom-div'>
            <div>
              <p>Note</p> 
              <span>{book.title}</span>
            </div>
           </div> 

         </h1>
       </div>
      ))
     }

     <p> End of list </p>
    </div>
  )
};
