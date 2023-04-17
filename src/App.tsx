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
    const [clickedEvents, setClickedEvents] = useState<EventInterface[]>([]);
    const handleAddClickedEvent = (clickedEvent:EventInterface) => {
        console.log("Adding event: ", clickedEvent +"(IN APP COMPONENT)");
        const eventExists = clickedEvents.find((event) => event._id === clickedEvent._id);
        if (eventExists) {
            console.log("Event with id", clickedEvent._id, "already exists");
            return;
        }
        setClickedEvents(prevClickedEvents => [...prevClickedEvents, clickedEvent]);
    };

    const handleRemoveClickedEvent = (clickedEvent: EventInterface) => {
        console.log("Removing event: ", clickedEvent +"(IN APP COMPONENT)");
        setClickedEvents(prevClickedEvents =>
            prevClickedEvents.filter(event => event !== clickedEvent)
        );
    };

    const [searchText, setSearchText] = useState('');
    const handleOnChange = (searchText:string) => {
        setSearchText(searchText);
    };

    const eventFilter = (event:EventInterface) => {
        console.log("FILTERED EVENTS")
        console.log(event.title.toLowerCase().includes(searchText.toLowerCase()))
        return event.title.toLowerCase().includes(searchText.toLowerCase());
    };

    return (
    <div className="App">
        <Router>
            <Header handleOnChange={handleOnChange}/>
            <Routes>
                <Route path='/' element={<EventCollection addClickedEvent={handleAddClickedEvent} searchText={searchText}/>} />
                <Route path='ShoppingCart' element={<ShoppingCart addedEvents={clickedEvents} removeClickedEvent={handleRemoveClickedEvent} />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
