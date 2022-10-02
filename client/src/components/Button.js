import React from 'react';
import { DELETE_POST } from '../graphql/Mutations';
import {useMutation} from '@apollo/client';

// import { v4 as uuidv4 } from 'uuid';


export default function Button({book}) {

  //delete a secret div
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

  return (
    <div>
     <button onClick={(e)=>{e.preventDefault(); clickHandler(book._id)}} className='prom-div delete-btn'>Delete</button>
    </div>
  )
};
