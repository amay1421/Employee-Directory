import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Body from './components/Body';
import Table from './components/Table';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <Main />
    </div>
  );
}

export default App;
