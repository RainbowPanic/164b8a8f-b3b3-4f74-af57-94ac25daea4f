import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import {EventCollection} from "./components/EventCollection";
import {ShoppingCart} from "./components/ShoppingCart";
import Box from '@mui/material/Box'
import {EventInterface} from './interface/EventInterface';
function App() {
    //Ist das Event auf deses Add/Remove Button geklicked wurde
    const [clickedEvents, setClickedEvents] = useState<EventInterface[]>([]);

    //fügt Events einem Aray fürs ShoppingCart hinzu
    const handleAddClickedEvent = (clickedEvent:EventInterface) => {
        console.log("Adding event: ", clickedEvent +"(IN APP COMPONENT)");
        const eventExists = clickedEvents.find((event) => event._id === clickedEvent._id);
        if (eventExists) {
            console.log("Event with id", clickedEvent._id, "already exists");
            return;
        }
        setClickedEvents(prevClickedEvents => [...prevClickedEvents, clickedEvent]);
    };

    //entfernt clicked Array aus dem ShoppingCart
    const handleRemoveClickedEvent = (clickedEvent: EventInterface) => {
        console.log("Removing event: ", clickedEvent +"(IN APP COMPONENT)");
        setClickedEvents(prevClickedEvents =>
            prevClickedEvents.filter(event => event !== clickedEvent)
        );
    };

    //inputText der Suchleiste im header zum Filtern der Events
    const [searchText, setSearchText] = useState('');
    const handleOnChange = (searchText:string) => {
        setSearchText(searchText);
    };

    return (
    <div className="App">
        <Router>
            <Header handleOnChange={handleOnChange}/>
            <Routes>
                <Route path='/' element={<EventCollection addClickedEvent={handleAddClickedEvent} searchText={searchText}/>} />
                <Route path='ShoppingCart' element={<ShoppingCart addedEvents={clickedEvents} removeClickedEvent={handleRemoveClickedEvent} searchText={searchText} />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
