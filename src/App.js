import React from 'react'
import './App.css';
import Header from './Header'
import Slidebar from './Slidebar'
import Feed from './Feed'

function App() {
  return (
    //BEM naming convention
    <div className="app">
      {/* Header */}
      <Header />

    <div className="app__body">
      {/* App body */}
      <Slidebar />
      <Feed />
      
      {/* Widget */}
      </div>
    </div>
  );
}

export default App;
