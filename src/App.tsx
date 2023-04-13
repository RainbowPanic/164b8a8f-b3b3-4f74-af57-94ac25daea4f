import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import {EventCollection} from "./components/EventCollection";

function App() {


  return (
    <div className="App">
        <Header />
        <EventCollection />
    </div>
  );
}

export default App;
