import {useEffect, useState} from "react";
import {EventCard} from "./EventCard";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import { makeStyles } from '@material-ui/core/styles';
import {StickyDateHeader} from "./StickyDateHeader";
import * as React from "react";
import {EventInterface} from '../interface/EventInterface';

type EventCollectionProps = {

    addClickedEvent: (event: any) => void;
};
export const EventCollection = (props : EventCollectionProps) => {

    const [events, setEvents] = useState<EventInterface[]>([])
    const [error, setError] = useState([])

    useEffect(() => {
        fetch('https://teclead-ventures.github.io/data/london-events.json')
            .then(response => response.json())
            .then(res => setEvents(res))
            .catch(err => setError(err))
    }, [])


    const eventsByDate= events.reduce((acc:{[key:string]:EventInterface[]}, event) => {
        console.log("Group Events by Date and sort")
        // Get the date of the event as a string
        const dateStr = event.date.split("T")[0];
        // If the date does not exist as a key in the accumulator object, create it and set its value to an empty array
        if (!acc[dateStr]) {
            acc[dateStr] = [];
        }
        // Push the event into the array for the corresponding date
        acc[dateStr].push(event);
        return acc;
    }, {});


    console.log(eventsByDate);
    return (
        <div>
            <h1>Events App</h1>
            <Box
            textAlign="center" display="flex" justifyContent="center" my={10}>
                <Grid container justifyContent="space-evenly" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {events.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)).map((eventdata) => (
                        <Grid item xs={2} sm={4} md={4}><EventCard event={eventdata} showStickyHeader={true} addClickedEvent={props.addClickedEvent}/></Grid>
                    ))}
                </Grid>
            </Box>
        </div>

    )
};

