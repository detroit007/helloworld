import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './Hello.css'
import Hello from './Hello'

function App() {
  return (
      <div className='container'>
          <p className='greeting'>
            Hello World by <strong> Hamza Yousaf</strong>
          </p>

          <h2>Ordered list</h2>

          <ol>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
          </ol>

          <br/>

          <hr/>

          <br/>

          <h2>Unordered list</h2>

          <ul>
            <li>Apple</li>
            <li>Banana</li>
            <li>Cheery</li>
            <li>Dog</li>
          </ul>

          <br/>

          <div>
            I am JS expression in JSX  {5 + 30} 
          </div>

          <Hello/>

      </div>
  );
}

export default App;
