import React  from 'react';
import '../style/App.css';
import { Route, Routes } from 'react-router-dom';
import Form from './Form';
import LoginButton from './LoginButton';

export default function App() {

 return (
  <div id='double-wide'>
    <header>List of secrets 
     <LoginButton/>  
    </header>
    <Routes>
      <Route exact path="/login" element={LoginButton} />
      <Route path="/form" element={<Form/>} />
    </Routes>
    <footer id='foot'>Copy rights Tannehill</footer>
  </div>
 );
}