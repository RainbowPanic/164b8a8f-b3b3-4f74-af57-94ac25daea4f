import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import {EventCollection} from "./components/EventCollection";
import {ShoppingCart} from "./components/ShoppingCart";
import Box from '@mui/material/Box'

function App() {
    const [clickedEvents, setClickedEvents] = useState<any[]>([]);

    const handleAddClickedEvent = (clickedEvent:any) => {
        console.log("Adding event: ", clickedEvent +"(IN APP COMPONENT)");
        setClickedEvents(prevClickedEvents => [...prevClickedEvents, clickedEvent]);
    };

  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<EventCollection addClickedEvent={handleAddClickedEvent}/>} />
                <Route path='ShoppingCart' element={<ShoppingCart addedEvents={clickedEvents} />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
