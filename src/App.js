import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Booking from './components/Booking';
import './App.css';



function App() {
  return (
    <>
      <Header />
      <div className="content-container">
        <Profile />
        <Booking />
      </div>
    </>
  );
}

export default App;
