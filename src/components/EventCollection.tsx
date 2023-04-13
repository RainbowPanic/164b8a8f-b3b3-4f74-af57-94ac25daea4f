import {useEffect, useState} from "react";
import {EventCard} from "./EventCard";
import Grid from '@mui/material/Grid';

export const EventCollection = () => {
    const [events, setEvents] = useState<any[]>([])
    const [error, setError] = useState([])
    //const [error, setError] = useState([])

    useEffect(() => {
        fetch('https://teclead-ventures.github.io/data/london-events.json')
            .then(response => response.json())
            .then(res => setEvents(res))
            .catch(err => setError(err))
    }, [])
    /*const EVENTS = [
        fetch('https://teclead-ventures.github.io/data/london-events.json')
    ];*/


    return (
        <div>

                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        {events.slice(0,3).map((eventdata) => (
                        <EventCard event={eventdata} />
                        ))}
                    </Grid>
                    <Grid item xs={4}>
                        {events.slice(3,6).map((eventdata) => (
                            <EventCard event={eventdata} />
                        ))}
                    </Grid>
                    <Grid item xs={4}>
                        {events.slice(6,9).map((eventdata) => (
                            <EventCard event={eventdata} />
                        ))}
                    </Grid>
                </Grid>

        </div>

    )
}

const generateRows = (allEvents:any[], steps:number, offset:number) => {
    const start = 0+offset;
    while (allEvents.length>start) {
        allEvents.splice(start+steps, 1)
    }
    console.log(allEvents)
    return allEvents;
};