<<<<<<< HEAD
import React, {Component} from 'react';
// import Button from './button';
// import { POST_BOOKS } from '../graphql/Mutations';
// import { useMutation } from '@apollo/client';

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.titleRef = React.createRef();
    this.authorRef = React.createRef();
  }

  changeHandler = () => {
    const title = this.titleRef.current.value;
    const author = this.authorRef.current.value;

    if (title.trim().length === 0 || author.trim().length === 0) {
      return;
    }

    const event = {
      title,
      author
    }

    console.log(event, " this is event new")

    //end changeHandler
  }

 render() {
 
  return (
   <div>
    <form className='form container box'>
      <div className="form-group">
        <label for="user-name">name</label>
        <input  type='text' id='author' ref={this.authorRef} className="form-control" placeholder="Author"/>
      </div>

      <div className="form-group">
        <label for="form-message">message</label>
        <input  type="text" id='title' ref={this.titleRef} className="form-control" placeholder="Title"/>
        <p className="text-danger">We'll never share your secret with anyone else.</p>
      </div>
      
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button onClick={this.changeHandler} className="btn btn-primary" >Submit</button>
    </form>
   </div> 
  )
    }
=======
import React, { useState } from 'react';
import { POST_BOOKS } from '../graphql/Mutations';
import { useMutation } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';

export default function Form() {
  const _id = uuidv4();

  const [stateProm, setProm] = useState({
    _id: _id,
    author: "",
    title: "",
    prom: false
  });

  const [createPost, {error}] = useMutation(POST_BOOKS);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      createPost({
        variables: { ...stateProm},
      })
      window.location.reload()
    } catch (err) {
      console.error(error);
    }
  }

  const changeHandler = async (event) => {

    const {name, value} = event.target;
    // !stateProm.prom ? stateProm.prom = true : stateProm.prom = false;
      console.log(stateProm.prom, " setstate prom")

    await setProm({...stateProm, [name]: value})
    console.log(stateProm, " this is stateProm")
  }

  return (
   <div>
    <form onSubmit={submitHandler} className='form container box'>
      <div >
        <label>names</label>
        <input  onChange={changeHandler} name="author" value={stateProm.author} className="form-control" placeholder="names"/>
      </div>

      <div >
        <label>note</label>
        <input  onChange={changeHandler} name="title" value={stateProm.title} className="form-control" placeholder="note"/>
      </div>

      {/* <div >
        <input  onChange={changeHandler} name="prom" value={stateProm.prom} className="form-control" placeholder="true"/>
      </div> */}

      <div className="form-check">
       <label className="form-check-label">
        <input type="checkbox"  onChange={()=>{return !stateProm.prom ? stateProm.prom = true : stateProm.prom = false;}} name="prom" value={stateProm.prom} className="form-check-input" />
         <p>prom</p>
       </label>
      </div>

      <div >
        <label >Sincere message</label>
        <p className="sin-msg m-2 text-danger">We'll never share your secret with anyone else.</p>
      </div>
      
      <div className="form-check">
        <input type="checkbox" className="form-check-input" />
        <label className="form-check-label">Check me out</label>
      </div>
      <button type='submit' className="btn btn-primary" >Submit</button>
    </form>
   </div> 
  )
>>>>>>> efcb389c3cf65a675bab093dac66b60498085f04
}