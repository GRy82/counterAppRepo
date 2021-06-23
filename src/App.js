import './App.css';
import React from 'react';
import Counters from './components/counters';
import NavBar from './components/navBar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className='container'>
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
