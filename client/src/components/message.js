import React from 'react';
<<<<<<< HEAD
import {GET_BOOKS} from '../graphql/Query';
import {useQuery} from '@apollo/client';

export default function Message() {
  const {loading, error, data} = useQuery(GET_BOOKS);
  console.log('data', data);
=======
import {GET_BOOKS} from '../graphql/Query'; 
import { DELETE_POST } from '../graphql/Mutations';
import {useQuery, useMutation} from '@apollo/client';
import EditModal from './Modal';

export default function Message() {
  const [deleteMuta] = useMutation(DELETE_POST);
  
  const clickHandler = (_id) => {  
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

>>>>>>> efcb389c3cf65a675bab093dac66b60498085f04
  if (loading) return <p>....loading!</p>
  if (error) return <p>{error.message}</p>

  return (
    <div className="container box">
<<<<<<< HEAD
     GraphQL here! {
      data?.getAllBooks.map(book=>(
       <div className='msg-div' key={book._id}>
         <h1 className='prom'>
           <button className='delete-btn'>Delete </button>
              {book.author}, { book.title}
=======
     <p> special list here: </p> {
      data?.getAllBooks.map(book=>(
       <div className='msg-div' key={book._id}>
         <h1 className='prom'>
           <EditModal className='prom-div' id={book._id}/>
           <button onClick={(e)=>{e.preventDefault(); clickHandler(book._id)}} className='prom-div delete-btn'>Delete</button>
            <div className='prom-div'><div><p>prom</p> <span>{book.prom.toString()}</span></div></div>
            <div className='prom-div'><div><p>Author</p> <span>{book.author}</span></div></div> 
            <div className='prom-div'><div><p>Note</p> <span>{book.title}</span></div></div> 
>>>>>>> efcb389c3cf65a675bab093dac66b60498085f04
         </h1>
       </div>
      ))
     }
<<<<<<< HEAD
    
  </div>
  )
}
=======
    <p> End of list </p>
  </div>
  )
};
>>>>>>> efcb389c3cf65a675bab093dac66b60498085f04
