import React  from 'react';
import '../style/App.css';
import Message from './Message';
import Form from './Form';


function App() {
return (
<div id='double-wide'>
  <header>List of secrets</header>
  <Form />
  <Message />
  <footer id='foot'>Copy rights Tannehill</footer>
</div>
);
}

export default App;