import {useEffect, useState} from "react";
import {EventCard} from "./EventCard";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import {StickyDateHeader} from "./StickyDateHeader";
import * as React from "react";
import {EventInterface} from '../interface/EventInterface';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';

type EventCollectionProps = {

    addClickedEvent: (event: EventInterface) => void;
    //eventFilter:(event:EventInterface) => boolean
    searchText:string
};

const useStyles = makeStyles({
    stickyHeader: {
        position: 'sticky',
        top: 0,
    },
});
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
        const dateObj = new Date(dateStr)
        const formattedDate = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        // If the date does not exist as a key in the accumulator object, create it and set its value to an empty array

        if (!acc[formattedDate]) {
            acc[formattedDate] = [];
        }
        // Push the event into the array for the corresponding date
        if(event.title.includes(props.searchText)) {
            acc[formattedDate].push(event);
        }
        return acc;
    }, {});

    const classes = useStyles();


    console.log(props.searchText);
    return (
        <div>
            <h1>Events App</h1>
                {Object.keys(eventsByDate).sort((a, b) => Date.parse(a) - Date.parse(b)).map((eventDate) => (
                    <div>
                    <Box className={classes.stickyHeader} sx={{backgroundColor: 'primary.main', opacity: [0.6, 0.7, 0.7],}}>
                        <StickyDateHeader showDate={eventDate} /></Box>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}  >
                    {eventsByDate[eventDate].map((event) => (
                        <Grid item xs={2} sm={4} md={4} key={event._id} direction="row">
                                <EventCard event={event} showStickyHeader={true} addClickedEvent={props.addClickedEvent}/>
                        </Grid>
                    ))}
                </Grid>
                    </div>
                ))}
        </div>
    )
};

